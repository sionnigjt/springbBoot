import { request } from "./request";
interface user {
    username: string,
    password: string
}
export function verityUser<T extends user>(userinfo:T) {
    console.log(userinfo);
    return request({
        url: '/api/verityUser',
        method: "post",
        data: userinfo
    })
}


