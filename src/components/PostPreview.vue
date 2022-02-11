<template>
  <div class="preview">
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
    <time>{{ date }}</time>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

export default class PostPreview extends Vue {
  @Prop({})
  title!: string;

  @Prop({})
  description!: string;

  @Prop({})
  date!: Date;
}
</script>

<style scoped>
.preview {
  background-color: #333;
  color: white;
}

.title {
  font-size: 2em;
}

.description {

}
</style>
