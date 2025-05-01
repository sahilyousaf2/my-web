import { ProjectCardType } from "@/app/types/type"
export const ProjectCardData : ProjectCardType[] =[
    {
      title: 'MOTU BURGER',
      description:
        'Motu Burger is a modern food delivery platform offering a curated selection of popular fast foods like burgers, pizza, and biryani. Users can browse by city and restaurant, explore featured dishes, and read testimonials—all within a clean, responsive design. Built with Next.js and Tailwind CSS, the site ensures a seamless experience across devices.',
      tagColor: 'bg-orange-200 text-orange-600',
      buttonColor: 'bg-yellow-500 text-black',
      glow: 'shadow-[0_0_15px_5px_rgba(255,193,7,0.4)]',
      image: '/project1.png',
      reverse: false,
      link:"https://simple-web-iota.vercel.app/"
      
    },
    {
      title: 'Dynamic Resume Builder',
      description:
        'Dynamic Resume Builder is a user-friendly web application that enables you to create a professional, shareable resume effortlessly. Simply input your personal details, education, experience, and skills, and the app generates a polished resume for you. You can download it as a PDF or share it via a unique link. The responsive design ensures a seamless experience across all devices.',
      tagColor: 'bg-blue-200 text-blue-600',
      buttonColor: 'bg-blue-600 text-white',
      glow: 'shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]',
      image: '/project2.png',
      reverse: true,
      link:"https://dynamic-resume-zeta-gold.vercel.app/"
    },
    {
      title: 'Github Account Finder',
      description:
        "GitHub Account Finder Quickly search for any GitHub user and explore their profile, repositories, and activity in a clean, responsive interface.",
      tagColor: 'bg-green-200 text-green-600',
      buttonColor: 'bg-green-500 text-white',
      glow: 'shadow-[0_0_15px_5px_rgba(34,197,94,0.4)]',
      image: '/project3.png',
      reverse: false,
      link:"https://github-account-finder-olive.vercel.app/"
  
    },
  ]