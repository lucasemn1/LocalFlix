<template>
  <div class="page">

    <sidenav />
    <router-view></router-view>
  </div>
</template>

<script>
import Sidenav from '@/components/Sidenav/Sidenav.vue';

export default {
  components: {
    Sidenav,
  }
}
</script>
