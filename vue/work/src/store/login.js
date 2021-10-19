import { request } from "./request";
export function getUserInfo() {
    return request({
        url: '/api/userAll',
        method:"get",
        
    })
}
