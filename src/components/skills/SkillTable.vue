<template>
  <h2 class="skill-table-header">{{ name }}</h2>
  <table class="skill-table">
    <th v-for="column in columns" :key=column>{{column}}</th>
    <Skill
      v-for="skill in skillMap.skills"
      :key=skill.name
      :name=skill.name
      :strength=skill.strength
      :experience=skill.experience
    />
  </table>
</template>

<script lang="ts">
import { Options, prop, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { SkillMap } from '@/components/skills/Skill';
import Skill from '@/components/skills/Skill.vue';

export interface SkillTableProperties {
  columnNames: Array<string>;
  skillMap: SkillMap;
}

/// Skill Table column.
@Options({ components: { Skill } })
export default class SkillTable extends Vue {
  @Prop()
  name!: string;

  @Prop()
  columns!: Array<string>;

  @Prop()
  skillMap!: SkillMap;
}

</script>

<style scoped>

.skill-table-header {
  text-align: left;
  width: 75%;
  max-width: 650px;
  margin: auto;
  font-size: 2em;
  text-decoration: underline;
}

.skill-table {
  table-layout: fixed;
  padding: 10px;
  width: 75%;
  max-width: 650px;
  margin: auto;
}

.skill-table th {
  text-align: center;
  font-weight: bold;
  font-size: 1.75em;
  text-decoration: underline;
}

</style>
