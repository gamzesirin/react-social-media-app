import './style.scss'

import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { AuthContext } from './context/authContext'
import { DarkModeContext } from './context/darkModeContext'
import Home from './pages/home/Home'
import LeftBar from './components/leftbar/LeftBar'
import Login from './pages/login/Login'
import Navbar from './components/navbar/Navbar'
import Profile from './pages/profile/Profile'
import Register from './pages/register/Register'
import RightBar from './components/rightBar/RightBar'
import { useContext } from 'react'

function App() {
	const { currentUser } = useContext(AuthContext) || {}

	const { darkMode } = useContext(DarkModeContext) || {}

	const Layout = () => {
		return (
			<div className={`theme-${darkMode ? 'dark' : 'light'}`}>
				<Navbar />
				<div style={{ display: 'flex' }}>
					<LeftBar />
					<div style={{ flex: 6 }}>
						<Outlet />
					</div>
					<RightBar />
				</div>
			</div>
		)
	}

	const ProtectedRoute = ({ children }) => {
		if (!currentUser) {
			return <Navigate to="/login" />
		}

		return children
	}

	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<ProtectedRoute>
					<Layout />
				</ProtectedRoute>
			),
			children: [
				{
					path: '/',
					element: <Home />
				},
				{
					path: '/profile/:id',
					element: <Profile />
				}
			]
		},
		{
			path: '/login',
			element: <Login />
		},
		{
			path: '/register',
			element: <Register />
		}
	])

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
