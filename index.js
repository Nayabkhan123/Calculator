const random = document.querySelector(".random");
const modulo = document.querySelector(".modulo");
const onecut = document.querySelector(".onecut");
const dot = document.querySelector(".dot");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const product = document.querySelector(".product");
const divide = document.querySelector(".divide");
const clear = document.querySelector(".clear");
const caldisplay = document.querySelector("[display]");
const ans = document.querySelector(".equal");
let copydisplay;
let bool=false;
let display="";
caldisplay.value="";
function clickonbutton(input){
    display+=input;
    caldisplay.value=display;
    
}
function randomfunc(){
        
        if(bool===false){
        copydisplay=display;
        display="-("+display+")";
        caldisplay.value=display;
        bool=true;
        }
        else{
        display=copydisplay;
        caldisplay.value=display;
        bool=false;
        }
}
random.addEventListener("click",()=>{
        randomfunc()});
    one.addEventListener("click",(event)=>{
            clickonbutton("1")});
    two.addEventListener("click",()=>{
            clickonbutton("2")});
    three.addEventListener("click",()=>{
            clickonbutton("3")});
    four.addEventListener("click",()=>{
            clickonbutton("4")});
    five.addEventListener("click",()=>{
            clickonbutton("5")});
    six.addEventListener("click",()=>{
            clickonbutton("6")});
    seven.addEventListener("click",()=>{
            clickonbutton("7")});
    eight.addEventListener("click",()=>{
            clickonbutton("8")});
    nine.addEventListener("click",()=>{
            clickonbutton("9")});
    zero.addEventListener("click",()=>{
            clickonbutton("0")});
    plus.addEventListener("click",()=>{
        checkdot("+")});
    minus.addEventListener("click",()=>{
        checkdot("-")});
    product.addEventListener("click",()=>{
        checkdot("*")});
    divide.addEventListener("click",()=>{
        checkdot("/")});
    onecut.addEventListener("click",()=>{
            display=display.slice(0,-1);
            // display-="display[display.size-1]"; 
            caldisplay.value=display;   
    });
    modulo.addEventListener("click",()=>{
        clickonbutton("%")
    });
// check this 

function checkdot(operatorsym){
        if(display[display.length-1]!==operatorsym){
                console.log("clicked");
                clickonbutton(operatorsym);
        }
}
    dot.addEventListener("click",()=>{
    //     for(let i=0;i<display.size;i++){
    //         if(display[i]=="."){
    //             return;
    //         }
    //         else{
    //             clickonbutton(".");
    //         }
    //     }
    // })
    checkdot(".");
    
})
    
           

function clearall(){
    display="";
    caldisplay.value=display;
}

clear.addEventListener("click",()=>{
    clearall();
})
function finalans(){
    let str = caldisplay.value;
    caldisplay.value= eval(str);
    display=caldisplay.value;
    

}


ans.addEventListener("click",()=>{
    finalans();
})
// const displayno = document.querySelectorAll("[num]");
//     displayno.addEventListener("click",()=>{
//         // display="";
//         // caldisplay=display;
        
//     })


// experimental

let darkmode=false;
const darkEqual=document.querySelector("[equal]");
const darknumber=document.querySelectorAll("[num]");
const darkSymbols=document.querySelectorAll("[blacksym]");
const container=document.querySelector("[container]");
const darkmodeon=document.querySelector(".darkmode-btn");
const wrapper=document.querySelector("[wrapper]");
const calculatorPara=document.querySelector("[calculator-text]");
function changemode(){
        if(darkmode===false){
                darkmodeon.textContent="Light Mode";
                darkmodeon.style.backgroundColor="#741eff";
                darkmodeon.style.color="white";
                // darkcontainer.classList.remove("container");
                wrapper.classList.remove("wrapper-white");
                wrapper.classList.add("wrapper-black");
                calculatorPara.classList.add("blacktheme");
                container.classList.add("container-black");
                caldisplay.classList.add("black-input");
                caldisplay.classList.remove("white-input");
                darknumber.forEach((e)=>{
                        e.classList.add("blackmode");
                })
                darkSymbols.forEach((e)=>{
                        e.classList.add("blackmode-sym");
                })
                darkEqual.classList.add("blackmode-equal");
                darkmode=true;      
                
               
        }
        else{
                darkmodeon.textContent="Dark Mode";
                darkmodeon.style.backgroundColor="black";
                darkmodeon.style.color="white";
                wrapper.classList.remove("wrapper-black");
                wrapper.classList.add("wrapper-white");
                calculatorPara.classList.remove("blacktheme");
                container.classList.remove("container-black");
                caldisplay.classList.remove("black-input");
                caldisplay.classList.add("white-input");
                
                darknumber.forEach((e)=>{
                        e.classList.remove("blackmode");
                })
                darkSymbols.forEach((e)=>{
                        e.classList.remove("blackmode-sym");
                })
                darkEqual.classList.remove("blackmode-equal");
                darkmode=false;

        }
}

darkmodeon.addEventListener("click",()=>{
        changemode();
});
