// ============================================================
//  DESIGNS DATA — edit everything here, nowhere else
// ============================================================
//
//  HOW TO ADD A NEW DESIGN
//  -----------------------
//  Copy one of the blocks below and add it to the right section.
//  Required fields:
//    id          → next number in sequence (just increment the last one)
//    title       → display name shown on the card and in the modal
//    category    → must match one of the values in designCategories below
//    image       → path to the file inside /public  e.g. '/designs/port/Branding and Logos/mylogo.png'
//    description → one or two sentences shown in the modal footer
//    tools       → array of tools used e.g. ['Figma', 'Photoshop']
//
//  FOR VIDEOS add  type: 'video'  and use  video:  instead of  image:
//    e.g. { id: 65, title: 'My Reel', category: 'Social Media', type: 'video',
//            video: '/designs/port/Posts/myreel.mp4', description: '...', tools: ['Premiere  Pro Pro'] }
//
//  TIPS
//  • Spaces in filenames are fine. Avoid apostrophes ( ' ) and plus signs ( + ) in filenames.
//  • Drop new images into public/designs/port/<SubFolder>/ then reference them here.
//  • To change a title, description, tools list or category — just edit the field below.
// ============================================================

export const designCategories = ['All', 'Branding', 'Social Media', 'Print Layout', 'Certificates', 'UI/UX', 'Misc/Creative']

export const designs = [

  // ── Branding & Logos ──────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Brand Identity 1',
    category: 'Branding',
    image: '/designs/port/Branding and Logos/Brand 1.png',
    description: 'A complete brand identity concept including logo mark, wordmark, and colour palette.',
    tools: ['Illustrator', 'Photoshop'],
  },
  {
    id: 2,
    title: 'Brand Identity 2',
    category: 'Branding',
    image: '/designs/port/Branding and Logos/Brand 2.png',
    description: 'Secondary brand identity exploration with alternate logo variations and typography.',
    tools: ['Illustrator', 'Photoshop'],
  },
  {
    id: 3,
    title: 'Logo Design 1',
    category: 'Branding',
    image: '/designs/port/Branding and Logos/logo11.png',
    description: 'Minimal vector logo design built for scalability across print and digital.',
    tools: ['Illustrator'],
  },
  {
    id: 8,
    title: 'The Bodhi',
    category: 'Branding',
    image: '/designs/port/Branding and Logos/The Bodhi.png',
    description: 'Brand identity for The Bodhi — a concept rooted in mindfulness and natural aesthetics.',
    tools: ['Illustrator', 'Photoshop'],
  },
  {
    id: 9,
    title: 'Branding Concept 1',
    category: 'Branding',
    image: '/designs/port/Branding and Logos/Screenshot 2024-10-01 162942.png',
    description: 'Early-stage branding concept exploring colour and form.',
    tools: ['Photoshop'],
  },
  {
    id: 10,
    title: 'Branding Concept 2',
    category: 'Branding',
    image: '/designs/port/Branding and Logos/Screenshot 2024-10-01 172640.png',
    description: 'Refined branding iteration with updated layout and spacing.',
    tools: ['Photoshop'],
  },
  {
    id: 11,
    title: 'Branding Concept 3',
    category: 'Branding',
    image: '/designs/port/Branding and Logos/Screenshot 2025-05-06 142929.png',
    description: 'Modern branding concept with a focus on clean visual identity.',
    tools: ['Photoshop'],
  },
  {
    id: 12,
    title: 'Branding Concept 4',
    category: 'Branding',
    image: '/designs/port/Branding and Logos/Screenshot 2025-07-20 210413.png',
    description: 'Latest branding exploration with bold colour choices and strong typography.',
    tools: ['Photoshop'],
  },

  // ── Social Media / Posts ──────────────────────────────────────────────────
  {
    id: 13,
    title: 'Post Design',
    category: 'Social Media',
    image: '/designs/port/Posts/11.png',
    description: 'Social media post designed for high engagement with a clean layout.',
    tools: ['Canva', 'Photoshop'],
  },
  {
    id: 14,
    title: 'Farewell Post',
    category: 'Social Media',
    image: '/designs/port/Posts/Farewell.png',
    description: 'Farewell tribute post with warm tones and elegant typography.',
    tools: ['Canva'],
  },
  {
    id: 15,
    title: "Fresher's & Janmashtami",
    category: 'Social Media',
    image: '/designs/port/Posts/Freashers Janmashtami.png',
    description: "Combined Fresher's welcome and Janmashtami celebration post for social media.",
    tools: ['Canva', 'Photoshop'],
  },
  {
    id: 16,
    title: 'Republic Day Post',
    category: 'Social Media',
    image: '/designs/port/Posts/Republic Day.png',
    description: 'Republic Day tribute post with patriotic colour palette and bold layout.',
    tools: ['Canva'],
  },
  {
    id: 17,
    title: 'Social Media Design',
    category: 'Social Media',
    image: '/designs/port/Posts/Screenshot 2025-02-03 151318.png',
    description: 'Promotional social media graphic with strong visual hierarchy.',
    tools: ['Photoshop'],
  },
  {
    id: 18,
    title: "Teacher's Day Post 1",
    category: 'Social Media',
    image: '/designs/port/Posts/Teachers day.png',
    description: "Teacher's Day appreciation post with warm, respectful design language.",
    tools: ['Canva'],
  },
  {
    id: 19,
    title: "Teacher's Day Post 2",
    category: 'Social Media',
    image: '/designs/port/Posts/Teachers day 2.png',
    description: "Alternate Teacher's Day design with a different layout and colour scheme.",
    tools: ['Canva'],
  },
  {
    id: 20,
    title: 'Vasant Panchami Reel',
    category: 'Social Media',
    type: 'video',
    video: '/designs/port/Posts/Vasant Panchmi.mp4',
    description: 'Animated Vasant Panchami reel with festive motion graphics and transitions.',
    tools: ['Photoshop', 'Premiere  Pro'],
  },
  {
    id: 21,
    title: 'Ram Mandir Reel',
    category: 'Social Media',
    type: 'video',
    video: '/designs/port/Posts/Ram Mandir.mp4',
    description: 'Motion reel created for the Ram Mandir inauguration with cinematic transitions.',
    tools: ['Photoshop', 'Premiere Pro'],
  },
  {
    id: 22,
    title: 'Ravindra Jadeja Reel',
    category: 'Social Media',
    type: 'video',
    video: '/designs/port/Posts/Ravindra Jadeja.mp4',
    description: 'Sports tribute reel for Ravindra Jadeja with dynamic motion and typography.',
    tools: ['Photoshop', 'Premiere Pro'],
  },

  // ── Print Layout ──────────────────────────────────────────────────────────
  {
    id: 23,
    title: 'Print Design 1',
    category: 'Print Layout',
    image: '/designs/port/Prints/1.png',
    description: 'Print layout designed with careful attention to margins, grid, and readability.',
    tools: ['Illustrator'],
  },
  {
    id: 24,
    title: 'Print Design 2',
    category: 'Print Layout',
    image: '/designs/port/Prints/2.png',
    description: 'Clean multi-column print layout suitable for brochures or flyers.',
    tools: ['Illustrator'],
  },
  {
    id: 25,
    title: 'Entry Pass',
    category: 'Print Layout',
    image: '/designs/port/Prints/Entry Pass.png',
    description: 'Event entry pass design with QR placeholder, branding, and print-ready specs.',
    tools: ['Illustrator', 'Photoshop', 'Canva'],
  },
  {
    id: 26,
    title: 'Event Pass',
    category: 'Print Layout',
    image: '/designs/port/Prints/Pass.png',
    description: 'Compact event pass layout with clear information hierarchy.',
    tools: ['Illustrator'],
  },
  {
    id: 27,
    title: 'Print Layout 1',
    category: 'Print Layout',
    image: '/designs/port/Prints/Screenshot 2024-11-01 172408.png',
    description: 'Structured print layout with balanced use of whitespace and typography.',
    tools: ['Photoshop'],
  },
  {
    id: 28,
    title: 'Print Layout 2',
    category: 'Print Layout',
    image: '/designs/port/Prints/Screenshot 2025-12-28 222652.png',
    description: 'Bold print design with strong visual contrast and clear call-to-action.',
    tools: ['Photoshop'],
  },
  {
    id: 29,
    title: 'Print Layout 3',
    category: 'Print Layout',
    image: '/designs/port/Prints/Screenshot 2026-02-08 175350.png',
    description: 'Latest print layout with refined grid system and modern aesthetic.',
    tools: ['Photoshop' , 'Canva'],
  },

  // ── Certificates ──────────────────────────────────────────────────────────
  {
    id: 30,
    title: 'Certificate Design 1',
    category: 'Certificates',
    image: '/designs/port/Certificates/1.png',
    description: 'Formal certificate layout with elegant borders and structured typography.',
    tools: ['Illustrator', 'Canva'],
  },
  {
    id: 31,
    title: 'Certificate Design 2',
    category: 'Certificates',
    image: '/designs/port/Certificates/11.png',
    description: 'Clean certificate design with a modern minimalist approach.',
    tools: ['Illustrator', 'Canva'],
  },
  {
    id: 32,
    title: 'Certificate Design 3',
    category: 'Certificates',
    image: '/designs/port/Certificates/38.png',
    description: 'Certificate with decorative elements and a professional colour palette.',
    tools: ['Illustrator', 'Canva'],
  },
  {
    id: 33,
    title: 'Certificate Design 4',
    category: 'Certificates',
    image: '/designs/port/Certificates/50.png',
    description: 'Award-style certificate with bold heading and ornamental framing.',
    tools: ['Illustrator', 'Canva'],
  },
  {
    id: 34,
    title: 'Certificate Design 5',
    category: 'Certificates',
    image: '/designs/port/Certificates/8.png',
    description: 'Compact certificate layout optimised for A4 print output.',
    tools: ['Illustrator', 'Canva'],
  },
  {
    id: 35,
    title: 'Appreciation Certificates',
    category: 'Certificates',
    image: '/designs/port/Certificates/Appreciation Certificates.png',
    description: 'Set of appreciation certificates designed for event recognition.',
    tools: ['Illustrator', 'Photoshop', 'Canva'],
  },
  {
    id: 36,
    title: 'Certificate',
    category: 'Certificates',
    image: '/designs/port/Certificates/certificate.png',
    description: 'General-purpose certificate template with flexible layout.',
    tools: ['Illustrator', 'Canva'],
  },
  {
    id: 37,
    title: 'Graphic Designing Certificate',
    category: 'Certificates',
    image: '/designs/port/Certificates/graphic designing cert.png',
    description: 'Certificate of completion for a graphic design course.',
    tools: ['Illustrator', 'Canva'],
  },
  {
    id: 38,
    title: 'PPT Certificate',
    category: 'Certificates',
    image: '/designs/port/Certificates/PPT.png',
    description: 'Certificate designed for a PowerPoint / presentation skills competition.',
    tools: ['Photoshop', 'Canva'],
  },
  {
    id: 39,
    title: 'Proficiency Certificates',
    category: 'Certificates',
    image: '/designs/port/Certificates/Proficiency Certificates.png',
    description: 'Proficiency award certificates with tiered design for different achievement levels.',
    tools: ['Illustrator', 'Canva'],
  },
  {
    id: 40,
    title: 'Project Certificate',
    category: 'Certificates',
    image: '/designs/port/Certificates/Project.png',
    description: 'Project completion certificate with clean layout and institutional branding.',
    tools: ['Illustrator', 'Canva'],
  },
  {
    id: 41,
    title: 'Certificate Layout 1',
    category: 'Certificates',
    image: '/designs/port/Certificates/Screenshot 2024-11-14 133835.png',
    description: 'Certificate layout exploration with decorative header and footer elements.',
    tools: ['Photoshop', 'Canva'],
  },
  {
    id: 42,
    title: 'Certificate Layout 2',
    category: 'Certificates',
    image: '/designs/port/Certificates/Screenshot 2025-06-28 115207.png',
    description: 'Updated certificate layout with improved spacing and modern typeface.',
    tools: ['Photoshop', 'Canva'],
  },
  {
    id: 43,
    title: 'Sport Certificate',
    category: 'Certificates',
    image: '/designs/port/Certificates/Sport Certificate.png',
    description: 'Sports achievement certificate with dynamic design and energetic colour palette.',
    tools: ['Illustrator', 'Canva'],
  },
  {
    id: 44,
    title: "Teacher's Day Certificate",
    category: 'Certificates',
    image: '/designs/port/Certificates/Teachers day.png',
    description: "Certificate of appreciation designed for Teacher's Day recognition.",
    tools: ['Illustrator', 'Canva'],
  },
  {
    id: 45,
    title: 'Triumph Certificate',
    category: 'Certificates',
    image: '/designs/port/Certificates/triumph.png',
    description: 'Victory and triumph themed certificate with gold accents and bold typography.',
    tools: ['Illustrator', 'Canva'],
  },
  {
    id: 46,
    title: 'ZICA Certificate',
    category: 'Certificates',
    image: '/designs/port/Certificates/ZICA.png',
    description: 'Official certificate design for ZICA with institutional branding guidelines.',
    tools: ['Illustrator', 'Canva'],
  },

  // ── UI/UX ─────────────────────────────────────────────────────────────────
  {
    id: 47,
    title: 'UI Design 1',
    category: 'UI/UX',
    image: '/designs/port/UI-UX/1.png',
    description: 'High-fidelity UI screen with clean component layout and consistent spacing.',
    tools: ['Figma'],
  },
  {
    id: 48,
    title: 'UI Design 2',
    category: 'UI/UX',
    image: '/designs/port/UI-UX/2.png',
    description: 'Dashboard UI design with data visualisation components and dark theme.',
    tools: ['Figma'],
  },
  {
    id: 49,
    title: 'UI Design 3',
    category: 'UI/UX',
    image: '/designs/port/UI-UX/3.png',
    description: 'Mobile app screen design with intuitive navigation and accessible colour contrast.',
    tools: ['Figma'],
  },
  {
    id: 50,
    title: 'UI Design 4',
    category: 'UI/UX',
    image: '/designs/port/UI-UX/4.png',
    description: 'Landing page UI mockup with hero section, feature cards, and CTA layout.',
    tools: ['Figma'],
  },
  {
    id: 51,
    title: 'UI Design 5',
    category: 'UI/UX',
    image: '/designs/port/UI-UX/5.png',
    description: 'E-commerce product page UI with cart, filters, and responsive grid.',
    tools: ['Figma'],
  },
  {
    id: 52,
    title: 'UI Design 6',
    category: 'UI/UX',
    image: '/designs/port/UI-UX/6.png',
    description: 'Settings and profile screen UI with form components and toggle controls.',
    tools: ['Figma'],
  },
  {
    id: 53,
    title: 'UI Design 7',
    category: 'UI/UX',
    image: '/designs/port/UI-UX/7.png',
    description: 'Onboarding flow UI with step indicators and illustration placeholders.',
    tools: ['Figma'],
  },
  {
    id: 54,
    title: 'UI/UX Screen 1',
    category: 'UI/UX',
    image: '/designs/port/UI-UX/Screenshot 2025-05-01 171349.png',
    description: 'Full-screen UI design with refined visual hierarchy and interaction states.',
    tools: ['Figma'],
  },
  {
    id: 55,
    title: 'UI/UX Screen 2',
    category: 'UI/UX',
    image: '/designs/port/UI-UX/Screenshot 2025-05-08 100009.png',
    description: 'Responsive web UI layout with grid-based content structure.',
    tools: ['Figma'],
  },
  {
    id: 56,
    title: 'UI/UX Screen 3',
    category: 'UI/UX',
    image: '/designs/port/UI-UX/Screenshot 2025-10-06 223249.png',
    description: 'Latest UI screen with updated design system tokens and component library.',
    tools: ['Figma'],
  },

  // ── Misc/Creative ─────────────────────────────────────────────────────────
  {
    id: 57,
    title: 'Creative Design',
    category: 'Misc/Creative',
    image: '/designs/port/Randoms/13.png',
    description: 'Experimental creative piece exploring composition and visual storytelling.',
    tools: ['Photoshop'],
  },
  {
    id: 58,
    title: 'Gojo Artwork',
    category: 'Misc/Creative',
    image: '/designs/port/Randoms/gojow.jpg',
    description: 'Fan art digital illustration of Gojo from Jujutsu Kaisen with stylised effects.',
    tools: ['Photoshop'],
  },
  {
    id: 59,
    title: 'Magazine Layout 1',
    category: 'Misc/Creative',
    image: '/designs/port/Randoms/magazine1.png',
    description: 'Editorial magazine spread with multi-column layout and pull quotes.',
    tools: ['Illustrator', 'Photoshop'],
  },
  {
    id: 60,
    title: 'Magazine Layout 2',
    category: 'Misc/Creative',
    image: '/designs/port/Randoms/magazine2.png',
    description: 'Feature article layout with full-bleed imagery and typographic hierarchy.',
    tools: ['Illustrator', 'Photoshop'],
  },
  {
    id: 61,
    title: 'Navratri Design',
    category: 'Misc/Creative',
    image: '/designs/port/Randoms/navratri.jpg',
    description: 'Festive Navratri graphic with vibrant colours and traditional motifs.',
    tools: ['Photoshop', 'Canva'],
  },
  {
    id: 62,
    title: 'Creative Work 1',
    category: 'Misc/Creative',
    image: '/designs/port/Randoms/Screenshot 2024-08-25 141652.png',
    description: 'Experimental design piece from an early creative exploration session.',
    tools: ['CorelDRAW'],
  },
  {
    id: 63,
    title: 'Creative Work 2',
    category: 'Misc/Creative',
    image: '/designs/port/Randoms/Screenshot 2024-08-25 174600.png',
    description: 'Abstract composition with layered textures and colour blending.',
    tools: ['CorelDRAW'],
  },
  {
    id: 64,
    title: 'Creative Work 3',
    category: 'Misc/Creative',
    image: '/designs/port/Randoms/Screenshot 2025-01-18 154329.png',
    description: 'Latest creative experiment with mixed media and digital illustration techniques.',
    tools: ['Illustrator'],
  },

]

// ── Tools & Skills (used on the Design Skills page) ───────────────────────
export const designTools = [
  { name: 'Figma',             category: 'UI/UX & Prototyping',         level: 'Proficient',   description: 'Component-based UI design, interactive prototypes, and design systems.',       icon: '🎨', color: 'from-purple-500 to-pink-500' },
  { name: 'Adobe Photoshop',   category: 'Photo Editing & Compositing', level: 'Proficient',   description: 'Photo retouching, digital painting, texture work, and social media graphics.', icon: '🖼️', color: 'from-blue-600 to-blue-400' },
  { name: 'Adobe Illustrator', category: 'Vector & Branding',           level: 'Proficient',   description: 'Logo design, icon sets, vector illustrations, and print-ready artwork.',       icon: '✏️', color: 'from-orange-500 to-yellow-400' },
  { name: 'Canva',             category: 'Social Media & Marketing',    level: 'Advanced',     description: 'Rapid social media content, presentations, and marketing collateral.',         icon: '📐', color: 'from-cyan-500 to-teal-400' },
  { name: 'CorelDRAW',         category: 'Vector & Print',              level: 'Intermediate', description: 'Vector illustration and professional print layout design.',                    icon: '🖊️', color: 'from-green-500 to-emerald-400' },
]

export const designSkillAreas = [
  { area: 'Branding & Identity', icon: '💎', points: ['Logo design & brand guidelines', 'Typography pairing', 'Colour theory & palette creation', 'Brand consistency across touchpoints'] },
  { area: 'Social Media Design', icon: '📱', points: ['Platform-specific sizing & formats', 'Cohesive post series & templates', 'Story & reel graphics', 'Campaign visual language'] },
  { area: 'Print Layout',        icon: '🖨️', points: ['Brochures, flyers & posters', 'CMYK colour management', 'Bleed, trim & safe zone setup', 'Print-ready file export'] },
  { area: 'UI/UX Design',        icon: '🖥️', points: ['Wireframing & prototyping', 'Component & design systems', 'Responsive layouts', 'User flow mapping'] },
]
