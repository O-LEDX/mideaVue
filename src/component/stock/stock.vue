<template>
    <div class="stock-container">
    <div class="stock-title-container">
        {{textData.textData[0].title}}
    </div>
    <div class="stock-type-container">
        <div @click="stockTypeHandler(1)" :class=AbuttomColor>{{buttonText.buttonText[0].stockName}}</div>
        <div @click="stockTypeHandler(2)" :class=BbuttomColor>{{buttonText.buttonText[1].stockName}}</div>
    </div>
    <div class="stock-chart-container">
        <div v-if="stockType" class="stock-chart-A-container">
            <div class="stock-A-chart">
                <iframe 
                    id="EuroID" 
                    scrolling="no" 
                    src="https://asia.tools.euroland.com/tools/ticker/html/?companycode=cn-000333&lang=zh-cn" 
                    width="100%" 
                    style="scale: 0.8; border:none; background: transparent; min-width: 100%; width: 1; max-height: none; min-height: 0px; height: 522px;" height="522">
                </iframe>
            </div>
        </div>
        <div v-if="!stockType" class="stock-chart-H-container">
            <div class="stock-H-chart">
                <iframe 
                    id="EuroID" 
                    scrolling="no" 
                    src="https://asia.tools.euroland.com/tools/ticker/html/?companycode=cn-000333&v=h-share&lang=zh-cn" 
                    width="100%" 
                    style="scale: 0.8; border:none; background: transparent; min-width: 100%; width: 1; max-height: none; min-height: 0px; height: 522px;" height="522">
                </iframe>
            </div>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLangStore } from '../../store/useLanguage'
let textData
let buttonText

let params=useLangStore()

textData=computed(()=>{
    return params.currentBase[2].content[0]
})
buttonText=computed(()=>{
    return params.currentBase[2].content[1]
})

const stockType = ref(true)
const AbuttomColor = ref('blueButtom')
const BbuttomColor = ref('geryButtom')

function stockTypeHandler(id: number) {
    if(id === 1) {
        stockType.value = true
    } else {
        stockType.value = false
    }

    if(id == 1) {
        AbuttomColor.value = 'blueButtom'
        BbuttomColor.value = 'geryButtom'
    } else {
        AbuttomColor.value = 'geryButtom'
        BbuttomColor.value = 'blueButtom'
    }

}
</script>
<style scoped >
*{
    --color-primary: #ccc;
    --color-secondary: #498ff2;
    --color-tertiary: #0092d8;
    --color-quaternary: #6e7882;
}

/* 股票区，谁还有多余资金 */
.stock-container {
    padding: 0 5vw;
    width: 100%;
    box-sizing: border-box;
}
.stock-container .stock-title-container {
    color: var(--color-quaternary);
    font-size: 2.0833333333vw;
    font-weight: 400;
    margin-bottom: 2.125vw;
    text-align: center;
}
.stock-container .stock-type-container {
    width: 50%;
    margin: 1vw auto;
    text-align: center;
    border-bottom: 0px;
}
.stock-container .stock-type-container .geryButtom { 
    background: var(--color-primary);
    border: 0.08em solid var(--color-primary); 
    border-radius: 1em;  
    height: 3vw;
    float: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    width: 25%;
    text-align: center;
    color: #ffffff;
    font-weight: normal;
    top: 0.08em;
    left: 0px;
    cursor: pointer;
}

.stock-container .stock-type-container .blueButtom { 
    background: var(--color-tertiary);
    border: 0.08em solid var(--color-primary); 
    border-radius: 1em;  
    height: 3vw;
    float: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    width: 25%;
    text-align: center;
    color: #ffffff;
    font-weight: normal;
    top: 0.08em;
    left: 0px;
    cursor: pointer;
}

.stock-container .stock-type-container .geryButtom:hover {
    background: var(--color-tertiary);
}

.stock-container .stock-chart-container {
    width:100%;
}
.stock-container .stock-chart-container .stock-chart-A-container {
    width: 100%;
    height: 100%;
}
.stock-container .stock-chart-container .stock-chart-A-container .stock-A-chart {
    width: 100% !important;
    height: 100% !important;
    min-height: 100%;
    min-width: 100%;
    overflow: hidden;   
}
.stock-container .stock-chart-container .stock-chart-H-container {
    width: 100%;
    height: 100%;
}
.stock-container .stock-chart-container .stock-chart-H-container .stock-H-chart {
    width: 100% !important;
    height: 100% !important;
    min-height: 100%;
    min-width: 100%;
    overflow: hidden;   
}
</style>