currentIndex=0
images=["first.jpeg","second.jpeg","third.jpeg","four.jpeg",
"five.jpeg","six.jpeg"]

setInterval(
    function() {
     currentIndex=Math.round(Math.random()*5)
     document.getElementById("img1").src = 
     images[ currentIndex ]
    },10000
)

function changeImage(arrowtype){
    if(arrowtype=="right"){
        currentIndex=currentIndex==5?0:currentIndex+1
    }
    else if(arrowtype=="left"){
        currentIndex=currentIndex==0?5:currentIndex-1
    }
    document.getElementById("img1").src=images[currentIndex]
}
