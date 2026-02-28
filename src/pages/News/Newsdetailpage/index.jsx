import { useEffect, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useParams, useNavigate } from 'react-router-dom';
import { newsData } from '..';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes nd_fadeUp { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:translateY(0); } }
`;

const NewsDetailPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

    const article = newsData.find((n) => n.slug === slug);
    const related = newsData.filter((n) => n.slug !== slug).slice(0, 3);

    if (!article) {
        return (
            <Box sx={{ py: 16, textAlign: 'center' }}>
                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize['2xl'], color: colors.primary.dark, mb: 2 }}>Article Not Found</Typography>
                <Box onClick={() => navigate('/news')} sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, cursor: 'pointer', color: colors.secondary.main }}>
                    <ArrowForwardIcon sx={{ transform: 'rotate(180deg)', fontSize: 16 }} />
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontWeight: typography.fontWeight.bold }}>Back to News</Typography>
                </Box>
            </Box>
        );
    }

    return (
        <>
            <style>{keyframes}</style>

            {/* Hero image */}
            <Box sx={{ position: 'relative', height: { xs: 280, md: 480 }, overflow: 'hidden' }}>
                <Box component="img" src={article.img} alt={article.title} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,20,50,0.3) 0%, rgba(10,20,50,0.85) 100%)' }} />
                <Container maxWidth="xl" sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', pb: { xs: 4, md: 6 }, zIndex: 1, width: '100%' }}>
                    {/* Back link */}
                    <Stack direction="row" alignItems="center" gap={1} onClick={() => navigate('/news')} sx={{ cursor: 'pointer', mb: 3 }}>
                        <ArrowForwardIcon sx={{ fontSize: 14, color: colors.secondary.main, transform: 'rotate(180deg)' }} />
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.secondary.main, fontWeight: typography.fontWeight.semiBold }}>Back to News</Typography>
                    </Stack>
                    <Box sx={{ bgcolor: article.tagColor, display: 'inline-block', px: 1.5, py: 0.5, borderRadius: '4px', mb: 2 }}>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.65rem', fontWeight: typography.fontWeight.bold, color: 'white', letterSpacing: 1, textTransform: 'uppercase' }}>{article.tag}</Typography>
                    </Box>
                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '3rem' }, fontWeight: typography.fontWeight.bold, color: 'white', lineHeight: 1.2, maxWidth: 800, animation: visible ? 'nd_fadeUp 0.7s ease both' : 'none' }}>
                        {article.title}
                    </Typography>
                </Container>
            </Box>

            {/* Article body */}
            <Box sx={{ bgcolor: colors.background.default, py: { xs: 6, md: 10 } }}>
                <Container maxWidth="xl">
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: { xs: 6, md: 8 }, alignItems: 'start' }}>

                        {/* Main content */}
                        <Box sx={{ animation: visible ? 'nd_fadeUp 0.7s ease 0.1s both' : 'none' }}>
                            <Stack direction="row" alignItems="center" gap={3} sx={{ mb: 4 }}>
                                <Stack direction="row" alignItems="center" gap={0.8}>
                                    <CalendarTodayIcon sx={{ fontSize: 14, color: colors.text.secondary }} />
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary }}>{article.date}</Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" gap={0.8}>
                                    <AccessTimeIcon sx={{ fontSize: 14, color: colors.text.secondary }} />
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary }}>{article.readTime}</Typography>
                                </Stack>
                            </Stack>

                            <Box sx={{ width: 48, height: 3, bgcolor: article.tagColor, mb: 3 }} />

                            {article.body.map((para, i) => (
                                <Typography key={i} sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: colors.text.primary, lineHeight: 1.95, mb: 2.5 }}>
                                    {para}
                                </Typography>
                            ))}

                            {/* Share / back */}
                            <Box sx={{ mt: 5, pt: 4, borderTop: `1px solid ${colors.divider}` }}>
                                <Stack direction="row" alignItems="center" gap={1} onClick={() => navigate('/news')} sx={{ cursor: 'pointer', display: 'inline-flex' }}>
                                    <ArrowForwardIcon sx={{ fontSize: 14, color: colors.primary.main, transform: 'rotate(180deg)' }} />
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semiBold, color: colors.primary.main }}>Back to All News</Typography>
                                </Stack>
                            </Box>
                        </Box>

                        {/* Sidebar: related articles */}
                        <Box sx={{ animation: visible ? 'nd_fadeUp 0.7s ease 0.2s both' : 'none' }}>
                            <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, mb: 2.5, pb: 2, borderBottom: `2px solid ${colors.secondary.main}` }}>
                                More Stories
                            </Typography>
                            <Stack gap={3}>
                                {related.map((item) => (
                                    <Box key={item.slug} onClick={() => navigate(`/news/${item.slug}`)}
                                        sx={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 1.5, cursor: 'pointer', '&:hover .rel-title': { color: colors.secondary.dark } }}>
                                        <Box component="img" src={item.img} alt={item.title} sx={{ width: '100%', height: 70, objectFit: 'cover', borderRadius: '8px' }} />
                                        <Box>
                                            <Box sx={{ bgcolor: item.tagColor, display: 'inline-block', px: 1, py: 0.2, borderRadius: '3px', mb: 0.5 }}>
                                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.6rem', fontWeight: typography.fontWeight.bold, color: 'white', letterSpacing: 0.8, textTransform: 'uppercase' }}>{item.tag}</Typography>
                                            </Box>
                                            <Typography className="rel-title" sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary, lineHeight: 1.4, transition: 'color 0.2s ease', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                {item.title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default NewsDetailPage;