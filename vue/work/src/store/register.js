import { request } from "./request";
export function setUserInfo(userinfo) {
    console.log();
    return request({
        url: '/api/addUser',
        method: "post",
        data: userinfo,
    })
}
