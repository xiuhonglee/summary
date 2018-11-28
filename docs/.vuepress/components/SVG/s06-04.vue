<template>
  <div class="s06-04">
    <svg width="520px" height="220px" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M15,50 Q40,15 50,50 65,32 100,40" style="fill:none;stroke:black" transform="translate(0, 50)">
            <animate 
                attributeName="d"
                attributeType="XML"
                to="M50,15 Q15,40 50,50 32,65 40,100"
                begin="0s"
                dur="5s"
                fill="freeze"
            ></animate>
        </path>
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