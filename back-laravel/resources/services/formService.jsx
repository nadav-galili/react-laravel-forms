import http from "./httpService";

export function saveForm(formName){
    console.log("3333", formName);
    return http.post('/saveform', formName);
}


export default{
    saveForm
}