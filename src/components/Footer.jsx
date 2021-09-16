const pre = '{'
const post = '}'

const Footer = (props) => {
  const {email, phone} = props.resume
  return (
    <div>
      <div className = 'pt-4 border-t-2 border-gray-700 flex justify-between items-center'>
        <div className = 'flex flex-col items-center'>
          {/* Full Name */}
          <div className = 'text-md text-red-500 font-bold'>
            <span className = 'text-blue-500 pr-2'>{ pre }</span>
            '{email}'
            <span className = 'text-blue-500 pl-2'>{ post }</span>
          </div>
        </div>
        {/* ex-position */}
        <div className = 'flex flex-col items-center'>
          {/* Full Name */}
          <div className = 'text-md text-red-500 font-bold'>
            <span className = 'text-blue-500 pr-2'>{ pre }</span>
            '{phone}'
            <span className = 'text-blue-500 pl-2'>{ post }</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
