
window.addEventListener('keydown', function(e){
    const keyDisplay = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    if(!audio) return; // stop function from running if audio does not exist;
    
    audio.currentTime = 0; //reset time to 0 so that if key is spammed it will not wait
    audio.play();

    keyDisplay.classList.add('playing');

    
});

function removeTransition(e)
{
    if(e.propertyName !== 'transform') return;
    
    this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));