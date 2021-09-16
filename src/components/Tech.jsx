const Tech = () => {
  return (
    <div>
      <div className = 'space-y-4 flex flex-col items-center'>
        <span className = 'text-green-500 font-bold'>{ '//' } Title 1</span>
        <div className = 'space-x-3 flex'>
          <div className = 'shadow bg-gray-800 border-gray-700 border-2 rounded w-20 h-9 flex justify-center items-center'>
            <img className = 'w-16' src = '/logo/react.png' alt = 'react_logo' />
          </div>
          <div className = 'shadow bg-gray-800 border-gray-700 border-2 rounded w-20 h-9 flex justify-center items-center'>
            <img className = 'w-16' src = '/logo/react.png' alt = 'react_logo' />
          </div>
          <div className = 'shadow bg-gray-800 border-gray-700 border-2 rounded w-20 h-9 flex justify-center items-center'>
            <img className = 'w-16' src = '/logo/react.png' alt = 'react_logo' />
          </div>
          <div className = 'shadow bg-gray-800 border-gray-700 border-2 rounded w-20 h-9 flex justify-center items-center'>
            <img className = 'w-16' src = '/logo/react.png' alt = 'react_logo' />
          </div>
        </div>
      </div>
      <div className = 'space-y-4 flex flex-col items-center'>
        <span className = 'pt-3 text-green-500 font-bold'>{ '//' } Title 2</span>
        <div className = 'space-x-3 flex'>
          <div className = 'shadow bg-gray-800 border-gray-700 border-2 rounded w-20 h-9 flex justify-center items-center'>
            <img className = 'pt-1 w-16' src = '/logo/express.png' alt = 'express_logo' />
          </div>
          <div className = 'shadow bg-gray-800 border-gray-700 border-2 rounded w-20 h-9 flex justify-center items-center'>
            <img className = 'pt-1 w-16' src = '/logo/express.png' alt = 'express_logo' />
          </div>
          <div className = 'shadow bg-gray-800 border-gray-700 border-2 rounded w-20 h-9 flex justify-center items-center'>
            <img className = 'pt-1 w-16' src = '/logo/express.png' alt = 'express_logo' />
          </div>
        </div>
      </div>
      <div className = 'space-y-4 flex flex-col items-center'>
        <span className = 'pt-3 text-green-500 font-bold'>{ '//' } Title 3</span>
        <div className = 'space-x-3 flex'>
        <div className = 'shadow bg-gray-800 border-gray-700 border-2 rounded w-20 h-9 flex justify-center items-center'>
            <img className = 'w-16' src = '/logo/mongodb.png' alt = 'mongodb_logo' />
          </div>
          <div className = 'shadow bg-gray-800 border-gray-700 border-2 rounded w-20 h-9 flex justify-center items-center'>
            <img className = 'w-9' src = '/logo/mysql.png' alt = 'mysql_logo' />
          </div>
        </div>
      </div>
      <div className = 'space-y-4 flex flex-col items-center'>
        <span className = 'pt-3 text-green-500 font-bold'>{ '//' } Title 4</span>
        <div className = 'space-x-3 flex'>
          <div className = 'shadow bg-gray-800 border-gray-700 border-2 rounded w-20 h-9 flex justify-center items-center'>
            <img className = 'w-20' src = '/logo/jest.png' alt = 'jest_logo' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech
