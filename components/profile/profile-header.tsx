"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ProfileHeaderProps {
  username: string;
  bio: string;
}

export function ProfileHeader({ username, bio }: ProfileHeaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div 
      className="flex flex-col items-center text-center mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 animate-profile-image shadow-2xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1 
        }}
      >
        <Image
              src="/profile1.png"
              alt="Profile"
              width={400}
              height={400}
              className="rounded-full"
              priority
            />
      </motion.div>
      <Link href="https://www.instagram.com/jungleglass/">             
      <motion.h1 
        className="text-4xl font-semibold text-slate-100 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        {username}
      </motion.h1>
      </Link>
      
      <motion.p 
        className="text-slate-200 text-base md:text-xl max-w-xs font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        {bio}
      </motion.p>
    </motion.div>
  );
}