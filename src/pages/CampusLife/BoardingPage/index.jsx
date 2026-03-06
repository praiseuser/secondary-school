import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WifiIcon from '@mui/icons-material/Wifi';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SecurityIcon from '@mui/icons-material/Security';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import SportsIcon from '@mui/icons-material/Sports';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BedIcon from '@mui/icons-material/Bed';
import GroupsIcon from '@mui/icons-material/Groups';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes bd_fadeUp   { from { opacity:0; transform:translateY(36px); } to { opacity:1; transform:translateY(0); } }
  @keyframes bd_fadeLeft { from { opacity:0; transform:translateX(-28px); } to { opacity:1; transform:translateX(0); } }
  @keyframes bd_shimmer  { 0% { background-position:-400px 0; } 100% { background-position:400px 0; } }
`;

const houses = [
    {
        name: 'Eagle House',
        color: '#C62828',
        capacity: '120 students',
        level: 'JSS 1 – JSS 3',
        desc: 'Our junior boys boarding house, designed to help new boarders settle in with structured routines, mentorship and a warm community feel.',
        features: ['House Master & resident tutors', 'Supervised prep sessions nightly', 'Weekly welfare check-ins', 'Peer mentoring programme'],
    },
    {
        name: 'Phoenix House',
        color: colors.primary.main,
        capacity: '140 students',
        level: 'SSS 1 – SSS 3',
        desc: 'Our senior boys house offers greater independence balanced with academic discipline, preparing students for university life.',
        features: ['Senior house prefect system', 'Extended library access', 'Career guidance sessions', 'Leadership development programme'],
    },
    {
        name: 'Sunflower House',
        color: '#6A1B9A',
        capacity: '130 students',
        level: 'JSS 1 – SSS 3',
        desc: 'Our girls boarding house — a nurturing, secure space where young women grow academically, socially and emotionally.',
        features: ['Female house mistress & matron', 'Safe and secure separate wing', 'Mentorship by senior students', 'Weekly cultural & social activities'],
    },
    {
        name: 'Diamond House',
        color: '#2E7D32',
        capacity: '110 students',
        level: 'SSS 1 – SSS 3',
        desc: 'Our premium senior girls house for students who have shown exceptional character and academic commitment.',
        features: ['Private study cubicles', 'Dedicated female counsellor', 'Priority clinic access', 'Inter-house competition leadership'],
    },
];

const facilities = [
    { icon: BedIcon, color: colors.primary.main, title: 'Furnished Dormitories', desc: 'Clean, well-ventilated rooms with sturdy beds, personal lockers and reading lamps for every student.' },
    { icon: RestaurantIcon, color: colors.secondary.dark, title: 'Dining Hall', desc: 'Three balanced meals daily plus a light evening snack, prepared by qualified catering staff on-site.' },
    { icon: WifiIcon, color: '#2E7D32', title: 'Study & Wi-Fi Zones', desc: 'Dedicated quiet study rooms with supervised Wi-Fi access during prep hours for research and learning.' },
    { icon: LocalLaundryServiceIcon, color: '#C62828', title: 'Laundry Services', desc: 'Twice-weekly laundry collection and return, keeping students\' clothing clean and well maintained.' },
    { icon: SportsIcon, color: '#6A1B9A', title: 'Evening Recreation', desc: 'Structured recreation periods with access to sports courts, common rooms and board games every evening.' },
    { icon: MedicalServicesIcon, color: colors.primary.dark, title: 'On-Call Medical Care', desc: 'School nurse available around the clock within the boarding wing for any health concerns overnight.' },
    { icon: SecurityIcon, color: colors.secondary.dark, title: '24/7 Security', desc: 'Dedicated night security personnel, CCTV monitoring and a single-entry controlled access gate.' },
    { icon: MenuBookIcon, color: colors.primary.main, title: 'Evening Prep', desc: 'Compulsory two-hour supervised study sessions every evening, Monday to Friday, with subject teachers on duty.' },
];

const schedule = [
    { time: '5:30 AM', activity: 'Wake-up & Personal Hygiene' },
    { time: '6:15 AM', activity: 'Morning Devotion / Assembly' },
    { time: '7:00 AM', activity: 'Breakfast' },
    { time: '7:45 AM', activity: 'Classes Begin' },
    { time: '1:00 PM', activity: 'Lunch Break' },
    { time: '2:00 PM', activity: 'Afternoon Classes' },
    { time: '4:30 PM', activity: 'Sports & Recreation' },
    { time: '6:00 PM', activity: 'Dinner' },
    { time: '7:00 PM', activity: 'Evening Prep (Supervised Study)' },
    { time: '9:00 PM', activity: 'Free Time / Personal Reading' },
    { time: '10:00 PM', activity: 'Lights Out' },
];

const faqs = [
    { q: 'Can parents visit their children in boarding?', a: 'Yes. Visiting day is held on the last Saturday of every month from 10am to 4pm. Parents are required to sign in at the gate and comply with school visiting guidelines.' },
    { q: 'What items are students allowed to bring?', a: 'Students may bring personal clothing, toiletries, school materials and bedding. Electronics such as phones and tablets are kept by house staff and returned during designated periods.' },
    { q: 'How is homesickness handled?', a: 'Our house staff and school counsellor are trained to support new boarders through the adjustment period. A peer buddy system pairs new students with experienced boarders.' },
    { q: 'What happens during mid-term breaks?', a: 'Students are expected to return home during mid-term breaks unless special arrangements have been approved by the boarding master and school management in advance.' },
];

const FaqItem = ({ faq, i, visible }) => {
    const [open, setOpen] = useState(false);
    return (
        <Box sx={{ bgcolor: colors.background.paper, borderRadius: '12px', border: `1px solid ${open ? colors.secondary.dark + '66' : colors.divider}`, overflow: 'hidden', transition: 'all 0.25s ease', animation: visible ? `bd_fadeUp 0.6s ease ${i * 0.1 + 0.3}s both` : 'none' }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2} onClick={() => setOpen(!open)} sx={{ px: 3, py: 2.5, cursor: 'pointer', '&:hover': { bgcolor: `${colors.primary.main}06` } }}>
                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, fontWeight: open ? typography.fontWeight.semiBold : typography.fontWeight.medium, color: open ? colors.primary.main : colors.text.primary, lineHeight: 1.5 }}>{faq.q}</Typography>
                <Box sx={{ width: 28, height: 28, borderRadius: '50%', bgcolor: open ? colors.primary.main : `${colors.primary.main}18`, border: `1px solid ${colors.primary.main}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.25s ease' }}>
                    {open ? <RemoveIcon sx={{ fontSize: 14, color: 'white' }} /> : <AddIcon sx={{ fontSize: 14, color: colors.primary.main }} />}
                </Box>
            </Stack>
            <Box sx={{ overflow: 'hidden', maxHeight: open ? '300px' : 0, transition: 'max-height 0.4s ease', px: 3, pb: open ? 2.5 : 0 }}>
                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.8 }}>{faq.a}</Typography>
            </Box>
        </Box>
    );
};

const BoardingPage = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.05 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{keyframes}</style>
            <Box ref={ref}>

                {/* Hero */}
                <Box sx={{ bgcolor: colors.primary.dark, py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${colors.primary.light}12 1.5px, transparent 1.5px)`, backgroundSize: '28px 28px' } }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, transparent)` }} />
                    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>

                        {/* Back link */}
                        <Stack direction="row" alignItems="center" gap={1} component={Link} to="/campus-life" sx={{ mb: 3, width: 'fit-content', textDecoration: 'none' }}>
                            <ArrowForwardIcon sx={{ fontSize: 14, color: colors.secondary.main, transform: 'rotate(180deg)' }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.secondary.main, fontWeight: typography.fontWeight.semiBold, letterSpacing: 1 }}>Back to Campus Life</Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2, animation: visible ? 'bd_fadeUp 0.6s ease both' : 'none' }}>
                            <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Boarding</Typography>
                        </Stack>

                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: '2.2rem', md: '3.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.text.light, lineHeight: 1.15, mb: 1, animation: visible ? 'bd_fadeUp 0.6s ease 0.1s both' : 'none' }}>
                            A Home Away From Home
                        </Typography>
                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize.xl, md: '1.8rem' }, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, mb: 2, animation: visible ? 'bd_fadeUp 0.6s ease 0.15s both' : 'none' }}>
                            Safe. Structured. Supportive.
                        </Typography>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, maxWidth: 620, animation: visible ? 'bd_fadeUp 0.6s ease 0.25s both' : 'none' }}>
                            Preston's boarding programme provides over 500 students with a structured, secure and nurturing home environment that supports academic excellence and personal growth.
                        </Typography>

                        {/* Quick stats */}
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4,1fr)' }, gap: 2, mt: 5, animation: visible ? 'bd_fadeUp 0.6s ease 0.3s both' : 'none' }}>
                            {[
                                { icon: GroupsIcon, value: '500+', label: 'Boarders Enrolled' },
                                { icon: HotelIcon, value: '4', label: 'Boarding Houses' },
                                { icon: SecurityIcon, value: '24/7', label: 'Security Coverage' },
                                { icon: RestaurantIcon, value: '3', label: 'Meals Daily' },
                            ].map((s) => {
                                const Icon = s.icon;
                                return (
                                    <Stack key={s.label} direction="row" alignItems="center" gap={1.5} sx={{ bgcolor: 'rgba(255,255,255,0.06)', border: `1px solid rgba(255,255,255,0.1)`, borderRadius: '12px', px: 2.5, py: 2 }}>
                                        <Icon sx={{ fontSize: 22, color: colors.secondary.main, flexShrink: 0 }} />
                                        <Box>
                                            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.xl, fontWeight: 900, color: colors.secondary.main, lineHeight: 1 }}>{s.value}</Typography>
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.4)', mt: 0.3 }}>{s.label}</Typography>
                                        </Box>
                                    </Stack>
                                );
                            })}
                        </Box>
                    </Container>
                </Box>

                <Box sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
                    <Container maxWidth="xl">

                        {/* Boarding Houses */}
                        <Box sx={{ textAlign: 'center', mb: 6, animation: visible ? 'bd_fadeUp 0.6s ease 0.1s both' : 'none' }}>
                            <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                                <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: '1 1 0', maxWidth: 80 }} />
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Our Houses</Typography>
                                <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: '1 1 0', maxWidth: 80 }} />
                            </Stack>
                            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>Four Boarding Houses</Typography>
                        </Box>

                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mb: { xs: 8, md: 12 } }}>
                            {houses.map((house, i) => (
                                <Box key={house.name} sx={{ bgcolor: colors.background.paper, borderRadius: '20px', overflow: 'hidden', border: `1px solid ${colors.divider}`, animation: visible ? `bd_fadeUp 0.7s ease ${i * 0.1 + 0.2}s both` : 'none', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-6px)', boxShadow: `0 24px 60px rgba(0,0,0,0.1)`, borderColor: house.color + '44' } }}>
                                    <Box sx={{ height: 4, bgcolor: house.color }} />
                                    <Box sx={{ p: { xs: 3, md: 3.5 } }}>
                                        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                                            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>{house.name}</Typography>
                                            <Box sx={{ bgcolor: house.color + '15', border: `1px solid ${house.color}33`, px: 1.5, py: 0.4, borderRadius: '6px' }}>
                                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: house.color }}>{house.level}</Typography>
                                            </Box>
                                        </Stack>
                                        <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 2 }}>
                                            <GroupsIcon sx={{ fontSize: 14, color: house.color }} />
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.text.secondary }}>{house.capacity}</Typography>
                                        </Stack>
                                        <Box sx={{ width: 32, height: 2, bgcolor: house.color, mb: 2 }} />
                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.8, mb: 2.5 }}>{house.desc}</Typography>
                                        <Stack gap={1}>
                                            {house.features.map((f) => (
                                                <Stack key={f} direction="row" alignItems="flex-start" gap={1}>
                                                    <CheckCircleIcon sx={{ fontSize: 14, color: house.color, flexShrink: 0, mt: 0.2 }} />
                                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.text.primary, lineHeight: 1.5 }}>{f}</Typography>
                                                </Stack>
                                            ))}
                                        </Stack>
                                    </Box>
                                </Box>
                            ))}
                        </Box>

                        {/* Facilities */}
                        <Box sx={{ textAlign: 'center', mb: 6, animation: visible ? 'bd_fadeUp 0.6s ease 0.2s both' : 'none' }}>
                            <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                                <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: '1 1 0', maxWidth: 80 }} />
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Facilities</Typography>
                                <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: '1 1 0', maxWidth: 80 }} />
                            </Stack>
                            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>Everything a Boarder Needs</Typography>
                        </Box>

                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 2.5, mb: { xs: 8, md: 12 } }}>
                            {facilities.map((f, i) => {
                                const Icon = f.icon;
                                return (
                                    <Box key={f.title} sx={{ p: 3, bgcolor: colors.background.paper, borderRadius: '16px', border: `1px solid ${colors.divider}`, animation: visible ? `bd_fadeUp 0.6s ease ${i * 0.07 + 0.2}s both` : 'none', transition: 'all 0.3s ease', '&:hover': { borderColor: f.color + '44', boxShadow: `0 12px 32px rgba(0,0,0,0.08)`, transform: 'translateY(-4px)' } }}>
                                        <Box sx={{ width: 46, height: 46, borderRadius: '12px', bgcolor: f.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                                            <Icon sx={{ fontSize: 22, color: f.color }} />
                                        </Box>
                                        <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, mb: 1 }}>{f.title}</Typography>
                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.text.secondary, lineHeight: 1.7 }}>{f.desc}</Typography>
                                    </Box>
                                );
                            })}
                        </Box>

                        {/* Daily schedule + FAQs side by side */}
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 8 }, mb: { xs: 8, md: 12 } }}>

                            {/* Schedule */}
                            <Box sx={{ animation: visible ? 'bd_fadeLeft 0.7s ease 0.2s both' : 'none' }}>
                                <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2 }}>
                                    <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Routine</Typography>
                                </Stack>
                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, mb: 4 }}>A Typical Boarding Day</Typography>
                                <Stack gap={0}>
                                    {schedule.map((item, i) => (
                                        <Stack key={item.time} direction="row" alignItems="stretch" gap={0}>
                                            {/* Time column */}
                                            <Box sx={{ width: 90, flexShrink: 0, pt: 1.5 }}>
                                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main }}>{item.time}</Typography>
                                            </Box>
                                            {/* Timeline line + dot */}
                                            <Stack alignItems="center" sx={{ width: 28, flexShrink: 0 }}>
                                                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: i === 0 ? colors.secondary.main : colors.primary.main + '66', border: `2px solid ${i === 0 ? colors.secondary.main : colors.primary.main + '44'}`, mt: 1.5, flexShrink: 0, zIndex: 1 }} />
                                                {i < schedule.length - 1 && <Box sx={{ width: 1, flex: 1, bgcolor: colors.primary.main + '22', mt: 0.3 }} />}
                                            </Stack>
                                            {/* Activity */}
                                            <Box sx={{ flex: 1, pb: 2, pt: 1 }}>
                                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.primary, lineHeight: 1.5 }}>{item.activity}</Typography>
                                            </Box>
                                        </Stack>
                                    ))}
                                </Stack>
                            </Box>

                            {/* FAQs */}
                            <Box>
                                <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2 }}>
                                    <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Common Questions</Typography>
                                </Stack>
                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, mb: 4 }}>Boarding FAQs</Typography>
                                <Stack gap={2}>
                                    {faqs.map((faq, i) => <FaqItem key={faq.q} faq={faq} i={i} visible={visible} />)}
                                </Stack>
                            </Box>

                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default BoardingPage;