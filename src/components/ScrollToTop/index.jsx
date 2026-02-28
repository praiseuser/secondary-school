import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop
 * Drop this inside your <Router> in AppRoutes.jsx.
 * Every time the URL changes it instantly scrolls the window to the top.
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);

    return null;  // renders nothing
};

export default ScrollToTop;