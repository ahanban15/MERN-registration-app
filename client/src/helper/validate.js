import toast from 'react-hot-toast'

// validate login page username
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);

    return errors;
}

// vaidate login page password
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors;
}




// validate username
function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error("Username Required...!");
    }else if(values.username.includes(" ")){
        error.username = toast.error('Invalid Username...!');
    }

    return error;
}

// validate password
function passwordVerify(errors ={}, values) {

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error("Password Required...!");
    }else if (values.password.includes(" ")){
        errors.password = toast.error("Wrong password...!");
    }else if (values.password.length < 4){
        errors.password = toast.error("Password must be more than 4 characters")
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("At least one special character is required");
    }
}

// validate reset password
export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values);

    if(values.password !== values.confirm_pwd){
        errors.exist = toast.error("Password NOT match...!");
    }
} 
