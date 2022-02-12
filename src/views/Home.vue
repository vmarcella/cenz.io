<template>
  <div id="post-previews">
    <PostPreview
      class="preview"
      v-for="post in posts"
      :key="post.name"
      :title=post.name
      :description=post.description
      :date=post.date />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import { GetAllPosts, PostData } from '@/components/Post.vue';
import PostPreview from '@/components/PostPreview.vue';

@Options({
  components: { PostPreview },
})
export default class Home extends Vue {
  posts: Array<PostData> = GetAllPosts();
}
</script>

<style scoped>
#post-previews {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
}

.preview {
  width: 50%;
  margin: auto;
  border: 20px;
}
</style>
