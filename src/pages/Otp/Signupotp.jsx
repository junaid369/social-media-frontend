


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import validation from "../Signuppage/OTPvalidation"
import {login} from "../../Axios"
import Navbar from '../../components/Navbar/Navbar'


  const Signup = ({ submitForm }) => {
    const [values, setValues] = useState({
      otp: "",

     
      
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const navigate=useNavigate()

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);


    // login(values).then((data)=>{
    //     console.log("in fromt");
    //    navigate('/')
// })
  };

//   useEffect(() => {

//   }, [navigate]);


    return (
      
        
        <div className='d'>

            <Navbar/>
    
        
        <div className="container bal_height">
    
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto  " style={{marginTop:'20px'}}>
          <div className="card card-signin my-5 ">
            <div className="card-body">
              <h2 className="text-center sign_heigt"><strong>OTP Verification</strong></h2>
             
              <form className="form-signin padding_form" style={{marginTop:'25px'}} >
               

                <div className="form-label-group">
                  <input 
                    type="number"
                    id="inputotp"
                    name="otp"
                    className="form-control"
                    placeholder="Enter your otp" 
                    value={values.otp} 
                    onChange={handleChange}
                    autofocus
                  />
                   {/* {errors.email && <p className="error">{errors.email}</p>}
                   */}
                  <label for='inputnumber'>Enter your phone number</label>
                 </div>

              
                <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit" onClick={handleFormSubmit}>verify your otp</button>             
              </form >
              <br/> 
            
              </div>
           </div>
         </div>
       </div>
     </div>
</div>


    )
}

export default Signup;
