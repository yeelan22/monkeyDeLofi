// import React from 'react'
// import styles from "./styles.module.css";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useState } from "react";
// const Login = () => {
//     const [data, setData] = useState({
//        email: "",
//        password: ""
//     });
//     const [error, setError] = useState("");

//     const handleChange = ({ currentTarget: input}) => {
//         setData({...data, [input.name]: input.value});
//     }

//     const handleSubmit = async(e) => {
//         e.preventDefault();

//         try{
//             const url =  "http://localhost:3000/api/auth/login";
//             const {data: res} = await axios.post(url, data);
//             localStorage.setItem("token", res.data)
//             window.location = "/"
//         } catch (error) {
//            if (error.response &&
//              error.response.status >= 400 && 
//              error.response <= 500){
//                setError(error.message.data.message);
//              }
//         }
//     }
//   return (
//     <div className={styles.login_container}>
//         <div className={styles.login_form_container}>
//             <div className={styles.left}>
//             <form className={styles.form_container} onSubmit={handleSubmit}>
//                     <h1>Login to your Account</h1>
                    
//                    <input 
//                     type="email" 
//                     placeholder='Email'
//                     name= "email"
//                     onChange={handleChange}
//                     value= {data.email}
//                     required
//                     className={styles.input}
//                     />

//                   <input 
//                     type="password" 
//                     placeholder='Password'
//                     name= "password"
//                     onChange={handleChange}
//                     value= {data.password}
//                     required
//                     className={styles.input}
//                     />
//                     {error && <div className='styles.error_msg'>{error}</div>}
//                     <button type='submit' className={styles.green_btn}>
//                         Log in
//                     </button>
//                 </form>
//             </div>
//             <div className={styles.right}>
//             <h1>New Here!</h1>
//                 <Link to="/signup">
//                     <button type="button" className={styles.white_btn}>
//                         Sign Up
//                     </button>
//                 </Link>
            
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Login;


// import React, { useState } from 'react';
// import styles from "./styles.module.css";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//     const [data, setData] = useState({
//        email: "",
//        password: ""
//     });
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setData({...data, [e.target.name]: e.target.value});
//     }

//     const handleSubmit = async(e) => {
//         e.preventDefault();

//         try{
//             const url = "http://localhost:3000/api/auth"; // Updated endpoint
//             const response = await axios.post(url, data);
//             localStorage.setItem("token", response.data.data);
//             navigate("/");
//         } catch (error) {
//             setError(error.response.data.message);
//         }
//     }

//     return (
//         <div className={styles.login_container}>
//              <div className={styles.login_form_container}>
//             <div className={styles.left}>
//             <form className={styles.form_container} onSubmit={handleSubmit}>
//                      <h1>Login to your Account</h1>
                    
//                    <input 
//                     type="email" 
//                      placeholder='Email'
//                     name= "email"
//                     onChange={handleChange}
//                     value= {data.email}
//                      required
//                      className={styles.input}
//                     />
//                    <input 
//                      type="password" 
//                      placeholder='Password'
//                      name= "password"
//                     onChange={handleChange}
//                     value= {data.password}
//                     required
//                     className={styles.input}
//                     />
//                      {error && <div className='styles.error_msg'>{error}</div>}
//                      <button type='submit' className={styles.green_btn}>
//                         Log in
//                     </button>
//                  </form>
//             </div>
//             <div className={styles.right}>
//              <h1>New Here!</h1>
//                 <Link to="/signup">
//                     <button type="button" className={styles.white_btn}>
//                          Sign Up
//                      </button>
//                 </Link>
            
//             </div>
//         </div> 
//         </div>
//     );
// }

// export default Login;

// import React, { useState } from 'react';
// import styles from "./styles.module.css";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//     const [data, setData] = useState({
//        email: "",
//        password: ""
//     });
//     const [error, setError] = useState("");
//     const [successMessage, setSuccessMessage] = useState(""); // Add state for success message
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setData({...data, [e.target.name]: e.target.value});
//     }

//     const handleSubmit = async(e) => {
//         e.preventDefault();

//         try{
//             const url = "http://localhost:3000/api/auth"; // Updated endpoint
//             const response = await axios.post(url, data);
//             console.log(response)
//             localStorage.setItem("token", response.data.data);
//             setSuccessMessage("Logged in successfully"); // Set success message
//             navigate("/"); // Redirect to home page
//         } catch (error) {
//             setError(error.response.data.message);
//         }
//     }

//     return (
//         <div className={styles.login_container}>
//              <div className={styles.login_form_container}>
//             <div className={styles.left}>
//             {successMessage && <div className={styles.success_msg}>{successMessage}</div>} {/* Display success message */}
//             <form className={styles.form_container} onSubmit={handleSubmit}>
//                      <h1>Login to your Account</h1>
                    
//                    <input 
//                     type="email" 
//                      placeholder='Email'
//                     name= "email"
//                     onChange={handleChange}
//                     value= {data.email}
//                      required
//                      className={styles.input}
//                     />
//                    <input 
//                      type="password" 
//                      placeholder='Password'
//                      name= "password"
//                     onChange={handleChange}
//                     value= {data.password}
//                     required
//                     className={styles.input}
//                     />
//                      {error && <div className='styles.error_msg'>{error}</div>}
//                      <button type='submit' className={styles.green_btn}>
//                         Log in
//                     </button>
//                  </form>
//             </div>
//             <div className={styles.right}>
//              <h1>New Here!</h1>
//                 <Link to="/signup">
//                     <button type="button" className={styles.white_btn}>
//                          Sign Up
//                      </button>
//                 </Link>
            
//             </div>
//         </div> 
//         </div>
//     );
// }

// export default Login;

import React, { useState } from 'react';
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [data, setData] = useState({
       email: "",
       password: ""
    });
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState(""); // Add state for success message
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const url = "http://localhost:3000/api/auth"; // Updated endpoint
            const response = await axios.post(url, data);
            console.log(response);
            setSuccessMessage("Logged in successfully"); // Set success message
            localStorage.setItem("token", response.data.token); // Store token
            navigate("/"); // Redirect to home page
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    console.log("Success message:", successMessage); // Log success message

    return (
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                    {successMessage && <div className={styles.success_msg}>{successMessage}</div>}
                    {/* Display success message */}
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Login to your Account</h1>
                        <input
                            type="email"
                            placeholder='Email'
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder='Password'
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        {error && <div className='styles.error_msg'>{error}</div>}
                        <button type='submit' className={styles.green_btn}>
                            Log in
                        </button>
                    </form>
                </div>
                <div className={styles.right}>
                    <h1>New Here!</h1>
                    <Link to="/signup">
                        <button type="button" className={styles.white_btn}>
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
