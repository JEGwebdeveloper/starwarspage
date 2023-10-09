export function validationUserform (userData){
   
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors = {};
    if (!userData.name) {
        errors.name = "Este campo no puede estar vacío";
    }
    else if (userData.name.length > 35) {
        errors.name = "El usuario no puede tener más de 35 caracteres";
    } 
    else{}
    
    if (!userData.company) {
        errors.company = "Este campo no puede estar vacío";
    } 
    else if (userData.company.length > 35 ) {
        errors.company = "Debe ser menor a 35 caracteres";
    }
return errors;
}