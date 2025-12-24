
import React from 'react';

interface TeamMemberImageProps {
  src: string;
  alt: string;
  className?: string;
}

const TeamMemberImage: React.FC<TeamMemberImageProps> = ({ src, alt, className }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      loading="lazy"
    />
  );
};

export default TeamMemberImage;
