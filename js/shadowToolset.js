const SHADOW = {
    random: (max, min = 1, floor = true) => {
        if(floor === true){
            return Math.floor(Math.random() * (max - min + 1) + min);
        }else{
            return Math.random() * (max - min + 1) + min;            
        }
    },
    doRgb: true,
    rgb : () => {
        //Call via requestAnimationFrame(SHADOW.rgb)
        let 
        r = SHADOW.random(230, 50),
        g = SHADOW.random(230, 50),
        b = SHADOW.random(230, 50);
        if(true){
            console.log('Changing color');
            document.body.style.setProperty('--menuColor', `rgb(${r},${g},${b})`);
            setTimeout(SHADOW.rgb, 2000);
        }else{
            console.log(`Something went wrrong: ${SHADOW.doRgb}`);
        }
    }
}