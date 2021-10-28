<template>
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <div class="formLogin">
        <div class="form">
            <h3>登录</h3>
            <label for="username">用户名</label>
            <input type="text" placeholder="Email or Phone" id="username" v-model="username" />
            <label for="password">密码</label>
            <input type="password" placeholder="Password" id="password" v-model="password" />
            <button type="submit" class="button" @click="getVerity()">登录</button>
            <div class="social">
                <router-link to="/register">
                    <div class="go">
                        <i class="fas fa-gamepad"></i>注册
                    </div>
                </router-link>
                <router-link to="/changePwd">
                    <div class="fb">
                        <i class="far fa-comments"></i>修改密码
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { verityUser } from '../../store/login'
import { ref, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup() {

        let userinfo = reactive({
            username: "",
            password: "",
        })
        let router = useRouter()
        function getVerity() {
            //验证参数
            //验证登录
            console.log("sld");
            verityUser(userinfo).then((res: { data: string }) => {
                console.log(res);
                if (res.data == "falseToken") {
                    console.log("账户或者密码有误")
                }
                else {
                    window.sessionStorage.setItem("token", res.data)
                    console.log(window.sessionStorage.getItem('token'));
                    router.push('/home')
                }
            })
        }
        return {
            getVerity,
            ...toRefs(userinfo)
        }
    },
    data() {
        return {
        };
    },
}

</script>
<style lang='scss' scoped>
.background {
    width: 100%;
    height: 100%;
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: #080710;
    left: 50%;
    top: 50%;
}
.background .shape {
    height: 150px;
    width: 150px;
    position: absolute;
    border-radius: 50%;
}
.shape:first-child {
    background: linear-gradient(#1845ad, #23a2f6);
    left: 420px;
    top: 5px;
}
.shape:last-child {
    background: linear-gradient(to right, #ff512f, #f09819);
    right: 420px;
    bottom: 5px;
}
.form {
    height: 500px;
    width: 320px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
}
.form * {
    font-family: "Poppins", sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}
label {
    display: block;
    float: left;
    margin-top: 25px;
    margin-bottom: 3px;
    margin-left: 3px;
    font-size: 16px;
    font-weight: 500;
    //
}
input {
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
    border-radius: 5px;
}
::placeholder {
    color: #e5e5e5;
}
form h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
}
.button {
    margin-top: 35px;
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 12px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}
.button:active {
    background-color: #978d8d;
}
.social {
    margin-top: 25px;
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 20px;
    left: 0;
    right: 0;
}
.social div {
    background: red;
    width: 120px;
    border-radius: 3px;
    margin: 10px;
    padding: 5px 8px 8px 5px;
    background-color: rgba(255, 255, 255, 0.27);
    color: #eaf0fb;
    text-align: center;
}
.social div:hover {
    background-color: rgba(255, 255, 255, 0.47);
}

.social i {
    margin-right: 4px;
}
</style>