export function validation (userData){
   
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors = {};
    if (!userData.email) {
        errors.email = "Can not be empty";
    }
    else if (userData.email.length > 35) {
        errors.email = "The username cannot exceed 35 characters";
    } else if (!regexEmail.test(userData.email)) {
        errors.email = "It must be an email";
    }
    else{}
    
    if (!userData.password) {
        errors.password = "Can not be empty";
    } else if (!userData.password.match(/\d/)) {
        errors.password = "The password must contain at least one number";
    } else if (userData.password.length < 4 || userData.password.length > 10) {
        errors.password = "The password must be between 6 and 10 characters";
    }
return errors;
}