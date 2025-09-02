import { createBrowserRouter } from "react-router-dom";
import CommunityPostingsPage from "./Pages/CommunityPostingsPage";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: null,
    children: [

      {index: true, element: <LandingPage></LandingPage>},

      {path: "/HomePage", element: <HomePage></HomePage>},

      {path: "/CommunityPostingsPage", element: <CommunityPostingsPage></CommunityPostingsPage>}

    ]
  }
])



export default router;