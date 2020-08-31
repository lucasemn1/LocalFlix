<template>
  <div
    class="card"
    :style="{'background-image': `url('${media.image}')`}"
    @mouseenter="invertValue()"
    @mouseout="invertValue()"
  >
    <div class="card-info" v-if="showName">
      <h2>{{ media.name }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Card",
  props: {
    media: { type: Object }
  },
  methods: {
    invertValue() {
      this.showName = !this.showName;
    }
  },
  data() {
    return { showName: false };
  }
};
</script>

<style>
.card {
  height: 150px;
  width: 116.6px;
  border-radius: 5px;
  margin: 5px;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: auto 120%;
  background-position-x: 50%;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 10px;
}

.card:hover {
  height: 300px;
  width: 233.3px;
  transition: 0.3s;
  background-size: auto 100%;
}

.card-info {
  color: #ffffff;
  transition: 0.3s;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 5px;
  border-radius: 5px;
}

</style>