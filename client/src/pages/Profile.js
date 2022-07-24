import { useState, useEffect } from 'react';
import { catchErrors } from '../utils';
import { getCurrentUserProfile } from '../spotify';

const Profile = () => {
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await getCurrentUserProfile();

			setProfile(data);
		};

		// High-order Function to catch errors
		// Keep the code dry
		catchErrors(fetchData());
	}, []);

	return (
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
		</>
	);
};
export default Profile;
