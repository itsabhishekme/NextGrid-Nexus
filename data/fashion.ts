// ======================================================
// NextGrid Nexus
// Fashion Technology Data Source
// data/fashion.ts
// ======================================================

export interface Technology {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  features: string[];
}

export interface Collection {
  id: number;
  title: string;
  category: string;
  season: string;
  description: string;
  image: string;
  price: string;
  rating: number;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Statistic {
  id: number;
  value: string;
  title: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  comment: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
}

export const technologies: Technology[] = [
  {
    id: 1,
    title: "Artificial Intelligence",
    subtitle: "AI Powered Fashion",
    icon: "🤖",
    description:
      "Artificial Intelligence assists fashion designers by generating concepts, analyzing trends, and delivering personalized recommendations.",
    features: [
      "Trend Prediction",
      "Generative Design",
      "Image Recognition",
      "Recommendation Engine",
    ],
  },
  {
    id: 2,
    title: "Smart Fabrics",
    subtitle: "Intelligent Textiles",
    icon: "🧵",
    description:
      "Advanced fabrics integrate responsive materials and embedded electronics to improve comfort and functionality.",
    features: [
      "Temperature Control",
      "Moisture Detection",
      "Energy Harvesting",
      "Adaptive Materials",
    ],
  },
  {
    id: 3,
    title: "Wearable Technology",
    subtitle: "Connected Fashion",
    icon: "⌚",
    description:
      "Wearables combine elegant design with health monitoring, connectivity, and smart interaction.",
    features: [
      "Health Tracking",
      "Bluetooth",
      "Fitness Monitoring",
      "Smart Notifications",
    ],
  },
  {
    id: 4,
    title: "Digital Fashion",
    subtitle: "Virtual Clothing",
    icon: "🥽",
    description:
      "Digital fashion enables designers to create garments exclusively for virtual experiences and online platforms.",
    features: [
      "Metaverse",
      "NFT Assets",
      "Virtual Runway",
      "3D Clothing",
    ],
  },
  {
    id: 5,
    title: "Sustainable Innovation",
    subtitle: "Eco Technology",
    icon: "🌱",
    description:
      "Technology supports responsible fashion through circular production and sustainable materials.",
    features: [
      "Zero Waste",
      "Recycling",
      "Carbon Reduction",
      "Green Manufacturing",
    ],
  },
  {
    id: 6,
    title: "Augmented Reality",
    subtitle: "Virtual Shopping",
    icon: "📱",
    description:
      "Customers can visualize products before purchasing through immersive augmented reality experiences.",
    features: [
      "AR Try-On",
      "Interactive Shopping",
      "3D Preview",
      "Virtual Store",
    ],
  },
];

export const collections: Collection[] = [
  {
    id: 1,
    title: "AI Couture",
    category: "Luxury",
    season: "Spring 2026",
    description:
      "Premium collection designed using artificial intelligence.",
    image: "/images/hero.jpg",
    price: "$499",
    rating: 5,
  },
  {
    id: 2,
    title: "Future Street",
    category: "Urban",
    season: "Summer 2026",
    description:
      "Smart casual wear designed for connected lifestyles.",
    image: "/images/wearable.jpg",
    price: "$249",
    rating: 5,
  },
  {
    id: 3,
    title: "Eco Future",
    category: "Sustainable",
    season: "Autumn 2026",
    description:
      "Eco-friendly collection manufactured using recycled materials.",
    image: "/images/smart-fabric.jpg",
    price: "$299",
    rating: 4.8,
  },
  {
    id: 4,
    title: "Digital Runway",
    category: "Virtual",
    season: "Winter 2026",
    description:
      "Digital garments created for immersive experiences.",
    image: "/images/fashion-ai.jpg",
    price: "$199",
    rating: 5,
  },
];

export const gallery: GalleryItem[] = [
  {
    id: 1,
    title: "AI Design Studio",
    category: "Artificial Intelligence",
    image: "/images/fashion-ai.jpg",
  },
  {
    id: 2,
    title: "Luxury Fashion",
    category: "Premium",
    image: "/images/hero.jpg",
  },
  {
    id: 3,
    title: "Smart Textile",
    category: "Innovation",
    image: "/images/smart-fabric.jpg",
  },
  {
    id: 4,
    title: "Wearable Device",
    category: "Technology",
    image: "/images/wearable.jpg",
  },
  {
    id: 5,
    title: "Future Fashion",
    category: "Digital",
    image: "/images/fashion-ai.jpg",
  },
  {
    id: 6,
    title: "Virtual Collection",
    category: "Metaverse",
    image: "/images/hero.jpg",
  },
];

export const statistics: Statistic[] = [
  {
    id: 1,
    value: "500+",
    title: "Fashion Concepts",
  },
  {
    id: 2,
    value: "120+",
    title: "Technology Partners",
  },
  {
    id: 3,
    value: "98%",
    title: "Client Satisfaction",
  },
  {
    id: 4,
    value: "35+",
    title: "Countries",
  },
  {
    id: 5,
    value: "250+",
    title: "Projects Completed",
  },
  {
    id: 6,
    value: "100K+",
    title: "Community Members",
  },
];

export const features: Feature[] = [
  {
    id: 1,
    title: "AI Design",
    description:
      "Create innovative fashion concepts using intelligent algorithms.",
  },
  {
    id: 2,
    title: "Smart Manufacturing",
    description:
      "Automated production powered by advanced robotics.",
  },
  {
    id: 3,
    title: "Virtual Try-On",
    description:
      "Experience fashion digitally before making a purchase.",
  },
  {
    id: 4,
    title: "Digital Twin",
    description:
      "Virtual representations of products for testing and innovation.",
  },
  {
    id: 5,
    title: "Sustainable Production",
    description:
      "Reduce waste while improving manufacturing efficiency.",
  },
  {
    id: 6,
    title: "Cloud Platform",
    description:
      "Manage collections securely from anywhere in the world.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Carter",
    role: "Fashion Designer",
    company: "Nova Studio",
    comment:
      "NextGrid Nexus has completely changed how we approach modern fashion design.",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Technology Director",
    company: "Future Wear",
    comment:
      "The AI-driven solutions dramatically improved our design workflow.",
  },
  {
    id: 3,
    name: "Emma Brown",
    role: "Creative Lead",
    company: "Digital Couture",
    comment:
      "An inspiring platform that perfectly blends fashion with innovation.",
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: "AI Fashion Design",
    description:
      "Generate innovative clothing concepts using Artificial Intelligence.",
  },
  {
    id: 2,
    title: "Smart Textile Research",
    description:
      "Develop intelligent fabrics for future-ready apparel.",
  },
  {
    id: 3,
    title: "Digital Fashion",
    description:
      "Create virtual clothing for gaming and immersive platforms.",
  },
  {
    id: 4,
    title: "AR Shopping",
    description:
      "Deliver engaging virtual try-on experiences for customers.",
  },
  {
    id: 5,
    title: "Brand Consultation",
    description:
      "Transform fashion businesses through technology adoption.",
  },
  {
    id: 6,
    title: "Enterprise Solutions",
    description:
      "Scalable digital infrastructure for modern fashion brands.",
  },
];

export const company = {
  name: "NextGrid Nexus",
  slogan: "Fashion Meets Technology",
  founded: "2026",
  headquarters: "Innovation City",
  email: "hello@nextgridnexus.com",
  phone: "+1 (800) 123-4567",
  website: "https://nextgridnexus.com",
};

export default {
  technologies,
  collections,
  gallery,
  statistics,
  features,
  testimonials,
  services,
  company,
};
