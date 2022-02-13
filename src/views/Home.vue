<template>
  <div id="post-previews">
    <PostPreview
      class="preview"
      v-for="post in posts"
      :key=post.name
      :title=post.name
      :description=post.description
      :date=post.date />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import { GetAllPosts, PostData } from '@/components/post/Post';
import PostPreview from '@/components/post/Preview.vue';

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
  width: 50%;
  margin: auto;
}

.preview {
  margin: auto;
  min-width: 475px;
  border-radius: 8px;
  text-decoration: none;
  padding: 20px;
}

</style>
