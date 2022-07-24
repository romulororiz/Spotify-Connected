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

const Login = () => {
	return (
		<StyledLoginContainer>
			<StyledLoginButton href='http://localhost:5000/login'>
				Log In to Spotify
			</StyledLoginButton>
		</StyledLoginContainer>
	);
};
export default Login;
