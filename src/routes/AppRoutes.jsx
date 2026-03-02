import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ScrollToTop from '../components/ScrollToTop';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import AcademicsPage from '../pages/Academics';
import AdmissionsPage from '../pages/Admissions';
import NewsPage from '../pages/News';
import ContactPage from '../pages/Contact';
import HistoryTab from '../pages/About/Historytab';
import VisionTab from '../pages/About/Visiontab';
import CoreValuesTab from '../pages/About/Corevaluestab';
import StaffTab from '../pages/About/Stafftab';
import FacilitiesTab from '../pages/About/Facilitiestab';
import CurriculumPage from '../pages/Academics/Curriculumpage';
import JuniorSecondaryPage from '../pages/Academics/Juniorsecondarypage';
import SeniorSecondaryPage from '../pages/Academics/Seniorsecondarypage';
import SubjectListPage from '../pages/Academics/Subjectlistpage';
import AcademicCalendarPage from '../pages/Academics/Academiccalendarpage';
import HowToApplyPage from '../pages/Admissions/Howtoapplypage';
import RequirementsPage from '../pages/Admissions/Requirementspage';
import FAQsPage from '../pages/Admissions/Faqspage'
import NewsDetailPage from '../pages/News/Newsdetailpage';

const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainLayout />}>

                    <Route index element={<HomePage />} />

                    <Route path="about" element={<AboutPage />}>
                        <Route index element={<Navigate to="history" replace />} />
                        <Route path="history" element={<HistoryTab />} />
                        <Route path="vision" element={<VisionTab />} />
                        <Route path="values" element={<CoreValuesTab />} />
                        <Route path="staff" element={<StaffTab />} />
                        <Route path="facilities" element={<FacilitiesTab />} />
                    </Route>

                    <Route path="academics" element={<AcademicsPage />} />
                    <Route path="academics/curriculum" element={<CurriculumPage />} />
                    <Route path="academics/junior" element={<JuniorSecondaryPage />} />
                    <Route path="academics/senior" element={<SeniorSecondaryPage />} />
                    <Route path="academics/subjects" element={<SubjectListPage />} />
                    <Route path="academics/calendar" element={<AcademicCalendarPage />} />

                    <Route path="admissions" element={<AdmissionsPage />} />
                    <Route path="admissions/apply" element={<HowToApplyPage />} />
                    <Route path="admissions/requirements" element={<RequirementsPage />} />
                    <Route path="admissions/faqs" element={<FAQsPage />} />

                    <Route path="news" element={<NewsPage />} />
                    <Route path="news/:slug" element={<NewsDetailPage />} />

                    <Route path="contact" element={<ContactPage />} />

                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;