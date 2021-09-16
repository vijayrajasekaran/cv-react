import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddTechStack = (props) => {
  return (
    <div className = 'AddTechStack'>
      <div className = 'p-4 h-12 bg-gray-800 border-gray-700 border-2 rounded shadow flex justify-left items-center'>
        <div className = 'pb-2'>
        <FontAwesomeIcon className = 'text-gray-400' icon = { JSON.parse(props.addTech.icon) } size = 'lg' />
        </div>
        <div className = 'pl-4 space-x-4 flex justify-left items-center'>
          { props.addTech.services.map((data, index) => (
            <img key = { index } className = { data.class } src = { `/logo/${data.name}.png` } alt = { `${data.name}_logo` } />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AddTechStack
