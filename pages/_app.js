import '../styles/theme.scss';

import {CloudCannonConnect} from '@cloudcannon/react-connector'

export default function App({ Component, pageProps }) {
	const AppComponent = CloudCannonConnect(Component);
	return <AppComponent {...pageProps}/>
}