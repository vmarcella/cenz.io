<template>
  <div id="post-previews">
    <PostPreview
      v-for="post in posts"
      :key=post.name
      :title=post.name
      :description=post.description
      :date=post.date
      :linksTo=post.linksTo
      />
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

</style>
