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