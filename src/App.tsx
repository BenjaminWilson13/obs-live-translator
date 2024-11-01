import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './components/MainPage'

function App() {
  const router = createBrowserRouter([
	{
		path: "/", 
		element: <MainPage />, 
	}
  ])
  return (
	<RouterProvider router={router} />
  )
}

export default App
