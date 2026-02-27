import HeroSection from '../Home/Herosection';
import StatsBar from '../Home/Statsbar';
import WelcomeSection from '../Home/Welcomesection';
import QuickLinks from '../Home/Quicklinks';
import NewsPreview from '../Home/Newspreview';
import CTABanner from '../Home/Ctabanner';

const HomePage = () => {
    return (
        <>
            <HeroSection />

            <StatsBar />

            <WelcomeSection />

            <QuickLinks />

            <NewsPreview />

            <CTABanner />
        </>
    );
};

export default HomePage;