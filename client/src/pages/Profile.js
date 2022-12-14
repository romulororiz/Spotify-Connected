import { useState, useEffect } from 'react';
import { catchErrors } from '../utils';
import {
	getCurrentUserPlaylists,
	getCurrentUserProfile,
	getTopArtists,
	getTopTracks,
} from '../spotify';
import { StyledHeader } from '../styles';
import {
	ArtistsGrid,
	Loader,
	PlaylistsGrid,
	SectionWrapper,
	TrackList,
} from '../components';

const Profile = () => {
	const [profile, setProfile] = useState(null);
	const [playlists, setPlaylists] = useState(null);
	const [topArtists, setTopArtists] = useState(null);
	const [topTracks, setTopTracks] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const userProfile = await getCurrentUserProfile();
			setProfile(userProfile.data);

			const userPlaylist = await getCurrentUserPlaylists();
			setPlaylists(userPlaylist.data);

			const userTopArtists = await getTopArtists();
			setTopArtists(userTopArtists.data);

			const userTopTracks = await getTopTracks();
			setTopTracks(userTopTracks.data);
		};

		// High-order Function to catch errors
		// Keep the code dry
		catchErrors(fetchData());
	}, []);

	return (
		<>
			{profile && (
				<StyledHeader type='user'>
					<div className='header__inner'>
						<img
							className='header__img'
							src={
								profile.images.length && profile.images[0].url
									? profile.images[0].url
									: '/images/avatar.png'
							}
							alt='Avatar'
						/>
						<div>
							<div className='header__overline'>Profile</div>
							<h1 className='header__name'>{profile.display_name}</h1>
							<p className='header__meta'>
								<span>
									{playlists && (
										<>
											{playlists.total} Playlist
											{playlists.total !== 1 ? 's' : ''}
										</>
									)}
								</span>
								<span>
									{profile.followers.total} Follower
									{profile.followers.total !== 1 ? 's' : ''}
								</span>
							</p>
						</div>
					</div>
				</StyledHeader>
			)}

			{topArtists && topTracks && playlists ? (
				<main>
					<SectionWrapper
						title='Top Artists This Month'
						seeAllLink='/top-artists'
					>
						<ArtistsGrid artists={topArtists.items.slice(0, 10)} />
					</SectionWrapper>

					<SectionWrapper
						title='Top Tracks This Month'
						seeAllLink='/top-tracks'
					>
						<TrackList tracks={topTracks.items.slice(0, 10)} />
					</SectionWrapper>

					<SectionWrapper title='Playlists' seeAllLink='/playlists'>
						<PlaylistsGrid playlists={playlists.items.slice(0, 10)} />
					</SectionWrapper>
				</main>
			) : (
				<Loader />
			)}
		</>
	);
};
export default Profile;
