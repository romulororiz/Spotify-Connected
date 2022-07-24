import { useEffect } from 'react';
import { accessToken, logout, getCurrentUserProfile } from './spotify';
import { useState } from 'react';
import { catchErrors } from './utils';
import './App.css';

function App() {
	const [token, setToken] = useState(null);
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		setToken(accessToken);

		const fetchData = async () => {
			const { data } = await getCurrentUserProfile();
			setProfile(data);

			console.log(data);
		};

		// High Order Function to catch errors
		// Keep the code dry
		catchErrors(fetchData());
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				{!token ? (
					<a
						className='App-link'
						href='http://localhost:5000/login'
						rel='noopener noreferrer'
					>
						Log In to Spotify
					</a>
				) : (
					<>
						<h1>Logged In!</h1>
						{profile && (
							<div>
								<h1>{profile.display_name}</h1>
								<p>{profile.followers.total} Followers</p>
								{profile.images.length && profile.images[0].url && (
									<img src={profile.images[0]} alt='Avatar' />
								)}
							</div>
						)}
						<button onClick={logout}>Logout</button>
					</>
				)}
			</header>
		</div>
	);
}

export default App;
