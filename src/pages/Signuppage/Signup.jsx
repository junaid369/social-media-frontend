import React, { useState, useEffect } from 'react';
import { useHistory, useNavigate,Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './Signup.css'
import validation from "./validation"
import otpvalidation from './OTPvalidation'
import { doSignup, verifyEmailotp } from "../../Axios"
import Alert from '@mui/material/Alert';




const Signup = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        otp: ""

    });
    const [error, setError] = useState({ error: true, message: null })
    const [otpsend, setOtpSend] = useState(false)

    const [errors, setErrors] = useState({error:true});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const[alert,setAlert]=useState("") 

    const navigate = useNavigate()

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };




    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));

    
       
    
        if(!errors.error)
        {
           

        
       
            doSignup(values).then((data) => {
               
                setOtpSend(true)
            
            }).catch((error) => {
             
                setAlert( error.response.data.message )


            })
        }
    };


    const verifyEmail = (e) => {
        e.preventDefault()
       
        setErrors(otpvalidation(values));
        alert("Sdasd")
        verifyEmailotp({ email: values.email, otp: values.otp }).then((data) => {
            navigate('/')

        }).catch(() => {
            
        })

    }


    useEffect(() => {

        let ab = localStorage.getItem("user")
        if (ab) {
          navigate('/')
        }
        else {
          navigate('/signup')
        }
    
      }, [navigate]);


    return (





        <div className="container bal_height">

            {
                otpsend ?

                    <div className='d'>

                        <Navbar />


                        <div className="container bal_height">

                            <div className="row">
                                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto  " style={{ marginTop: '20px' }}>
                                    <div className="card card-signin my-5 ">
                                        <div className="card-body">
                                            <h2 className="text-center sign_heigt"><strong>OTP Verification</strong></h2>

                                            <form className="form-signin padding_form" style={{ marginTop: '25px' }} >


                                                <div className="form-label-group">
                                                    <input
                                                        type="text"
                                                        id="inputtext"
                                                        name="otp"
                                                        className="form-control"
                                                        placeholder="Enter your otp"
                                                        value={values.otp}

                                                        onChange={handleChange}
                                                    />
                                                    {errors.otp && <p className="error">{errors.otp}</p>}

                                                    <label for='inputtext'>Enter your otp</label>
                                                </div>


                                                <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit" onClick={verifyEmail}>verify your otp</button>
                                            </form >
                                            <br />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    :


                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto  " style={{ marginTop: '20px' }}>
                            <div className="card card-signin my-5 ">
                                <div className="card-body">
                                    <h2 className="text-center sign_heigt"><strong>Sign Up</strong></h2>

                                    <form className="form-signin padding_form" style={{ marginTop: '25px' }} >
                                        <div className="form-label-group">
                                            <input
                                                type="text"
                                                id="inputtext"
                                                name="username"
                                                className="form-control"
                                                placeholder="username"
                                                value={values.username}
                                                onChange={handleChange}
                                            />
                                            {errors.name && <p className="error">{errors.name}</p>}

                                            <label for="inputtext">User Name</label>
                                        </div>

                                        <div className="form-label-group">
                                            <input
                                                type="email"
                                                id="inputemail"
                                                name="email"
                                                className="form-control"
                                                placeholder="Email Address"
                                                value={values.email}
                                                onChange={handleChange}
                                                autofocus
                                            />
                                            {errors.email && <p className="error">{errors.email}</p>}

                                            <label for='inputemail'>Email Address</label>
                                        </div>

                                        <div className="form-label-group">
                                            <input
                                                type="password"
                                                id="inputPassword"
                                                name="password"
                                                className="form-control"
                                                placeholder="Password"
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                            {errors.password && <p className="error">{errors.password}</p>}
                                            <label for="inputPassword">Password</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input
                                                type="password"
                                                id="inputPassword2"
                                                name="confirmpassword"
                                                className="form-control"
                                                placeholder="Re-enter Password"
                                                value={values.confirmpassword}
                                                onChange={handleChange}
                                            />
                                            {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}
                                            <label for="inputPassword2">Confirm Password</label>
                                        </div>


                                        {
                                            alert ?   <Alert severity="error">{alert}</Alert>:null
                                        }
   

                                        <button className="btn btn-lg btn-google btn-block text-uppercase mt-3" type="submit" onClick={handleFormSubmit}>Get Started</button>
                                        {
                                            error ? <span>{error.message}</span> : null
                                        }
                                    </form >
                                    <br />
                                    <p className=" text-center fnt_sz">Already have an account?<span className="span_color"><Link to='/login'>Sign in</Link></span></p>

                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>


    )

}

export default Signup;
