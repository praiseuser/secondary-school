export const topLinks = ["Parents", "Students", "Alumni", "Staff"];

export const socials = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];

export const mainNavLinks = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    dropdown: [
      { label: "Our History", path: "/about/history" },
      { label: "Vision & Mission", path: "/about/vision" },
      { label: "Meet the Staff", path: "/about/staff" },
      { label: "Facilities", path: "/about/facilities" },
    ],
  },
  {
    label: "Academics",
    path: "/academics",
    dropdown: [
      { label: "Curriculum Overview", path: "/academics/curriculum" },
      { label: "Junior Secondary", path: "/academics/junior" },
      { label: "Senior Secondary", path: "/academics/senior" },
      { label: "Subject List", path: "/academics/subjects" }, // ← added
      { label: "Academic Calendar", path: "/academics/calendar" }, // ← added
    ],
  },
  {
    label: "Beyond Academics",
    path: "/beyond-academics",
    dropdown: [
      { label: "Sports & Athletics", path: "/beyond-academics/sports" },
      { label: "Clubs & Societies", path: "/beyond-academics/clubs" },
      { label: "Arts & Culture", path: "/beyond-academics/arts" },
    ],
  },
  {
    label: "Nursery & Primary",
    path: "/nursery-primary",
    dropdown: [
      { label: "Nursery School", path: "/nursery-primary/nursery" },
      { label: "Primary School", path: "/nursery-primary/primary" },
      { label: "Early Learning", path: "/nursery-primary/early-learning" },
    ],
  },
  {
    label: "News & Events",
    path: "/news",
    dropdown: [
      { label: "Latest News", path: "/news/latest" },
      { label: "Upcoming Events", path: "/news/events" },
      { label: "Gallery", path: "/news/gallery" },
    ],
  },
  {
    label: "Admissions 2026/2027",
    path: "/admissions",
    highlight: true,
    dropdown: [
      { label: "How to Apply", path: "/admissions/apply" },
      { label: "Entry Requirements", path: "/admissions/requirements" },
      { label: "School Fees", path: "/admissions/fees" },
      { label: "FAQs", path: "/admissions/faqs" },
    ],
  },
  { label: "Testimonials", path: "/testimonials" },
  {
    label: "Campus Life",
    path: "/campus-life",
    dropdown: [
      { label: "Student Life", path: "/campus-life/student-life" },
      { label: "Boarding", path: "/campus-life/boarding" },
      { label: "Health & Safety", path: "/campus-life/health" },
    ],
  },
  { label: "Contact Us", path: "/contact" },
];
