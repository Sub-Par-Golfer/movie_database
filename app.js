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

const userListEl = document.querySelector('.user-list');

async function main() {
    const users = await fetch("https://www.omdbapi.com/?apikey=67b7f307");
    const usersData = await users.json();
    userListEl.innerHTML = usersData.map((user) => userHTML(user)).join("")
}

main();

function showUserPosts(Title) {
    localStorage.setItem("id", id)
    window.location.href = `${window.location.origin}/user.html`
}

function userHTML(user) {
   return `<div class="user-card" onclick="showUserPosts(${user.Title})">
    <div class="user-card__container">
      <h3>${user.name}</h4>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
    </div>
  </div>`
}
