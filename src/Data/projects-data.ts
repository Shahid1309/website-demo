


export interface Project {
  id: number;
  title: string;
  category: string;
  type: string;
  status: string;
  featured: boolean;
  date: string | number;
  client: string;
  location: string;
  size: string;
  description: string;
  images: string[];
  details: string[];
  tags: string[];
}


export const projects: Project[] = [
  {
    id: 1,
    title: "Modern Living Space",
    category: "Residential • Living Room",
    type: "residential",
    status: "completed",
    featured: true,
    date: "2023-05-15",
    client: "Private Client",
    location: "New York, NY",
    size: "450 sq ft",
    description: "A contemporary living room design featuring clean lines, neutral tones, and carefully curated furniture pieces that create a harmonious balance between functionality and aesthetic appeal. The space maximizes natural light while offering versatile seating arrangements.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80"
    ],
    details: [
      "Custom furniture selection from premium designers",
      "Neutral color palette with textured accents",
      "Natural lighting optimization with smart window treatments",
      "Space planning for optimal flow and functionality",
      "Integrated smart home technology",
      "Acoustic considerations for urban environment"
    ],
    tags: ["modern", "minimalist", "smart home"]
  },
  {
    id: 2,
    title: "Executive Office Suite",
    category: "Commercial • Corporate",
    type: "commercial",
    status: "completed",
    featured: false,
    date: "2023-03-22",
    client: "TechStart Inc.",
    location: "San Francisco, CA",
    size: "2,800 sq ft",
    description: "Professional office design combining functionality with sophisticated aesthetics for maximum productivity. The space features modular workstations, collaborative areas, and executive offices with premium finishes that reflect the company's innovative culture.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
    ],
    details: [
      "Ergonomic workspace design for 25 employees",
      "Premium material selection including sustainable options",
      "Advanced acoustic considerations for open plan",
      "Integrated technology with video conferencing",
      "Biophilic design elements throughout",
      "Flexible meeting spaces of various sizes"
    ],
    tags: ["corporate", "ergonomic", "tech"]
  },
  {
    id: 3,
    title: "Minimalist Kitchen",
    category: "Residential • Kitchen",
    type: "residential",
    status: "completed",
    featured: true,
    date: "2023-07-10",
    client: "Private Client",
    location: "Chicago, IL",
    size: "320 sq ft",
    description: "Clean, functional kitchen design with premium finishes and smart storage solutions. This culinary space features custom cabinetry, professional-grade appliances, and a hidden pantry system that maintains the minimalist aesthetic while providing all necessary functionality.",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80",
      "https://images.unsplash.com/photo-1600566752227-513c71e8d6a8?w=800&q=80"
    ],
    details: [
      "Custom cabinetry with integrated handles",
      "Quartz countertops with waterfall edge",
      "Professional-grade integrated appliances",
      "Smart storage solutions including corner systems",
      "Under-cabinet lighting system",
      "Hidden walk-in pantry with organization system"
    ],
    tags: ["kitchen", "minimalist", "luxury"]
  },
  {
    id: 4,
    title: "Luxury Bedroom Suite",
    category: "Residential • Bedroom",
    type: "residential",
    status: "ongoing",
    featured: false,
    date: "2023-08-01",
    client: "Private Client",
    location: "Beverly Hills, CA",
    size: "650 sq ft",
    description: "Elegant bedroom design featuring luxurious textures and a calming color palette. This master suite includes a sleeping area, sitting space, and expansive walk-in closet, all designed with meticulous attention to detail and premium materials.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80"
    ],
    details: [
      "Custom upholstered headboard with integrated lighting",
      "Premium bedding selection from luxury brands",
      "Multi-layer ambient lighting system",
      "Walk-in closet with custom organization",
      "Integrated sound system with noise isolation",
      "Private balcony access with seating area"
    ],
    tags: ["bedroom", "luxury", "master suite"]
  },
  {
    id: 5,
    title: "Boutique Restaurant",
    category: "Commercial • Hospitality",
    type: "hospitality",
    status: "completed",
    featured: true,
    date: "2023-04-18",
    client: "Gourmet Ventures LLC",
    location: "Miami, FL",
    size: "3,200 sq ft",
    description: "Sophisticated restaurant design creating a memorable dining experience. The space blends contemporary design with local cultural elements, featuring a main dining room, bar area, and private dining space with distinct but cohesive aesthetics.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
    ],
    details: [
      "Atmospheric lighting design with dimming controls",
      "Custom banquette seating and dining chairs",
      "Advanced acoustic treatment for noise control",
      "Full brand integration throughout space",
      "Open kitchen with chef's counter seating",
      "Outdoor patio with climate control elements"
    ],
    tags: ["restaurant", "hospitality", "luxury"]
  },
  {
    id: 6,
    title: "Spa Bathroom Retreat",
    category: "Residential • Bathroom",
    type: "residential",
    status: "completed",
    featured: false,
    date: "2023-06-05",
    client: "Private Client",
    location: "Aspen, CO",
    size: "280 sq ft",
    description: "Spa-like bathroom design with premium materials and thoughtful details. This sanctuary features a freestanding tub, oversized shower, and dual vanity with integrated storage, all designed to create a luxurious daily experience.",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      "https://images.unsplash.com/photo-1600566752227-513c71e8d6a8?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
    ],
    details: [
      "Natural stone finishes throughout",
      "Rainfall shower system with body sprays",
      "Radiant heated flooring",
      "Custom double vanity with integrated lighting",
      "Freestanding soaking tub with view",
      "Smart mirror with integrated technology"
    ],
    tags: ["bathroom", "spa", "luxury"]
  },
  {
    id: 7,
    title: "Co-Working Space",
    category: "Commercial • Office",
    type: "commercial",
    status: "ongoing",
    featured: true,
    date: "2023-09-12",
    client: "Urban Workspaces",
    location: "Austin, TX",
    size: "8,500 sq ft",
    description: "Innovative co-working space designed for flexibility and collaboration. The layout includes private offices, hot desks, meeting rooms, and lounge areas, all designed with a cohesive aesthetic that promotes productivity and community.",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    ],
    details: [
      "Modular furniture system for flexibility",
      "Variety of workspace types and sizes",
      "Advanced technology infrastructure",
      "Sustainable materials and energy systems",
      "Breakout spaces with varied atmospheres",
      "Full-service cafe and lounge area"
    ],
    tags: ["coworking", "flexible", "tech"]
  },
  {
    id: 8,
    title: "Penthouse Terrace",
    category: "Residential • Outdoor",
    type: "residential",
    status: "completed",
    featured: false,
    date: "2023-02-28",
    client: "Private Client",
    location: "Boston, MA",
    size: "1,200 sq ft",
    description: "Luxury rooftop terrace design with multiple functional areas. This outdoor living space includes dining, lounging, and cooking areas, all designed with weather-resistant materials and integrated lighting for year-round use.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfa64630b6?w=800&q=80",
      "https://images.unsplash.com/photo-1600566752227-513c71e8d6a8?w=800&q=80"
    ],
    details: [
      "Outdoor kitchen with premium appliances",
      "Custom built-in seating with storage",
      "Weather-resistant materials and finishes",
      "Integrated lighting and sound system",
      "Retractable awning for shade control",
      "Pergola with climbing plants"
    ],
    tags: ["outdoor", "terrace", "luxury"]
  }
];

export const filterOptions = [
  { value: 'all', label: 'All Projects', icon: 'Grid' },
  { value: 'residential', label: 'Residential', icon: 'Home' },
  { value: 'commercial', label: 'Commercial', icon: 'Briefcase' },
  { value: 'hospitality', label: 'Hospitality', icon: 'Coffee' }
];

// Animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: "easeOut" as const // ✅ explicitly narrowing it to a valid easing string
  }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};