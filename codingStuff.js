<script>
let num = 0;
let question = document.getElementById("questions");
let img = document.getElementById("image");
let Canswer = document.getElementById("correct");
let X1 = document.getElementById("wrong1");
let X2 = document.getElementById("wrong2");
let X3 = document.getElementById("wrong3");

question.innerHTML = "what is 10!";
img.src = "https://i.imgflip.com/24imcv.jpg?a477096";
Canswer.innerHTML = "3628800";
X1.innerHTML = "5795710";
X2.innerHTML = "2467320";
X3.innerHTML = "Ermmm, what the sigma?";

let cCounter = 0;
Canswer.addEventListener("click", function() {
  cCounter++;
});
function randomizer() {
  let random = Math.floor(Math.random() * 8);
  console.log(random);
  if(random == 0) {
    Canswer.style.right = "150px";
    Canswer.style.top = "-50px";
    X1.style.right = "-150px";
    X1.style.top = "-50px";
    X2.style.right = "150px";
    X2.style.top = "50px";
    X3.style.right = "-150px";
    X3.style.top = "50px";
  } else if(random == 1) {
    Canswer.style.right = "-150px";
    Canswer.style.top = "-50px";
    X1.style.right = "150px";
    X1.style.top = "-50px";
    X2.style.right = "150px";
    X2.style.top = "50px";
    X3.style.right = "-150px";
    X3.style.top = "50px";
  } else if(random == 2) {
    Canswer.style.right = "150px";
    Canswer.style.top = "50px";
    X1.style.right = "150px";
    X1.style.top = "-50px";
    X2.style.right = "-150px";
    X2.style.top = "50px";
    X3.style.right = "-150px";
    X3.style.top = "-50px";
  } else if(random == 3) {
    Canswer.style.right = "150px";
    Canswer.style.top = "50px";
    X1.style.right = "-150px";
    X1.style.top = "50px";
    X2.style.right = "150px";
    X2.style.top = "-50px";
    X3.style.right = "-150px";
    X3.style.top = "-50px";
  } else if(random == 4) {
    Canswer.style.right = "150px";
    Canswer.style.top = "50px";
    X1.style.right = "-150px";
    X1.style.top = "50px";
    X2.style.right = "150px";
    X2.style.top = "-50px";
    X3.style.right = "-150px";
    X3.style.top = "-50px";
  } else if(random == 5) {
    Canswer.style.right = "-150px";
    Canswer.style.top = "50px";
    X1.style.right = "150px";
    X1.style.top = "50px";
    X2.style.right = "150px";
    X2.style.top = "-50px";
    X3.style.right = "-150px";
    X3.style.top = "-50px";
  } else if(random == 6) {
    Canswer.style.right = "150px";
    Canswer.style.top = "-50px";
    X1.style.right = "150px";
    X1.style.top = "50px";
    X2.style.right = "-150px";
    X2.style.top = "-50px";
    X3.style.right = "-150px";
    X3.style.top = "50px";
  } else if(random == 7) {
    Canswer.style.right = "150px";
    Canswer.style.top = "50px";
    X1.style.right = "-150px";
    X1.style.top = "-50px";
    X2.style.right = "150px";
    X2.style.top = "-50px";
    X3.style.right = "-150px";
    X3.style.top = "50px";
  }
}
randomizer();
let answers = document.getElementsByClassName("choices")
for(i = 0; i < answers.length; i++){
answers[i].addEventListener("click", function() {
  num++;
  randomizer();
  if(num == 1){
    question.innerHTML = "What is the Speed of Light?";
    img.src = "https://www.astronomy.com/uploads/2023/04/timetravelstars.jpg";
    Canswer.innerHTML = "299792458 m/s";
    X1.innerHTML = "117327482 m/s";
    X2.innerHTML = "359375027 m/s";
    X3.innerHTML = "c?";
  } else if(num == 2) {
    question.innerHTML = "When was the Atomic Bomb Created?";
    img.src = "https://images.ctfassets.net/3m6gg2lxde82/4vbCsqWLPILB0SCAacyw6C/0ace3f535a2b8f7c7123a9d1bb130139/oppenheimer.jpg?w=2048&h=1137&fit=fill&f=faces&q=90&fm=webp";
    Canswer.innerHTML = "16 July 1945";
    X1.innerHTML = "17 June 1944";
    X2.innerHTML = "15 August 1946";
    X3.innerHTML = "July 21, 2023";
  } else if(num == 3) {
    question.innerHTML = "How long does it take for sunlight to reach earth";
    img.src = "https://steamuserimages-a.akamaihd.net/ugc/792009307525378419/02F53A8E9F19CD009F6FA94F598AD5724569733E/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true";
    Canswer.innerHTML = "8min 20s";
    X1.innerHTML = "7min 10s";
    X2.innerHTML = "8min 40s";
    X3.innerHTML = "0 seconds";
  } else if(num == 4) {
    question.innerHTML = "What is Barack Hussein Obama II's Last Name?";
    img.src = "https://media.tenor.com/iuJxty_zrBAAAAAi/obama-ball.gif";
    Canswer.innerHTML = "Obama";
    X1.innerHTML = "Barack";
    X2.innerHTML = "Hussein";
    X3.innerHTML = "II";
  } else {
    document.getElementById("title").style.fontSize = '70px';
   img.style.border = "0px"; document.getElementById("questions").style.fontSize = '40px';
    
    document.getElementById("title").innerHTML = "Congradulations, you got " + cCounter + " out of 5!11!!11!";
    
    if(cCounter == 0) {
      question.innerHTML = "You Stoopid";
      img.src = "https://i.kym-cdn.com/photos/images/original/001/307/426/92d.jpg";
      Canswer.style.opacity = "0";
      X1.style.opacity = "0";
      X2.style.opacity = "0";
      X3.style.opacity = "0";
    } else if(cCounter == 1 || cCounter == 2) {
      question.innerHTML = "Try Harder";
      img.src = "https://symbl-world.akamaized.net/i/webp/39/8bc9c1c1e79fc5155e25fc1b4a5eb1.webp";
      Canswer.style.opacity = "0";
      X1.style.opacity = "0";
      X2.style.opacity = "0";
      X3.style.opacity = "0";
    } else if(cCounter == 3 || cCounter == 4) {
      question.innerHTML = "Nice Job";
      img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQoYeePKicjDX84565oCDPledrrcT1HQRbEA&usqp=CAU"
      Canswer.style.opacity = "0";
      X1.style.opacity = "0";
      X2.style.opacity = "0";
      X3.style.opacity = "0";
    } else {
      question.innerHTML = "Perfect!1!";
      img.src = "https://cdn-0.emojis.wiki/emoji-pics/lg/hundred-points-lg.png"
      Canswer.style.opacity = "0";
      X1.style.opacity = "0";
      X2.style.opacity = "0";
      X3.style.opacity = "0";
    }
  }
});
}
</script>
