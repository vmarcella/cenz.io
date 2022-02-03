<template>
  <div id="navbar">
    <ul class="navbar-items">
      <li class="navbar-item"><router-link to="/">Home</router-link></li>
      <li class="navbar-item"><router-link to="/about">About</router-link></li>
      <li class="navbar-item"><router-link to="/contact">Contact</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class NavBar extends Vue {}
</script>

<style local>

#navbar {
  width: 100%;
}

/* Navbar item styling */
.navbar-items {
  list-style-type: none;
  background-color: #333;
  border-radius: 8px;
}

.navbar-item {
  font-size: 2em;
}

/* Navbar item links */
.navbar-item a {

  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar-item a:hover {
  background-color: #111;
}

</style>
