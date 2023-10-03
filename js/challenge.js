const minusButton = document.getElementById('minus')
const plusButton = document.getElementById('plus')
const heartButton = document.getElementById('heart')
const pauseButton = document.getElementById('pause')
const commentsList = document.getElementById('list')
const commentForm = document.getElementById('comment-form')
const commentInput = document.getElementById('comment-input')
const counterValue = document.getElementById('counter')
const commentsSubmit = document.getElementById('submit')
let counter = 0;
intervalId= setInterval(updateCounter, 1000);
let isPaused = false

function timerIncrement() {
    plusButton.addEventListener('click', ()=> {
        counter++;
        counterValue.innerHTML = counter;
    })
    minusButton.addEventListener('click', () => {
        counter--;
        counterValue.innerHTML = counter;
    });
    pauseButton.addEventListener('click', togglePause);
}
timerIncrement();



function updateCounter() {   
    if (!isPaused) {
        counterValue.innerHTML = counter
        counter++
    }
}

function togglePause() {
    isPaused = !isPaused;

  const buttonsToDisable = [minusButton, plusButton, heartButton];
  buttonsToDisable.forEach(button => {
    button.disabled = isPaused;
  });

  if( isPaused) {
    clearInterval(intervalId)
    pauseButton.innerHTML = 'resume';
} else {
    intervalId = setInterval(updateCounter, 1000);
    pauseButton.innerHTML = 'pause'
}
}

commentForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    const commentText = commentInput.value;
    addComment(commentText)
    commentInput.value = ''
})

function addComment(data) {
    const li = document.createElement('li')
    li.textContent = data;
    commentsList.appendChild(li);
}

function handleHeart() {
    let isClicked = false;
  
    heartButton.addEventListener('click', () => {
      isClicked = !isClicked; 
  
      if (isClicked) {
        const likesClass = document.querySelector('.likes');
        const li = document.createElement('li')
        li.textContent = `You liked ${counter}`;
        likesClass.appendChild(li);
      }
    });
  }
  handleHeart();