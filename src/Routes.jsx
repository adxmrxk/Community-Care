import { createBrowserRouter } from "react-router-dom";
import CommunityPostingsPage from "./Pages/CommunityPostingsPage";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import SettingsPage from "./Pages/SettingsPage";
import MessagesPage from "./Pages/MessagesPage";
import CreateRequestPage from "./Pages/CreateRequestPage";
import VolunteerHomePage from "./Pages/VolunteerHomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: null,
    children: [

      {index: true, element: <LandingPage></LandingPage>},

      {path: "/HomePage", element: <HomePage></HomePage>},

      {path: "/VolunteerHomePage", element: <VolunteerHomePage></VolunteerHomePage>},

      {path: "/CommunityPostingsPage", element: <CommunityPostingsPage></CommunityPostingsPage>},

      {path: "/SettingsPage", element: <SettingsPage></SettingsPage>},

      {path: "/MessagesPage", element: <MessagesPage></MessagesPage>},

      {path: "/CreateRequestPage", element: <CreateRequestPage></CreateRequestPage>},

    ]
  }
])



export default router;