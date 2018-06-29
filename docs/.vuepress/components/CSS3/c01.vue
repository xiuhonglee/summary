<template>
    <div class="c01">
        <div class="a"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>


<style>
.c01 {
  position: relative;
  width: 400px;
  height: 200px;
}
.a {
  position: relative;
  width: 0;
  height: 0;
  border-width: 0 50px 87px;
  border-style: solid;
  border-color: transparent transparent #095;
  animation: a 20s infinite linear alternate;
}

.a:before,
.a:after {
  position: absolute;
  content: "";
  border-width: 0;
  border-style: solid;
}

.a:before {
  animation: ab 20s infinite linear alternate;
}

.a:after {
  animation: af 20s infinite linear alternate;
}
@keyframes a {
  0%,
  5% {
    width: 0;
    height: 0;
    border-width: 0 50px 87px;
    border-color: transparent transparent #095;
  }
  23% {
    width: 0;
    height: 0;
    border-width: 0 50px 0;
    border-color: transparent transparent #c00;
  }
  42% {
    width: 0;
    height: 0;
    border-width: 0 81px 59px;
    border-color: transparent transparent #069;
  }
  61% {
    width: 100px;
    height: 0;
    border-width: 0 50px 87px;
    border-color: transparent transparent #f80;
  }
  80% {
    width: 0;
    height: 0;
    border-width: 0 90px 43px;
    border-color: transparent transparent #09c;
  }
  95%,
  100% {
    width: 100px;
    height: 0;
    border-width: 0 71px 71px;
    border-color: transparent transparent #f69;
  }
}

@keyframes ab {
  0%,
  5% {
    top: 87px;
    left: -50px;
    width: 100px;
    height: 0;
    background: #095;
    border-width: 0;
    border-color: #095 transparent transparent;
  }
  22.99% {
    top: 0;
    left: -50px;
    width: 100px;
    height: 100px;
    background: #c00;
    border-width: 0;
    border-color: #c00 transparent transparent;
  }
  23% {
    top: 0;
    left: -50px;
    width: 100px;
    height: 0;
    background: none;
    border-width: 100px 0 0;
    border-color: #c00 transparent transparent;
  }
  42% {
    top: 59px;
    left: -81px;
    width: 100px;
    height: 0;
    background: none;
    border-width: 95px 31px 0;
    border-color: #069 transparent transparent;
  }
  61% {
    top: 87px;
    left: -50px;
    width: 100px;
    height: 0;
    border-width: 87px 50px 0;
    border-color: #f80 transparent transparent;
  }
  80% {
    top: 140px;
    left: -112px;
    width: 100px;
    height: 0;
    border-width: 78px 62px 0;
    border-color: #09c transparent transparent;
  }
  95%,
  100% {
    top: 171px;
    left: -71px;
    width: 100px;
    height: 0;
    border-width: 71px 71px 0;
    border-color: #f69 transparent transparent;
  }
}

@keyframes af {
  0%,
  61% {
    top: 87px;
    left: -50px;
    width: 200px;
    height: 0;
    border-width: 0;
    background: none;
    border-color: transparent transparent #f80;
  }
  80% {
    top: 43px;
    left: -112px;
    width: 180px;
    height: 0;
    border-width: 0 22px 99px;
    background: none;
    border-style: solid;
    border-color: transparent transparent #09c;
  }
  95%,
  100% {
    top: 71px;
    left: -71px;
    width: 242px;
    height: 0;
    border-width: 0 0 100px;
    background: none;
    border-style: solid;
    border-color: transparent transparent #f69;
  }
}
</style>

