<template>
    <div>home</div>
    <van-button type="primary" @click="getData">主要按钮</van-button>
</template>

<script>
import { getAllData } from '../../store/home'
export default {
    setup() {
        function getData() {
            getAllData().then(res => {
                console.log(res);
            })
        }
        return {
            getData
        }
    }
}
</script>
<style lang="scss" scoped>
</style>