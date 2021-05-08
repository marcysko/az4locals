async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
<<<<<<< HEAD
  const post_url = document.querySelector('input[name="post-url"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_url
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
=======
  const body = document.querySelector('textarea[name="post-body"]').value;

  const token = localStorage.getItem("token");
  await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  });

  document.location.replace("/dashboard");
};


document.querySelector("#new-post-form").addEventListener("submit", newFormHandler);
>>>>>>> f18615ea2bb3c47825323a70ea401bdad1204d35
