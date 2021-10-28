import { request } from "./request";
export function getAllData() {
    return request({
        url: '/api/userAll',
        method: "get",
    })
}