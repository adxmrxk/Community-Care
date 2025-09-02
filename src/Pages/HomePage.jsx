import React, {useState} from 'react'
import { Navigate, Outlet } from 'react-router'

function HomePage() {
  const [buttonClicked, setButtonClicked] = useState(false);

  if (buttonClicked) {
    return <Navigate to="/CommunityPostingsPage" replace />;
  }
  return (
    <div>
        <h1>Home Page</h1>
        <button onClick={() => setButtonClicked(!buttonClicked)}>Test</button>
    </div>
  )
}

export default HomePage