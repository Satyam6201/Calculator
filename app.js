let screen = document.querySelector("#screen");
let btn = document.querySelectorAll(".btn");

for(item of btn){
    item.addEventListener("click",(e)=>{
        btntext = e.target.innerText;
        if(btntext == "×"){
            btntext = "*"
        };
        if(btntext == "÷"){
            btntext = "/"
        };
        if(btntext == "+"){
            btntext = "+"
        };
        if(btntext == "-"){
            btntext = "-"
        };
        if(btntext == "%"){
            btntext = "%"
        };
        if(btntext == "×10"){
            btntext = "*10";
        };

        screen.value += btntext;
    });
};

function sin(){
    screen.value = Math.sin(screen.value);
};
function cos(){
    screen.value = Math.cos(screen.value);
};
function tan(){
    screen.value = Math.tan(screen.value);
};
function power(){
    screen.value = Math.pow(screen.value,2);
};
function roots(){
    screen.value = Math.r(screen.value);
};
function log(){
    screen.value = Math.log(screen.value);
};
function sqrt(){
    screen.value = Math.sqrt(screen.value,2)
};
function pi(){
    screen.value = 3.1415926535897;
};
function e (){
    screen.value = 2.7182818284590;
};
function fact(){
    let i, num, f;
    f= 1;
    num= screen.value;
    for(i = 1; i<=num; i++){
        f= f*i;
    };
    i= i - 1;
    screen.value = f;
};
function backSpace(){
    screen.value = screen.value.substr(0,screen.value.length -1 );
};
