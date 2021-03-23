//Regisers clicks made using tea button on the index page
const tea = document.getElementById('Tea');
tea.addEventListener('click', function(e) {
    console.log('button was clicked');
  
    fetch('/teaClick', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});

//Regisers clicks made using coffee button on the index page
const coffee = document.getElementById('Coffee');
coffee.addEventListener('click', function(e) {
  console.log('button was clicked');
  
  fetch('/coffeeClick', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});

//Regisers clicks made using hot chocolate button on the index page
const choco = document.getElementById('Chocolate');
choco.addEventListener('click', function(e) {
  console.log('button was clicked');
  
  fetch('/chocoClick', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});
