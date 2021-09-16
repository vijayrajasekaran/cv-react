const ExperienceCard = (props) => {
  return (
    <div className = 'ExperienceCard'>
      <div className = 'py-2 bg-gray-800 border-gray-700 w-80 h-34 shadow flex flex-col'>
        <div className = 'px-2 border-b-2 border-gray-700 pb-2 flex justify-left items-center'>
          <div className = 'rounded bg-gray-900 w-16 h-6 flex justify-center items-center'>
            <img className = { props.experience.logo.class } src = { `/logo/${props.experience.logo.file}.png` } alt = { `${props.experience.logo.file}_logo` } />
          </div>
          <span className = 'px-2 font-bold text-gray-200'>{ props.experience.company }</span>
        </div>
        <div className = 'px-3 py-1 flex flex-col'>
          <span className = 'text-gray-300 text-sm font-semibold'>{ props.experience.position }</span>
          <span className = 'text-gray-400 text-xs'>{ props.experience.period }</span>
          <span className = 'text-gray-400 text-xs'>{ props.experience.project }</span>
          <div className = 'flex items-center pt-2 space-x-2'>
            { props.experience.stack.map((stack, index) => (
              <div key = { index }>
                <img className = { stack.class } src = { `/logo/${stack.name}.png` } alt = { `${stack.name}_logo` } />
              </div>
            ))  }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
