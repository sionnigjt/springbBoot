<template>
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <div class="formLogin">
        <div class="form">
            <h3>注册</h3>
            <label for="username">用户名</label>
            <input type="text" placeholder="Your Name"  />
            <label for="password">密码</label>
            <input type="password" placeholder="Password"  />
             <label for="password">邮箱</label>
            <input type="password" placeholder="Gmail"  />
            <button type="submit" class="button" @click="register()">注册</button>
        </div>
    </div>
</template>

<script>
export default {
    setup(props) {
        function register() {
            console.log("we");
        }
        return {
            register
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
    margin-top: 40px;
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 12px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}

</style>