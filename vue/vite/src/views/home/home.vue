<template>
    <div>home</div>
    <a-button type="primary">Primary Button</a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>
</template>

<script lang="ts">


export default {
    setup() {
        function getData() {
            // getAllData().then(res => {
            //     console.log(res);
            // })
        }
        return {
            getData,
        }

    },
}
</script>
<style lang="scss" scoped>
</style>