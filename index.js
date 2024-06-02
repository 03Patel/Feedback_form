let allStar=document.querySelectorAll(".rating .star");
let ratingValue=document.querySelector('.rating input');

allStar.forEach((item, idx)=>{
    let click=0;
    ratingValue.value = idx +1
   
    item.addEventListener('click',function(){
allStar.forEach(i=>{
    i.classList.replace('bxs-star','bx-star');
    i.classList.add('active');
})


        for(let i=0;i<allStar.length;i++){
            if(i<=idx){
                allStar[i].classList.replace('bx-star','bxs-star');
                allStar[i].classList.add('active');
            }else{
                allStar[i+1].style.setProperty('--i',click);
                click++;
            }
        }
    })
})