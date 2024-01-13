import './register.scss'

import { Link } from 'react-router-dom'

const Register = () => {
	return (
		<>
			<div className="register">
				<div className="card">
					<div className="left">
						<h1>Gamze`s Socail App </h1>
						<p>
							Merhabalar bu benim yeni mern fullstack sosyal medya ugulamam umarım severek kullanırsınız arkadaşlarınıza
							da söylemeyi unutmayın...
						</p>
						<span>Do you have an account?</span>
						<button>
							<Link to="/login" className="link">
								LOGİN
							</Link>
						</button>
					</div>
					<div className="right">
						<h1>Register</h1>
						<form action="">
							<input type="text" placeholder="Username" />
							<input type="email" placeholder="Email" />
							<input type="password" placeholder="Password" />
							<input type="text" placeholder="Name" />
							<button>
								<Link className="link" to="/register">
									REGİSTER
								</Link>
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Register
