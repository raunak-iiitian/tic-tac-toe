let toggle = 1;

const box = document.querySelector('.box');

let subbox = box.querySelectorAll('.subbox');

const cng = (event) =>{
    const clickedelement = event.target;
    if(toggle){
        if(clickedelement.textContent !== "") return;
        clickedelement.textContent = "X";
        toggle = 0;
    }
    else{
        if(clickedelement.textContent != "") return;
        clickedelement.textContent = "O";
        toggle = 1;
    }
    if((subbox[0].textContent != "" && subbox[0].textContent===subbox[1].textContent && subbox[0].textContent===subbox[2].textContent) ||
        (subbox[3].textContent != "" && subbox[3].textContent===subbox[4].textContent && subbox[3].textContent===subbox[5].textContent) ||
        (subbox[6].textContent != "" && subbox[6].textContent===subbox[7].textContent && subbox[6].textContent===subbox[8].textContent) ||
        (subbox[0].textContent != "" && subbox[0].textContent===subbox[3].textContent && subbox[0].textContent===subbox[6].textContent) ||
        (subbox[1].textContent != "" && subbox[1].textContent===subbox[4].textContent && subbox[1].textContent===subbox[7].textContent) ||
        (subbox[2].textContent != "" && subbox[2].textContent===subbox[5].textContent && subbox[2].textContent===subbox[8].textContent) ||
        (subbox[0].textContent != "" && subbox[0].textContent===subbox[4].textContent && subbox[0].textContent===subbox[8].textContent) ||
        (subbox[2].textContent != "" && subbox[2].textContent===subbox[4].textContent && subbox[2].textContent===subbox[6].textContent)    
    ){
        if(toggle===1){
            alert("O IS THE WINNER!! CONGRATULATIONS");
            resetfunc();
        }
        else{
            alert("X IS THE WINNER!! CONGRATULATIONS");
            resetfunc();
        }
    }
}

box.addEventListener("click", cng);



let resetbutn = document.querySelector('#reset');

function resetfunc(){
    for(let sub of subbox){
        sub.textContent = "";
    }
}

resetbutn.addEventListener("click", resetfunc);