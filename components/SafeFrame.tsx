import React from 'react';

interface SafeFrameProps {
  src: string;
  title?: string;
}

export const SafeFrame: React.FC<SafeFrameProps> = ({ src, title = 'Embedded Content' }) => {
  return (
    <iframe
      src={src}
      title={title}
      className="block h-full w-full border-0"
      allowFullScreen
      sandbox="allow-scripts allow-same-origin allow-forms" // Best practice for security
      referrerPolicy="no-referrer"
    />
  );
};