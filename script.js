const postList = document.getElementById('post-list');
const postForm = document.getElementById('post-form');
const postContent = document.getElementById('post-content');
const postBtn = document.getElementById('post-btn');

// Load posts from file
fetch('posts.json')
 .then(response => response.json())
 .then(data => {
    data.forEach(post => {
      const postHTML = `
        <li>
          <h2>${post.title}</h2>
          <p>${post.content}</p>
        </li>
      `;
      postList.innerHTML += postHTML;
    });
  });

// Handle post submission
postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const post = {
    title: 'New Post',
    content: postContent.value
  };
  // Save post to file
  fetch('posts.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
 .then(response => response.json())
 .then(data => {
    console.log('Post saved!');
    postContent.value = '';
  })
 .catch(error => console.error('Error:', error));
});