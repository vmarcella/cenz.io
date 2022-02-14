export interface SkillData {
  name: string;
  strength: number;
  experience: number;
}

export interface SkillMap {
  name: string;
  skills: Array<SkillData>
}

const skills: Array<SkillMap> = [
  {
    name: 'languages',
    skills: [
      { name: 'python', strength: 5, experience: 8 },
      { name: 'C++', strength: 4, experience: 4 },
      { name: 'Typescript', strength: 4, experience: 4 },
      { name: 'Golang', strength: 3, experience: 4 },
      { name: 'Rust', strength: 2, experience: 1 },
    ],
  },
  {
    name: 'tools',
    skills: [
      { name: 'python', strength: 5, experience: 8 },
      { name: 'C++', strength: 4, experience: 4 },
      { name: 'Typescript', strength: 4, experience: 4 },

    ],
  },
  {
    name: 'cloud',
    skills: [],
  },
  {
    name: 'cloud',
    skills: [],
  },
  {
    name: 'tools',
    skills: [
      { name: 'python', strength: 5, experience: 8 },
      { name: 'C++', strength: 4, experience: 4 },
      { name: 'Typescript', strength: 4, experience: 4 },

    ],
  },

];

export function GetAllSkillMaps(): Array<SkillMap> {
  return skills;
}
