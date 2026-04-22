import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

const { pathname, search, hash } = window.location;
if (pathname.startsWith('//')) {
    const normalizedPathname = `/${pathname.replace(/^\/+/, '')}`;
    window.history.replaceState(
        {},
        document.title,
        `${normalizedPathname}${search}${hash}`
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>,
);
