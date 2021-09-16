const SkillCard = (props) => {
  return (
    <div>
        <div className = ' space-x-3 space-y-3 bg-gray-800 w-52 h-60'>
          <div className = 'text-gray-200 border-gray-900 border-b-4 shadow bg-gray-800 w-full h-12 flex justify-center items-center'>
            <span className = 'font-bold'>`${ '{' } { props.type } { '}' }`</span>
          </div>
            { props.skills.map((skill, index) => (
              <span key = { index } className = 'text-gray-400 font-bold inline-block'>#{ skill }</span>
            )) }
        </div>
    </div>
  )
}

export default SkillCard
