/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Link } from 'theme-ui';

export default () => (
    <header sx={{ height: '60px', width: '100vw', bg: 'primary', borderBottom: '1px solid', borderColor: 'primary' }}>
        <nav sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', variant: 'containers.page', height: '100%' }}>
            <Link href="/" sx={{ fontWeight: 'bold', fontSize: 4 }}>
                Note App
            </Link>

            <Link href="/notes" sx={{ fontSize: 3 }}>
                notes
            </Link>

            <a sx={{ color: 'text', fontSize: 3, cursor: 'pointer' }} href={process.env.HELP_APP_URL} >
                Help
            </a>

        </nav>
    </header>
)