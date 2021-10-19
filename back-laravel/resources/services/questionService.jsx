import http from "./httpService";


export function saveQuestion(question, formId){
    return http.post(`/savequestions/${formId}`, question);
}

export default {
    saveQuestion
}