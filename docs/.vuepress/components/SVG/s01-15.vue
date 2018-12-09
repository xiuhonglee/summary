<template>
    <div class="s06">
        <svg width="500" height="200" viewBox="0 0 500 200">
            <!-- 初始位置 -->
            <rect x="30" y="10" width="100" height="50" stroke="black" stroke-dasharray="6 5" fill="none"></rect>

            <!-- 先位移，后旋转 -->
            <rect x="30" y="10" width="100" height="50" stroke="red" transform="translate(100, 60)" stroke-dasharray="3 5" fill="none"></rect>
            <rect x="30" y="10" width="100" height="50" transform="translate(100, 60) rotate(15)" stroke-dasharray="3 5" fill="red" fill-opacity=".7"></rect>

            <!-- 先旋转，后位移 -->
            <rect x="30" y="10" width="100" height="50" stroke="blue" transform="rotate(15)" stroke-dasharray="3 5" fill="none"></rect>
            <rect x="30" y="10" width="100" height="50" transform="rotate(15) translate(100, 60)" stroke-dasharray="3 5" fill="blue" fill-opacity=".7"></rect>

            <!-- 说明 -->
            <rect x="320" y="100" width="20" height="10" fill="red"></rect>
            <rect x="320" y="130" width="20" height="10" fill="blue"></rect>

            <text x="350" y="109" style="font-size: 12px">先位移，再旋转</text>
            <text x="350" y="139" style="font-size: 12px">先旋转，再位移</text>
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