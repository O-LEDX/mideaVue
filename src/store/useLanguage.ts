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
            break;
        case 'english':
            currentBase.value=ENGLISH;
            break;
        default :
        return
            }
        }

    return {currentBase,handleLang};
    }    
)
