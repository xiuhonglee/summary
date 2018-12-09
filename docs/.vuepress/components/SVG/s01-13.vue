<template>
    <div class="s06">
        <svg width="500" height="200" viewBox="0 0 500 200">
            <!-- 围绕坐标原点旋转 -->
            <rect x="40" y="75" width="100" height="50" stroke="red" stroke-dasharray="5 5" fill="none"></rect>
            <rect x="40" y="75" width="100" height="50" transform="rotate(15)" fill="red" fill-opacity="0.7"></rect>

            <!-- 围绕矩形左上角旋转 -->
            <rect x="200" y="75" width="100" height="50" stroke="red" stroke-dasharrya="5 5" fill="none"></rect>
            <rect x="200" y="75" width="100" height="50" transform="rotate(15, 200, 50)" fill="red" fill-opacity="0.7"></rect>

            <!-- 围绕矩形中心旋转 -->
            <!-- 方法一 -->
            <rect x="350" y="75" width="100" height="50" stroke="red" stroke-dasharrya="5 5" fill="none"></rect>
            <rect x="350" y="75" width="100" height="50" transform="rotate(15, 400, 75)" fill="red" fill-opacity="0.7"></rect>

            <!-- 方法二 -->
            <!-- <rect x="350" y="50" width="100" height="50" transform="translate(400, 75) rotate(15) translate(-400, -75)" fill="red" fill-opacity="0.3"></rect> -->

        </svg>
    </div>
</template>

<style scoped>
.s06 {
    width: 500px;
    height: 200px;
    margin: 15px 0;
    background: #fff;
    box-shadow: 0 0px 2px 2px #eee;
}
</style>