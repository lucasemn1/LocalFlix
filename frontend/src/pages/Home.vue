<template>
	<div id="home">
		<header id="header">
			<div id="header-infos">
				<h1 class="movie-name">{{ featuredMovie.name }}</h1>
				<div class="movie-details">
					<span> Lançamento: {{ featuredMovie.year }}</span>
					<span> Duração: {{ featuredMovie.duration }}</span>
				</div>
			</div>
			<div id="header-background"></div>

			<div class="cards">
				<Card 
					v-for="(media, index) in myList" 
					v-bind:media="media"
					
					:key="index"
				/>
			</div>
		</header>
		
	</div>
</template>

<script>
	import Card from '../components/Card.vue';

	export default {
		name: 'Home',
		components: {Card,},
		data() {
			return {
				featuredMovie: {
					name: 'Liga da Justiça',
					year: 2017,
					duration: '2 horas'
				},

				myList: [
					{ id: 1, name: 'Liga da Justiça', year: 2017, duration: '2 horas', url: '#', image: 'banner', color: 'black' },
					{ id: 2, name: 'Liga da Justiça', year: 2017, duration: '2 horas', url: '#', image: 'banner', color: 'black' },
					{ id: 3, name: 'Liga da Justiça', year: 2017, duration: '2 horas', url: '#', image: 'banner', color: 'black' },
					{ id: 4, name: 'Liga da Justiça', year: 2017, duration: '2 horas', url: '#', image: 'banner', color: 'black' },
					{ id: 5, name: 'Liga da Justiça', year: 2017, duration: '2 horas', url: '#', image: 'banner', color: 'black' },
					{ id: 6, name: 'Liga da Justiça', year: 2017, duration: '2 horas', url: '#', image: 'banner', color: 'black' },
					{ id: 7, name: 'Liga da Justiça', year: 2017, duration: '2 horas', url: '#', image: 'banner', color: 'black' },
				]
			}
		}
	};
</script>

<style scoped>
	#header {
		width: 100%;
    height: 600px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

  #header-infos {
		min-width: min-content;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: absolute;
		z-index: 101;
		color: #ffffff;
		padding: 10px 50px;
		border-radius: 20px;
		/* backdrop-filter: blur(10px); */
  }

	#header-background {
    background-image: url('../assets/banner.jpg');
		border-radius: 0px 0px 100px 100px;
    filter: sepia(60%) opacity(50%);
		position: absolute;
		z-index: 100;
    background-repeat: no-repeat;
		width: 100%;
    background-size: 100%;
    height: 600px;
		top: 0,
	}

	.movie-name {
		font-size: 77px;
		font-weight: lighter;
	}

	.movie-details {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 20px;
		font-weight: bold;
	}

	.movie-details > * {
		margin: 10px;
	}

	.cards {
		position: absolute;
		z-index: 101;
		margin-top: 650px;
		display: flex;
		flex-direction: row;
	}
</style>