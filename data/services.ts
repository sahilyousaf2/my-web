export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies. From concept to deployment, we create digital experiences that engage and convert.',
    icon: 'Code'
  },
  {
    id: 2,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences. We build apps that users love and businesses can scale.',
    icon: 'Smartphone'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed for your users. We blend aesthetics with functionality to create experiences that drive results.',
    icon: 'Palette'
  },
  {
    id: 4,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment strategies. We help you leverage cloud technology for better performance and cost efficiency.',
    icon: 'Cloud'
  },
  {
    id: 5,
    title: 'Consulting',
    description: 'Strategic technology consulting to guide your digital transformation. We work with you to identify opportunities and implement solutions.',
    icon: 'Lightbulb'
  }
];
