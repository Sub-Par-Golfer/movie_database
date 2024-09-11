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

  


// if (filter === 'Alphabetical') {
//   post.title.sort((post.length) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice));
// }