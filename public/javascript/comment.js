async function commentFormHandler(event) {
  event.preventDefault();

<<<<<<< HEAD
  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text
=======
  const postId = document.querySelector('input[name="post-id"]').value;
  const body = document.querySelector('textarea[name="comment-body"]').value;

  if (body) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        body
>>>>>>> f18615ea2bb3c47825323a70ea401bdad1204d35
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

<<<<<<< HEAD
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
=======
    document.location.reload();
  }
};

document.querySelector('#new-comment-form').addEventListener('submit', commentFormHandler);
>>>>>>> f18615ea2bb3c47825323a70ea401bdad1204d35
