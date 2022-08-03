import styled from 'styled-components/macro';

const StyledLoginContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const StyledLoginButton = styled.a`
	display: inline-block;
	background-color: var(--green);
	color: var(--white);
	border-radius: var(--border-radius-pill);
	font-weight: 700;
	font-size: var(--fz-lg);
	padding: var(--spacing-sm) var(--spacing-xl);
`;

const LOGIN_URI =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:5000/login'
		: 'https://spotify-connected.herokuapp.com/login';

const Login = () => {
	return (
		<StyledLoginContainer>
			<StyledLoginButton href={LOGIN_URI}>Log In to Spotify</StyledLoginButton>
		</StyledLoginContainer>
	);
};
export default Login;
