import './posts.scss'

import Post from '../post/Post'

const Posts = () => {
	const posts = [
		{
			id: 1,
			name: 'gamze şirin',
			userId: 1,
			profilePic: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
			img: 'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
		},
		{
			id: 2,
			name: 'gizem şirin',
			userId: 2,
			profilePic:
				'https://herway.net/wp-content/uploads/2018/01/A-Letter-To-The-Girl-Who-Used-To-Be-My-Best-Friend.jpg',
			desc: 'Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.'
		}
	]

	return (
		<div className="posts">
			{posts.map((post) => (
				<Post post={post} key={post.id} />
			))}
		</div>
	)
}

export default Posts
