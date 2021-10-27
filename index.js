function f(val){
    let firstImg = document.getElementById('largeImg');

    let img = document.getElementsByClassName('fourImg');

    let img1 = img[0].src;
    let img2 = img[1].src;
    let img3 = img[2].src;
    let img4 = img[3].src;

    for(let i=0; i<img.length; i++){

        if(val == 'car' && i != 0){
            firstImg.src = img1; 
            img[0].style.border = '2px solid red';
            img[i].style.border = 'none';
        } 
        else if(val == 'eyfel' && i != 1) {
            firstImg.src = img2;
            img[1].style.border = '2px solid red';
            img[i].style.border = 'none';
        }
        else if(val == 'flower' && i != 2){
            firstImg.src = img3;
            img[2].style.border = '2px solid red';
            img[i].style.border = 'none';
        } 
        else if(val == 'nature' && i != 3){
            firstImg.src = img4;
            img[3].style.border = '2px solid red';
            img[i].style.border = 'none';  
        } 
    }
    
    
}