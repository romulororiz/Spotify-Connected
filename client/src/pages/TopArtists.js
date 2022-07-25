import { useEffect, useState } from 'react';
import { catchErrors } from '../utils';
import { getTopArtists } from '../spotify';

const TopArtists = () => {
	const [topArtists, setTopArtists] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const userTopArtists = await getTopArtists();
			setTopArtists(userTopArtists.data);
		};

		catchErrors(fetchData);
	}, []);

	return <h1>TopArtists</h1>;
};
export default TopArtists;
