<template>
  <div class="content">
    <h1 class="page-title">{{ search }} ({{ totalResults }} resultados)</h1>

    <div class="cards-grid">
      <view-card 
        thumbnailUrl="https://images-na.ssl-images-amazon.com/images/I/81HAnnghfgL._AC_SY879_.jpg" 
        title="Boruto" 
        thumbnailPosition="center" 
        info="Temp.: 1. Ep.: 1"
      />
      <view-card 
        thumbnailUrl="https://cdn.europosters.eu/image/750/posters/attack-on-titan-shingeki-no-kyojin-attack-i22797.jpg" 
        thumbnailPosition="top"
        title="Shingeki no Kyojin" 
        info="Temp.: 1. Ep.: 1"
      />
      <view-card 
        thumbnailUrl="https://images-na.ssl-images-amazon.com/images/I/81HAnnghfgL._AC_SY879_.jpg" 
        title="Boruto" 
        thumbnailPosition="center" 
        info="Temp.: 1. Ep.: 1"
      />
      <view-card 
        thumbnailUrl="https://images-na.ssl-images-amazon.com/images/I/81HAnnghfgL._AC_SY879_.jpg" 
        title="Boruto" 
        thumbnailPosition="center" 
        info="Temp.: 1. Ep.: 1"
      />
    </div>
  </div>
</template>

<script>
import ViewCard from '@/components/ViewCard/ViewCard.vue';
import { toUppercaseFirstLetter } from '@/util/strings.js';

export default {
  data: () => ({
    search: "",
    totalResults: 10,
  }),
  mounted() {
    this.search = this.$route.query.search;

    if(this.search === undefined || this.search === '') {
      alert('Busca inválida');
      this.$router.back();
    }

    this.search = toUppercaseFirstLetter(this.search);
  },
  components: {
    ViewCard,
  }
}
</script>

<style scoped>
.content {
  padding: 0 31px;
  color: white;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 31px;
  width: min-content;
}

.cards-grid > * {
  max-width: min-content;
}

@media(max-width: 768px) {
  .cards-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>