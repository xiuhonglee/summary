<template>
    <div class="s06-04">
        <svg width="520px" height="220px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="200" y="60" width="50" height="100" fill="#ffaa00">
                <animate
                    attributeName="width"
                    attributeType="CSS"
                    begin="2s"
                    from="50"
                    to="150"
                    dur="10s"
                    end="6s"
                    repeatCount="indefinite"
                    fill="freeze"
                ></animate>
            </rect>
        </svg>
    </div>
</template>

<style scoped>
.s06-04 {
    width: 520px;
    height: 200px;
    margin: 15px 0;
    background: #fff;
    box-shadow: 0 0px 2px 2px #eee;
}
</style>