export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Chris Anderson',
    role: 'Founder & Lead Developer',
    bio: 'A passionate developer with 10+ years of experience building scalable web applications. Chris leads our technical vision and mentors the team.',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Full Stack Engineer',
    bio: 'Expert in modern frontend and backend technologies. Sarah specializes in building performant applications and loves solving complex problems.',
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    role: 'Mobile Developer',
    bio: 'Specialized in iOS and Android development. Marcus creates seamless mobile experiences that users interact with daily.',
  },
  {
    id: 4,
    name: 'Elena Martinez',
    role: 'UI/UX Designer',
    bio: 'Creative designer focused on user-centered design. Elena creates beautiful interfaces that are both functional and delightful.',
  }
];
