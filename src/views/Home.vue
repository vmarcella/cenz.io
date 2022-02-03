<template>
  <Container />
  <Navbar />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Navbar from '@/components/Navbar.vue';
import Container from '@/components/Container.vue';

@Options({
  components: {
    Navbar,
    Container,
  },
})
export default class Home extends Vue {}
</script>
