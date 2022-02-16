<template>
  <div id="about">
    <h2 id="about-header">About me</h2>
    <p id="about-description">
      Hello, I'm Vincenzo! I'm a Software Engineer for the Linux Provisioning
      team at Microsoft. My primary passions are System Design, Software
      Architecture, and Optimization, but I love to learn new things about
      mathematics and physics whenever I get the opportunity to.
      Outside of work I like to lift weights, going on walks,
      and would like to talk to me about, please head over to the
      contact section to get in touch. :)
      Most of my work can be found on Github.
    </p>
  </div>
  <div id="skills-achievements">
    <h2 id="skills-header">Skills & Achievements</h2>
    <SkillTable
      v-for="skillMap in skillMaps"
      :key=skillMap.name
      :name=skillMap.name
      :columns=skillColumns
      :skillMap=skillMap >
    </SkillTable>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import SkillTable from '@/components/skills/SkillTable.vue';
import { GetAllSkillMaps } from '@/components/skills/Skill';

@Options({ components: { SkillTable } })
export default class About extends Vue {
  @Prop()
  skillMaps = GetAllSkillMaps()

  @Prop()
  skillColumns = ['Name', 'Strength', 'Experience']
}
</script>

<style scoped>

#about {
  width: 75%;
  margin: auto;
}

#about-header {
  margin-top: 5px;
  width: 75%;
  max-width: 650px;
  font-size: 2.5em;
  text-align: left;
  margin: auto;
}

#about-description {
  width: 75%;
  max-width: 650px;
  font-size: 1.5em;
  text-align: left;
  margin: auto;
}

#skills-achievements {
  text-align: center;
}

#skills-header {
  font-size: 2.5em;
}

</style>
