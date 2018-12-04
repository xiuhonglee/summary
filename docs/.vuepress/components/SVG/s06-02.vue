<template>
    <div class="s06-02">
        <svg width="520px" height="220px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="110" r="30" style="fill: #ff5777;">
                <animate
                    id="a1"
                    begin="0s"
                    attributeName="r"
                    attributeType="XML"
                    from="30"
                    to="60"
                    dur="5s"
                    fill="freeze"
                ></animate>
            </circle>
            <rect x="200" y="60" width="50" height="100" fill="#ffaa00">
                <animate
                    attributeName="width"
                    attributeType="CSS"
                    begin="a1.end"
                    from="50"
                    to="150"
                    dur="5s"
                    fill="freeze"
                ></animate>
            </rect>
        </svg>
    </div>
</template>

<style scoped>
.s06-02 {
    width: 520px;
    height: 200px;
    margin: 15px 0;
    background: #fff;
    box-shadow: 0 0px 2px 2px #eee;
}
</style>