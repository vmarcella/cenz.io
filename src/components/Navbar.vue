<template>
  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class NavBar extends Vue {}
</script>

<style local>
</style>
