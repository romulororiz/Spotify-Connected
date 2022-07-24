import { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from 'react-router-dom';
import { accessToken, logout, getCurrentUserProfile } from './spotify';
import { catchErrors } from './utils';
import { GlobalStyle } from './styles';
import { Login, Profile } from './pages';

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
					<Router>
						<ScrollToTop />
						<Routes>
							<Route path='/top-artists' element={<h1>Top Artists</h1>}></Route>
							<Route path='/top-tracks' element={<h1>Top Tracks</h1>}></Route>
							<Route path='/playlists/:id' element={<h1>Playlist</h1>}></Route>
							<Route path='/playlists' element={<h1>Playlists</h1>}></Route>
							<Route path='/' element={<Profile />} />
						</Routes>
					</Router>
				)}
			</header>
		</div>
	);
}

export default App;
