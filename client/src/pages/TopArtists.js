import { useEffect, useState } from 'react';
import { catchErrors } from '../utils';
import { getTopArtists } from '../spotify';
import {
	ArtistsGrid,
	Loader,
	SectionWrapper,
	TimeRangeButtons,
} from '../components';

const TopArtists = () => {
	const [topArtists, setTopArtists] = useState(null);
	const [activeRange, setActiveRange] = useState('short');

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await getTopArtists(`${activeRange}_term`);
			setTopArtists(data);
		};

		catchErrors(fetchData());
	}, [activeRange]);

	return (
		<main>
			{topArtists ? (
				<SectionWrapper title='Top Artists' breadcrumb={true}>
					<TimeRangeButtons
						activeRange={activeRange}
						setActiveRange={setActiveRange}
					/>

					{topArtists && topArtists.items && (
						<ArtistsGrid artists={topArtists.items} />
					)}
				</SectionWrapper>
			) : (
				<Loader />
			)}
		</main>
	);
};
export default TopArtists;
