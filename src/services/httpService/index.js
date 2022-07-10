import axios from "axios";



export const getRequestMethod = (ApiAddress , config)=> {
    return axios.get(ApiAddress, config)
}