<template>
    <div class="s06-13">
        <svg width="520px" height="200px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,125 C100,25 150,225 200,125" fill="none" stroke="red"></path>
            <path d="M-10,-3 L10,-3 L0,-25z" fill="yellow" stroke="red">
                <animateMotion
                    path="M50,125 C100,25 150,225 200,125"
                    rotate="auto"
                    begin="button13.click"
                    dur="6s"
                    fill="freeze"
                ></animateMotion>
            </path>
            <g id="button13" style="cursor: pointer;">
                <rect x="400" y="150" width="80" rx="5" ry="5" height="30" fill="#44ae7d"></rect>
                <text x="422" y="170" style="text-anchor: start; fill: #fff">Start</text>
            </g>
        </svg>
    </div>
</template>

<style scoped>
.s06-13 {
    width: 520px;
    height: 200px;
    margin: 15px 0;
    background: #fff;
    box-shadow: 0 0px 2px 2px #eee;
}
</style>