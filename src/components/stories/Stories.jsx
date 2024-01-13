import './stories.scss'

import { AuthContext } from '../../context/authContext'
import { useContext } from 'react'

const Stories = () => {
	const { currentUser } = useContext(AuthContext)

	const stories = [
		{
			id: 1,
			name: 'Gamze şirin',
			img: 'https://media.glamourmagazine.co.uk/photos/6138d0d9a35312eec2785f02/16:9/w_2560%2Cc_limit/Friends-Glamour-13Jul16-Alamy_b.jpg'
		},
		{
			id: 2,
			name: 'Gamze şirin',
			img: 'https://antimaximalist.com/wp-content/uploads/2020/12/definition-of-a-true-friend-15-characteristics.jpg'
		},
		{
			id: 3,
			name: 'Gamze şirin',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSoBWdcUqAERL7peGFAyRqRWhBMnOJbsi8Q&usqp=CAU'
		},
		{
			id: 4,
			name: 'Gamze şirin',
			img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
		}
	]

	return (
		<div className="stories">
			<div className="story">
				<img src={currentUser.profilePic} alt="" />
				<span>{currentUser.name}</span>
				<button>+</button>
			</div>
			{stories.map((story) => (
				<div className="story" key={story.id}>
					<img src={story.img} alt="" />
					<span>{story.name}</span>
				</div>
			))}
		</div>
	)
}

export default Stories
