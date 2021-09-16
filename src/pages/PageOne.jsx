import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import SkillCard from '../components/SkillCard'
import Tech from '../components/Tech'
import resume from '../resume'

const PageOne = () => {
  const {projects, skills} = resume

  return (
    <div className='PageOne'>
      <div className = 'space-y-8 p-10 text-white bg-gray-900 min-h-screen'>

        <Header resume = {resume} />

        {/* Projects */}
        <span className = {style.title}>{ `/** Opensource repos */` }</span>
        <div className = 'space-x-2 flex justify-center'>
          { projects.map ((project, index) => (
            <ProjectCard key = { index } title = { project.title } subTitle = { project.subTitle } />
          )) }
        </div>

        {/* Skills */}
        <span className = {style.title}>{ `/** Skills */` }</span>
        <div className = 'space-x-2 py-2 flex justify-center'>
          { skills.map((skill, index) => (
            <SkillCard key = { index } type = { skill.type } skills = { skill.skills } />
          ))}
        </div>

        {/* Tech stack */}
        <span className = {style.title}>{ `/** Technology stack */` }</span>
        <div>
          <Tech />
        </div>

      </div>
    </div>
  )
}

const style = {
  title: 'text-md font-bold text-green-400 flex justify-center'
}

export default PageOne
