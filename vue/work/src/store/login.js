import { request } from "./request";
export function getUserInfoByName(name) {
    console.log(name);
    return request({
        url: '/api/user',
        method: "get",
        params: name
    })
}
export function verityUser(userinfo) {
    console.log(userinfo);
    return request({
        url: '/api/verityUser',
        method: "post",
        data: userinfo
    })
}
