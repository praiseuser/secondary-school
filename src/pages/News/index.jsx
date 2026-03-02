import { useEffect, useState, useRef } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useNavigate } from 'react-router-dom';
import { colors, typography } from '../../theme';

const keyframes = `
  @keyframes nw_heroIn { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:translateY(0); } }
  @keyframes nw_cardIn { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
  @keyframes nw_shimmer { 0% { background-position:-400px 0; } 100% { background-position:400px 0; } }
`;

export const newsData = [
    {
        slug: 'preston-wins-national-science-competition',
        tag: 'Achievement',
        tagColor: colors.primary.main,
        date: 'February 14, 2026',
        readTime: '3 min read',
        title: 'Preston Students Win National Science & Innovation Competition',
        excerpt: 'Our SS2 Science students took home the gold medal at the 2026 National Schools Science & Innovation Fair held in Abuja, defeating over 200 schools from across Nigeria.',
        img: '/news1.jpg',
        featured: true,
        body: [
            'Preston International School is proud to announce that our SS2 Science team won first place at the 2026 National Schools Science & Innovation Fair, held at the International Conference Centre in Abuja on February 10–12, 2026.',
            'The team of five students — Chidi Okonkwo, Amina Bello, Femi Adewale, Ngozi Eze and David Ibrahim — presented a groundbreaking project on solar-powered water purification systems designed specifically for rural Nigerian communities.',
            '"We are incredibly proud of these young scientists," said Mr. Chukwuma Eze, Head of Sciences at Preston. "They spent six months on this project, often staying after school and on weekends. Their dedication is an inspiration to us all."',
            'The students will now represent Nigeria at the West African Schools Science Competition in Ghana in April 2026. The school community has rallied behind them with a fundraising drive to support their travel and preparation.',
            'This win adds to a growing list of national academic achievements for Preston, which has now won the national science fair three times in the last five years.',
        ],
    },
    {
        slug: 'inter-house-sports-day-2026',
        tag: 'Sports',
        tagColor: '#2E7D32',
        date: 'January 28, 2026',
        readTime: '4 min read',
        title: 'Electrifying Inter-House Sports Day 2026 — Red House Triumphs',
        excerpt: 'Thousands of students, parents and staff gathered at our sports complex for the annual Inter-House Sports Day. Red House emerged champions after a thrilling day of athletics, football and relay races.',
        img: '/news2.jpg',
        featured: false,
        body: [
            'The Preston International School 2026 Inter-House Sports Day was one for the record books. Held on January 25 at our main sports complex, the event drew over 3,000 students, parents, staff and alumni for a full day of competition, entertainment and school pride.',
            'Red House claimed the overall championship trophy with 1,240 points, narrowly defeating Blue House (1,180 points) and Yellow House (1,050 points). Green House, despite a spirited performance, finished fourth with 980 points.',
            'In the track events, JSS2 student Emeka Obi set a new school record in the 100m sprint with a time of 11.2 seconds, beating the previous record of 11.5 seconds set in 2019. "I have been training every morning before school," said Emeka. "I wanted to make my house proud."',
            'The day concluded with a spectacular relay race and a closing ceremony where our Principal, Mr. Emmanuel Okafor, presented the Inter-House Championship Trophy to Red House captain, Adaeze Nwosu.',
        ],
    },
    {
        slug: 'cultural-day-2026-celebration',
        tag: 'Culture',
        tagColor: colors.secondary.dark,
        date: 'December 5, 2025',
        readTime: '3 min read',
        title: 'Cultural Day 2025: A Vibrant Celebration of Nigeria\'s Heritage',
        excerpt: 'Students from all 36 states of Nigeria were represented as Preston held its annual Cultural Day celebration. Traditional attire, food, music and dance made it an unforgettable afternoon.',
        img: '/news3.jpg',
        featured: false,
        body: [
            'Preston International School\'s annual Cultural Day celebration took place on December 5, 2025, bringing the entire school community together in a vibrant showcase of Nigeria\'s rich cultural heritage.',
            'Students arrived dressed in the traditional attire of their home states — from the flowing agbada of the Yoruba to the colourful Igbo george and the regal Hausa babban riga. The visual spectacle drew gasps and applause from parents and guests.',
            'Each house set up a cultural display booth representing different Nigerian regions, complete with traditional foods, artefacts, music and historical information. The Yoruba booth\'s live talking drum performance was one of the highlights of the afternoon.',
            '"Cultural Day is one of my favourite events of the year," said Mrs. Chidinma Obi, Head of Arts & Culture. "It reminds us who we are and where we come from, and it teaches our students to be proud of their roots while embracing one another\'s differences."',
            'The event concluded with a traditional dance competition won by Yellow House, whose Ijele masquerade performance brought the crowd to its feet.',
        ],
    },
    {
        slug: 'cambridge-accreditation-renewed-2025',
        tag: 'Academic',
        tagColor: colors.primary.dark,
        date: 'November 18, 2025',
        readTime: '2 min read',
        title: 'Preston Renews Cambridge International Accreditation for 2025–2028',
        excerpt: 'We are delighted to announce that Preston International School has successfully renewed its Cambridge International School accreditation, valid through 2028.',
        img: '/academics-curriculum.jpg',
        featured: false,
        body: [
            'Preston International School has successfully renewed its Cambridge International School accreditation following a rigorous review process conducted by Cambridge Assessment International Education in October 2025.',
            'The accreditation, which is valid until 2028, recognises Preston as a school that meets the highest international standards in curriculum delivery, teacher quality, student support and school governance.',
            '"This renewal is a testament to the hard work of our entire school community — teachers, students, parents and support staff," said Vice Principal Mrs. Ngozi Adeyemi. "Cambridge accreditation means our students\' qualifications are recognised in over 160 countries."',
            'As part of the renewal, Preston has committed to introducing two new Cambridge IGCSE subjects — Computer Science and Global Perspectives — starting from the 2026/2027 academic session.',
        ],
    },
    {
        slug: 'new-ict-centre-opened',
        tag: 'Facilities',
        tagColor: colors.primary.light,
        date: 'October 10, 2025',
        readTime: '3 min read',
        title: 'State-of-the-Art ICT Centre Officially Opened',
        excerpt: 'Preston\'s brand new 60-seat ICT Centre was officially commissioned, giving students access to the latest computers, high-speed internet and coding workstations.',
        img: '/faci2.jpg',
        featured: false,
        body: [
            'Preston International School officially commissioned its new 60-seat ICT Centre on October 10, 2025 in a ceremony attended by parents, staff, students and dignitaries from the Lagos State Ministry of Education.',
            'The ₦45 million facility features 60 high-specification desktop computers, ultrafast fibre internet connectivity, a dedicated server room, smart projectors in every row and specialised coding workstations for computer science classes.',
            '"This investment in technology infrastructure is a statement of our commitment to preparing our students for the digital economy," said Principal Mr. Emmanuel Okafor at the commissioning ceremony.',
            'From November 2025, the centre will be open to all students from 7am to 8pm daily, including weekends, giving every student access to digital tools for learning, research and creative projects.',
        ],
    },
    {
        slug: 'waec-results-2025-record-pass-rate',
        tag: 'Results',
        tagColor: colors.secondary.main,
        date: 'September 3, 2025',
        readTime: '2 min read',
        title: '2025 WAEC Results: Preston Records 100% Pass Rate Again',
        excerpt: 'For the fourth consecutive year, every Preston SS3 student passed the WAEC examination. 87% achieved 5 credits and above including English and Mathematics.',
        img: '/admissions-hero.jpg',
        featured: false,
        body: [
            'Preston International School is proud to announce that our 2025 WAEC (WASSCE) results have once again set a new benchmark for academic excellence. For the fourth consecutive year, 100% of our SS3 candidates passed the examination.',
            'More impressively, 87% of candidates achieved 5 credits and above, including the crucial subjects of English Language and Mathematics — up from 82% in 2024.',
            'Three students — Chiamaka Okafor, Bolarinwa Adeyemi and Hassan Ibrahim — achieved straight A1 grades in all eight subjects they sat, a feat that has only been accomplished four times in the school\'s history.',
            '"These results reflect the relentless dedication of our students and the exceptional quality of our teaching staff," said Principal Mr. Emmanuel Okafor. "We are incredibly proud and we do not take this for granted."',
            'The school will hold a special Prize Giving Ceremony in October to celebrate the outstanding candidates and their teachers.',
        ],
    },
];

const tagColors = {};

const NewsCard = ({ article, index, visible, featured }) => {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    if (featured) {
        return (
            <Box
                onClick={() => navigate(`/news/${article.slug}`)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={{
                    display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    borderRadius: '20px', overflow: 'hidden', cursor: 'pointer',
                    bgcolor: colors.background.paper,
                    border: `1px solid ${hovered ? article.tagColor + '55' : colors.divider}`,
                    boxShadow: hovered ? '0 24px 60px rgba(0,0,0,0.14)' : '0 4px 20px rgba(0,0,0,0.07)',
                    transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
                    transition: 'all 0.35s ease',
                    animation: visible ? `nw_cardIn 0.7s ease 0.2s both` : 'none',
                    mb: 3,
                }}
            >
                <Box sx={{ position: 'relative', height: { xs: 260, md: 'auto' }, minHeight: { md: 380 }, overflow: 'hidden' }}>
                    <Box component="img" src={article.img} alt={article.title}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
                    />
                    <Box sx={{ position: 'absolute', top: 16, left: 16, bgcolor: article.tagColor, px: 1.5, py: 0.5, borderRadius: '4px' }}>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.65rem', fontWeight: typography.fontWeight.bold, color: 'white', letterSpacing: 1, textTransform: 'uppercase' }}>{article.tag}</Typography>
                    </Box>
                    <Box sx={{ position: 'absolute', top: 16, right: 16, bgcolor: colors.secondary.main, px: 1.5, py: 0.5, borderRadius: '4px' }}>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.65rem', fontWeight: typography.fontWeight.bold, color: colors.primary.dark, letterSpacing: 1 }}>Featured</Typography>
                    </Box>
                </Box>
                <Box sx={{ p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Stack direction="row" alignItems="center" gap={2} sx={{ mb: 2 }}>
                        <Stack direction="row" alignItems="center" gap={0.6}>
                            <CalendarTodayIcon sx={{ fontSize: 12, color: colors.text.secondary }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.text.secondary }}>{article.date}</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={0.6}>
                            <AccessTimeIcon sx={{ fontSize: 12, color: colors.text.secondary }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.text.secondary }}>{article.readTime}</Typography>
                        </Stack>
                    </Stack>
                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize.xl, md: typography.fontSize['2xl'] }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, lineHeight: 1.3, mb: 2 }}>
                        {article.title}
                    </Typography>
                    <Box sx={{ width: 36, height: 3, bgcolor: article.tagColor, mb: 2 }} />
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.8, mb: 3 }}>
                        {article.excerpt}
                    </Typography>
                    <Stack direction="row" alignItems="center" gap={1} sx={{ transform: hovered ? 'translateX(6px)' : 'translateX(0)', transition: 'transform 0.3s ease' }}>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: article.tagColor, letterSpacing: 1.5, textTransform: 'uppercase' }}>Read Full Story</Typography>
                        <ArrowForwardIcon sx={{ fontSize: 14, color: article.tagColor }} />
                    </Stack>
                </Box>
            </Box>
        );
    }

    return (
        <Box
            onClick={() => navigate(`/news/${article.slug}`)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                borderRadius: '16px', overflow: 'hidden', cursor: 'pointer',
                bgcolor: colors.background.paper,
                border: `1px solid ${hovered ? article.tagColor + '55' : colors.divider}`,
                boxShadow: hovered ? '0 20px 50px rgba(0,0,0,0.12)' : '0 4px 16px rgba(0,0,0,0.06)',
                transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
                transition: 'all 0.35s ease',
                animation: visible ? `nw_cardIn 0.7s ease ${index * 0.1 + 0.3}s both` : 'none',
            }}
        >
            <Box sx={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                <Box component="img" src={article.img} alt={article.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', transform: hovered ? 'scale(1.07)' : 'scale(1)' }}
                />
                <Box sx={{ position: 'absolute', top: 12, left: 12, bgcolor: article.tagColor, px: 1.5, py: 0.5, borderRadius: '4px' }}>
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.65rem', fontWeight: typography.fontWeight.bold, color: 'white', letterSpacing: 1, textTransform: 'uppercase' }}>{article.tag}</Typography>
                </Box>
            </Box>
            <Box sx={{ p: 2.5 }}>
                <Stack direction="row" alignItems="center" gap={2} sx={{ mb: 1.5 }}>
                    <Stack direction="row" alignItems="center" gap={0.6}>
                        <CalendarTodayIcon sx={{ fontSize: 11, color: colors.text.secondary }} />
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.7rem', color: colors.text.secondary }}>{article.date}</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" gap={0.6}>
                        <AccessTimeIcon sx={{ fontSize: 11, color: colors.text.secondary }} />
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.7rem', color: colors.text.secondary }}>{article.readTime}</Typography>
                    </Stack>
                </Stack>
                <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, lineHeight: 1.4, mb: 1 }}>
                    {article.title}
                </Typography>
                <Box sx={{ width: hovered ? 36 : 20, height: 2, bgcolor: article.tagColor, mb: 1.5, transition: 'width 0.3s ease' }} />
                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.7, mb: 2, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {article.excerpt}
                </Typography>
                <Stack direction="row" alignItems="center" gap={0.8} sx={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.3s ease' }}>
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: article.tagColor, letterSpacing: 1, textTransform: 'uppercase' }}>Read More</Typography>
                    <ArrowForwardIcon sx={{ fontSize: 13, color: article.tagColor }} />
                </Stack>
            </Box>
        </Box>
    );
};

const NewsPage = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        setTimeout(() => setVisible(true), 100);
    }, []);

    const featured = newsData[0];
    const rest = newsData.slice(1);

    return (
        <>
            <style>{keyframes}</style>

            {/* Hero */}
            <Box sx={{ bgcolor: colors.primary.dark, py: { xs: 10, md: 13 }, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${colors.primary.light}14 1.5px, transparent 1.5px)`, backgroundSize: '28px 28px' } }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, ${colors.secondary.light}, ${colors.secondary.main}, transparent)`, backgroundSize: '400px 100%', animation: 'nw_shimmer 3s linear infinite' }} />
                <Box sx={{ position: 'absolute', bottom: -80, right: -80, width: 400, height: 400, borderRadius: '50%', bgcolor: colors.secondary.dark, opacity: 0.08, filter: 'blur(60px)' }} />
                <Typography sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: typography.fontFamily.accent, fontSize: { xs: '7rem', md: '14rem' }, fontWeight: typography.fontWeight.black, color: colors.primary.light, opacity: 0.04, whiteSpace: 'nowrap', userSelect: 'none', pointerEvents: 'none', lineHeight: 1 }}>NEWS</Typography>

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 3, animation: visible ? 'nw_heroIn 0.6s ease 0.1s both' : 'none' }}>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.35)', letterSpacing: 1 }}>Home</Typography>
                        <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: colors.secondary.main }} />
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.secondary.main, fontWeight: typography.fontWeight.semiBold }}>News & Events</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2, animation: visible ? 'nw_heroIn 0.6s ease 0.2s both' : 'none' }}>
                        <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Latest Stories</Typography>
                    </Stack>
                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['3xl'], md: '3.6rem' }, fontWeight: typography.fontWeight.bold, color: colors.text.light, lineHeight: 1.15, mb: 1.5, animation: visible ? 'nw_heroIn 0.6s ease 0.3s both' : 'none' }}>
                        News & Events
                    </Typography>
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: 'rgba(255,255,255,0.5)', lineHeight: 1.9, maxWidth: 500, animation: visible ? 'nw_heroIn 0.6s ease 0.4s both' : 'none' }}>
                        Stay up to date with the latest stories, achievements, events and announcements from the Preston community.
                    </Typography>
                </Container>
            </Box>

            {/* Articles */}
            <Box sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
                <Container maxWidth="xl">
                    {/* Featured */}
                    <NewsCard article={featured} index={0} visible={visible} featured />

                    {/* Grid */}
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
                        {rest.map((article, i) => (
                            <NewsCard key={article.slug} article={article} index={i} visible={visible} />
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default NewsPage;