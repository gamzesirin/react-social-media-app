import './navbar.scss'

import { AuthContext } from '../../context/authContext'
import { DarkModeContext } from '../../context/darkModeContext'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { Link } from 'react-router-dom'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import { useContext } from 'react'

const Navbar = () => {
	const { toggle, darkMode } = useContext(DarkModeContext) || {}
	const { currentUser } = useContext(AuthContext)

	return (
		<div className="navbar">
			<div className="left">
				<Link to="/" style={{ textDecoration: 'none' }}>
					<span>Gamze's Social App</span>
				</Link>
				<HomeOutlinedIcon />
				{darkMode ? <WbSunnyOutlinedIcon onClick={toggle} /> : <DarkModeOutlinedIcon onClick={toggle} />}
				<GridViewOutlinedIcon />
				<div className="search">
					<SearchOutlinedIcon />
					<input type="text" placeholder="Search..." />
				</div>
			</div>
			<div className="right">
				<PersonOutlinedIcon />
				<EmailOutlinedIcon />
				<NotificationsOutlinedIcon />
				<div className="user">
					<img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="" />
					<span>Gamze Şirin</span>
				</div>
			</div>
		</div>
	)
}

export default Navbar
