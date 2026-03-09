export const topLinks = [
  { label: "Parents", path: "/parents" },
  { label: "Students", path: "/students" },
  { label: "Staff", path: "/staff" },
];

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
      { label: "Subject List", path: "/academics/subjects" },
      { label: "Academic Calendar", path: "/academics/calendar" },
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
