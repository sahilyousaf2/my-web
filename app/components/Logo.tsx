import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Logo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-12 h-12 bg-primary rounded" />;
  }

  const logoSrc = theme === 'dark' ? '/images/logo-dark.png' : '/images/logo-light.png';

  return (
    <Image
      src={logoSrc}
      alt="Chris Tech Solution Logo"
      width={40}
      height={40}
      priority
      className="h-auto"
    />
  );
}
