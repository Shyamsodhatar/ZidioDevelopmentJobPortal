import { createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Home from "../Pages/home";
import About from "../Pages/About";
import CreateJobs from "../Pages/CreateJobs";
import Myjobs from "../Pages/Myjobs";
import Salary from "../sidebar/Salary";
import SalaryPage from "../Pages/SalaryPage";
import UpdatedJobs from "../Pages/UpdatedJobs";
import Login from "../components/Login";
import JobDetails from "../Pages/JobDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {path:"/",element:  <Home/> },
        {
          path : "/post-job",
          element:<CreateJobs/>
        },
        {
          path:"/my-job",
          element:<Myjobs/>
        },
        {
          path:"/salary",
          element:<SalaryPage/>
        },
        {
          path:"edit-job/:id",
          element:<UpdatedJobs/>,
          loader:({params})=>fetch(`http://localhost:3000/all-jobs/${params.id}`)
        },
        {
          path:"/job/:id",
          element:<JobDetails/>
        }
      ],
    },
    {
      path:"/login",
      element:<Login/>
    }
  ]);
  export default router;