<template>
  <div class="view-card">
    <div
      class="thumbnail"
      :style="`
        background: linear-gradient(180deg, rgba(27, 29, 31, 0.76) 0%, rgba(27, 29, 31, 0) 46.88%, rgba(27, 29, 31, 0.76) 100%), url('${thumbnailUrl}');
        background-position: ${thumbnailPosition};
        background-size: 100%;
      `"
    ></div>

    <h2 class="name">
      {{ title }}
    </h2>

    <h3 class="info">
      {{ info }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    thumbnailUrl: {
      type: String,
      required: true,
    },
    thumbnailPosition: {
      type: String,
      default: 'center',
    },
    title: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.view-card {
  text-align: center;
  cursor: pointer;
}

.view-card:hover > .thumbnail {
  width: 257px;
  height: 210px;
  transition: 0.1s;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.7);
}

.thumbnail {
  width: 237px;
  height: 190px;
  border-radius: 34px;
}

.name {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: var(--background-contrast-color);
  margin-top: 12px;
}

.info {
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: var(--background-contrast-color);
  margin-top: 1.39px;
}
</style>