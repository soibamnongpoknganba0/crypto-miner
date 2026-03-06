let mining = false;
let hashes = 0;

function startMining(){
if(!mining){
mining = true;
document.getElementById("status").innerText = "Running";
mine();
}
}

function stopMining(){
mining = false;
document.getElementById("status").innerText = "Stopped";
}

function mine(){
if(!mining) return;

hashes++;

document.getElementById("hashes").innerText = hashes;

setTimeout(mine,10);
}
