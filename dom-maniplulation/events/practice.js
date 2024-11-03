const btn = document.querySelector('#btn');

function handleClick() {
  alert('It was clicked!');
}

// btn.addEventListener('click', handleClick);


btn.addEventListener('click', function(event) {
    console.log(event.type);
});