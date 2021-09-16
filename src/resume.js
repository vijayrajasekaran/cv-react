const resume = {
  name: 'firstnameLastname',
  position: 'previousPosition',
  addInfo: ['prevCompany1', 'prevCompany2'],
  email: 'name@example.com',
  phone: '111222333',
  projects: [
    { title: 'project1', subTitle: 'project1 desc' },
    { title: 'project2', subTitle: 'project2 desc' },
    { title: 'project3', subTitle: 'project3 desc' },
    { title: 'project4', subTitle: 'project4 desc' }
  ],
  skills: [
    { type: 'skillSpeciality1', skills: ['skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6', 'skill7', 'skill8', 'skill9']},
    { type: 'skillSpeciality2', skills: ['skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6', 'skill7', 'skill8', 'skill9']},
    { type: 'skillSpeciality3', skills: ['skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6', 'skill7', 'skill8', 'skill9']}
  ],
  experienceOne: [
    {
      company: 'Company 1',
      logo: { file: 'laptop-house', class: 'w-6' },
      position: 'Position',
      period: 'Jan 2021 - Aug 2021',
      project: 'Project title',
      stack: [{ name: 'vue', class: 'w-4' }, { name: 'vue', class: 'w-4' }, { name: 'vue', class: 'w-4' }]
    },
    {
      company: 'Company 2',
      logo: { file: 'laptop-house', class: 'w-6' },
      position: 'Position',
      period: 'Jan 2020 - Dec 2020',
      project: 'Project title',
      stack: [{ name: 'mysql', class: 'w-6' }, { name: 'mysql', class: 'w-6' }, { name: 'mysql', class: 'w-6' }]
    }
  ],
  experienceTwo: [
    {
      company: 'Company 3',
      logo: { file: 'laptop-house', class: 'w-6' },
      position: 'Position',
      period: 'Jan 2019 - Dec 2019',
      project: 'Project title',
      stack: [{ name: 'javascript', class: 'rounded mb-1 w-4' }, { name: 'javascript', class: 'rounded mb-1 w-4' }, { name: 'javascript', class: 'rounded mb-1 w-4' }]
    }
  ],
  addTech: [
    { icon: '["fas", "tools"]', services: [{ name: 'docker', class: 'pb-1 w-14' }, { name: 'docker', class: 'pb-1 w-14' }, { name: 'docker', class: 'pb-1 w-14' }] },
    { icon: '["fas", "cloud"]', services: [{ name: 'aws', class: 'w-6' }, { name: 'aws', class: 'w-6' }, { name: 'aws', class: 'w-6' }, { name: 'aws', class: 'w-6' }, { name: 'aws', class: 'w-6' }] },
    { icon: '["fab", "npm"]', services: [{ name: 'jquery', class: 'pb-1 w-12' }, { name: 'jquery', class: 'pb-1 w-12' }, { name: 'jquery', class: 'pb-1 w-12' }, { name: 'jquery', class: 'pb-1 w-12' }] },
    { icon: '["fab", "npm"]', services: [{ name: 'axios', class: 'pb-2 w-14' }, { name: 'axios', class: 'pb-2 w-14' }, { name: 'axios', class: 'pb-2 w-14' }] },
    { icon: '["fas", "code"]', services: [{ name: 'github', class: 'pb-1 w-12' }, { name: 'github', class: 'pb-1 w-12' }, { name: 'github', class: 'pb-1 w-12' }] },
    { icon: '["fas", "terminal"]', services: [{ name: 'ubuntu', class: 'pb-1 w-11' }, { name: 'ubuntu', class: 'pb-1 w-11' }, { name: 'ubuntu', class: 'pb-1 w-11' }, { name: 'ubuntu', class: 'pb-1 w-11' }] }
  ]
}

export default resume
