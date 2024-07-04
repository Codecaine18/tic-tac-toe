let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msgConainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let newGameBtn = document.querySelector("#new-btn");
// let turnX  = false;

// 2d array

// let arr= [["apple","litchi"],["banana" , "mango"]];
// console.log(arr);

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = ()=>
{
    turnO = true;
    enableBoxes();
    msgConainer.classList.add("hide");
    count=0;
}

let count =0;

boxes.forEach((box) => {
    box.addEventListener("click",()=>
    {  
        count=count+1;
        if(turnO)
        {
            box.innerText = "0";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        if(count>=9 &&showWinner!=true)
        {
            msg.innerText ="It's a Draw !";
            msgConainer.classList.remove("hide");
            disableBoxes(); 
        }
        
       
    });
});
const disableBoxes=()=>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
    count=0;
}
const enableBoxes=()=>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
   
}
const showWinner =(winner)=>
{
    msg.innerText =`Congratulation , Winner is ${winner}`;
    msgConainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = ()=>
{
    for(let pattern of winPatterns)
    {
        // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    
    if(pos1Val != "" && pos2Val!="" && pos3Val!="")
    {
        if(pos1Val===pos2Val && pos2Val===pos3Val)
        {
            console.log("Winner",pos1Val)

            showWinner(pos1Val);
            return true;
        }
    }

    }
    newGameBtn.addEventListener("click",resetGame);
    resetbtn.addEventListener("click",resetGame);

};