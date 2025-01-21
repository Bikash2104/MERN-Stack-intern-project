import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


function Dashboard() {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['Email']);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        designation: '',
        gender: '',
        courses: [],
        image: null,

    });

    const [errors, setErrors] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: value });


        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                courses: checked ?
                    [...prev.courses, value] : prev.courses.filter((course) => course !== value),
            }))
        } else {
            setFormData({ ...formData, [name]: value });
        }
    }

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });

    }

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Invalid email format";
        if (!formData.mobile.trim()) newErrors.mobile = "Mobile is required";
        else if (!/^\d{10}$/.test(formData.mobile))
            newErrors.mobile = "Mobile must be a 10-digit number";
        if (!formData.designation)
            newErrors.designation = "Designation is required";
        if (!formData.gender) newErrors.gender = "Gender is required";
        if (!formData.courses.length)
            newErrors.courses = "At least one course must be selected";
        if (!formData.image) newErrors.image = "Image is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const fetchEmployees = async () => {
        try {
            const res = await axios.get("http://localhost:7000/allemp");
            setEmployees(res.data);
            console.log("Employee:", res.data);//console data for verification
        } catch (error) {
            console.error("Error fetching emp:", error)

        }
    }

    useEffect(() => {
        fetchEmployees();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('mobile', formData.mobile);
        data.append('designation', formData.designation);
        data.append('gender', formData.gender);
        data.append('courses', JSON.stringify(formData.courses));

        // Add image only if it's a new file, otherwise retain the current image path
        if (formData.image && typeof formData.image !== "string") {
            data.append("image", formData.image);
        }

        try {
            let response;
            if (formData._id) {
                // Update existing employee
                response = await axios.put(`http://localhost:7000/employee/${formData._id}`, data, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
            } else {
                // Create new employee
                response = await axios.post("http://localhost:7000/empdetails", data, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
            }

            // Show success message
            alert("Employee details submitted successfully!");

            // Refresh the list and reset the form
            fetchEmployees();
            setFormData({
                name: '',
                email: '',
                mobile: '',
                designation: '',
                gender: '',
                courses: [],
                image: null,
                _id: null, // Clear _id after update
            });
            handleClose();
        } catch (error) {
            // Handle specific error responses
            if (error.response) {
                if (error.response.status === 400) {
                    alert(error.response.data.error); // Display the duplicate entry error
                } else if (error.response.status === 500) {
                    alert("An internal server error occurred. Please try again later.");
                } else {
                    alert("An error occurred while submitting the form. Please check your data.");
                }
            } else {
                alert("Network error: Unable to connect to the server.");
            }
            console.error("Error submitting form:", error);
        }
    };


    const handleEdit = (employee) => {
        setFormData({
            _id: employee._id, // Set the ID for editing
            name: employee.name,
            email: employee.email,
            mobile: employee.mobile,
            designation: employee.designation,
            gender: employee.gender,
            courses: employee.courses,
            image: employee.image, // Preload existing image
        });
        handleShow(); // Open the modal for editing
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:7000/employee/${id}`);
            alert(`Delete employee details `)
            fetchEmployees(); // Refresh employee list
        } catch (error) {
            console.error("Error deleting employee:", error);
        }
    };

    function handleLogout() {
        removeCookie("Email");
        navigate("/login")

    }

    const filteredEmployees = employees.filter((emp) =>
        emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.mobile.includes(searchTerm) ||
        emp.designation.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <header>
                <nav className='d-flex justify-content-end  m-4'>
                    <div><Link to="/"><button className='btn btn-primary'>Home</button></Link></div>
                    <div className='px-4'><Link to="/"><button className='btn btn-danger' onClick={handleLogout} >Logout</button></Link></div>

                </nav>
                <div className='d-flex align-items-center justify-content-center' style={{ backgroundColor: "yellow", height: "40px", borderRadius: "40px" }}>Employee List</div>

                <div className='d-flex align-items-center justify-content-end m-3'>
                    <div>
                        <span className='p-4'>Total count:{employees.length}</span>
                        <Button onClick={handleShow} variant="primary">Create Employee</Button>
                        <input
                            type="text"
                            placeholder="Search Employees..."
                            className="form-control w-100 mt-4"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                    </div>

                    {/* modal */}

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Enter Employee Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={handleSubmit}>

                                <div>
                                    <div className='d-flex justify-content-evenly '>
                                        <label>Name:-</label>
                                        <dd><input className='form-control' type='text' name='name' value={formData.name} onChange={handleChange} />
                                            {errors.name && <span className="text-danger">{errors.name}</span>}
                                        </dd>
                                    </div>
                                    <div className='d-flex justify-content-evenly '>
                                        <label>Email:-</label>
                                        <dd><input className='form-control' type='text' name='email' value={formData.email} onChange={handleChange} />
                                            {errors.email && <span className="text-danger">{errors.email}</span>}
                                        </dd>
                                    </div>
                                    <div className='d-flex justify-content-evenly '>
                                        <label>Mobile:-</label>
                                        <dd><input className='form-control' type='text' name='mobile' value={formData.mobile} onChange={handleChange} />
                                            {errors.mobile && <span className="text-danger">{errors.mobile}</span>}

                                        </dd>
                                    </div>

                                    <div className='d-flex justify-content-evenly'>
                                        <label>Designation</label>
                                        <select name='designation' value={formData.designation} onChange={handleChange} required className='form-select w-50'>
                                            <option value=''>Select option</option>
                                            <option value="HR">HR</option>
                                            <option value="Manager">Manager</option>
                                            <option value="Sales">Sales</option>
                                        </select>
                                        {errors.designation && <span className="text-danger">{errors.designation}</span>}

                                    </div>

                                    <div className='d-flex justify-content-md-around mx-3 my-4 '>
                                        <label>Gender:-</label>
                                        <div>
                                            <span className='p-4'><input type='radio' name='gender' value="male" checked={formData.gender === "male"} onChange={handleChange} /><label>Male</label></span>
                                            <span> <input type='radio' name='gender' value="female" checked={formData.gender === "female"} onChange={handleChange} /><label>Female</label></span>
                                            {errors.gender && <div className="text-danger">{errors.gender}</div>}

                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-evenly'>

                                        <div className='pe-2'>Course:-</div>
                                        <div className=''>
                                            <span className='p-2'> <input type='checkbox' name='courses' value="BCA" onChange={handleChange} checked={formData.courses.includes("BCA")} /><label>BCA</label></span>
                                            <span className='p-2'> <input type='checkbox' name='courses' value="MCA" onChange={handleChange} checked={formData.courses.includes("MCA")} /><label>MCA</label></span>
                                            <span className='p-2'> <input type='checkbox' name='courses' value="BSC" onChange={handleChange} checked={formData.courses.includes("BSC")} /><label>BSC</label></span>
                                            {errors.courses && <div className="text-danger">{errors.courses}</div>}
                                        </div>

                                    </div>
                                    <div className='d-flex justify-content-evenly m-2'>
                                        <div className='ps-3'>Upload Image:-</div>
                                        <div className='ps-4'>
                                            <input type='file' name='image' accept="image/*" className='form-control' onChange={handleFileChange} />
                                            {errors.image && <span className="text-danger">{errors.image}</span>}
                                        </div>

                                    </div>


                                </div>
                                <div style={{ marginLeft: "300px" }}>
                                    <Button type='submit' className='btn btn-primary m-2 '>Submit</Button>
                                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                                </div>

                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>
                    {/* modal */}

                </div>
            </header>
            <section>
                <table className='table table-bordered text-center'>
                    <thead>
                        <tr>
                            <th>Uniqui id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Designation</th>
                            <th>Gender</th>
                            <th>Courses</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    <tbody>
                        {filteredEmployees.length > 0 ? (
                            filteredEmployees.map((emp) => (
                                <tr key={emp._id}>
                                    <td>{emp._id}</td>
                                    <td>
                                        {emp.image && (
                                            <img src={`http://localhost:7000${emp.image}`} alt={emp.name} width="50" />
                                        )}
                                    </td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.mobile}</td>
                                    <td>{emp.designation}</td>
                                    <td>{emp.gender}</td>
                                    <td>
                                        {emp.courses && emp.courses.length > 1
                                            ? emp.courses[3] // Display only the first course
                                            : "No courses available"}
                                    </td>
                                    <td>
                                        <div className="d-flex">
                                            <button className="btn btn-danger" onClick={() => handleDelete(emp._id)}>
                                                Delete
                                            </button>
                                            <button className="btn btn-warning" onClick={() => handleEdit(emp)}>
                                                Edit
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9">No employees found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </section>
        </div>
    )
}

export default Dashboard






