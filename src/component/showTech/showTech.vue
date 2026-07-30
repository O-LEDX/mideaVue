<template>
<!-- 技术展示区 -->
<div class="tech-show-container">
    <div v-for="item in textData.textData" :key="item.id" class="tech-show">
        <div class="tech-show-container">
            <div class="tech-show-pic">
                <img :src=item.src :alt=item.headline>
            </div>
            <div class="tech-show-text-container">
                <div class='headline'>{{item.headline}}</div>
                <div class="text">{{item.text}}</div>
                <div class="btn-container">
                    <div class="btn-a-container">
                        <a href="" class="btn-container-a">
                            <div class="btn">
                                {{item.showMore}}
                            </div>
                            <div class="btn-right-pic">
                                <div class="icon"> </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import { ref,computed } from 'vue'
import { useLangStore } from '../../store/useLanguage'

let textData
let params=useLangStore()

textData=computed(()=>{
    return params.currentBase[3].content[0]
})


</script>
<style scoped >

* {
    --color-primary: #6e7882;
    --color-secondary: #498ff2;
    --color-tertiary: #0092d8;

    text-align: center;
    font-family: midea-type-regular;
    line-height: 1.5;
    text-decoration: none;

    box-sizing: border-box;
}

.tech-show-container{
    width: 100vw;
    height:100%;
    position: relative;
}
/* live容器 */
.tech-show-container .tech-show{
    width: 100%;
    height: fit-content;
    position: relative;
    overflow: hidden;

}
.tech-show-container .tech-show .tech-show-container{
    width:100%;
    height: 100%;
}
.tech-show-container .tech-show .tech-show-container .tech-show-pic{
    width: 100%;
    height: fit-content;
    top: 0;
    left: 0;
}
.tech-show-container .tech-show .tech-show-container::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: rgba(0, 0, 0, 0.5);
    transition: height 1s ease;
    z-index: 1;
}
.tech-show-container .tech-show .tech-show-container:hover::before{
    height: 46.9vw;
}
.tech-show-container .tech-show .tech-show-container .tech-show-pic img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 0;
}
/* 这是只针对img，不波及到其他元素,而且能做到选中该元素写法 */
.tech-show-container .tech-show .tech-show-container:hover .tech-show-pic img{
    animation: tech-show-pic-hover 4s ease-in-out ;
    /* 播放一次 */
    animation-iteration-count: 1;
    /* 播放后保持最后一帧：none默认回到原始状态，forwards保持最后一帧，backwards保持第一帧，both开始保持第一帧和结束最后一帧 */
    animation-fill-mode: both;
}
@keyframes tech-show-pic-hover {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}
.tech-show-container .tech-show .tech-show-container .tech-show-text-container{
    left: 12.5vw;
    top: 7.2916666667vw;
    width: calc(100% - 25vw);
    position: absolute;
}
.tech-show-container .tech-show .tech-show-container .tech-show-text-container .headline{
    font-family: 'midea-type-regular';
    color: #fff;
    opacity: 1;
    margin-top: 0px;
    font-size: 3.4375vw;
    font-weight: 700;
    line-height: 4.375vw;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    cursor: default;
    position: relative;
    z-index: 100;
}
.tech-show-container .tech-show .tech-show-container .tech-show-text-container .text{
    opacity: 1;
    margin-top: 2vh;
    font-size: 1.3541666667vw;
    line-height: 2.0833333333vw;
    white-space: pre-wrap;
    color: #fff;
    text-align: left;
    cursor: default;
    position: relative;
    z-index: 100;
}
.tech-show-container .tech-show .tech-show-container .tech-show-text-container .btn-container{
    opacity: 1;
    margin-top: 2.7vh;
    max-width: 60%;
    letter-spacing: .018em;
    overflow: hidden;
}
.tech-show-container .tech-show .tech-show-container .tech-show-text-container .btn-container .btn-a-container{
    position: relative;
    width: fit-content;
    height:fit-content;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.25vw;
    overflow: hidden;
}
.tech-show-container .tech-show .tech-show-container .tech-show-text-container .btn-container .btn-a-container .btn-container-a {
    letter-spacing: .018em;
    border: 1px solid #fff;
    border-radius: 1.7708333333vw;
    position: relative;
    min-width: 10.6354166667vw;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 10;
}
.tech-show-container .tech-show .tech-show-container .tech-show-text-container .btn-container .btn-a-container .btn-container-a::before{
    content: "";
    position: absolute;
    background-color: #0092d8;
    border-radius: 1.7708333333vw;
    height: 100%;
    left: 0;
    top: 0;
    transition: width 0.5s ease;
    width: 0%;
    z-index: 1;
}
.tech-show-container .tech-show .tech-show-container .tech-show-text-container .btn-container .btn-a-container .btn-container-a:hover::before{
    width: 100%;
}
.tech-show-container .tech-show .tech-show-container .tech-show-text-container .btn-container .btn-a-container .btn-container-a .btn{
    align-items: center;
    font-size: 1.1458333333vw;
    height: 3.3854166667vw;
    line-height: 3.3854166667vw;
    max-width: 100%;
    min-width: 5.6354166667vw;
    white-space: nowrap;
    width: auto;
    text-align: center;
    color: #fff;
    z-index: 100;
}
.tech-show-container .tech-show .tech-show-container .tech-show-text-container .btn-container .btn-a-container .btn-right-pic{
    width: 30%;
    height: 100%;
    z-index: 100;
}
.tech-show-container .tech-show .tech-show-container .tech-show-text-container .btn-container .btn-a-container .btn-right-pic .icon{
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI2MiIgaGVpZ2h0PSI2MiI+PHBhdGggZD0iTTkuMDggOS4wOFEwIDE4LjE2IDAgMzFxMCAxMi44NCA5LjA4IDIxLjkyUTE4LjE2IDYyIDMxIDYycTEyLjg0MSAwIDIxLjkyLTkuMDhRNjIgNDMuODQgNjIgMzFxMC0xMi44NC05LjA4LTIxLjkyUTQzLjg0MSAwIDMxIDAgMTguMTYgMCA5LjA4IDkuMDhabTEuNDE1IDQyLjQyNlEyIDQzLjAxMiAyIDMxdDguNDk1LTIwLjUwNlExOC45ODkgMiAzMSAydDIwLjUwNSA4LjQ5NFE2MCAxOC45ODggNjAgMzFxMCAxMi4wMTMtOC40OTQgMjAuNTA2UTQzLjAxMyA2MCAzMS4wMDEgNjBxLTEyLjAxMiAwLTIwLjUwNi04LjQ5NFoiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZGRiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOnBhc3N0aHJvdWdoIi8+PHBhdGggc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJST1VORCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOnBhc3N0aHJvdWdoIiBkPSJNMTYgMzEuODc1aDMxLjY0NyIvPjxwYXRoIGQ9Ik00OS42MzEgMzAuNTg1IDM3LjM2MiAxNy4xOTlsLTEuNDc0IDEuMzUyIDExLjY1IDEyLjcxLTExLjY1IDEyLjcxIDEuNDc0IDEuMzUgMTIuMjctMTMuMzg1cS4wNjItLjA2OC4xMTEtLjE0Ny4wNS0uMDguMDgzLS4xNjYuMDM0LS4wODcuMDUtLjE3OC4wMTgtLjA5MS4wMTgtLjE4NHQtLjAxNy0uMTg1cS0uMDE3LS4wOTEtLjA1MS0uMTc4LS4wMzQtLjA4Ny0uMDgzLS4xNjYtLjA1LS4wNzktLjExMi0uMTQ3WiIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkZGIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6cGFzc3Rocm91Z2giLz48L3N2Zz4=) no-repeat 50% / cover;
    align-items: center;
    border-radius: 2.1875vw;
    display: flex;
    height: 2.1875vw;
    margin-left: .5208333333vw;
    width: 2.1875vw;
    z-index: 100;
}

</style>