class SkillCategory {
  const SkillCategory({
    required this.title,
    required this.description,
    required this.skills,
  });

  final String title;
  final String description;
  final List<String> skills;
}

class ProjectItem {
  const ProjectItem({
    required this.title,
    required this.description,
    required this.tags,
    required this.primaryLink,
    this.secondaryLink,
    this.primaryLabel = 'Case Study',
    this.secondaryLabel,
    this.isFeatured = false,
  });

  final String title;
  final String description;
  final List<String> tags;
  final String primaryLink;
  final String? secondaryLink;
  final String primaryLabel;
  final String? secondaryLabel;
  final bool isFeatured;
}

class TestimonialItem {
  const TestimonialItem({
    required this.quote,
    required this.client,
    required this.role,
    required this.rating,
    this.project,
  });

  final String quote;
  final String client;
  final String role;
  final int rating;
  final String? project;
}

final List<SkillCategory> skillCategories = [
  const SkillCategory(
    title: 'Frontend & Mobile',
    description:
        'Crafting native-quality interfaces that feel fast, inclusive, and delightful on every device.',
    skills: [
      'Flutter',
      'Dart',
      'React',
      'Next.js',
      'Swift',
      'Kotlin',
      'TypeScript',
    ],
  ),
  const SkillCategory(
    title: 'Backend & Cloud',
    description:
        'Designing resilient APIs, cloud infra, and data flows that scale from MVP to millions of requests.',
    skills: [
      'FastAPI',
      'Python',
      'Node.js',
      'PostgreSQL',
      'AWS',
      'GCP',
      'Docker',
    ],
  ),
  const SkillCategory(
    title: 'AI/ML & Data',
    description:
        'Building intelligent systems from research to production—vision, language, automation, and ML Ops.',
    skills: [
      'TensorFlow',
      'LangChain',
      'OpenAI',
      'Computer Vision',
      'ML Ops',
      'AI Agents',
    ],
  ),
];

final List<ProjectItem> featuredProjects = [
  const ProjectItem(
    title: 'FoodLens AI',
    description:
        'Advanced food recognition platform with real-time nutrition insights powered by on-device TensorFlow Lite.',
    tags: ['Flutter', 'TensorFlow Lite', 'FastAPI', 'Python'],
    primaryLink: 'https://foodlens.app',
    primaryLabel: 'Live Demo',
    secondaryLink: 'https://github.com/dagim/foodlens-ai',
    secondaryLabel: 'Code',
    isFeatured: true,
  ),
  const ProjectItem(
    title: 'GlucoseSense',
    description:
        'Personalized nutrition coach that forecasts glucose levels and recommends meals using predictive modeling.',
    tags: ['React', 'Node.js', 'TensorFlow', 'MongoDB'],
    primaryLink: 'https://glucosesense.com',
    primaryLabel: 'Live Demo',
    secondaryLink: 'https://github.com/dagim/glucosesense',
    secondaryLabel: 'Code',
    isFeatured: true,
  ),
  const ProjectItem(
    title: 'KPI Dashboard Pro',
    description:
        'SaaS analytics suite with GPT insights, real-time dashboards, and automated reporting for exec teams.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'OpenAI API'],
    primaryLink: 'https://kpidashboard.pro',
    primaryLabel: 'Live Demo',
    secondaryLink: 'https://github.com/dagim/kpi-dashboard',
    secondaryLabel: 'Code',
  ),
  const ProjectItem(
    title: 'Dagverse AI Agents',
    description:
        'Autonomous AI agents orchestrating customer support, reporting, and data analysis for modern enterprises.',
    tags: ['Python', 'LangChain', 'React', 'Redis'],
    primaryLink: 'https://dagverse.ai',
    primaryLabel: 'Live Demo',
    secondaryLink: 'https://github.com/dagim/dagverse',
    secondaryLabel: 'Code',
    isFeatured: true,
  ),
];

final List<TestimonialItem> testimonials = [
  const TestimonialItem(
    quote:
        'Dagim delivered an exceptional AI-powered healthcare application. The accuracy and performance surpassed every benchmark we set.',
    client: 'Bekele Bunera',
    role: 'CTO, HealthTech Innovations',
    rating: 5,
    project: 'GlucoseSense',
  ),
  const TestimonialItem(
    quote:
        'Our GPT-driven analytics platform went from concept to launch in record time. Dagim is communicative, strategic, and detail-obsessed.',
    client: 'Ylfashewa Degefu',
    role: 'Product Director, FinTech Corp',
    rating: 5,
    project: 'KPI Dashboard Pro',
  ),
  const TestimonialItem(
    quote:
        'The food recognition AI Dagim built is phenomenal. He pairs deep ML expertise with a polished product sense that delights users.',
    client: 'Tsega\'ab Bekele',
    role: 'Founder, FoodTech Startup',
    rating: 5,
    project: 'FoodLens AI',
  ),
  const TestimonialItem(
    quote:
        'The AI agents Dagim architected now automate 70% of our customer workflows. He understands both business outcomes and AI systems.',
    client: 'Kidist Desta',
    role: 'CEO, Automation Solutions',
    rating: 5,
    project: 'Dagverse AI Agents',
  ),
];

const List<String> expertiseChips = [
  'Flutter & Dart',
  'React & Next.js',
  'FastAPI & Python',
  'TensorFlow & PyTorch',
  'AI Agent Development',
  'Cloud Architecture',
  'Mobile Development',
  'Machine Learning',
  'System Design',
];

const int backgroundGlowLight = 0x26838DF8;
const int backgroundGlowDark = 0x263B82F6;
