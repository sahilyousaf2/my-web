import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  link?: string;
  delay?: number;
}

export default function PortfolioCard({ image, title, category, link = '#', delay = 0 }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg"
    >
      <Link href={link} className="block">
        <div className="relative h-64 overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
            <p className="text-sm text-primary font-medium">{category}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
