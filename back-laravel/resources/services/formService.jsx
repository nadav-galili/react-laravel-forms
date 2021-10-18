import http from "./httpService";


//create a service to save a new form name
export function saveForm(formName){
    return http.post('/saveform', formName);
}


export default{
    saveForm
}