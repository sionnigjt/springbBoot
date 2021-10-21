import { request } from "./request";

export function verityUser(userinfo) {
    console.log(userinfo);
    return request({
        url: '/api/verityUser',
        method: "post",
        data: userinfo
    })
}
