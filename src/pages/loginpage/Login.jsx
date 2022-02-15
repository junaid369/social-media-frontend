


import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import validation from "./Loginvalidation"
import { login, thirdPartyLogin } from "../../Axios"
import Navbar from '../../components/Navbar/Navbar'
import Alert from '@mui/material/Alert';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { SocialIcon } from 'react-social-icons';
import { Card, IconButton } from '@mui/material';
import { FacebookOutlined, Google } from '@mui/icons-material';
import jwt_decode from "jwt-decode";
import './Login.css'
import { loginAction } from "../../Redux/userSlice"
import { useDispatch, useSelector } from 'react-redux'






const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",


  });

  const [errors, setErrors] = useState({ error: true, emailErr: "", passwordErr: "" })
  const dispatch = useDispatch()



  const [alert, setAlert] = useState("")
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
    if (!errors.error) {

      login(values).then((data) => {
        dispatch(loginAction(data.user))

        navigate('/')
      }).catch((err) => {


        setAlert(err.response.data.message)


      })
    }


  };

  useEffect(() => {

  }, [navigate]);


  const responseGoogle = (response) => {


    const email = response.profileObj.email

    thirdPartyLogin({ email }).then((data) => {




      navigate('/')

    }).catch((err) => {

      setErrors({ error: true, emailErr: err.response.data })
      setAlert(err.response.data.message)



    })
  }



  useEffect(() => {

    let ab = localStorage.getItem("token")
    if (ab) {
      navigate('/')
    }
    else {
      navigate('/login')
    }

  }, [navigate]);




  return (


    <div className='d'>

      <Navbar />


      <div className="container bal_height">

        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto header " >
            <div className="card card-signin my-5 ">
              <div className="card-body">
                <h2 className="text-center sign_heigt"><strong>Login</strong></h2>

                <form className="form-signin padding_form form" >


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







                  <button className="btn btn-lg btn-google btn-block text-uppercase bttn" type="submit" onClick={handleFormSubmit}>Get Started</button>
                </form >
                <br />
                <p className=" text-center fnt_sz">Create a new account?<span className="span_color"><Link to='/signup'> Sign up</Link></span></p>


                {
                  alert ? <Alert severity="error">{alert}</Alert> : null
                }


                <h3 className='text-center' style={{ color: "gray" }}>or</h3>


                <div className='text-center'>


                  <GoogleLogin
                    clientId="535267545402-6p94s1ubngh6r52duqaf1d9b662a6rc8.apps.googleusercontent.com"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    className="btnGoogle"
                  >




                    <i className="fa fa-google-plus " style={{}} />
                    <span>&nbsp;&nbsp;Sign In with Google</span>



                  </GoogleLogin>


                </div>



              </div>
            </div>
          </div>
        </div>
      </div>


    </div>


  )
}

export default Signup;
