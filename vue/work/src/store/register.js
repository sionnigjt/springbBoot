import { request } from "./request";
export function getUserAllData() {
    return request({
        url: '/api/userAll',
    })
}
