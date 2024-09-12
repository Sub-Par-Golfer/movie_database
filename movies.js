let isModalOpen = false;
let postsData = [];

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += ' modal__overlay--visible';
    emailjs.sendForm(
        'service_yzkv3wp',
        'template_uheqp5t',
        event.target,
        'wciuI5vtvYyfew6j9'
    ).then(() => {
        loading.classList.remove('modal__overlay--visible');
        success.classList += ' modal__overlay--visible';
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible');
        alert('The email service is temporarily unavailable. Please contact me at joshjthompson@yahoo.com');
    });
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal--open');
    }
    isModalOpen = !isModalOpen;
    document.body.classList += ' modal--open';
}

const postListEl = document.querySelector('.post-list'); 

async function onSearchChange(event) {
    const Title = event.target.value;
    setTimeout(() => {
        renderPosts(Title);
    }, 1000);
}

async function renderPosts(Title) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=67b7f307&s=${Title}`);
    const data = await response.json();
    

    postsData = data.Search || [];
    displayPosts(postsData); 
}


function displayPosts(posts) {
    postListEl.innerHTML = posts.map((post) => postHTML(post)).join("");
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
          <figure class="post__img"><img src="${post.Poster}" alt="${post.Title}"></figure>
        </div>
    `;
}


function sortAZ() {
    if (postsData.length === 0) {
        return;
    }
    const sortedPosts = [...postsData].sort((a, b) => a.Title.localeCompare(b.Title));
    displayPosts(sortedPosts);
}


function sortByYear(order) {
  if (postsData.length === 0) {
      return;
  }


  const sortedPosts = [...postsData].sort((a, b) => {
      const yearA = parseInt(a.Year);
      const yearB = parseInt(b.Year);

      if (order === 'Newest') {
          return yearB - yearA;
      } else if (order === 'Oldest') {
          return yearA - yearB;
      }
  });

  displayPosts(sortedPosts);
}


document.getElementById("filter").addEventListener("change", (event) => {
  const selectedValue = event.target.value;

  if (selectedValue === "Alphabetical") {
      sortAZ();
  } else if (selectedValue === "Newest") {
      sortByYear("Newest"); 
  } else if (selectedValue === "Oldest") {
      sortByYear("Oldest"); 
  }
});