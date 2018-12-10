<template>
    <div class="s06">
        <svg width="500" height="200" viewBox="0 0 500 200">
            <!-- 初始位置 -->
            <rect id="target" x="130" y="50" width="100" height="50" stroke-dasharray="3 5" fill="red" fill-opacity=".7"></rect>
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

#target {
    transform-origin: 130px 100px;
    transform: perspective(800px) rotate3d(1, 1, 0, 0);
    animation: run 5s infinite; 
}
@keyframes run {
    0% {
        transform: rotate3d(1, 1, 0, 45deg);
    }
    100% {
        transform: rotate3d(1, 1, 0, 360deg);
    }
}
</style>