const pre = '{'
const post = '}'

const Header = (props) => {
  const {name, position, addInfo} = props.resume
  return (
    <div>
      <div className = 'pb-4 border-b-2 border-gray-700 flex justify-between items-center lg:mx-96'>
        <div className = 'flex flex-col items-center'>
          {/* Full Name */}
          <div className = 'text-lg text-red-500 font-extrabold'>
            <span className = 'text-blue-500 pr-2'>{ pre }</span>
            {name}
            <span className = 'text-blue-500 pl-2'>{ post }</span>
          </div>
          {/* Position */}
          <div className = 'text-sm text-red-400 font-extrabold'>
            <span className = 'text-blue-500 pr-2'>{ pre }</span>
            {position}
            <span className = 'text-blue-500 pl-2'>{ post }</span>
          </div>
        </div>
        {/* .js */}
        <div className = 'flex flex-col items-center'>
          <span className = 'text-md font-bold text-yellow-300 pl-1'>resume.js</span>
          <div className = 'flex'>
            <span className = 'text-sm text-red-500 font-extrabold'>
            cv-react</span>
          </div>
        </div>
        {/* ex-position */}
        <div className = 'flex flex-col items-center'>
          {/* Full Name */}
          <div className = 'text-md text-red-500 font-extrabold'>
            <span className = 'text-blue-500 pr-2'>{ pre }</span>
            {addInfo[0]}
            <span className = 'text-blue-500 pl-2'>{ post }</span>
          </div>
          {/* Position */}
          <div className = 'text-md text-red-500 font-extrabold'>
            <span className = 'text-blue-500 pr-2'>{ pre }</span>
            {addInfo[1]}
            <span className = 'text-blue-500 pl-2'>{ post }</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
