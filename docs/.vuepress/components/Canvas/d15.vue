<template>
    <div class="wrap" style="relative">
        <canvas ref="canvas" width="500" height="200"></canvas>
        <section class="pattern-radio">
            <input type="radio" v-model="patternOption" value="repeat">repeat
            <input type="radio" v-model="patternOption" value="repeat-x">repeat-x
            <input type="radio" v-model="patternOption" value="repeat-y">repeat-y
            <input type="radio" v-model="patternOption" value="no-repeat">no-repeat
            <br>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            canvas: null,
            ctx: null,
            pattern: null,
            patternOption: "repeat",
            image: new Image
        };
    },
    mounted() {
        this.canvas = this.$refs.canvas;
        this.dpr = window.devicePixelRatio || 1;

        this.setupCanvas();
        this.image.src = "https://i.loli.net/2018/12/18/5c18e733112f7.jpg";
        this.image.onload = () => {
            this.draw();
        }
    },

    watch: {
        patternOption() {
            this.redraw();
        }
    },

    methods: {
        handleClick() {
            this.initAB();
        },

        setupCanvas() {
            let rect = this.canvas.getBoundingClientRect();
            this.canvas.width = rect.width * this.dpr;
            this.canvas.height = rect.height * this.dpr;
            this.ctx = this.canvas.getContext("2d");
            this.ctx.scale(this.dpr, this.dpr);
        },

        draw() {
            this.pattern = this.ctx.createPattern(this.image, this.patternOption);
            this.ctx.fillStyle = this.pattern;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        },

        redraw() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.draw();
        }
    }
};
</script>


<style scoped>
.wrap {
    position: relative;
    width: 500px;
    height: 200px;
    margin: 15px 0;
}
canvas {
    width: 500px;
    height: 200px;
    box-shadow: 0 0 2px 3px #eee;
}
.pattern-radio {
    position: absolute;
    top: 20px;
    left: 30px;
    color: #ff0000;
}
</style>
