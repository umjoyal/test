const myImage = document.querySelector("img");
myImage.onclick = ()=>{
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/firefox-icon.png"){
        myImage.setAttribute("src", "images/image1.jpg");}
    else{
        myImage.setAttribute("src", "images/firefox-icon.png");}
    
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName()
{
    const myName = prompt("Please Enter Your name : ");
    if(!myName){
        if(!localStorage.getItem("name")){
            setUserName();
        }
    }
    else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if(!localStorage.getItem("name")){
    setUserName();}
else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = ()=>{
    setUserName();
};