<template>
  <div :style='styling'>
  </div>

</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

export interface ContainerStyle {
  width: string;
  height: string;
}

export default class Container extends Vue {
  @Prop({ default: { width: '100%', height: '100%' } })
  styling!: ContainerStyle;
}
</script>

<style scoped>

</style>
