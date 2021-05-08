async function logout() {
<<<<<<< HEAD
  const response = await fetch('/api/users/logout', {
=======
  const response = await fetch('/api/user/logout', {
>>>>>>> f18615ea2bb3c47825323a70ea401bdad1204d35
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

<<<<<<< HEAD
document.querySelector('#logout').addEventListener('click', logout);
=======
document.querySelector("#logout-link").addEventListener("click", logout);
>>>>>>> f18615ea2bb3c47825323a70ea401bdad1204d35
