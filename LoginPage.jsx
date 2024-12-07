import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function LoginPage() {

    const [formData, setFormData] = useState({ Email: "", Password: "" });
    const [cookies, setCookie, removeCookie] = useCookies(['Email']);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
       
        if (!formData.Email) {
            newErrors.Email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
            newErrors.Email = 'Email is invalid';
        }
        if (!formData.Password) {
            newErrors.Password = 'Age is required';
        } else if ((formData.Password.length<5)) {
            newErrors.Password = 'Password must be Contain 8 Character';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    function handleSubmit(e){
        e.preventDefault();
        if (!validate()) return;
        const response=axios.get(`http://127.0.0.1:7000/users`,formData)
        .then(users=>{
            var client=users.data.find((item)=>formData.Email === item.Email)
            if(client){
                if(client.Password===formData.Password){
                    alert("Login successfull...");
                    setCookie("Email",client.Email); 
                    navigate("/dashboard")          

                }else{
                    alert("invalid password")
                }
            }else{
                alert("User not found...")
            }
        })

    }
    return (
        <div>
            <h4 className="text-center">Enter your login details and go to employee dashboard</h4>
            <div className="justify-content-center d-flex align-items-center h-100">

                <form onSubmit={handleSubmit} className="border m-3 p-4 border-2 w-25 ">
                    <h4 className="">Enter login details</h4>
                    <div className="">
                        <div>
                            <label>Email</label>
                            <input onChange={handleChange} value={formData.Email} className="form-control" type="email" placeholder="Enter your email" name="Email" />
                            {errors.Email && <p style={{ color: 'red' }}>{errors.Email}</p>}

                        </div>
                        <div>
                            <label>Password</label>
                            <input onChange={handleChange} value={formData.Password} className="form-control" type="password" placeholder="Password" name="Password" />
                            {errors.Password && <p style={{ color: 'red' }}>{errors.Password}</p>}

                        </div>
                        <button className=" mt-3 btn btn-primary" type="submit">Login</button>
                    </div>
                    <Link to="/signin" >Create Account </Link>
                </form>
            </div>

        </div>
    )
}