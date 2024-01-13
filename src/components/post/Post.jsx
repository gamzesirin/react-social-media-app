import './post.scss'

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import { Link } from 'react-router-dom'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'

const Post = ({ post }) => {
	const liked = false
	return (
		<div className="post">
			<div className="container">
				<div className="user">
					<div className="userInfo">
						<img src={post.profilePic} alt="" />
						<div className="details">
							<Link to={`/profile/${post.userId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
								<span className="name">{post.name}</span>
							</Link>
							<span className="date">1 min ago</span>
						</div>
					</div>
					<MoreHorizIcon />
				</div>
				<div className="content">
					<p>{post.desc}</p>
					<img src="https://herway.net/wp-content/uploads/2018/01/A-Letter-To-The-Girl-Who-Used-To-Be-My-Best-Friend.jpg" />
				</div>
				<div className="info">
					<div className="item">
						{liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
						12 Likes
					</div>
					<div className="item">
						<ShareOutlinedIcon />
						Share
					</div>
				</div>
			</div>
		</div>
	)
}
export default Post
