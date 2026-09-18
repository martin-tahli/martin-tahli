interface Experience {
  role: string;
  organization: string;
  period: string;
  summary: string;
  highlights: string[];
}
interface Education {
  qualification: string;
  institution: string;
  period: string;
}
interface Capability {
  title: string;
  summary: string;
  items: string[];
}
interface Profile {
  name: string;
  title: string;
  summary: string;
  background: string;
  github: string;
  repository: string;
  email?: string;
  linkedin?: string;
  cvPdf?: string;
  experience: Experience[];
  education: Education[];
  capabilities: Capability[];
  languages: string[];
}

/** Only approved positioning and known profile facts. Unknown fields stay absent. */
export const profile: Profile = {
  name: 'Martin Tahli',
  title: 'AI-Native Product & Systems Engineer',
  summary:
    'I design and build intelligent products, agentic systems, and software architectures — combining engineering, product thinking, automation, and human-centered design.',
  background:
    'My background is in firmware and software engineering. I approach products as systems: the technical architecture, the workflow, and the people using it need to work together.',
  github: 'https://github.com/martin-tahli',
  repository: 'https://github.com/martin-tahli/martin-tahli',
  experience: [],
  education: [],
  capabilities: [],
  languages: [],
};

export const navigation = [
  { label: 'Work', href: '/work/' },
  { label: 'Notes', href: '/notes/' },
  { label: 'About', href: '/about/' },
  { label: 'CV', href: '/cv/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const processSteps = [
  {
    title: 'Understand',
    description: 'Start with the problem, the people, and the constraints.',
  },
  {
    title: 'Design',
    description: 'Make product decisions and system boundaries explicit.',
  },
  {
    title: 'Build',
    description:
      'Use AI for implementation leverage, not as a substitute for judgment.',
  },
  {
    title: 'Validate',
    description:
      'Test behavior, failure paths, and the assumptions that matter.',
  },
  {
    title: 'Iterate',
    description: 'Use evidence to decide what needs to change.',
  },
] as const;
