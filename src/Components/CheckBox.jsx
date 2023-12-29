import React from 'react'

function CheckBox({id , value , callback}) {
  return (
    <div>
    <input
      type="checkbox"
      id={id}
      value={value}
      className='cursor-pointer text-lg scale-125'
      onChange={callback}
    />
    <label htmlFor={id} className='select-none text-lg text-white ml-2'>{id} Allowed</label>
  </div>
  )
}

export default CheckBox