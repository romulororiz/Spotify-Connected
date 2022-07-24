import { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from 'react-router-dom';
import { accessToken, logout, getCurrentUserProfile } from './spotify';
import { useState } from 'react';
import { catchErrors } from './utils';
import styled, { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
	:root {
		--black: #121212;
		--green: #1db954;
		--white: #ffffff;

		--font: 'Circular Std', --apple-system, BlinkMacSystemFont, system-ui, sans-serif;
	}

	html {
		box-sizing: border-box;
	}

	*, *::before, *::after {
		box-sizing: inherit;
	}

	body {
		margin: 0;
		padding: 0;
		background-color: black;
		color: white;
	}
`;

const StyledLoginButton = styled.a`
	background-color: var(--green);
	color: var(--white);
	padding: 10px 20px;
	margin: 20px auto;
	border-radius: 30px;
	display: inline-block;
	text-decoration: none;
`;

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

function App() {
	const [token, setToken] = useState(null);
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		setToken(accessToken);

		const fetchData = async () => {
			const { data } = await getCurrentUserProfile();
			setProfile(data);
		};
		// High-order Function to catch errors
		// Keep the code dry
		catchErrors(fetchData());
	}, []);

	return (
		<div className='App'>
			<GlobalStyle />
			<header className='App-header'>
				{!token ? (
					<StyledLoginButton
						href='http://localhost:5000/login'
						rel='noopener noreferrer'
					>
						Log In to Spotify
					</StyledLoginButton>
				) : (
					<Router>
						<ScrollToTop />
						<Routes>
							<Route path='/top-artists' element={<h1>Top Artists</h1>}></Route>
							<Route path='/top-tracks' element={<h1>Top Tracks</h1>}></Route>
							<Route path='/playlists/:id' element={<h1>Playlist</h1>}></Route>
							<Route path='/playlists' element={<h1>Playlists</h1>}></Route>
							<Route
								path='/'
								element={
									<>
										{profile && (
											<div>
												<h1>{profile.display_name}</h1>
												<p>{profile.followers_total} Followers</p>
												{profile.images.length && profile.images[0].url && (
													<img src={profile.images[0].url} alt='Avatar' />
												)}
											</div>
										)}
										<br />
										<button onClick={logout}>Logout</button>
									</>
								}
							></Route>
						</Routes>
					</Router>
				)}
			</header>
		</div>
	);
}

export default App;
