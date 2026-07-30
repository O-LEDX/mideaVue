import { defineStore } from "pinia";
import {CHINESE,ENGLISH} from './langBase'
import {ref} from 'vue'

export const useLangStore=defineStore('lang',()=>{
    let currentBase=ref();
    currentBase.value=CHINESE;

    function handleLang(lang:string){
        switch(lang){
        case 'chinese':
            currentBase.value=CHINESE;
            console.log(currentBase.value)
            break;
        case 'english':
            currentBase.value=ENGLISH;
            console.log(currentBase.value)
            break;
        default :
        return  console.log()
            }
        }

    return {currentBase,handleLang};
    }    
)
