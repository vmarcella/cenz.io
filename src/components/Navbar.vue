<template>
  <div id="navbar">
    <ul id="navbar-items">
      <li class="navbar-item"><router-link to="/about">About</router-link></li>
      <li class="navbar-item"><router-link to="/projects">Projects</router-link></li>
      <li class="navbar-item"><router-link to="/posts">Posts</router-link></li>
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
  max-width: 500px;
}

/* Navbar item styling */
#navbar-items {
  list-style-type: none;
  padding: 0;
  background-color: #333;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;

}

.navbar-item {
  font-size: 2em;
}

/* Navbar item links */
.navbar-item a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 14px;
  text-decoration: none;
}

.navbar-item a:hover {
  background-color: #111;
}

</style>
