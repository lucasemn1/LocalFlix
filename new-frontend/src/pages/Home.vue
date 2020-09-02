<template>
  <div id="home">
    <div id="background"></div>

    <div class="container">
      <header id="header">
        <div class="featured-movie">
          <h1>{{ featuredMovie.name }}</h1>
          <div>
            <span>Lançamento: {{ featuredMovie.year }}</span>
            ·
            <span>Duração: {{ featuredMovie.duration }}</span>
          </div>
        </div>
      </header>

      <div class="content">
        <div class="lists">
          <div class="cards-row">
            <h2>Minha lista</h2>
            <div class="cards">
              <Card v-for="(media, index) in myList" v-bind:media="media" :key="index" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "Home",
  components: { Card },
  data() {
    return {
      featuredMovie: {
        name: "Liga da Justiça",
        year: 2017,
        duration: "2 horas",
      },

      myList: [
        {
          id: 1,
          name: "Liga da Justiça",
          year: 2017,
          duration: "2 horas",
          url: "#",
          image:
            "https://i.pinimg.com/originals/18/6e/3b/186e3b3847e70104eb6ae7f6abf4b0b9.jpg",
          trailer: "3cxixDgHUYw",
          color: "black",
        },
        {
          id: 2,
          name: "Liga da Justiça",
          year: 2017,
          duration: "2 horas",
          url: "#",
          image:
            "https://i.uai.com.br/3UU_3GdSVUsZmEKXJawZxjPO0dk=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2019/11/18/253288/20191118165915959374o.jpg",
          trailer: "u77M-oANRtQ",
          color: "black",
        },
        {
          id: 3,
          name: "Liga da Justiça",
          year: 2017,
          duration: "2 horas",
          url: "#",
          image:
            "https://i.pinimg.com/originals/18/6e/3b/186e3b3847e70104eb6ae7f6abf4b0b9.jpg",
          trailer: "3cxixDgHUYw",
          color: "black",
        },
        {
          id: 4,
          name: "Liga da Justiça",
          year: 2017,
          duration: "2 horas",
          url: "#",
          image:
            "https://i.uai.com.br/3UU_3GdSVUsZmEKXJawZxjPO0dk=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2019/11/18/253288/20191118165915959374o.jpg",
          trailer: "u77M-oANRtQ",
          color: "black",
        },
        {
          id: 5,
          name: "Liga da Justiça",
          year: 2017,
          duration: "2 horas",
          url: "#",
          image:
            "https://i.pinimg.com/originals/18/6e/3b/186e3b3847e70104eb6ae7f6abf4b0b9.jpg",
          trailer: "3cxixDgHUYw",
          color: "black",
        },
        {
          id: 6,
          name: "Liga da Justiça",
          year: 2017,
          duration: "2 horas",
          url: "#",
          image:
            "https://i.uai.com.br/3UU_3GdSVUsZmEKXJawZxjPO0dk=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2019/11/18/253288/20191118165915959374o.jpg",
          trailer: "u77M-oANRtQ",
          color: "black",
        },
        {
          id: 7,
          name: "Liga da Justiça",
          year: 2017,
          duration: "2 horas",
          url: "#",
          image:
            "https://i.pinimg.com/originals/18/6e/3b/186e3b3847e70104eb6ae7f6abf4b0b9.jpg",
          trailer: "3cxixDgHUYw",
          color: "black",
        },
        {
          id: 8,
          name: "Liga da Justiça",
          year: 2017,
          duration: "2 horas",
          url: "#",
          image:
            "https://i.uai.com.br/3UU_3GdSVUsZmEKXJawZxjPO0dk=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2019/11/18/253288/20191118165915959374o.jpg",
          trailer: "u77M-oANRtQ",
          color: "black",
        },
      ],
    };
  },
};
</script>

<style>
#background {
  background-image: url("../assets/banner.jpg");
  filter: sepia(60%) opacity(50%);
  position: absolute;
  z-index: 100;
  background-repeat: no-repeat;
  width: 100%;
  background-size: 100%;
  height: 600px;
  top: 0;
}

#header {
  height: 600px;
  width: 100%;
  background-color: red;
  background: linear-gradient(rgba(0, 0, 0, 0), #080808);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  padding: 20px;
  top: 0px;

}

.container {
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 101;
}

.content {
  width: 70%;
}

.content > div {
  margin: 20px;
}

.featured-movie h1 {
  font-size: 77px;
  font-weight: lighter;
}

.featured-movie div {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
}

.featured-movie div > * {
  margin: 10px;
}


.lists {
  width: 70%;
  background-color: red;
}

.cards-row {
  position: absolute;
}

.cards-row h2 {
  color: #ffffff;
  font-weight: normal;
  font-size: 18px;
}

.cards {
  max-width: 90vw;
  vertical-align: middle;
  overflow-x: scroll;
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  overflow: auto;
}

@media (max-width: 700px) {
  #background {
    height: 390px;
    background-size: 150%;
    background-position: center;
  }

  #header {
    height: 390px;
  }

  .content {
    width: 100%;
  }
}
</style>