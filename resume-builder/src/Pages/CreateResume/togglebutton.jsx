import React, {useState} from 'react'

const togglebutton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(prevState => !prevState);
  };

  return (
    <button onClick={handleToggle} className={`w-8 h-4 flex items-center rounded-full p-1 transition-colors duration-300 ${isToggled ? 'bg-blue-500' : 'bg-gray-300' }`} >
    
    <div className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isToggled ? 'translate-x-3' : 'translate-x-0'}`}/>
    </button>
  )
}

export default togglebutton
