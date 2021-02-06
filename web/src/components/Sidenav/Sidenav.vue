<template>
  <div id="sidenav" :class="`sidenav hidden-sidenav`">
    <input type="text" placeholder="Buscar" name="buscar" />

    <ul>
      <li>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 22V12H15V22"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        Início
      </li>
      <li>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.82 2H4.18C2.97602 2 2 2.97602 2 4.18V19.82C2 21.024 2.97602 22 4.18 22H19.82C21.024 22 22 21.024 22 19.82V4.18C22 2.97602 21.024 2 19.82 2Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 2V22"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 2V22"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 12H22"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 7H7"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 17H7"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 17H22"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 7H22"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        Filmes
      </li>
      <li>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 7H4C2.89543 7 2 7.89543 2 9V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V9C22 7.89543 21.1046 7 20 7Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 2L12 7L7 2"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        Séries
      </li>
      <li>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 7H4C2.89543 7 2 7.89543 2 9V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V9C22 7.89543 21.1046 7 20 7Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 2L12 7L7 2"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        Animes
      </li>
      <li>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 6V12L16 14"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        Ver mais tarde
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    if(screen.width <= 768) {
      document.getElementById('sidenav').classList.add('hidden-sidenav');
    }
  }
};
</script>

<style scoped>
.sidenav {
  width: var(--sidenav-width);
  height: 100vh;
  padding: 33px;
  background-color: var(--background-secondary-color);
  position: fixed;
  z-index: 3;
  animation-name: show-sidenav;
  animation-duration: 0.5s;
}

.hidden-sidenav {
  left: calc(var(--sidenav-width) * -1);
  display: none;
}

.hiding-sidenav {
  animation-name: hide-sidenav;
  animation-duration: 0.5s;
  visibility: hidden;
}

ul {
  list-style: none;
  margin-top: 57px;
}

li {
  color: var(--background-contrast-color);
  display: flex;
  align-items: center;
  cursor: pointer;
}

li > svg {
  margin-right: 16px;
}

li:hover path {
  stroke: var(--primary-color);
}

li:hover {
  color: var(--primary-color);
}

li:not(:first-child) {
  margin-top: 25px;
  font-size: 16px;
}


@media (max-width: 768px) {
  .sidenav {
    width: 100%;
  }


  ul {
    margin-top: 30px;
  }
}
</style>

<style>

.hidden-sidenav .content {
  width: 100%;
}
</style>