<template>
  <div class="page">
      <form @submit="handleSubmit">
          <input type="text" placeholder="Username" v-model="username">
          <button type="submit">Fazer login</button>
      </form>
  </div>
</template>

<script>
import router from '../router';
import { login } from '../services/login';

export default {
    methods: {
        login,

        handleSubmit(e) {
            e.preventDefault();
            this.login();

            router.push('/');
        }
    },

    data() {
        return {
            username: '',
        }
    }
}
</script>

<style>
.page {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

form {
    background-color: rgba(116, 113, 113, 0.1);
    border-radius: 5px;
    height: 200px;
    padding: 20px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    background-color: #45108a;
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