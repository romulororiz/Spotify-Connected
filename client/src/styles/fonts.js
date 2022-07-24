import { css } from 'styled-components/macro';

const fonts = css`
	@font-face {
		font-family: 'Lato';
		src: url('../fonts/Lato-Thin.woff2') format('woff2'),
			url('../fonts/Lato-Thin.woff') format('woff');
		font-weight: 100;
		font-style: normal;
	}

	@font-face {
		font-family: 'Lato';
		src: url('../fonts/Lato-Light.woff2') format('woff2'),
			url('../fonts/Lato-Light.woff') format('woff');
		font-weight: 300;
		font-style: normal;
	}

	@font-face {
		font-family: 'Lato';
		src: url('../fonts/Lato-Regular.woff2') format('woff2'),
			url('../fonts/Lato-Regular.woff') format('woff');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'Lato';
		src: url('../fonts/Lato-Bold.woff2') format('woff2'),
			url('../fonts/Lato-Bold.woff') format('woff');
		font-weight: 700;
		font-style: normal;
	}

	@font-face {
		font-family: 'Lato';
		src: url('../fonts/Lato-Black.woff2') format('woff2'),
			url('../fonts/Lato-Black.woff') format('woff');
		font-weight: 900;
		font-style: normal;
	}
`;

export default fonts;
