
//Date :- 29/02/2024 (Accepted)

// let i = 0;

// const movies_arr = [];
// function add_Movie(){
//     i++;
//     const movie_name = document.getElementById('Bucket_add').value;
//     movies_arr[i] = movie_name;
//     console.log(movies_arr);

//     document.getElementById('movie').innerHTML +=  "<br>" + movies_arr[i];
    
// }

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

        li.appendChild(deleteButton);
        itemList.appendChild(li);
        
        input.value = '';
    } else {
        alert('Please enter a valid item.');
    }
}

function rec_addItem() {
  console.log(value);
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

  window.addEventListener('scroll', function() {
    var heading = document.querySelector('.heading');
    var scrollPosition = window.scrollY;
    
    if (scrollPosition > 350 && scrollPosition < 700) { // Adjust this value based on when you want the animation to trigger
      heading.classList.add('show-heading');
    } else {
      heading.classList.remove('show-heading');
    }

  });

  const boxes = document.querySelectorAll('.rbox');

  function fadeInBoxes() {
    boxes.forEach((box, index) => {
      const boxTop = box.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (boxTop < windowHeight) {
        setTimeout(() => {
          box.style.opacity = 1;
        }, 200 * index); // Adjust the delay between each box here
      }
    });
  }

  window.addEventListener('scroll', fadeInBoxes);
  if (scroll > 500){
    fadeInBoxes(); // Trigger the function on page load
  }

   // Function to open the popup
   function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(function(){ popup.style.opacity = "1"; }, 100); // Delayed setting of opacity to trigger the transition
}

// Function to close the popup
function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.opacity = "0";
    setTimeout(function(){ popup.style.display = "none"; }, 500); // Delayed hiding of popup after transition
}

// Function to handle form submission
document.getElementById("questionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    closePopup(); // Close the popup after form submission
});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, targetBox) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);
  var destinationBox = document.getElementById(targetBox);
  if (destinationBox.classList.contains("box")) {
    destinationBox.appendChild(draggedElement);
  }
}

// Function to add movie to the watch box
function addMovie() {
  var movieInput = document.getElementById("movieInput");
  var movieName = movieInput.value.trim();
  
  if (movieName === "") {
    alert("Please enter a movie name");
    return;
  }

  var watchBox = document.getElementById("watchBox");
  var movieItem = document.createElement("div");
  movieItem.textContent = movieName;
  movieItem.classList.add("movieItem");
  movieItem.setAttribute("draggable", "true");
  movieItem.setAttribute("id", "movie-" + Date.now()); // Use timestamp as unique ID
  movieItem.setAttribute("ondragstart", "drag(event)");
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-heart-broken"></i>'; // Heart-shaped delete button
  deleteButton.onclick = function() {
    this.parentNode.remove();
  };
  movieItem.appendChild(deleteButton);
  watchBox.appendChild(movieItem);

  // Clear input
  movieInput.value = "";
}

// Event listener for input field
document.getElementById("movieInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addMovie();
  }
});


function directAddMovie() {
  var movieInput = document.querySelector('.rbox').innerHTML;
  var movieName = movieInput.value.trim();
  
  if (movieName === "") {
    alert("Please enter a movie name");
    return;
  }

  var watchBox = document.getElementById("watchBox");
  var movieItem = document.createElement("div");
  movieItem.textContent = movieName;
  movieItem.classList.add("movieItem");
  movieItem.setAttribute("draggable", "true");
  movieItem.setAttribute("id", "movie-" + Date.now()); // Use timestamp as unique ID
  movieItem.setAttribute("ondragstart", "drag(event)");
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-heart-broken"></i>'; // Heart-shaped delete button
  deleteButton.onclick = function() {
    this.parentNode.remove();
  };
  movieItem.appendChild(deleteButton);
  watchBox.appendChild(movieItem);

  // Clear input
  movieInput.value = "";
}
