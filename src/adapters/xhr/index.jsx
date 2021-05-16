import axios from 'axios';

function createInstance() {
    return axios;
}

function getCreateInstanceWithDefaults(){
    // var localUrl = "http://localhost:8083/test";
    const herokuUrl = "https://api-dashboard-backend.herokuapp.com/test";
    createInstance().defaults.baseURL = herokuUrl;
    return createInstance();
}

export function get(url){
    return getCreateInstanceWithDefaults().get(url);
}

export function request(options){
    return getCreateInstanceWithDefaults().request(options);
}