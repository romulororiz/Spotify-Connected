import { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from 'react-router-dom';
import { accessToken, logout } from './spotify';
import { GlobalStyle } from './styles';
import {
	Login,
	Playlist,
	Playlists,
	Profile,
	TopArtists,
	TopTracks,
} from './pages';
import styled from 'styled-components';

const StyledLogoutButton = styled.button`
	position: absolute;
	top: var(--spacing-sm);
	right: var(--spacing-md);
	padding: var(--spacing-xs) var(--spacing-sm);
	background-color: rgba(0, 0, 0, 0.7);
	color: var(--white);
	font-size: var(--fz-sm);
	font-weight: 700;
	border-radius: var(--border-radius-pill);
	z-index: 10;

	@media (min-width: 768px) {
		right: var(--spacing-lg);
	}
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

	useEffect(() => {
		setToken(accessToken);
	}, []);

	return (
		<div className='App'>
			<GlobalStyle />
			<header className='App-header'>
				{!token ? (
					<Login />
				) : (
					<>
						<StyledLogoutButton onClick={logout}>Log Out</StyledLogoutButton>
						<Router>
							<ScrollToTop />
							<Routes>
								<Route path='/top-artists' element={<TopArtists />} />
								<Route path='/top-tracks' element={<TopTracks />}></Route>
								<Route
									path='/playlists/:playlistId'
									element={<Playlist />}
								></Route>
								<Route path='/playlists' element={<Playlists />}></Route>
								<Route path='/' element={<Profile />} />
							</Routes>
						</Router>
					</>
				)}
			</header>
		</div>
	);
}

export default App;
