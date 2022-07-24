import { useState, useEffect } from 'react';
import { catchErrors } from '../utils';
import { getCurrentUserPlaylists, getCurrentUserProfile } from '../spotify';
import { StyledHeader } from '../styles';

const Profile = () => {
	const [profile, setProfile] = useState(null);
	const [playlists, setPlaylists] = useState(null);

	console.log(playlists);

	useEffect(() => {
		const fetchData = async () => {
			const userProfile = await getCurrentUserProfile();
			setProfile(userProfile.data);

			const userPlaylist = await getCurrentUserPlaylists();
			setPlaylists(userPlaylist.data);
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
									: '/images/avatar.svg'
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
		</>
	);
};
export default Profile;
