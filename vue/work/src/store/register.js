import { request } from "./request";
export function setUserInfo(userinfo) {
    console.log();
    return request({
        url: '/api/user',
        method: "post",
        data: userinfo,
    })
}
