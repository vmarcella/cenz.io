<template>
  <div id="recent-posts">
    <PostPreview
      :title="'This is a title'"
      :description="'This is the description'"
      :date="Date()"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import PostPreview from '@/components/PostPreview.vue';

@Options({
  components: { PostPreview },
})
export default class Home extends Vue {}
</script>
