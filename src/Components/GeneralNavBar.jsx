import React from 'react'

const GeneralNavBar = () => {
  return (
    <div className='border-b-2 sticky top-0'>
        <ul>
            <li>Logo</li>
            <li>Expandable</li>
            <li>Me</li>
            <li>Notifications</li>
            <li>Messages</li>
            <li>Create New Task (only if they are a requester)</li>
        </ul>
    </div>
  )
}

export default GeneralNavBar