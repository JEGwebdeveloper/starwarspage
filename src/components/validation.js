export function validation (userData){
   
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors = {};
    if (!userData.email) {
        errors.email = "Este campo no puede estar vacío";
    }
    else if (userData.email.length > 35) {
        errors.email = "El usuario no puede tener más de 35 caracteres";
    } else if (!regexEmail.test(userData.email)) {
        errors.email = "Debe ser un Email";
    }
    else{}
    
    if (!userData.password) {
        errors.password = "Este campo no puede estar vacío";
    } else if (!userData.password.match(/\d/)) {
        errors.password = "La contraseña debe tener al menos un número";
    } else if (userData.password.length < 4 || userData.password.length > 10) {
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
    }
return errors;
}