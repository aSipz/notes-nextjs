/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

export default () => {
    return (
        <div sx={{ height: `calc(100vh - 60px)` }}>
            <div sx={{ variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%' }}>
                <h1 sx={{ fontSize: 8, my: 0 }}>This is a note taking app.</h1>
            </div>
        </div>
    );
} 