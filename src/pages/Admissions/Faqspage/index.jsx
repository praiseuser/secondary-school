import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { colors, typography } from '../../../theme';
import PageHero from '../../../components/common/PageHero';

const keyframes = `
  @keyframes fq_fadeUp {
    from { opacity: 0; transform: translateY(36px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

const faqCategories = [
    {
        category: 'Application Process',
        color: colors.primary.main,
        faqs: [
            { q: 'When does the admissions process open?', a: 'Applications for the 2026/2027 academic session are now open. The deadline for submission is July 31, 2026. We strongly advise applying early as spaces are limited.' },
            { q: 'How do I get an application form?', a: 'You can download the application form from this website or collect a physical copy from our Admissions Office. The form is free of charge.' },
            { q: 'Can I submit my application online?', a: 'Currently applications must be submitted in person at our Admissions Office or via email to admissions@prestonschool.edu.ng. Online submission is coming soon.' },
            { q: 'How long does the admissions process take?', a: 'From submission to receiving your offer letter typically takes 3–4 weeks. This includes processing your application, scheduling the entrance assessment, and reviewing results.' },
        ],
    },
    {
        category: 'Entrance Assessment',
        color: colors.secondary.dark,
        faqs: [
            { q: 'What is tested in the entrance assessment?', a: 'All applicants sit papers in English Language, Mathematics and General Knowledge. SS1 applicants additionally sit a paper in their preferred arm subject (Sciences, Arts or Commercials).' },
            { q: 'When and where is the assessment held?', a: 'Assessments are held every Saturday at our main campus. Your exact date will be communicated via SMS and email after your application is processed.' },
            { q: 'What should my child bring on assessment day?', a: 'Candidates should bring their payment receipt, a valid ID or birth certificate, 2 passport photographs, and their own stationery (pencil, pen, eraser, ruler).' },
            { q: 'Is there a minimum score required?', a: 'Yes. Candidates must achieve a minimum score of 60% across all assessment papers to be considered for admission. Results are communicated within 5 working days.' },
        ],
    },
    {
        category: 'Fees & Payment',
        color: colors.primary.dark,
        faqs: [
            { q: 'How much is the application fee?', a: 'The application fee is ₦5,000 and is non-refundable. It can be paid at the school bursary or via bank transfer. Details are provided on the application form.' },
            { q: 'What is the acceptance fee after receiving an offer?', a: 'Successful candidates must pay an acceptance fee of ₦20,000 to secure their place. This is deducted from the first term\'s school fees.' },
            { q: 'Are payment plans available for school fees?', a: 'Yes, we offer flexible payment plans for school fees. Full details are provided in the school fees schedule sent with the offer letter. Please speak to our bursary for options.' },
            { q: 'Are there scholarships available?', a: 'Yes! Preston offers merit-based scholarships for exceptional candidates. Students who score above 90% in the entrance assessment are automatically considered. Contact us for more details.' },
        ],
    },
    {
        category: 'School Life',
        color: '#2E7D32',
        faqs: [
            { q: 'Does Preston offer boarding?', a: 'Yes. We have separate boys\' and girls\' boarding houses with 24/7 supervision, dedicated housemasters/mistresses and structured evening study time.' },
            { q: 'What is the school\'s uniform policy?', a: 'All students are required to wear the full Preston school uniform. Details of the uniform and where to purchase it are provided in the acceptance package.' },
            { q: 'What extracurricular activities are available?', a: 'We offer over 20 clubs and societies including Debate, Drama, Robotics, Football, Basketball, Athletics, Fine Arts, Music and more. Boarding students have additional evening activity programmes.' },
            { q: 'How does Preston handle student welfare and discipline?', a: 'We have a dedicated student welfare team including a full-time school counsellor. Our disciplinary process is restorative and firm. Details are in the school\'s Student Handbook.' },
        ],
    },
];

const FAQItem = ({ faq, color }) => {
    const [open, setOpen] = useState(false);
    return (
        <Box
            sx={{
                borderBottom: `1px solid ${colors.divider}`,
                transition: 'all 0.25s ease',
                '&:last-child': { borderBottom: 'none' },
                bgcolor: open ? `${color}05` : 'transparent',
            }}
        >
            <Stack
                direction="row" alignItems="center" justifyContent="space-between"
                gap={2} onClick={() => setOpen(!open)}
                sx={{ px: 3, py: 2.5, cursor: 'pointer', '&:hover': { bgcolor: `${color}08` } }}
            >
                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, fontWeight: open ? typography.fontWeight.semiBold : typography.fontWeight.medium, color: open ? color : colors.text.primary, lineHeight: 1.5, transition: 'color 0.25s ease' }}>
                    {faq.q}
                </Typography>
                <Box sx={{ width: 30, height: 30, borderRadius: '50%', bgcolor: open ? color : `${color}18`, border: `1px solid ${color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.25s ease' }}>
                    {open
                        ? <RemoveIcon sx={{ fontSize: 14, color: open ? 'white' : color }} />
                        : <AddIcon sx={{ fontSize: 14, color }} />
                    }
                </Box>
            </Stack>
            <Box sx={{ overflow: 'hidden', maxHeight: open ? '300px' : 0, transition: 'max-height 0.4s ease', px: 3, pb: open ? 2.5 : 0 }}>
                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.8 }}>
                    {faq.a}
                </Typography>
            </Box>
        </Box>
    );
};

const FAQsPage = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{keyframes}</style>
            <Box ref={ref}>

                <PageHero
                    label="FAQs"
                    title="Frequently Asked Questions"
                    description="Everything parents and students ask us most. If your question isn't here, contact us directly."
                    backLabel="Back to Admissions"
                    backPath="/admissions"
                    visible={visible}
                />

                {/* FAQ Categories */}
                <Box sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
                    <Container maxWidth="xl">
                        <Stack gap={5}>
                            {faqCategories.map((cat, ci) => (
                                <Box key={cat.category} sx={{ animation: visible ? `fq_fadeUp 0.7s ease ${ci * 0.12 + 0.2}s both` : 'none' }}>
                                    {/* Category header */}
                                    <Stack direction="row" alignItems="center" gap={2} sx={{ mb: 3 }}>
                                        <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                                        <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>{cat.category}</Typography>
                                        <Box sx={{ flex: 1, height: 1, bgcolor: cat.color, opacity: 0.2 }} />
                                        <Box sx={{ bgcolor: cat.color, px: 1.5, py: 0.4, borderRadius: '4px' }}>
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.62rem', fontWeight: typography.fontWeight.bold, color: 'white', letterSpacing: 1 }}>{cat.faqs.length} questions</Typography>
                                        </Box>
                                    </Stack>

                                    {/* Accordion */}
                                    <Box sx={{ bgcolor: colors.background.paper, borderRadius: '14px', overflow: 'hidden', border: `1px solid ${colors.divider}`, borderTop: `4px solid ${cat.color}` }}>
                                        {cat.faqs.map((faq) => (
                                            <FAQItem key={faq.q} faq={faq} color={cat.color} />
                                        ))}
                                    </Box>
                                </Box>
                            ))}
                        </Stack>

                        {/* Still have questions CTA */}
                        <Box sx={{ mt: { xs: 8, md: 10 }, bgcolor: colors.primary.dark, borderRadius: '20px', p: { xs: 4, md: 6 }, textAlign: 'center', position: 'relative', overflow: 'hidden', animation: visible ? 'fq_fadeUp 0.7s ease 0.6s both' : 'none', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${colors.primary.light}10 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' } }}>
                            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, transparent)` }} />
                            <Box sx={{ position: 'relative', zIndex: 1 }}>
                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.text.light, mb: 1.5 }}>
                                    Still Have Questions?
                                </Typography>
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: 480, mx: 'auto', mb: 3.5 }}>
                                    Our Admissions Team is available Monday – Friday, 8am – 4pm to answer any questions you have.
                                </Typography>
                                <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} justifyContent="center">
                                    <Box onClick={() => navigate('/contact')}
                                        sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, bgcolor: colors.secondary.main, px: 4, py: 1.8, borderRadius: '8px', cursor: 'pointer', transition: 'all 0.25s ease', '&:hover': { bgcolor: colors.secondary.light, transform: 'translateY(-3px)', boxShadow: `0 12px 32px rgba(212,160,23,0.4)` } }}>
                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>Contact Admissions Office</Typography>
                                        <ArrowForwardIcon sx={{ fontSize: 16, color: colors.primary.dark }} />
                                    </Box>
                                    <Box onClick={() => navigate('/admissions/apply')}
                                        sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, border: `1px solid ${colors.secondary.main}55`, px: 4, py: 1.8, borderRadius: '8px', cursor: 'pointer', transition: 'all 0.25s ease', '&:hover': { borderColor: colors.secondary.main, bgcolor: `${colors.secondary.main}12`, transform: 'translateY(-3px)' } }}>
                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.bold, color: colors.secondary.main }}>Start Your Application</Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default FAQsPage;