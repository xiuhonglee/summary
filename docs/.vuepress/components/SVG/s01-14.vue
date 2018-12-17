<template>
    <div class="s06">
        <svg width="500" height="200" viewBox="0 0 500 200">
            <!-- 围绕坐标原点斜切效果 -->
            <rect x="30" y="75" width="100" height="50" stroke="red" stroke-dasharray="5 5" fill="none"></rect>
            <rect x="30" y="75" width="100" height="50" transform="skewX(15) skewY(15)" fill="red" fill-opacity="0.7"></rect>

            <!-- 围绕矩形左上角斜切效果 -->
            <rect x="180" y="75" width="100" height="50" stroke="red" stroke-dasharrya="5 5" fill="none"></rect>
            <rect x="180" y="75" width="100" height="50" transform="translate(180, 75) skewX(15) skewY(15) translate(-180, -75)" fill="red" fill-opacity="0.7"></rect>

            <!-- 围绕矩形中心斜切效果 -->
            <rect x="350" y="75" width="100" height="50" stroke="red" stroke-dasharrya="5 5" fill="none"></rect>
            <rect x="350" y="75" width="100" height="50" transform="translate(400, 75) skewX(15) skewY(15) translate(-400, -75)" fill="red" fill-opacity="0.7"></rect>

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