import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import AcademicsPage from '../pages/Academics';
import AdmissionsPage from '../pages/Admissions';
import NewsPage from '../pages/News';
import ContactPage from '../pages/Contact';
import HistoryTab from '../pages/About/HistoryTab';
import VisionTab from '../pages/About/VisionTab';
import CoreValuesTab from '../pages/About/CoreValuesTab';
import StaffTab from '../pages/About/StaffTab';
import FacilitiesTab from '../pages/About/FacilitiesTab';
import CurriculumPage from '../pages/Academics/CurriculumPage';
import JuniorSecondaryPage from '../pages/Academics/JuniorSecondaryPage';
import SeniorSecondaryPage from '../pages/Academics/SeniorSecondaryPage';
import SubjectListPage from '../pages/Academics/SubjectListPage';
import AcademicCalendarPage from '../pages/Academics/AcademicCalendarPage';
import HowToApplyPage from '../pages/Admissions/HowToApplyPage';
import RequirementsPage from '../pages/Admissions/RequirementsPage';
import FAQsPage from '../pages/Admissions/FAQsPage';
import CampusLifePage from '../pages/CampusLife';
import StudentLifePage from '../pages/CampusLife/StudentLifePage';
import HealthSafetyPage from '../pages/CampusLife/HealthSafetyPage';
import BoardingPage from '../pages/CampusLife/BoardingPage';
import NewsDetailPage from '../pages/News/NewsDetailPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },

            {
                path: 'about',
                element: <AboutPage />,
                children: [
                    { index: true, element: <Navigate to="history" replace /> },
                    { path: 'history', element: <HistoryTab /> },
                    { path: 'vision', element: <VisionTab /> },
                    { path: 'values', element: <CoreValuesTab /> },
                    { path: 'staff', element: <StaffTab /> },
                    { path: 'facilities', element: <FacilitiesTab /> },
                ],
            },

            { path: 'academics', element: <AcademicsPage /> },
            { path: 'academics/curriculum', element: <CurriculumPage /> },
            { path: 'academics/junior', element: <JuniorSecondaryPage /> },
            { path: 'academics/senior', element: <SeniorSecondaryPage /> },
            { path: 'academics/subjects', element: <SubjectListPage /> },
            { path: 'academics/calendar', element: <AcademicCalendarPage /> },

            { path: 'admissions', element: <AdmissionsPage /> },
            { path: 'admissions/apply', element: <HowToApplyPage /> },
            { path: 'admissions/requirements', element: <RequirementsPage /> },
            { path: 'admissions/faqs', element: <FAQsPage /> },

            { path: 'campus-life', element: <CampusLifePage /> },
            { path: 'campus-life/student-life', element: <StudentLifePage /> },
            { path: 'campus-life/boarding', element: <BoardingPage /> },
            { path: 'campus-life/health', element: <HealthSafetyPage /> },

            { path: 'news', element: <NewsPage /> },
            { path: 'news/:slug', element: <NewsDetailPage /> },

            { path: 'contact', element: <ContactPage /> },
        ],
    },
]);

export default router;