data = {
    services:[
    {
        name: "Application Services",
        image: "images/application.png",
        features: ["Latest Technology", "Micro Service Architectiure"
         ,"Cloud Native","Test Driven Development"]
    },
    {
        name: "Testing Services",
        image: "images/testing.jpg",
        features: ["End to End Testing", "Performance Analysis"
         ,"Quality Assurance","Powerful tools"]
    },
    {
        name: "Infrastructure Services",
        image: "images/infrastructure.jpg",
        features: ["Cloud Services", "Low Cost"
         ,"Premium Hardware","High Performance"]
    }

]
}



let code =""

for(let service of data.services){
    code+= "<div class='service-box'>"
    code+="<h3>"+service.name+"</h3>"
    code+="<img src='"+service.image+"'>"
    code+="<div class='features'> <ul>"
    for(let feature of service.features){
         code+="<li onclick='featureAlert(\"" + feature + "\")'>"+feature+"</li>"
    }
    code+="</ul></div></div>"
}

function featureAlert(feature){
    alert(feature);
}

document.getElementById("services-wrapper").innerHTML=code



function toggleSlideShow() {
    const slideArea = document.getElementById('slide-show');
    const arrowIcon = document.getElementById('arrow-icon');
  
    if (slideArea.style.display === 'none') {
        slideArea.style.display = 'block';
        upper.style.display = 'block';
        down.style.display = 'none';
      
    } 
    else {
      slideArea.style.display = 'none';
      upper.style.display = 'none';
      down.style.display = 'block';
      
    }
}