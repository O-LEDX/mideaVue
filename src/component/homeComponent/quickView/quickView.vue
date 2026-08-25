<template>
<div class = "kuailan">
    <div class="kuailan-container">
        <div class="kuailan-title">
            <div class="kuailan-title-container">
                {{constTextData.constTextData[0].title}}
            </div>
        </div>
        <div class="kuailan-text">
            <div class="kuailan-text-container">

                <div v-for="item in textData.textData" :key="item.id" class="kuailan-text-container-item">
                    <div class="percent">
                        {{item.percent}}
                    </div>
                    <div class="number-detail-container">
                        <div class="number-container">{{item.number}}</div>
                        <div class="numbertext-container">{{item.numbertext}}</div>
                    </div>
                    <div class="detail">
                        {{item.detail}}
                    </div>
                </div>

            </div>
        </div>   
        <div class="kuailan-underline">
            <div class="kuailan-underline-container">
                {{constTextData.constTextData[1].dataFrom}}
            </div>
        </div>
    </div>
</div>

</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useLangStore } from '@/store/useLanguage'

let textData
let constTextData

let params=useLangStore()

textData=computed(()=>{
    return params.currentBase[1].content[0]
})
constTextData=computed(()=>{
    return params.currentBase[1].content[1]
})
</script>
<style scoped >
/* 初始 */
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

/* 快览盒 */
.kuailan{
    padding-bottom: 6.25vw;
    width: 100vw;
}
.kuailan .kuailan-container{
    letter-spacing: .0513em;
    padding-left: 12.5vw;
    padding-right: 12.5vw;
}

/* 抬头 */
.kuailan .kuailan-container .kuailan-title{
    width: 100%;
    height: fit-content;
}
.kuailan .kuailan-container .kuailan-title-container{
    font-size: 2.0833333333vw;
    font-weight: 400;
    margin-bottom: 3.125vw;
    text-align: center;
}

/* 三个盒 */
.kuailan .kuailan-container .kuailan-text{
    width: 100%;
    height: fit-content;
}
.kuailan .kuailan-container .kuailan-text .kuailan-text-container{
    height: 100%;
    position: relative;
    width: 100%;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: center;
}

/* items */
.kuailan .kuailan-container .kuailan-text .kuailan-text-container .kuailan-text-container-item{
    margin-left: 0;
    margin-right: .625vw;
    box-sizing: border-box;
    overflow: hidden;
    width: calc(33.333% - .83666vw);
    display: flex;
    flex-direction: column;
    margin-top: 0;
    height: 100%;
    position: relative;
}
.kuailan .kuailan-container .kuailan-text .kuailan-text-container .kuailan-text-container-item .percent{
    color: var(--color-tertiary);
    font-size: 1.0416666667vw;
    height: 1.5625vw;
    line-height: 1.5625vw;
    overflow: hidden;
    padding-bottom: 0;
    padding-top: 0;
    text-align: center;
    text-overflow: ellipsis;
    white-space: normal;
    white-space: nowrap;
    width: 100%;
}
.kuailan .kuailan-container .kuailan-text .kuailan-text-container .kuailan-text-container-item .number-detail-container{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 0;
    padding-top: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
}
.kuailan .kuailan-container .kuailan-text .kuailan-text-container .kuailan-text-container-item .number-detail-container .number-container{
    color: var(--color-tertiary);
    display: flex;
    font-size: 3.125vw;
    font-weight: 700;
    height: 3.4375vw;
    line-height: 3.125vw;
    max-width: 80%;
    overflow: hidden;
    position: relative;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width:unset;
}
.kuailan .kuailan-container .kuailan-text .kuailan-text-container .kuailan-text-container-item .number-detail-container .numbertext-container{
    color: var(--color-tertiary);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: unset;
}
.kuailan .kuailan-container .kuailan-text .kuailan-text-container .kuailan-text-container-item .detail{
    color: var(--color-tertiary);
    -webkit-box-orient: vertical;
    display: -webkit-box;
    font-size: 1.0416666667vw;
    line-height: 1.5625vw;
    margin-bottom: 0;
    margin-top: 0;
    max-height: 3.125vw;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: normal;
    width: 100%;
}
/* underline */
.kuailan .kuailan-container .kuailan-underline{
    margin-top: 1.0416666667vw;
    height:fit-content;
    width:100%
}
.kuailan .kuailan-container .kuailan-underline-container{
    color: var(--color-primary);
    font-size: 1.0416666667vw;
    height: 1.0416666667vw;
    line-height: 1.0416666667vw;
    text-align: center;
}
</style>