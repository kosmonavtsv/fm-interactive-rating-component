function submitForm(event) {
  event.preventDefault();
  var ratingValue = document.forms.rating.elements.rating.value;
  
  const result = document.querySelector('.rating-back__result');
  result.innerHTML = `You selected ${ratingValue} out of 5`;

  const rating = document.querySelector('.rating');
  rating.classList.add('back');
}