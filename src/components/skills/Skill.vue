<template>
  <tr class="skill">
    <td>{{ name }}</td>
    <td>
      <i class="fa fa-star" v-for="count in strength" :key=count></i>
      <i class="fa fa-star-o" v-for="count in 5-strength" :key=count></i>
    </td>
    <td>{{ experience }}</td>
  </tr>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

export default class Skill extends Vue {
  @Prop()
  name!: string;

  @Prop()
  experience!: number;

  @Prop()
  strength!: number;
}
</script>

<style scoped>

.skill td {
  font-size: 1.4em;
  padding: 5px;
}

</style>
