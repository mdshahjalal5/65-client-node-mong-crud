import axios from 'axios';
import { createBrowserRouter, json, RouterProvider } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import Home from './components/Home';
import { PrHome } from './components/Pr.Home';
import PrAdduser from './components/prAddUser';
import Prupdate from './components/Prupdate';
import Update from './components/Update';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/users')
    },
    {
      path: '/users/add',
      element: <AddUser></AddUser>
    },
    {
      path:'/update/:id',
      element: <Update></Update>, 
      loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
    },
    {
      path:'pradduser', 
      element:<PrAdduser></PrAdduser>
    }, 
    {
      
    },
    {
      path:'/prhome', 
      element:<PrHome/>,
      loader:async function({params}){
        const users =  axios.get('http://localhost:5500/userspr')
        // console.log(users, 'axios usre');
        // users.then(rData=>{
        //   console.log(rData);
        //           })
        const rData = await users;
        // console.log(rData, 'radata');
        return rData.data;
      }
    }, 
    {
      path:'/prupdate/:id', 
      element:<Prupdate></Prupdate>, 
      loader: async ({params})=>{
        // console.log(params.id,'id');
        // const res = await fetch(`http://localhost:5500/users/${params.id}`)
        // console.log(res);
        // const data =await res.json();
        // console.log(data);
        return fetch(`http://localhost:5500/userspr/${params.id}`)
      }
    }
  ]) 

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
