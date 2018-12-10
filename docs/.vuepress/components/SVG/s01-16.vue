<template>
    <div class="s06">
        <svg width="500" height="200" viewBox="0 0 500 200">
            <!-- transform-origin在元素的左上角 -->
            <rect x="100" y="70" width="100" height="50" stroke="red" stroke-dasharray="3 5" fill="none"></rect>
            <rect id="target1" x="100" y="70" width="100" height="50" stroke-dasharray="3 5" fill="red" fill-opacity=".7"></rect>

            <!-- transform-origin在元素的中心 -->
            <rect x="300" y="70" width="100" height="50" stroke="blue" stroke-dasharray="3 5" fill="none"></rect>
            <rect id="target2" x="300" y="70" width="100" height="50" stroke-dasharray="3 5" fill="blue" fill-opacity=".7"></rect>

            <!-- 辅助线 -->
            <polyline points="0,0 0,70 100,70" fill="none" stroke="purple" stroke-dasharray="6,5"></polyline>
            <text x="50" y="50" style="font-size: 12px">transform-origin: 100px 70px</text>
            <circle cx="100" cy="70" r="3" fill="purple"></circle>

            <polyline points="0,0 0,95 350,95" fill="none" stroke="black" stroke-dasharray="6,5"></polyline>
            <circle cx="350" cy="95" r="3" fill="black"></circle>
            <text x="300" y="80" style="font-size: 12px">transform-origin: 350px 95px</text>

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

#target1 {
    transform-origin: 100px 70px;
    transform: rotate(30deg);
}
#target2 {
    transform-origin: 350px 95px;
    transform: rotate(30deg);
}
</style>