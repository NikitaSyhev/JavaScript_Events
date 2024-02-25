

//style обращается только в встраеваемым стилям
document.body.addEventListener('click', e => { 
    // получаем стили объекта
    //получаем строку 150px
    const widthStr = getComputedStyle(stranger).width; 
    // получаем число 150
    const width = +widthStr.substring(0, widthStr.indexOf('px')); 
    
     const heightStr = getComputedStyle(stranger).height; 

     const height = +heightStr.substring(0, heightStr.indexOf('px')); 
    console.log(width);
    stranger.style.left = e.pageX - width / 2  + 'px';
    stranger.style.top = e.pageY - height / 2 + 'px';

    // меняем цвет
    stranger.style.backgroundColor = `rgb(
        ${Math.round(Math.random() * 255)}, 
        ${Math.round(Math.random() * 255)}, 
        ${Math.round(Math.random() * 255)}
    )`; 
});