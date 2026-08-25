<template>
<div class="legel">    
    <div class="legel-container">
        <div class="legel-left">
            <div v-for='item in textData.textData' :key='item.id' class="legel-left-text">
                <a>&copy;{{item.text}}</a>
            </div>
        </div>
        <div class="legel-right">
            <a v-for='item in rightTextData.rightTextData' :key='item.id' href="">{{item.text}}</a>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">

import { computed } from 'vue'
import { useLangStore } from '@/store/useLanguage'

let textData
let rightTextData
let params=useLangStore()

textData=computed(()=>{
    return params.currentBase[5].content[0]
})
rightTextData=computed(()=>{
    return params.currentBase[5].content[1]
})



</script>
<style scoped >
* {
    --color-primary: #6e7882;
    --color-secondary: #498ff2;
    --color-tertiary: #0092d8;
    font-family: midea-type-regular;
    line-height: 1.5;
}

.legel{    
    background-color: #34354f;
    box-sizing: border-box;
    color: #fff;
    font-size: .8333333333vw;
    letter-spacing: .0390625vw;
    padding-left: 12.5vw;
    padding-right: 12.5vw;
}

.legel .legel-container{
    display: flex;
    font-size: .8333333333vw;
    justify-content: space-between;
    line-height: 3.125vw;
    min-height: 3.125vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
}

.legel .legel-container .legel-left {       
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    justify-content: flex-start;
    margin-right: 1.0416666667vw;
    max-width: 100%;
}

.legel .legel-container .legel-left-text {
    align-items: flex-start;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.125vw;
    line-height: 3.125vw;
    margin-right: 3.125vw;
    max-width: 100%;
}

.legel .legel-container .legel-left-text span {    
    display: inline-block;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
}

.legel .legel-container .legel-right {
    align-items: flex-end;
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
}

.legel .legel-container .legel-right a {
    margin-left: 0;
    text-align: left;
    height: 3.125vw;
    line-height: 3.125vw;
    margin-left: 1.5625vw;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-decoration: none;
    color: #fff;
    background-color: transparent;
}
</style>