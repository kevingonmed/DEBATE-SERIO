// Variables globales
let posts = [];

// Elementos del DOM
const postForm = document.getElementById('post-form');
const postsList = document.getElementById('posts-list');

// Publicar una nueva publicación
postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    if (title && content) {
        const post = { title, content };
        posts.push(post);
        renderPosts();
        postForm.reset();
    }
});

// Renderizar la lista de publicaciones
function renderPosts() {
    postsList.innerHTML = '';
    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        postsList.appendChild(postDiv);
    });
}