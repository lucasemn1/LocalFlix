export function isLogged() {
  const login = localStorage.getItem('username');

  if( !login ) {
    return false;
  }
  else {
    return true;
  }
}

export function login(username) {
  localStorage.setItem('username', username);
}

export function logout() {
  localStorage.removeItem('username');
}