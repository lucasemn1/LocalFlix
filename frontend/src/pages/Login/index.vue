<template>
  <page>
    <form-area>
      <img src="../../assets/logo.png" class="logo" alt="Logo" />
      <form-title>Fazer login</form-title>

      <custom-form @submit="handleSubmit">
        <custom-input type="text" placeholder="Usuário" v-model="username" />
        <custom-button type="submit">Fazer login</custom-button>
      </custom-form>
    </form-area>
  </page>
</template>

<script>
import router from '../../router/index';
import { api } from '../../services/api';
import { login } from '../../services/login';
import {
  Page,
  FormArea,
  FormTitle,
  CustomForm,
  CustomInput,
  CustomButton,
} from './style';

export default {
  components: {
    Page,
    FormTitle,
    CustomForm,
    FormArea,
    CustomInput,
    CustomButton,
  },

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
          // eslint-disable-next-line no-alert
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
.logo {
  width: 80%;
}
</style>
