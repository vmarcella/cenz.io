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
    name: 'Languages',
    skills: [
      { name: 'python', strength: 5, experience: 8 },
      { name: 'C++', strength: 4, experience: 4 },
      { name: 'Typescript', strength: 4, experience: 4 },
      { name: 'Bash', strength: 4, experience: 4 },
      { name: 'Zsh', strength: 3, experience: 1 },
      { name: 'Golang', strength: 3, experience: 4 },
      { name: 'Rust', strength: 2, experience: 1 },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'SSH', strength: 5, experience: 9 },
      { name: 'Git', strength: 4, experience: 9 },
      { name: 'Cmake', strength: 4, experience: 2 },
      { name: 'Azure-cli', strength: 4, experience: 2 },
      { name: 'Bazel', strength: 3, experience: 2 },

    ],
  },
  {
    name: 'Editors',
    skills: [
      { name: 'vim', strength: 4, experience: 5 },
      { name: 'vscode', strength: 4, experience: 2 },
      { name: 'Visual Studio', strength: 3, experience: 3 },
    ],
  },
  {
    name: 'Operating Systems',
    skills: [
      { name: 'Windows', strength: 5, experience: 4 },
      { name: 'Manjaro', strength: 4, experience: 4 },
      { name: 'Ubuntu', strength: 4, experience: 4 },
    ],
  },
  {
    name: 'Platforms',
    skills: [
      { name: 'Github', strength: 5, experience: 9 },
      { name: 'Azure', strength: 4, experience: 2 },
      { name: 'Azure Devops', strength: 4, experience: 2 },
      { name: 'CloudFlare', strength: 4, experience: 7 },
      { name: 'Digital Ocean', strength: 3, experience: 7 },
      { name: 'Heroku', strength: 3, experience: 3 },
    ],
  },

];

export function GetAllSkillMaps(): Array<SkillMap> {
  return skills;
}
