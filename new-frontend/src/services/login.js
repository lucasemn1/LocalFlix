export function isLogged() {
  const login = localStorage.getItem('login');

  if( !login ) {
    return false;
  }
  else {
    return true;
  }
}

export function login(username) {
  localStorage.setItem('login', username);
}

export function logout() {
  localStorage.removeItem('login');
}