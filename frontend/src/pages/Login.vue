<template>
  <div class="page">
    <div class="form-area">
      <img src="../assets/logo.png" class="logo" alt="Logo" />
      <h1>Fazer login</h1>

      <form @submit="handleSubmit">
        <input type="text" placeholder="Usuário" v-model="username" />
        <button type="submit">Fazer login</button>
      </form>
    </div>
  </div>
</template>

<script>
import router from '../router/index';
import { api } from '../services/api';
import { login } from '../services/login';

export default {
  methods: {
    async handleSubmit(e) {
      e.preventDefault();

      const { username } = this;

      api
        .post(
          '/login',
          { username },
          {
            headers: {
              'Content-Type': 'Application/json',
            },
          },
        )
        .then(() => {
          login(username);
          router.push('/');
        })
        .catch(() => {
          alert('Usuário inválido.');
        });
    },
  },

  data() {
    return {
      username: '',
    };
  },
};
</script>

<style>
.page {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-area {
  background-color: rgba(116, 113, 113, 0.1);
  border-radius: 5px;
  padding: 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}

.logo {
  width: 80%;
}

h1 {
  margin: 20px 0;
  font-weight: normal;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
}

form {
  width: 100%;
}

form input {
  padding: 10px;
  border-radius: 3px;
  height: 40px;
  width: 100%;
  border: none;
  margin: 10px 0;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  background-color: rgba(177, 177, 177, 0.1);
  color: #ffffff;
  text-align: center;
}

form input::placeholder {
  font-weight: bold;
  font-style: italic;
}

form button {
  width: 100%;
  height: 40px;
  background-color: #622aa8;
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
  border: none;
  transition: 0.1s;
}

form button:active {
  background-color: #2b0957;
  font-size: 13px;
  transition: 0.1s;
}
</style>
