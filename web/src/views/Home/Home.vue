<template>
  <div class="content">
    <div class="movie-area">
      <h1 class="title">ZACK SNYDER’S JUSTICE LEAGUE</h1>
      <div class="info">2021 - 4h e 0m</div>
      <div class="buttons">
        <button class="light-button">Ver mais tarde +</button>
        <button>Assistir</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped> 
.content {
  height: 100%;
  top: 0;
  z-index: 2;
  background-image: url('../../assets/imgs/background.png');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 93px;
}

.movie-area {
  width: 100%;
  text-align: center;
}

.title, .info {
  color: var(--background-contrast-color);
}

.title {
  font-size: 38px;
}

.info { 
  font-size: 23px;
}

.buttons {
  margin-top: 19px;
}

.light-button {
  margin-right: 13px;
}
</style>