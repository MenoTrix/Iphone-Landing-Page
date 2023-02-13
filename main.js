let logo=document.querySelector(".image img")
let theContainer=document.querySelector(".container")
let iconsList=document.querySelectorAll(".icons img")
let listOfPics=[]
for (let i = 0; i < iconsList.length; i++) {
    listOfPics.push(iconsList[i])
}
console.log(listOfPics);

listOfPics.forEach(pic => {
    pic.onclick=function(){
        console.log(pic);
        logo.src=`${pic.src}`
        theContainer.style.background=pic.style.color
        
    }
});

// function phones(phone){
//     console.log();
//     logo.src=phone
// }
// // from the video solution

// function colors(color){
//     theContainer.style.background=color
// }   