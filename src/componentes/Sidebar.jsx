import React from 'react'

const Sidebar = ({activeSection}) => {
  return (
    <nav className='sidebar'>
      {activeSection}
    </nav>
  )
}

export default Sidebar
