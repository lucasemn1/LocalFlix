<template>
  <div id="home">
    <div id="background"></div>

    <div class="container">
      <header id="header">
        <nav>
            <div class="nav-content">
              <h1 class="hello-user">{{ getSaudation() }}, Lucas!</h1>
              <button @click="logoutAndGoToLogin">
                <img src="../assets/icons/logout.svg" alt />
              </button>
            </div>
        </nav>

        <div class="featured-movie">
          <h1>{{ featuredMovie.name }}</h1>
          <div>
            <span>Lançamento: {{ featuredMovie.year }}</span>
            <p>·</p>
            <span>Duração: {{ featuredMovie.duration }}</span>
          </div>
        </div>
      </header>

      <div class="content">
        <div class="cards-row">
          <h2>Continue assistindo</h2>
          <div class="cards">
            <Card v-for="(media, index) in continueWatching" v-bind:media="media" :key="index" />
          </div>
        </div>

        <div class="cards-row">
          <h2>Minha lista</h2>
          <div class="cards">
            <Card v-for="(media, index) in myList" v-bind:media="media" :key="index" />
          </div>
        </div>

        <div class="cards-row">
          <h2>Filmes</h2>
          <div class="cards">
            <Card v-for="(media, index) in movies" v-bind:media="media" :key="index" />
          </div>
        </div>

        <div class="cards-row">
          <h2>Séries</h2>
          <div class="cards">
            <Card v-for="(media, index) in series" v-bind:media="media" :key="index" />
          </div>
        </div>

        <div class="cards-row">
          <h2>Animes</h2>
          <div class="cards">
            <Card v-for="(media, index) in animes" v-bind:media="media" :key="index" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import { isLogged, logout } from '../services/login';
import router from '../router';

export default {
  name: "Home",
  components: { Card },

  created() {
    this.getSaudation();
  },

  mounted() {
    if(!isLogged()) {
      router.push('/login');
    }
  },

  methods: {
    logoutAndGoToLogin() {
      logout();

      router.push('/login');
    },

    getSaudation() {
      const hours = new Date().getHours();

      if(hours >= 5) {
        return 'Bom dia';
      }
      else if(hours >= 12) {
        return 'Boa tarde';
      }
      else if(hours >= 19 || hours <= 5 ) {
        return 'Boa noite';
      }
    }
  },

  data() {
    return {
      featuredMovie: {
        name: "Liga da Justiça",
        year: 2017,
        duration: "2 horas",
      },

      continueWatching: [
        {
          id: 1,
          name: "Liga da Justiça",
          year: 2017,
          duration: "2 horas",
          url: "#",
          image:
            "https://i.pinimg.com/originals/18/6e/3b/186e3b3847e70104eb6ae7f6abf4b0b9.jpg",
          trailer: "3cxixDgHUYw",
          toWatch: "series/NarutoShippuden/8/187",
          color: "black",
          type: "movie",
        },
        {
          id: 2,
          name: "Vingadores Ultimato",
          year: 2019,
          duration: "3 horas",
          url: "#",
          image:
            "https://lumiere-a.akamaihd.net/v1/images/690x0w_br_9e5801a5.jpeg?region=0%2C0%2C690%2C1035",
          trailer: "g6ng8iy-l0U",
          color: "black",
          type: "movie",
        },
        {
          id: 3,
          name: "Vingadores Guerra Infinita",
          year: 2018,
          duration: "3 horas",
          url: "#",
          image:
            "https://lh3.googleusercontent.com/RuJhT-qa1vnoFg3lfUZkOR3HQ4OZTjS3Mmz5khe_a-N2CTkb1xQO3tskgRGImB8HB4U",
          trailer: "t_ULBP6V9bg",
          color: "black",
          type: "movie",
        },
        {
          id: 4,
          name: "Dragon Ball Super: Broly",
          year: 2019,
          duration: "2 horas",
          url: "#",
          image:
            "https://m.media-amazon.com/images/M/MV5BMjhhMDU5Y2QtMzcyZS00ZGE1LTg3ZjMtMTYyOTM0OTFlYTRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg.uai.com.br/3UU_3GdSVUsZmEKXJawZxjPO0dk=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2019/11/18/253288/20191118165915959374o.jpg",
          trailer: "_K91eeP25NA",
          color: "black",
          type: "movie",
        },
        {
          id: 5,
          name: "Homem de Aço",
          year: 2015,
          duration: "2 horas",
          url: "#",
          image:
            "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3b/Man_of_Steel%28filme%29.jpg/250px-Man_of_Steel%28filme%29.jpg",
          trailer: "CP7tgh0bJSI",
          color: "black",
          type: "movie",
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
          type: "movie",
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
          type: "movie",
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
          type: "movie",
        },
      ],

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
          type: "movie",
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
          type: "movie",
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
          type: "movie",
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
          type: "movie",
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
          type: "movie",
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
          type: "movie",
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
          type: "movie",
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
          type: "movie",
        },
      ],

      animes: [
        {
          id: 1,
          name: "Naruto Shippuden",
          urlName: "NarutoShippuden",
          lastWatched: {
            season: 9,
            episode: 200,
          },
          year: 2017,
          duration: "2 horas",
          url: "#",
          image:
            "https://media.fstatic.com/lvMZVJHq3-EcuFjKAGy-RU1VqHI=/fit-in/640x480/smart/media/movies/covers/2011/07/c4d7d0a7453bb2edca07609ac9f9918a.jpg",
          trailer: "3cxixDgHUYw",
          color: "black",
          type: "serie",
        },
        {
          id: 2,
          name: "Naruto Shippuden",
          urlName: "NarutoShippuden",
          lastWatched: {
            season: 9,
            episode: 200,
          },
          year: 2017,
          duration: "2 horas",
          url: "#",
          image:
            "https://media.fstatic.com/lvMZVJHq3-EcuFjKAGy-RU1VqHI=/fit-in/640x480/smart/media/movies/covers/2011/07/c4d7d0a7453bb2edca07609ac9f9918a.jpg",
          trailer: "3cxixDgHUYw",
          color: "black",
          type: "serie",
        },
        {
          id: 3,
          name: "Naruto Shippuden",
          urlName: "NarutoShippuden",
          lastWatched: {
            season: 9,
            episode: 200,
          },
          year: 2017,
          duration: "2 horas",
          url: "#",
          image:
            "https://media.fstatic.com/lvMZVJHq3-EcuFjKAGy-RU1VqHI=/fit-in/640x480/smart/media/movies/covers/2011/07/c4d7d0a7453bb2edca07609ac9f9918a.jpg",
          trailer: "3cxixDgHUYw",
          color: "black",
          type: "serie",
        },
      ],

      series: [
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
          type: "movie",
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
          type: "movie",
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
          type: "movie",
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
          type: "movie",
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
          type: "movie",
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
          type: "movie",
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
          type: "movie",
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
          type: "movie",
        },
      ],

      movies: [
        {
          id: 1,
          name: "Liga da Justiça",
          urlName: "LigaDaJustiça",
          year: 2017,
          duration: "2 horas",
          url: "#",
          image:
            "https://i.pinimg.com/originals/18/6e/3b/186e3b3847e70104eb6ae7f6abf4b0b9.jpg",
          trailer: "3cxixDgHUYw",
          color: "black",
          type: "movie",
        },
        {
          id: 1,
          name: "Liga da Justiça",
          urlName: "LigaDaJustiça",
          year: 2017,
          duration: "2 horas",
          url: "#",
          image:
            "https://i.pinimg.com/originals/18/6e/3b/186e3b3847e70104eb6ae7f6abf4b0b9.jpg",
          trailer: "3cxixDgHUYw",
          color: "black",
          type: "movie",
        },
        {  
          id: 1,
          name: "Liga da Justiça",
          urlName: "LigaDaJustiça",
          year: 2017,
          duration: "2 horas",
          url: "#",
          image:
            "https://i.pinimg.com/originals/18/6e/3b/186e3b3847e70104eb6ae7f6abf4b0b9.jpg",
          trailer: "3cxixDgHUYw",
          color: "black",
          type: "movie",
        },
        {
          id: 1,
          name: "Liga da Justiça",
          urlName: "LigaDaJustiça",
          year: 2017,
          duration: "2 horas",
          url: "#",
          image:
            "https://i.pinimg.com/originals/18/6e/3b/186e3b3847e70104eb6ae7f6abf4b0b9.jpg",
          trailer: "3cxixDgHUYw",
          color: "black",
          type: "movie",
        },
        {
          id: 1,
          name: "Liga da Justiça",
          urlName: "LigaDaJustiça",
          year: 2017,
          duration: "2 horas",
          url: "#",
          image:
            "https://i.pinimg.com/originals/18/6e/3b/186e3b3847e70104eb6ae7f6abf4b0b9.jpg",
          trailer: "3cxixDgHUYw",
          color: "black",
          type: "movie",
        },
        {
          id: 1,
          name: "Liga da Justiça",
          urlName: "LigaDaJustiça",
          year: 2017,
          duration: "2 horas",
          url: "#",
          image:
            "https://i.pinimg.com/originals/18/6e/3b/186e3b3847e70104eb6ae7f6abf4b0b9.jpg",
          trailer: "3cxixDgHUYw",
          color: "black",
          type: "movie",
        },
        {
          id: 1,
          name: "Liga da Justiça",
          urlName: "LigaDaJustiça",
          year: 2017,
          duration: "2 horas",
          url: "#",
          image:
            "https://i.pinimg.com/originals/18/6e/3b/186e3b3847e70104eb6ae7f6abf4b0b9.jpg",
          trailer: "3cxixDgHUYw",
          color: "black",
          type: "movie",
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

nav {
  width: 100%;
  background: linear-gradient(#080808, rgba(0, 0, 0, 0));
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}

nav button {
  border: none;
  background: none;
}

nav button img {
  height: 20px;
}

.nav-content {
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}

.nav-content h1 {
  font-size: 20px;
  font-weight: normal;
}

#header {
  height: 600px;
  width: 100%;
  background-color: red;
  background: linear-gradient(rgba(0, 0, 0, 0), #080808);
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  /* padding: 20px; */
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

.featured-movie {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: center;
}

.featured-movie h1 {
  font-size: 77px;
  font-weight: lighter;
  margin: 10px;
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

.cards-row h2 {
  color: #ffffff;
  font-weight: normal;
  font-size: 18px;
}

.cards {
  vertical-align: middle;
  min-height: 200px;
  padding-top: 10px;
  padding-bottom: 20px;
  margin-bottom: 50px;
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

  .nav-content {
    width: 100%;
  }

  #header {
    height: 390px;
    align-items: flex-start;
  }
  .featured-movie h1 {
    font-size: 44px;
    text-align: left;
  }

  .featured-movie div {
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
  }

  .featured-movie div > p {
    display: none;
  }

  .content {
    width: 100%;
  }
}
</style>