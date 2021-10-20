import http from "./httpService";


export function saveQuestion(question, formId){
    return http.post(`/savequestions/${formId}`, question);
}

export function getQuestionsByFormId(formId){
    return http.get(`/questionsByForm/${formId}`);
}

export default {
    saveQuestion,
    getQuestionsByFormId
}