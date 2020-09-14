export function isLogged() {
  const username = localStorage.getItem('username');

  if (!username) {
    return false;
  }

  return true;
}

export function login(username: string) {
  localStorage.setItem('username', username);
}

export function logout() {
  localStorage.removeItem('username');
}
