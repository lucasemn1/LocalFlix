<template>
  <nav id="topbar">
    <button class="toggle-button" @click="() => $emit('toggle-sidenav')">
      <img src="@/assets/icons/bar-chart.png" alt="">
    </button>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  left: var(--sidenav-width);
  width: calc(100% - var(--sidenav-width));
  height: 65px;
  padding: 0 26px;
  z-index: 3;
  display: flex;
  align-items: center;
  flex: 1;
}

.full-content {
  left: 0;
  width: 100%;
}

.toggle-button {
  border: none;
  background-color: rgba(0, 0, 0, 0);
  padding: 0 10px;
  border-radius: 10px;
  min-width: min-content;
}

.toggle-button:active, .toggle-button:hover {
  background-color: rgba(0, 0, 0, 0.4);
}

@media(max-width: 768px) {
  nav {
    width: 100%;
    left: 0;
  }
}
</style>