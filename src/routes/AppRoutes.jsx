import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Pages
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import AcademicsPage from '../pages/Academics';
// import AdmissionsPage from '../pages/Admissions';
// import NewsPage       from '../pages/News';
// import ContactPage    from '../pages/Contact';


import HistoryTab from '../pages/About/Historytab';
import VisionTab from '../pages/About/Visiontab';
import StaffTab from '../pages/About/Stafftab';
import FacilitiesTab from '../pages/About/Facilitiestab';
import CurriculumPage from '../pages/Academics/CurriculumPage';
import JuniorSecondaryPage from '../pages/Academics/JuniorSecondaryPage';
import SeniorSecondaryPage from '../pages/Academics/SeniorSecondaryPage';
import SubjectListPage from '../pages/Academics/SubjectListPage';
import AcademicCalendarPage from '../pages/Academics/AcademicCalendarPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>

                    {/* Home */}
                    <Route index element={<HomePage />} />

                    {/* About — parent renders hero + tab bar, children render content */}
                    <Route path="about" element={<AboutPage />}>
                        <Route index element={<Navigate to="history" replace />} />
                        <Route path="history" element={<HistoryTab />} />
                        <Route path="vision" element={<VisionTab />} />
                        <Route path="staff" element={<StaffTab />} />
                        <Route path="facilities" element={<FacilitiesTab />} />
                    </Route>

                    {/* Academics — landing + individual sub-pages */}
                    <Route path="academics" element={<AcademicsPage />} />
                    <Route path="academics/curriculum" element={<CurriculumPage />} />
                    <Route path="academics/junior" element={<JuniorSecondaryPage />} />
                    <Route path="academics/senior" element={<SeniorSecondaryPage />} />
                    <Route path="academics/subjects" element={<SubjectListPage />} />
                    <Route path="academics/calendar" element={<AcademicCalendarPage />} />

                    {/* Uncomment as you build each page */}
                    {/* <Route path="admissions" element={<AdmissionsPage />} /> */}
                    {/* <Route path="news"       element={<NewsPage />} /> */}
                    {/* <Route path="contact"    element={<ContactPage />} /> */}

                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;