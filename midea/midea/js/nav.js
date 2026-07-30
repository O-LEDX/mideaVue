// 导航栏聚焦就显示对应栏目
const navItems = [
  { trigger: document.getElementsByClassName('list-item-career')[0], target: document.getElementsByClassName('detail-list-container-career')[0] },
  { trigger: document.getElementsByClassName('list-item-investor')[0], target: document.getElementsByClassName('detail-list-container-investor')[0] },
  { trigger: document.getElementsByClassName('list-item-join')[0], target: document.getElementsByClassName('detail-list-container-join')[0] },
  { trigger: document.getElementsByClassName('list-item-about')[0], target: document.getElementsByClassName('detail-list-container-about')[0] }
];

navItems.forEach(item => {
  item.trigger.addEventListener('mouseover', () => show(item.target));
  item.trigger.addEventListener('mouseout', () => hide(item.target));
  item.target.addEventListener('mouseout', () => hide(item.target));
  item.target.addEventListener('mouseover', () => show(item.target));

});

function show(columnitem) {
    columnitem.style.display = 'block';
}

function hide(columnitem) {
    columnitem.style.display = 'none';
}

//搜索框
let searchcount = 0;
let languagecount = 0;
const search = document.getElementsByClassName('search')[0];
const columnsearch = document.getElementsByClassName('detail-list-container-search')[0];
search.addEventListener('mousedown', () => {
    columnsearch.style.display = 'block';
    searchcount++;
})
search.addEventListener('mouseup', () => {
    if(searchcount%2 == 0) {
        columnsearch.style.display = 'none';
    }
})

//语言设置
const language = document.getElementsByClassName('language')[0];
const columnlanguage = document.getElementsByClassName('detail-list-container-language')[0];
language.addEventListener('mousedown', () => {
    columnlanguage.style.display = 'block';
    languagecount++;
});
language.addEventListener('mouseup', () => {
    if(languagecount%2 == 0) {
        columnlanguage.style.display = 'none';
    }
});




