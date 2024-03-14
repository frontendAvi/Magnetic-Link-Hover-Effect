let cursor = document.getElementById("cursor"); 

document.addEventListener("mousemove",(e)=>{
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
})
let item = document.querySelectorAll('ul li').forEach(item=>{
    item.addEventListener('mousemove',(e)=>{
        let x = e.offsetX;
        let y = e.offsetY;

        let itemWidth = item.clientWidth;
        let itemHight = item.clientHeight;

        let transX = (x - itemWidth)
        let transY = (y - itemHight)

        item.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
    })
    item.addEventListener('mouseout',(e)=>{
        item.style.transform = `translateX(0) translateY(0)`;
    })
})