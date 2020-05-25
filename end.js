const congrats_text = document.getElementById('congratulations-text');
const pa_btn = document.getElementById('play-again-button');
const home_btn = document.getElementById('home-button');
const score_text = document.getElementById('score-container');
let username = localStorage.getItem('username');
const score_str = localStorage.getItem('user_score');
const user_score = parseInt(score_str);
diplay_text = () =>{
  
  congrats_text.innerText = username + ' ' + "you scored:";
};
diplay_text();

pa_btn.addEventListener('click', (e)=>{
  e.preventDefault;
  window.location.assign("/questions.html");
});

home_btn.addEventListener('click', (e)=>{
  e.preventDefault;
  window.location.assign("/index.html");
});

score_text.innerHTML = user_score ;

function imageDisplay() {
  const emoji = document.getElementById('emoji');
  const stars = document.getElementById('stars');
  const ntt = document.getElementById('Nice-try-text');

  if(user_score < 5){
    emoji.innerHTML = emoji.src = 'images/cry (1).svg';
    congrats_text.innerText =  username + ' ' + "you scored:";
    stars.style.display = 'none';
  }
  else{
    ntt.innerText = 'welldone';
  }
}

imageDisplay();
