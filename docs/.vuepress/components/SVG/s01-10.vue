<template>
    <div class="s06">
        <svg width="500" height="200" viewBox="0 0 500 200">
            <circle cx="50" cy="50" r="30" stroke="red" stroke-dasharray="5 5" fill="none"></circle>
            <circle cx="50" cy="50" r="30" fill="red" transform="translate(100, 50)"></circle>
            <path d="M50,50 L150,100" stroke="black"></path>
            <path d="M150,100 L151,98 152,101 149,102Z"></path>
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