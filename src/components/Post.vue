<template>
  <div class="post">
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';

export interface PostData {
  name: string;
  description: string;
  date: string;
  content: string;
}

const posts: Array<PostData> = [
  {
    name: 'This is a title',
    description: 'This is a description',
    date: Date(),
    content: 'Test content for rendering the page.',
  },
  {
    name: 'This is a another title',
    description: 'This is a description',
    date: Date(),
    content: 'Test content for rendering the page.',
  },

];

/// Return all of the posts.
export function GetAllPosts(): Array<PostData> {
  return posts;
}

export default class Post extends Vue {
  name!: string;
}

</script>

<style scoped>
</style>
