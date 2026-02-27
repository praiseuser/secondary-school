import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import AboutHero from '../About/Abouthero';

const keyframes = `
  @keyframes tab_fadeIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

// Map URL paths → tab ids for the hero tab bar
const pathToTab = {
  '/about/history':    'history',
  '/about/vision':     'vision',
  '/about/values':     'values',
  '/about/staff':      'staff',
  '/about/facilities': 'facilities',
};

const AboutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = pathToTab[location.pathname] || 'history';

  const handleTabChange = (tabId) => {
    navigate(`/about/${tabId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{keyframes}</style>

      <AboutHero activeTab={activeTab} onTabChange={handleTabChange} />

      <Box
        key={location.pathname}
        sx={{ animation: 'tab_fadeIn 0.5s ease both' }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default AboutPage;