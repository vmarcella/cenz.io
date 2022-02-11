<template>
  <div id="header">
    <h1 id="title">cenz.io</h1>
    <Navbar />
  </div>
  <div id="body">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';
import Navbar from '@/components/Navbar.vue';

@Options({
  components: { Navbar },
})
export default class App extends Vue {}

</script>

<style>

#header {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#title {
  margin-bottom: 5px;
  margin-top: 5px;
  font-size: 4em;
}

#body { }

@keyframes bgcolor {
  0% {
    background-color: #45a3e5;
  }

  30% {
    background-color: #66bf39;
  }

  60%  {
  background-color: #eb670f;
  }

  90% {
    background-color: #f35;
  }

  100% {
    background-color: #864cbf;
  }
}

body {
  -animation: bgcolor 30s infinite;
  -animation-direction: alternate;

  -moz-animation: bgcolor 30s infinite;
  -moz-animation-direction: alternate;

  -webkit-animation: bgcolor 30s infinite;
  -webkit-animation-direction: alternate;
}

#app {
  font-family: 'Roboto Mono', monospace;
  font-size: 13px;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
