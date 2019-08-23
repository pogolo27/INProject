let playerPool = [];
let hostPool = [];
let luckValue = 2;
let dexterityValue = 4;
var playerRandom = 0;
var hostRandom = 0;

// ==============attributes.html======================

let calculate = () => {
    luck = document.querySelectorAll('input[name="luck"]');
    for(var i=0;i<luck.length;i++) {
        if(luck.checked==true) {
            luckValue += Number(luck[i].value);
        }   
    }
    dexterity = document.querySelectorAll('input[name="dexterity"]');
    for(var i=0;i<dexterity.length;i++) {
        if(dexterity.checked==true) {
            dexterityValue += Number(dexterity[i].value);
        }   
    }
}

// ==================dice.html========================

let diceRoll = () => {
    if(playerPool.length == 3) {
        alert(`You'vve Enuv. Get outta 'ere`)
        return window.location.href = 'passage.html';
    }

    alert(`Fate's hands are in motion...`);
    
    playerRandom += Math.floor(Math.random() * 12) + 1;
    console.log(playerRandom);
    playerRandom += luckValue;
    console.log(playerRandom);
    playerPool.push(playerRandom);
    
    hostRandom += Math.floor(Math.random() * 6) + 6;
    hostPool.push(hostRandom);

    alert(playerRandom)
}

let reveal = () => {
    alert('A bit of a sleight of hand')
    
    console.log(playerRandom);
    playerRandom += dexterityValue;
    console.log(playerRandom);
    let playerDiv = document.createElement('div');  
    playerDiv.innerText = playerPool[playerPool.length - 1];
    var playerInscribe = document.getElementById("playerRoll");
    playerInscribe.appendChild(playerDiv);
}

let compare = () => {
    let resultDiv = document.createElement('div');

    if(playerPool[playerPool.length - 1] > hostPool[hostPool.length - 1]) {
        alert(`The gods are with you`);
        resultDiv.innerText = 'Won';
        var resultInscribe = document.getElementById("resultRoll");
        resultInscribe.appendChild(resultDiv);
    }
    else if(playerPool[playerPool.length - 1] < hostPool[hostPool.length - 1]) {
        alert(`Despair...`);
        resultDiv.innerText = 'Lose';
        var resultInscribe = document.getElementById("resultRoll");
        resultInscribe.appendChild(resultDiv);
    }
    else {
        alert(`It's a match`);
        resultDiv.innerText = 'Tie';
        var resultInscribe = document.getElementById("resultRoll");
        resultInscribe.appendChild(resultDiv);
    }
    let hostDiv = document.createElement('div');
    hostDiv.innerText = hostPool[hostPool.length - 1];
    var hostInscribe = document.getElementById("hostRoll");
    hostInscribe.appendChild(hostDiv);

    playerRandom = 0;
    hostRandom = 0;
}

