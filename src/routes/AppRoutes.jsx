import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ScrollToTop from '../components/ScrollToTop';

// Pages
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import AcademicsPage from '../pages/Academics';
import AdmissionsPage from '../pages/Admissions';
import NewsPage from '../pages/News';
import ContactPage from '../pages/Contact';

// About sub-tabs
import HistoryTab from '../pages/About/HistoryTab';
import VisionTab from '../pages/About/VisionTab';
import CoreValuesTab from '../pages/About/CoreValuesTab';
import StaffTab from '../pages/About/StaffTab';
import FacilitiesTab from '../pages/About/FacilitiesTab';

// Academics sub-pages
import CurriculumPage from '../pages/Academics/CurriculumPage';
import JuniorSecondaryPage from '../pages/Academics/JuniorSecondaryPage';
import SeniorSecondaryPage from '../pages/Academics/SeniorSecondaryPage';
import SubjectListPage from '../pages/Academics/SubjectListPage';
import AcademicCalendarPage from '../pages/Academics/AcademicCalendarPage';

// Admissions sub-pages
import HowToApplyPage from '../pages/Admissions/HowToApplyPage';
import RequirementsPage from '../pages/Admissions/RequirementsPage';
import FAQsPage from '../pages/Admissions/FAQsPage';

// News sub-pages
import NewsDetailPage from '../pages/News/NewsDetailPage';

const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainLayout />}>

                    {/* Home */}
                    <Route index element={<HomePage />} />

                    {/* About — parent keeps hero + tab bar, children render content */}
                    <Route path="about" element={<AboutPage />}>
                        <Route index element={<Navigate to="history" replace />} />
                        <Route path="history" element={<HistoryTab />} />
                        <Route path="vision" element={<VisionTab />} />
                        <Route path="values" element={<CoreValuesTab />} />
                        <Route path="staff" element={<StaffTab />} />
                        <Route path="facilities" element={<FacilitiesTab />} />
                    </Route>

                    {/* Academics — landing + sub-pages */}
                    <Route path="academics" element={<AcademicsPage />} />
                    <Route path="academics/curriculum" element={<CurriculumPage />} />
                    <Route path="academics/junior" element={<JuniorSecondaryPage />} />
                    <Route path="academics/senior" element={<SeniorSecondaryPage />} />
                    <Route path="academics/subjects" element={<SubjectListPage />} />
                    <Route path="academics/calendar" element={<AcademicCalendarPage />} />

                    {/* Admissions — landing + sub-pages */}
                    <Route path="admissions" element={<AdmissionsPage />} />
                    <Route path="admissions/apply" element={<HowToApplyPage />} />
                    <Route path="admissions/requirements" element={<RequirementsPage />} />
                    <Route path="admissions/faqs" element={<FAQsPage />} />

                    {/* News — listing + individual article */}
                    <Route path="news" element={<NewsPage />} />
                    <Route path="news/:slug" element={<NewsDetailPage />} />

                    {/* Contact */}
                    <Route path="contact" element={<ContactPage />} />

                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;