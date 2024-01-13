import './rightBar.scss'

const RightBar = () => {
	return (
		<div className="rightBar">
			<div className="container">
				<div className="item">
					<span>Suggestion For You</span>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="" />
							<span>John Doe</span>
						</div>
						<div className="buttons">
							<button className="btn">Add Friend</button>
							<button className="btn">Remove</button>
						</div>
					</div>
				</div>
				<div className="item">
					<span>Latest Activities</span>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="" />
							<p>
								<span>John Doe</span>
								change his profile picture
							</p>
						</div>
						<span>1 min ago</span>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="" />
							<p>
								<span>John Doe</span>
								change his profile picture
							</p>
						</div>
						<span>1 min ago</span>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="" />
							<p>
								<span>John Doe</span>
								change his profile picture
							</p>
						</div>
						<span>1 min ago</span>
					</div>
				</div>
				<div className="item">
					<span>Active Friends</span>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="" />
							<div className="online" />
							<span>John Doe</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="" />
							<div className="online" />
							<span>John Doe</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="" />
							<div className="online" />
							<span>John Doe</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="" />
							<div className="online" />
							<span>John Doe</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RightBar
