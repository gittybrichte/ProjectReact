import {createBrowserRouter} from 'react-router-dom'
import User from './components/User/User.jsx'
import AdminHome from './components/admin/AdminHome.jsx';
import ServiceList from './components/service/ServiceList.jsx';
import MeetingList from './components/meeting/MeetingList.jsx';

const router = createBrowserRouter([
    {
      path: '/',
      element: <User />,
      errorElement: <div>error 404</div>
  
    },
    {
      path: '/admin',
      element: <AdminHome />,
      errorElement: <div>error Admin</div>,
      children: [
        {
          path: 'services',
          element: <ServiceList/>,
          errorElement: <div>error ServicesList not found</div>
        },
        {
          path: '',
          element: <ServiceList/>,
          errorElement: <div>error ServicesList not found</div>
        },
        {
          path: 'meeting',
          element: <div><MeetingList/></div>,
          errorElement: <div>error MeetingList not found</div>
        }
      ]
    }
  ])

  export default router;