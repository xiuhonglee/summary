<template>
    <div class="s06-15">
        <svg width="520px" height="200px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path id="cubicCurve" d="M50,125 C100,25 150,225 200,125" fill="none" stroke="red"></path>
            <path d="M-10,-3 L10,-3 L0,-25z" fill="yellow" stroke="red">
                <animateMotion
                    rotate="auto"
                    dur="6s"
                    keyPoints="0;0.3;0.9;1"
                    keyTimes="0;0.5;0.8;1"
                    repeatCount="indefinite"
                    calcMode="linear"
                    fill="freeze"
                >
                    <mpath xlink:href="#cubicCurve"></mpath>
                </animateMotion>
            </path>
        </svg>
    </div>
</template>

<style scoped>
.s06-15 {
    width: 520px;
    height: 200px;
    margin: 15px 0;
    background: #fff;
    box-shadow: 0 0px 2px 2px #eee;
}
</style>