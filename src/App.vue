<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script> -->
<script>
import { RouterLink, RouterView } from 'vue-router'
import FooterComponent from './components/farmfresh/FooterComponent.vue'
import HeaderComponent from './components/farmfresh/HeaderComponent.vue'

export default {
  components:{HeaderComponent, FooterComponent}
  
}
</script>

<template>
<div>
  <header-component></header-component>
</div>

  <RouterView />

  <div>
    <footer-component></footer-component>
  </div>
</template>

