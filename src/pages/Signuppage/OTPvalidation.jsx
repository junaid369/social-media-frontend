
const otpvalidation = (values) => {

    let errors={};



    if(!values.otp){
        errors.otp="otp is required !"
   
    }else if(values.otp.length <=3 && values.otp.length >=5 ) {
        errors.otp=" is must be 4 characters"
    }

    return errors;
};

export default otpvalidation;
