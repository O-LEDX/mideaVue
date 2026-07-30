
    const astock=document.getElementsByClassName('A-stock')[0];
    const hstock=document.getElementsByClassName('H-stock')[0];
    const astockChart=document.getElementsByClassName('stock-chart-A-container')[0];
    const hstockChart=document.getElementsByClassName('stock-chart-H-container')[0];

    astock.addEventListener('click',function(){
        astockChart.style.display='block';
        hstockChart.style.display='none';
    })

    hstock.addEventListener('click',function(){
        hstockChart.style.display='block';
        astockChart.style.display='none';
    });

