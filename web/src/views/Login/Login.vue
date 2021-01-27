<template>
  <div class="page">
    <form class="login-form" @submit="handleSubmit">
      <input
        type="text"
        name="username"
        placeholder="Usuário"
        v-model="username"
        required
      />
      <button>Entrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: "",
  }),
  methods: {
    handleSubmit(event) {
      event.preventDefault();

      alert('Login');
    }
  }
};
</script>

<style scoped>
.page {
  position: relative;
  background: linear-gradient(
      90.07deg,
      #1b1d1f 0.06%,
      rgba(27, 29, 31, 0) 49.8%,
      #1b1d1f 99.54%
    ),
    url("../../assets/imgs/background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.login-form {
  position: absolute;
  z-index: 2;
  width: 370px;
  backdrop-filter: blur(10px);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button {
  width: 100%;
  max-width: 370px;
  margin-top: 16px;
}

@media (max-width: 768px) {
  .page {
    background-size: 300%;
  }
}
</style>