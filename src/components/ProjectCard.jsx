const ProjectCard = (props) => {
  return(
    <div className = 'pl-1'>
      <div className = 'border-gray-700 border-2 pb-1 w-36 h-12 bg-gray-800 rounded shadow flex flex-col justify-center items-center'>
        <span className = 'text-gray-200 font-bold'>{ props.title }</span>
        <span className = 'text-xs font-bold text-gray-400'>{ props.subTitle }</span>
      </div>
    </div>
  )
}

export default ProjectCard
