<template>
  <a class="preview" :href="linksTo">
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
    <time>{{ date }}</time>
  </a>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({})
export default class PostPreview extends Vue {
  @Prop()
  title!: string;

  @Prop()
  description!: string;

  @Prop()
  date!: string;

  @Prop()
  linksTo!: string;
}
</script>

<style scoped>

.preview {
  background-color: #333;
  color: white;

  margin: auto;
  max-width: 475px;
  border-radius: 8px;
  text-decoration: none;
  padding: 20px;
}

.title {
  font-size: 2em;
}

.description {

}
</style>
