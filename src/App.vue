<template>
  <router-view></router-view>
</template>

<style>

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
  -o-animation-direction: alternate;

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
