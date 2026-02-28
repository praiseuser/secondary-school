import { useEffect, useState, useRef } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import { colors, typography } from '../../theme';

const keyframes = `
  @keyframes ct_fadeUp { from { opacity:0; transform:translateY(36px); } to { opacity:1; transform:translateY(0); } }
  @keyframes ct_fadeLeft { from { opacity:0; transform:translateX(-40px); } to { opacity:1; transform:translateX(0); } }
  @keyframes ct_fadeRight { from { opacity:0; transform:translateX(40px); } to { opacity:1; transform:translateX(0); } }
  @keyframes ct_shimmer { 0% { background-position:-400px 0; } 100% { background-position:400px 0; } }
  @keyframes ct_pulse { 0%,100% { box-shadow:0 0 0 0 rgba(212,160,23,0.4); } 50% { box-shadow:0 0 0 10px rgba(212,160,23,0); } }
`;

const contactInfo = [
    { icon: LocationOnIcon, label: 'Our Address', value: '123 Preston Avenue, Victoria Island, Lagos, Nigeria', color: colors.primary.main },
    { icon: PhoneIcon, label: 'Phone', value: '+234 800 000 0000 / +234 801 000 0000', color: colors.secondary.dark },
    { icon: EmailIcon, label: 'Email', value: 'info@prestonschool.edu.ng', color: colors.primary.dark },
    { icon: AccessTimeIcon, label: 'Office Hours', value: 'Monday – Friday: 7:30am – 4:30pm', color: '#2E7D32' },
];

const ContactPage = () => {
    const [visible, setVisible] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        setTimeout(() => setVisible(true), 100);
    }, []);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = () => {
        if (!form.name || !form.email || !form.message) return;
        setSubmitted(true);
    };

    const inputStyle = {
        fontFamily: typography.fontFamily.body,
        fontSize: typography.fontSize.sm,
        color: colors.text.primary,
        bgcolor: colors.background.default,
        border: `1px solid ${colors.divider}`,
        borderRadius: '8px',
        px: 2, py: 1.5,
        width: '100%',
        outline: 'none',
        transition: 'border-color 0.25s ease',
        '&:focus': { borderColor: colors.primary.main },
        fontFamilyOverride: 'inherit',
    };

    return (
        <>
            <style>{keyframes}</style>

            {/* Hero */}
            <Box sx={{ bgcolor: colors.primary.dark, py: { xs: 10, md: 13 }, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${colors.primary.light}14 1.5px, transparent 1.5px)`, backgroundSize: '28px 28px' } }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, ${colors.secondary.light}, ${colors.secondary.main}, transparent)`, backgroundSize: '400px 100%', animation: 'ct_shimmer 3s linear infinite' }} />
                <Typography sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: typography.fontFamily.accent, fontSize: { xs: '6rem', md: '13rem' }, fontWeight: typography.fontWeight.black, color: colors.primary.light, opacity: 0.04, whiteSpace: 'nowrap', userSelect: 'none', lineHeight: 1 }}>CONTACT</Typography>

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 3, animation: visible ? 'ct_fadeUp 0.6s ease 0.1s both' : 'none' }}>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.35)' }}>Home</Typography>
                        <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: colors.secondary.main }} />
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.secondary.main, fontWeight: typography.fontWeight.semiBold }}>Contact Us</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2, animation: visible ? 'ct_fadeUp 0.6s ease 0.2s both' : 'none' }}>
                        <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Get In Touch</Typography>
                    </Stack>
                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['3xl'], md: '3.6rem' }, fontWeight: typography.fontWeight.bold, color: colors.text.light, lineHeight: 1.15, mb: 1.5, animation: visible ? 'ct_fadeUp 0.6s ease 0.3s both' : 'none' }}>
                        We'd Love to<br />Hear From You.
                    </Typography>
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: 'rgba(255,255,255,0.5)', lineHeight: 1.9, maxWidth: 500, animation: visible ? 'ct_fadeUp 0.6s ease 0.4s both' : 'none' }}>
                        Whether you have a question about admissions, want to arrange a school visit or just want to say hello — our team is ready to help.
                    </Typography>
                </Container>
            </Box>

            {/* Contact info + form */}
            <Box ref={ref} sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
                <Container maxWidth="xl">
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1.6fr' }, gap: { xs: 6, md: 8 }, alignItems: 'start' }}>

                        {/* Left — info */}
                        <Box sx={{ animation: visible ? 'ct_fadeLeft 0.8s ease 0.2s both' : 'none' }}>
                            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize.xl, md: typography.fontSize['2xl'] }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, mb: 1 }}>
                                Our Contact Details
                            </Typography>
                            <Box sx={{ width: 36, height: 3, bgcolor: colors.secondary.main, mb: 3 }} />

                            <Stack gap={3} sx={{ mb: 5 }}>
                                {contactInfo.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <Stack key={item.label} direction="row" alignItems="flex-start" gap={2}>
                                            <Box sx={{ width: 44, height: 44, borderRadius: '12px', bgcolor: item.color + '18', border: `1px solid ${item.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <Icon sx={{ fontSize: 20, color: item.color }} />
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: item.color, letterSpacing: 1, textTransform: 'uppercase', mb: 0.3 }}>{item.label}</Typography>
                                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.primary, lineHeight: 1.6 }}>{item.value}</Typography>
                                            </Box>
                                        </Stack>
                                    );
                                })}
                            </Stack>

                            {/* Map placeholder */}
                            <Box sx={{ borderRadius: '16px', overflow: 'hidden', height: 220, bgcolor: colors.primary.dark, position: 'relative', border: `1px solid ${colors.divider}` }}>
                                <iframe
                                    title="Preston School Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7286483398!2d3.4212!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDEuMiJOIDPCsDI1JzE2LjMiRQ!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, display: 'block' }}
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </Box>
                        </Box>

                        {/* Right — form */}
                        <Box
                            sx={{
                                bgcolor: colors.background.paper,
                                borderRadius: '20px',
                                p: { xs: 3, md: 5 },
                                border: `1px solid ${colors.divider}`,
                                boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
                                animation: visible ? 'ct_fadeRight 0.8s ease 0.3s both' : 'none',
                                position: 'relative',
                                overflow: 'hidden',
                                '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: colors.secondary.main },
                            }}
                        >
                            {submitted ? (
                                <Box sx={{ textAlign: 'center', py: 6 }}>
                                    <Box sx={{ width: 72, height: 72, borderRadius: '50%', bgcolor: '#2E7D32' + '22', border: `2px solid #2E7D32`, display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
                                        <SendIcon sx={{ fontSize: 30, color: '#2E7D32' }} />
                                    </Box>
                                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.bold, color: colors.primary.dark, mb: 1.5 }}>Message Sent!</Typography>
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: colors.text.secondary, lineHeight: 1.8 }}>
                                        Thank you for reaching out. A member of our team will get back to you within 1–2 business days.
                                    </Typography>
                                    <Box onClick={() => setSubmitted(false)} sx={{ mt: 3, display: 'inline-block', px: 3, py: 1.5, bgcolor: colors.secondary.main, borderRadius: '8px', cursor: 'pointer' }}>
                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>Send Another Message</Typography>
                                    </Box>
                                </Box>
                            ) : (
                                <>
                                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.bold, color: colors.primary.dark, mb: 0.5 }}>Send Us a Message</Typography>
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, mb: 3.5 }}>We typically respond within 1–2 business days.</Typography>

                                    <Stack gap={2.5}>
                                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                                            {[
                                                { name: 'name', label: 'Full Name *', type: 'text', placeholder: 'e.g. Amina Okafor' },
                                                { name: 'email', label: 'Email Address *', type: 'email', placeholder: 'you@example.com' },
                                                { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+234 800 000 0000' },
                                                { name: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. Admissions Enquiry' },
                                            ].map((field) => (
                                                <Box key={field.name}>
                                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary, mb: 0.8, letterSpacing: 0.5 }}>{field.label}</Typography>
                                                    <Box
                                                        component="input"
                                                        type={field.type}
                                                        name={field.name}
                                                        value={form[field.name]}
                                                        onChange={handleChange}
                                                        placeholder={field.placeholder}
                                                        sx={{
                                                            ...inputStyle,
                                                            display: 'block',
                                                            fontFamily: 'inherit',
                                                            '&:focus': { borderColor: colors.primary.main, outline: 'none', boxShadow: `0 0 0 3px ${colors.primary.main}18` },
                                                        }}
                                                    />
                                                </Box>
                                            ))}
                                        </Box>

                                        <Box>
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary, mb: 0.8, letterSpacing: 0.5 }}>Message *</Typography>
                                            <Box
                                                component="textarea"
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                placeholder="Tell us how we can help you..."
                                                rows={5}
                                                sx={{
                                                    ...inputStyle,
                                                    display: 'block',
                                                    resize: 'vertical',
                                                    fontFamily: 'inherit',
                                                    '&:focus': { borderColor: colors.primary.main, outline: 'none', boxShadow: `0 0 0 3px ${colors.primary.main}18` },
                                                }}
                                            />
                                        </Box>

                                        <Box
                                            onClick={handleSubmit}
                                            sx={{
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5,
                                                bgcolor: colors.secondary.main, borderRadius: '10px', py: 2,
                                                cursor: 'pointer', transition: 'all 0.25s ease',
                                                animation: 'ct_pulse 2.5s ease infinite',
                                                '&:hover': { bgcolor: colors.secondary.light, transform: 'translateY(-3px)', boxShadow: `0 12px 32px rgba(212,160,23,0.4)` },
                                            }}
                                        >
                                            <SendIcon sx={{ fontSize: 18, color: colors.primary.dark }} />
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>Send Message</Typography>
                                        </Box>
                                    </Stack>
                                </>
                            )}
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default ContactPage;