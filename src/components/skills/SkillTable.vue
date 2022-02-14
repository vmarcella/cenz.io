<template>
  <table class="skill-table">
    <th v-for="column in properties.columnNames" :key=column>{{column}}</th>
    <Skill
      v-for="skill in properties.skills"
      :key=skill.name
      :name=skill.name
      :strength=skill.strength
      :experience=skill.experience
    />
  </table>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { SkillData } from '@/components/skills/Skill';
import Skill from '@/components/skills/Skill.vue';

export interface SkillTableProperties {
  columnNames: Array<string>;
  skills: Array<SkillData>;
}

/// Skill Table column.
@Options({ components: { Skill } })
export default class SkillTable extends Vue {
  @Prop()
  properties!: SkillTableProperties;
}

</script>

<style scoped>

.skill-table {
  table-layout: fixed;
  padding: 20px;
  width: 100%;
  margin: auto;
}

.skill-table th {
  text-align: center;
  font-weight: bold;
  font-size: 1.5em;
  text-decoration: underline;
}

.skill-table td {
  padding: 5px;
  text-align: center;
  font-size: 1.25em;
}

</style>
