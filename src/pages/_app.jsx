/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ThemeUIProvider } from 'theme-ui';
import theme from '../../theme';
import Navigation from '../components/navigation';

export default function App({ Component, pageProps }) {
    return (
        <ThemeUIProvider theme={theme}>
            <div>
                <Navigation />
                <Component {...pageProps} />
            </div>
        </ThemeUIProvider>
    );
}