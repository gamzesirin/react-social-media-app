import './share.scss'

import { AuthContext } from '../../context/authContext'
import Friend from '../../assets/1.png'
import Image from '../../assets/8.png'
import Map from '../../assets/5.png'
import { useContext } from 'react'

const Share = () => {
	const { currentUser } = useContext(AuthContext)
	return (
		<div className="share">
			<div className="container">
				<div className="top">
					<img
						src="https://media.glamourmagazine.co.uk/photos/6138d0d9a35312eec2785f02/16:9/w_2560%2Cc_limit/Friends-Glamour-13Jul16-Alamy_b.jpg"
						alt=""
					/>
					<input type="text" placeholder={`What's on your mind ${currentUser.name}?`} />
				</div>
				<hr />
				<div className="bottom">
					<div className="left">
						<input type="file" id="file" style={{ display: 'none' }} />
						<label htmlFor="file">
							<div className="item">
								<img src={Image} alt="" />
								<span>Add Image</span>
							</div>
						</label>
						<div className="item">
							<img src={Map} alt="" />
							<span>Add Place</span>
						</div>
						<div className="item">
							<img src={Friend} alt="" />
							<span>Tag Friends</span>
						</div>
					</div>
					<div className="right">
						<button>Share</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Share
