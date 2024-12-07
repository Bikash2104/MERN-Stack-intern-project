import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

function SigninPage() {
    const [formData, setFormData] = useState({ UserName: '', Email: '', Password: '' });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.UserName) newErrors.UserName = 'Name is required';
        if (!formData.Email) {
            newErrors.Email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
            newErrors.Email = 'Email is invalid';
        }
        if (!formData.Password) {
            newErrors.Password = 'Age is required';
        } else if ((formData.Password.length < 5)) {
            newErrors.Password = 'Password must be Contain 8 Character';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        axios
            .post("http://127.0.0.1:7000/register-users", formData)
            .then((response) => {
                alert("Registration successful");
                setFormData({ UserName: '', Email: '', Password: '' }); // Reset form
                navigate("/login");
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    // Duplicate email error
                    alert(error.response.data.message);
                } else {
                    // General error
                    alert("Error registering user");
                }
                console.error("Error:", error);
            });
    };

    return (
        <div>
            <h4 className='text-center'>Signup for creating the new userid</h4>
            <div className="justify-content-center d-flex align-items-center h-100">


                <form onSubmit={handleSubmit} className="border m-3 p-4 border-2 w-25  ">
                    <h4 className="">Enter login details</h4>
                    <div className="">
                        <div>
                            <label>UserName</label>
                            <input onChange={handleChange} value={formData.UserName} className="form-control" type="text" placeholder="Enter your Name" name="UserName" />
                            {errors.UserName && <p style={{ color: 'red' }}>{errors.UserName}</p>}
                        </div>
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
                        <button className=" mt-3 btn btn-primary" type="submit">Signin</button>

                    </div>
                    <Link to="/login" >Already hava an account </Link>
                </form>
            </div>

        </div>
    )
}

export default SigninPage
