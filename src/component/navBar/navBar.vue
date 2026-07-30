<template>
    <div class="head">
    <div class="header">
        <div class="header-position"><!-- padding占位 -->
            <div class="header-banner"><!--大位置 -->
                <div class="header-banner-nav"><!--容器排布 -->
                    <div class="header-banner-nav-container"> <!-- 导航栏容器 -->
                        <div class="logo">
                            <img src="@/assets/logo.png" class="logo-pic" loading="lazy" alt="logo">
                        </div>
                        <div class="nav-list">
                            <div class="nav-list-container">
                                <div 
                                @mouseover="handleShowDetail(item.id)"
                                v-for="item in navList[0].navBarList" :key="item.id">
                                    <a href="">{{item.name}}</a>
                                </div>
                            </div>
                        </div>
                        <div class="nav-right">
                            <div class="search" @click="handleShowSearch">
                            <img src="@/assets/搜索放大镜.png" loading="lazy" class="search-pic" alt="搜索图片">
                            </div>
                            <div class="language" @click="handleShowLang">
                            <img src="@/assets/语言图标.png" loading="lazy" class="lang-pic" alt="语言图片">
                            </div>
                            <div class="quick-switch-lang">
                                <div class="ch" 
                                @click="handleChangeLang('chinese')">中文</div>
                                /
                                <div class="en" 
                                @click="handleChangeLang('english')">EN</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="detail-list" v-show=showDetail>
            <div class="detail-list-container">
                <div v-show=career
                class="detail-list-container-career">
                <ul class="detail-list-container-career-ul">
                    <li
                    @mouseleave="handleunShowDetail()"
                    @mouseover="handleShowDetail(1)"
                    v-for="item in navList[1].navDetailListFirst" :key="item.id">
                        <a href="">{{item.name}}</a>
                    </li>
                </ul>
                </div>
                <div v-show=investor
                class="detail-list-container-investor">
                <ul class="detail-list-container-investor-ul">
                    <li
                    @mouseleave="handleunShowDetail()"
                    @mouseover="handleShowDetail(2)"
                    v-for="item in navList[2].navDetailListSecond" :key="item.id">
                        <a href="">{{item.name}}</a>
                    </li>
                </ul>
                </div>
                <div class="detail-list-container-shop">
                    <ul class="detail-list-container-shop-ul">
                    </ul>
                </div>
                <div class="detail-list-container-live">
                    <ul class="detail-list-container-live-ul">
                    </ul>
                </div>
                <div class="detail-list-container-service">
                    <ul class="detail-list-container-service-ul">
                    </ul>
                </div>
                <div v-show="join"
                class="detail-list-container-join">
                <ul class="detail-list-container-join-ul">
                    <li
                    @mouseleave="handleunShowDetail()"
                    @mouseover="handleShowDetail(6)"
                    v-for="item in navList[3].navDetailListThird" :key="item.id">
                        <a href="">{{item.name}}</a>
                    </li>
                </ul>
                </div>
                <div v-show="about"
                class="detail-list-container-about">
                <ul class="detail-list-container-about-ul">
                    <li
                    @mouseleave="handleunShowDetail()"
                    @mouseover="handleShowDetail(7)"
                    v-for="item in navList[4].navDetailListFourth" :key="item.id">
                        <a href="">{{item.name}}</a>
                    </li>
                </ul>
                </div>
                <div class="detail-list-container-supplier">
                    <ul class="detail-list-container-supplier-ul">
                    </ul>
                </div>
                <!-- 语言挑选 -->
                <div v-show="lang"
                class="detail-list-container-language">
                    <ul class="detail-list-container-language-ul">
                        <li style="cursor: default;">&ltℒ&gt</li>
                        <li v-for="item in navList[5].navDetailListLangOption" :key="item.id">
                            <div @click="handleChangeLang(item.code)">{{item.name}}</div>
                        </li>
                    </ul>
                </div>
                <!-- 搜索框 -->
                 <div v-show="search"
                 class="detail-list-container-search">
                    <div class="detail-list-container-search-container">
                        <input type="text" placeholder="   搜  索" >
                        <button type="submit">
                            <img src="@/assets/搜索放大镜.png" loading="lazy" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>
</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { useLangStore } from '../../store/useLanguage'
import {computed} from 'vue'
let navList;

let params=useLangStore()

navList=computed(()=>{
    return params.currentBase[0].content
})

//1267
let showDetail=ref(false),career=ref(false),investor=ref(false),join=ref(false),about=ref(false)  
let lang=ref(false),search=ref(false)
let counter = ref(0)

function handleShowLang(){
    investor.value=false
    join.value=false
    about.value=false
    career.value=false
    search.value=false

    showDetail.value=true
    counter.value++
    lang.value=true

    if(counter.value%2==0){
        showDetail.value=false
        search.value=false
        lang.value=false
    }
}

function handleShowSearch(){
    investor.value=false
    join.value=false
    about.value=false
    career.value=false
    lang.value=false

    showDetail.value=true
    counter.value++
    search.value=true

    if(counter.value%2==0){
        showDetail.value=false
        search.value=false
        lang.value=false
    }
}

function handleunShowDetail(){
    showDetail.value=false

    investor.value=false
    join.value=false
    about.value=false
    lang.value=false
    search.value=false
    career.value=true

    counter.value=0
}

function handleShowDetail(id:number){
    switch(id){
        case 1:
            investor.value=false
            join.value=false
            about.value=false
            lang.value=false
            search.value=false
            showDetail.value=true

            career.value=true
            break
        case 2:
            career.value=false
            join.value=false
            about.value=false
            lang.value=false
            search.value=false
            showDetail.value=true

            investor.value=true
            break
        case 6:
            career.value=false
            investor.value=false
            about.value=false
            lang.value=false
            search.value=false
            showDetail.value=true

            join.value=true
            break
        case 7:
            career.value=false
            investor.value=false
            join.value=false
            lang.value=false
            search.value=false
            showDetail.value=true

            about.value=true
            break
    }
}

function handleChangeLang(lang:string){
    params.handleLang(lang)
}











</script>

<style >
*{
    --color-primary: #6e7882;
    --color-secondary: #498ff2;
    --color-tertiary: #0092d8;
    text-align: center;
    font-family: midea-type-regular;
    line-height: 1.5;
    text-decoration: none;

    box-sizing: border-box;
}
</style>

<style scoped>
/* 初始 */

/* 导航栏 */

/* 头部 */
.head{
    position: relative;
    width: 100%;
    z-index: 3000;
    height: 5.7291666667vw;
    position: fixed;
    z-index: 3000;
}
.head .header{
    background-color: #eeeeef;
    height: 5.7291666667vw;
    margin-bottom: 6.25vw;
    right: 0;
    top: 0;
    width: 100vw;
    z-index: 3000;
}
.head .header .header-position{
    box-sizing: inherit;
    width: fit-content;
}
.head .header .header-position .header-banner{
    width: 75vw;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    padding: 0 12.5vw;
}
.head .header .header-position .header-banner .header-banner-nav{
    position: absolute;
    height: 100%;
}
.head .header .header-position .header-banner .header-banner-nav .header-banner-nav-container{
    height: 100%;
    width: 75vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

/* logo */
.head .header .header-position .header-banner .header-banner-nav .header-banner-nav-container .logo{
    cursor: pointer;
}
.head .header .header-position .header-banner .header-banner-nav .header-banner-nav-container .logo .logo-pic{
    background-size: contain;
    width: fit-content;
    height:fit-content;
}

/* 导航列表 */
.head .header .header-position .header-banner .header-banner-nav .header-banner-nav-container  .nav-list{
    display: flex;
    height: 100%;
    position: relative;
    width: 46.875vw;
    overflow: hidden;
}
.head .header .header-position .header-banner .header-banner-nav .header-banner-nav-container  .nav-list .nav-list-container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
}

/* 导航列表项 */
.head .header .header-position .header-banner .header-banner-nav .header-banner-nav-container .nav-list .nav-list-container div{   
    height: 100%;
    width: 100%;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
}
.head .header .header-position .header-banner .header-banner-nav .header-banner-nav-container .nav-list .nav-list-container div a{
    text-align: inherit;
    color: var(--color-primary);
    font-family: inherit;
    line-height: inherit;
    text-decoration: inherit;
    font-size: 1vw;
}
.head .header .header-position .header-banner .header-banner-nav .header-banner-nav-container .nav-list .nav-list-container div a:hover{
    color: var(--color-secondary);
}

/* 右部区域 */
.head .header .header-position .header-banner .header-banner-nav .header-banner-nav-container .nav-right{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: fit-content;
}
/* 搜索 */
.head .header .header-position .header-banner .header-banner-nav .header-banner-nav-container .nav-right .search{
    margin-right: 1.0416666667vw;
    cursor: pointer;
}
.nav-right .search img{
    width: 1.25vw;
    height: 1.25vw;
}

/* 语言选择 */
.head .header .header-position .header-banner .header-banner-nav .header-banner-nav-container .nav-right .language{
   margin-right: 1.0416666667vw;
    cursor: pointer;
}
.nav-right .language img{
    width: 1.6vw;
    height: 1.23vw;
}

/* 快速切换语言 */
.head .header .header-position .header-banner .header-banner-nav .header-banner-nav-container .nav-right .quick-switch-lang{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
.head .header .header-position .header-banner .header-banner-nav .header-banner-nav-container .nav-right .quick-switch-lang .ch{
    margin-right: 0.5vw;
    cursor: pointer;
    text-align: inherit;
    font-family: inherit;
    line-height: inherit;
    text-decoration: inherit;
    color: var(--color-primary);
}
.head .header .header-position .header-banner .header-banner-nav .header-banner-nav-container .nav-right .quick-switch-lang .en{
    margin-left: 0.5vw;
    cursor: pointer;
    text-align: inherit;
    color: var(--color-primary);
    font-family: inherit;
    line-height: inherit;
    text-decoration: inherit;
}
.head .header .header-position .header-banner .header-banner-nav .header-banner-nav-container .nav-right .quick-switch-lang .ch:hover{
    color: var(--color-secondary);
}
.head .header .header-position .header-banner .header-banner-nav .header-banner-nav-container .nav-right .quick-switch-lang .en:hover{
    color: var(--color-secondary);
}

/* 导航列表聚焦功能区 */
.head .detail-list{
    display: block;
    background: #fff;
    box-shadow: 0 .15625vw .2604166667vw rgba(0, 0, 0, .3);
    left: 0;
    max-height: 31.25vw;
    overflow: auto;
    scrollbar-width: thin;
    position: fixed;
    top: 5.7291666667vw;
    width: 100vw;
    scroll-behavior: smooth;
}
/* 容器 */
.head .detail-list .detail-list-container{
    display: block;
    width: 100%;
}
/* 8个a的对应列表 */
/* 就career，investor，join，about要写具体的列表 */
/* career的列表 */
.head .detail-list .detail-list-container .detail-list-container-career{
    width: 100%;
}
.head .detail-list .detail-list-container .detail-list-container-career ul{
    list-style: none;
    margin: 0 12.5vw;
    padding: 2.0833333333vw 0 4.1666666667vw;
}
.head .detail-list .detail-list-container .detail-list-container-career ul li{
    color: var(--color-primary);
    font-size: 1.6666666667vw;
    height: 3.75vw;
    line-height: 2.5vw;
    padding: .625vw 1.0416666667vw;
    text-align: left;
}
.head .detail-list .detail-list-container .detail-list-container-career ul li a{
    text-decoration: none;
    color: inherit;
}
.head .detail-list .detail-list-container .detail-list-container-career ul li a:hover{
    color: var(--color-secondary);
}

/* investor的列表 */
.head .detail-list .detail-list-container .detail-list-container-investor{
    width: 100%;
}
.head .detail-list .detail-list-container .detail-list-container-investor ul{
    list-style: none;
    margin: 0 12.5vw;
    padding: 2.0833333333vw 0 4.1666666667vw;
}
.head .detail-list .detail-list-container .detail-list-container-investor ul li{
    color: var(--color-primary);
    font-size: 1.6666666667vw;
    height: 3.75vw;
    line-height: 2.5vw;
    padding: .625vw 1.0416666667vw;
    text-align: left;
}
.head .detail-list .detail-list-container .detail-list-container-investor ul li a{
    text-decoration: none;
    color: inherit;
}
.head .detail-list .detail-list-container .detail-list-container-investor ul li a:hover{
    color: var(--color-secondary);
}

/* shop的列表 */
.head .detail-list .detail-list-container .detail-list-container-shop{
    width: 100%;
}
.head .detail-list .detail-list-container .detail-list-container-live{
    width: 100%;

}
.head .detail-list .detail-list-container .detail-list-container-service{
    width: 100%;
}

/* join的列表 */
.head .detail-list .detail-list-container .detail-list-container-join{
    width: 100%;
}
.head .detail-list .detail-list-container .detail-list-container-join ul{
    list-style: none;
    margin: 0 12.5vw;
    padding: 2.0833333333vw 0 4.1666666667vw;
}
.head .detail-list .detail-list-container .detail-list-container-join ul li{
    color: var(--color-primary);
    font-size: 1.6666666667vw;
    height: 3.75vw;
    line-height: 2.5vw;
    padding: .625vw 1.0416666667vw;
    text-align: left;
}
.head .detail-list .detail-list-container .detail-list-container-join ul li a{
    text-decoration: none;
    color: inherit;
}
.head .detail-list .detail-list-container .detail-list-container-join ul li a:hover{
    color: var(--color-secondary);
}

/* about的列表 */
.head .header .detail-list .detail-list-container .detail-list-container-about{
    width: 100%;
}
.head .detail-list .detail-list-container .detail-list-container-about ul{
    list-style: none;
    margin: 0 12.5vw;
    padding: 2.0833333333vw 0 4.1666666667vw;
}
.head .detail-list .detail-list-container .detail-list-container-about ul li{
    color: var(--color-primary);
    font-size: 1.6666666667vw;
    height: 3.75vw;
    line-height: 2.5vw;
    padding: .625vw 1.0416666667vw;
    text-align: left;
}
.head .detail-list .detail-list-container .detail-list-container-about ul li a{
    text-decoration: none;
    color: inherit;
}
.head .detail-list .detail-list-container .detail-list-container-about ul li a:hover{
    color: var(--color-secondary);
}

.head .detail-list .detail-list-container .detail-list-container-supplier{
    width: 100%;
}

/* 语言设置 */
.head .detail-list .detail-list-container .detail-list-container-language{
    width: 100%;
}
.head .detail-list .detail-list-container .detail-list-container-language ul{
    list-style: none;
    margin: 0 12.5vw;
    padding: 2.0833333333vw 0 4.1666666667vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1.0416666667vw;
}
.head .detail-list .detail-list-container .detail-list-container-language ul li{
    color: var(--color-primary);
    font-size: 1.6666666667vw;
    height: 3.75vw;
    line-height: 2.5vw;
    padding: .625vw 1.0416666667vw;
    text-align: center;
}
.head .detail-list .detail-list-container .detail-list-container-language ul li div{
    text-decoration: none;
    color: inherit;
    cursor: pointer;
}
.head .detail-list .detail-list-container .detail-list-container-language ul li div:hover{
    color: var(--color-secondary);
}

/* 搜索框样式 */
.head .detail-list .detail-list-container .detail-list-container-search{
    width: 100vw;
}
.head .detail-list .detail-list-container .detail-list-container-search-container{
    height: 3.75vw;
    line-height: 2.5vw;
    padding: .625vw 1.0416666667vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

}
.head .detail-list .detail-list-container .detail-list-container-search-container input{
    width: 60%;
    height:80%;
    border-top-left-radius: 1.0416666667vw;
    border-bottom-left-radius: 1.0416666667vw;
    border: 0.0416666667vw solid var(--color-primary);
    text-align:start;
}
.head .detail-list .detail-list-container .detail-list-container-search-container button{
    width: 6vw;
    height: 80%;
    border-top-right-radius: 1.0416666667vw;
    border-bottom-right-radius: 1.0416666667vw;
    border: 0.0416666667vw solid var(--color-primary);
    border-left: none;
    background-color: #fff;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.detail-list-container-search-container button img{
    width: 1vw;
    height: 1.25vh;
}
.head .detail-list .detail-list-container .detail-list-container-search-container button::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: var(--color-tertiary);
    transition: all 0.3s ease-in-out;
}
.head .detail-list .detail-list-container .detail-list-container-search-container button img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
}
.head .detail-list .detail-list-container .detail-list-container-search-container button:hover::before{
    width: 100%;
}
</style>

