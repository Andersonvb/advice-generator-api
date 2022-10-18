const adviceNumber = document.querySelector('.card__header-number');
const advice = document.querySelector('.card__paragraph');


fetch('https://api.adviceslip.com/advice')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    adviceNumber.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice;
  });