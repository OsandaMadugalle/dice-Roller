function rollDice(){
    let numDices = document.getElementById("numDices").value;
    let numOutput = document.getElementById("numOutput");
    let imgOutput = document.getElementById("imgOutput");
    let numArray = [];
    let imgArray = [];

    for(let i = 0; i < numDices; i++){
        let randNum = Math.floor(Math.random() * 6 + 1);
        numArray.push(randNum);
        imgArray.push(`<img src ="dice_images/${randNum}.png" alt="Dice ${randNum}">`);
    }

    numOutput.textContent =numArray.join(", ");
    imgOutput.innerHTML = imgArray.join(" ");
}
