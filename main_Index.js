window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let helloElement = document.querySelector('.hello');
    
    // Zoom in effect based on scroll position
    let newSize = 2 + (scrollPosition / 300);
    helloElement.style.fontSize = newSize + 'em';

    // Fade out effect based on scroll position
    let opacity = 1 - (scrollPosition / 400);
    helloElement.style.opacity = opacity;
  });






// Date :- 1/03/2024

function addItem() {
    var input = document.getElementById('item');
    var itemValue = input.value.trim();
    
    if (itemValue !== '') {
        var itemList = document.getElementById('item-list');
        var li = document.createElement('li');
        li.textContent = itemValue;
        
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            itemList.removeChild(li);
        };
        
        li.appendChild(deleteButton);
        itemList.appendChild(li);
        
        input.value = '';
    } else {
        alert('Please enter a valid item.');
    }
}


//Date 4/03/2024
function displayRandomMovies() {
    var movies = [
      "The Godfather",
      "Pulp Fiction",
      "The Shawshank Redemption",
      "The Dark Knight",
      "Forrest Gump",
      "Fight Club",
      "Inception",
      "The Matrix",
      "Goodfellas",
      "The Silence of the Lambs",
      "The Lord of the Rings: The Fellowship of the Ring",
      "The Lord of the Rings: The Two Towers",
      "The Lord of the Rings: The Return of the King",
      "Star Wars: Episode IV - A New Hope",
      "Star Wars: Episode V - The Empire Strikes Back",
      "Star Wars: Episode VI - Return of the Jedi",
      "The Terminator",
      "Terminator 2: Judgment Day",
      "Jurassic Park",
      "The Shining",
      "Titanic",
      "Avatar",
      "Gladiator",
      "The Departed",
      "Inglourious Basterds",
      "The Avengers",
      "The Social Network",
      "The Lion King",
      "Toy Story",
      "Finding Nemo"
    ];
  
    var randomMovies = [];
    while (randomMovies.length < 5) {
      var randomIndex = Math.floor(Math.random() * movies.length);
      if (randomMovies.indexOf(movies[randomIndex]) === -1) {
        randomMovies.push(movies[randomIndex]);
      }
    }
  
    var movie1 = document.getElementById('r1');
    var movie2 = document.getElementById('r2');
    var movie3 = document.getElementById('r3');
    var movie4 = document.getElementById('r4');
    var movie5 = document.getElementById('r5');

    movie1.innerHTML = randomMovies[0];
    movie2.innerHTML = randomMovies[1];
    movie3.innerHTML = randomMovies[2];
    movie4.innerHTML = randomMovies[3];
    movie5.innerHTML = randomMovies[4];
  }