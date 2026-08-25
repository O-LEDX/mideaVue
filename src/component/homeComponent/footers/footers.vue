<template>
<div class="foot">
    <div class="foot-container">
        <div class="footer-container">
            <div class="ul-container">
                <ul v-for="ulItem in textData.textData" :key="ulItem.id" class="footer-ul">
                    <li v-for="liItem in ulItem.context" :key="liItem.id"><div><a href="">{{liItem.text}}</a></div></li>
                </ul>
            </div>
        </div>
    </div>
</div>

</template>
<script setup lang="ts">

import { computed } from 'vue'
import { useLangStore } from '@/store/useLanguage'

let textData
let params=useLangStore()

textData=computed(()=>{
    return params.currentBase[4].content[0]
})

</script>
<style scoped >
/* 尾部容器选择器 */
* {
    --color-primary: #6e7882;
    --color-secondary: #498ff2;
    --color-tertiary: #0092d8;
    font-family: midea-type-regular;
    line-height: 1.5;
}
.foot {
    width: 100vw;
}

.foot .foot-container {
    background-color: #efefef;
    width: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

.foot .foot-container .footer-container {
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    font-size: .9375vw;
    padding-left: 12.5vw;
    padding-right: 12.5vw;
    width: 100%;
}
.foot .foot-container .footer-container .ul-container {
    display: flex;
    margin: 4.1666666667vw 0 2.0833333333vw;
    width: 100%;
}

/* A */
.foot .foot-container .footer-container .ul-container .footer-ul {    
    flex: 0 0 25%;
    overflow: hidden;
    list-style: none;
}

.foot .foot-container .footer-container .ul-container .footer-ul li {    
    font-size: 1.0416666667vw;
    height: 2.0833333333vw;
    line-height: 2.0833333333vw;
    margin-bottom: 1.25vw;
    margin-right: 2.0833333333vw;
    padding: 0 1.0416666667vw;
}

.foot .foot-container .footer-container .ul-container .footer-ul li div {
    width: 100%;
}

.foot .foot-container .footer-container .ul-container .footer-ul li div a {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    text-decoration: none;
    color: var(--color-primary);
    background-color: transparent;
}

.foot .foot-container .footer-container .ul-container .footer-ul li div a:hover{
    color: var(--color-tertiary);
}
</style>