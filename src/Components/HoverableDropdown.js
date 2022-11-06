import React from 'react'
import './HoverableDropdown.css'
const HoverableDropdown = (props) => {
  return (
    <div className='dropdown border-b-2 border-transparent inline-block relative'>
      <button class=' text-gray-700 font-semibold py-2 px-4  inline-flex items-center'>
        <span class='mr-1'>{props.title}</span>
      </button>
      <ul
        className='dropdown-menu absolute hidden text-black pt-1
      '
      >
        {props.items.map((item) => (
          <li>
            <a
              class=' bg-secondary py-2 px-4 block whitespace-no-wrap '
              href='/items'
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
    // </div>
  )
}

export default HoverableDropdown
