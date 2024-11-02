import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ConfigurationComponent from './components/ConfigurationComponent';
import SettingsComponent from './components/SettingsComponent';

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (<><ConfigurationComponent /> <SettingsComponent /></>),
		}
	])
	return (
		<RouterProvider router={router} />
	)
}

export default App
