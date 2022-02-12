<template>
    <PostPreview
      v-for="post in posts"
      :key="post.name"
      :title=post.name
      :description=post.description
      :date=post.date />
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
