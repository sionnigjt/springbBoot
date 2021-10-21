import { request } from "./request";
export function setUserInfo(userinfo) {
    console.log();
    return request({
        url: '/api/addUser',
        method: "post",
        data: userinfo,
    })
}
export function getUserInfoByName(name) {
    return request({
        url: '/api/verityByName',
        method: "get",
        params: { "username": name }
    })
}
