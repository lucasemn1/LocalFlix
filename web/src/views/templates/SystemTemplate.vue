<template>
  <div class="page">
    <topbar @toggle-sidenav="toggleSidenav"/>
    <sidenav />
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar/Topbar.vue';
import Sidenav from '@/components/Sidenav/Sidenav.vue';

export default {
  components: {
    Sidenav,
    Topbar
  },
  mounted() {
    if(screen.width > 768) {
      this.toggleSidenav();
    }
  },
  methods: {
    toggleSidenav() {
      const sidenav = document.getElementById('sidenav');
      const topbar = document.getElementById('topbar');
      const contents = Array.from(document.getElementsByClassName('content'));
      // sidenav.classList.toggle('hidden-sidenav');

      // console.log(sidenav.classList.contains('hidden-sidenav'));

      if(sidenav.classList.contains('hidden-sidenav')) {
        sidenav.classList.remove('hidden-sidenav');
        topbar.classList.remove('full-content');
        contents.forEach(content => content.classList.remove('full-content'));
      }
      else {
        sidenav.classList.add('hidden-sidenav');
        topbar.classList.add('full-content');
        contents.forEach(content => content.classList.add('full-content'));
      }
    }
  }
}
</script>
