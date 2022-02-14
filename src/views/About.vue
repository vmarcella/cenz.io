<template>
  <div id="about">
    <h2 id="about-header">About me</h2>
    <p id="about-description">
      Hello, I'm Vincenzo!
      I'm currently a Software Engineer at Microsoft with a passion for
      System Design, Software Architecture, and Optimization. I love talking
      about anything STEM related, and especially
      and would like to talk to me about, please head over to the
      contact section to get in touch. :)
      Most of my work can be found on Github.
    </p>
  </div>
  <div id="skills-achievements">
    <h2 id="skills-header">Skills & Achievements</h2>
    <SkillTable :properties="{columnNames: skillColumns, skills: skills[0]}">
    </SkillTable>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import SkillTable from '@/components/skills/SkillTable.vue';
import { GetAllSkills } from '@/components/skills/Skill';

@Options({ components: { SkillTable } })
export default class About extends Vue {
  @Prop()
  skills = GetAllSkills()

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
  font-size: 2.5em;
  text-align: left;
}

#about-description {
  font-size: 1.5em;
  text-align: left;
}

#skills-achievements {
  text-align: center;
}

#skills-header {
  font-size: 2.5em;
}

</style>
