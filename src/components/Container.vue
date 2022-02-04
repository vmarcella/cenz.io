<template lang="pug">
div
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Component, Prop } from 'vue-property-decorator';

export default class Container extends Vue {
  @Prop({ default: 100 })
  width!: number;

  @Prop({ default: 100 })
  height!: number;
}
</script>

<style scoped>

</style>
