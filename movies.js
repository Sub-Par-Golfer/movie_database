let isModalOpen = false;

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible'
    emailjs
    .sendForm(
        'service_yzkv3wp',
        'template_uheqp5t',
        event.target,
        'wciuI5vtvYyfew6j9'
    ).then(() => {
        loading.classList.remove('modal__overlay--visible')
        success.classList += ' modal__overlay--visible'
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible')
        alert(
            'The email service is temporarily unavailable. Please contact me at joshjthompson@yahoo.com'
        );
    })
}
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal--open')
    }
    isModalOpen = !isModalOpen;
    document.body.classList += ' modal--open'
}

const postListEl = document.querySelector('.post-list')
const Title = localStorage.getItem("Title")


async function onSearchChange(event) {
    const Title = event.target.value
    setTimeout(() =>{
   renderPosts(Title)}, 1000)
}

   

async function renderPosts(Title) {
    const posts = await fetch(
      `https://www.omdbapi.com/?apikey=67b7f307&s=${Title}`
    );
    const postsData = await posts.json();
    postListEl.innerHTML = postsData.Search.map((post) => postHTML(post)).join(
      ""
    );
  }
  
  function postHTML(post) {
    return `
          <div class="post">
          <div class="post__title">
            ${post.Title}
          </div>
          <p class="post__body">
            ${post.Year}
          </p>
          <figure class="post__img"><img src="${post.Poster}"</figure>
        </div>
    `;
  }

  



// const imgUrl = "${post.Poster}"
// const img = document.createElement('img');
// img.src = imgUrl;
// document.getElementById('').appendChild(img);

// async function renderPosts(Title) {
//     const posts = await fetch(`https://www.omdbapi.com/?apikey=67b7f307&s=${Title}`)
//     const postsData = await posts.json()
//     postListEl.innerHTML = postsData.map(post => postHTML(post)).join('')
// }

//     function postHTML(post) {
//         return `
//         <div class="post">
//         <div class="post__title">
//           '${response.Title}'
//         </div>
//         <p class="post__body">
//           '${response.Year}'
//         </p>
//       </div>
//   `
//     }

// renderPosts(Title);


// const movieListEl = document.querySelector('.movie-container')
// const title = ('Fast')
// async function onSearchChange(event) {
//     const title = event.target.value
//     movieSearch(title)
// }


// function movieSearch(title){
//     const movieTitle = fetch(`https://www.omdbapi.com/?apikey=67b7f307&s=${title}`)
//     .then((response) => response.json())
//     .then((movieTitle) => Array.from(movieTitle))
//     const moviesHTML = movieTitle.map(post => moviesHTML(post)).join('')
// }
// movieSearch(title)

// async function movieSearch(title) {
//     const movies = await fetch(`https://www.omdbapi.com/?apikey=67b7f307&s=${title}`)
//     const movieData = await movies.json()
//     movieListEl.innerHTML = movieData.map(movies => moviesHTML(movies)).join('')}
// movieSearch(title)

// function moviesHTML(title) {
//     return `
//     <div class="movie">
//         <div class="movie__title">
//             ${treeLabelCell.title}
//         </div>
//         <p class="movie__info">
//             ${Year}
//         </p>
//         </div>
//     </div>
// `
// }

// moviesHTML(title);



// const movieListEl = document.querySelector('.post-list')
// const id = localStorage.getItem("id")


// async function onSearchChange(event) {
//     const id = event.target.value
//    renderPosts(id)
// }
   

// async function renderPosts(id) {
//     const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
//     const postsData = await posts.json()
//     movieListEl.innerHTML = postsData.map(post => postHTML(post)).join('')
// }

//     function postHTML(post) {
//         return `
//         <div class="post">
//         <div class="post__title">
//           '${post.title}'
//         </div>
//         <p class="post__body">
//           '${post.body}'
//         </p>
//       </div>
//   `
//     }

// renderPosts(id);







