import React from 'react';

interface TextComponentProps {
  text: string;
  className?: string;
  color?: string;
}

const colorClasses: { [key: string]: string } = {
    red: 'bg-red-100',
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    yellow: 'bg-yellow-100',
    // Aggiungi altri colori se necessario
  };


const TextComponent: React.FC<TextComponentProps> = ({ text, className, color='white' }) => {
    const colorClass = colorClasses[color] || 'bg-blue-100';

  return (
    <div className={`relative w-full mt-4 px-4 group ${className}`}> {/* className={`relative w-full mt-4 px-4 group hover:-translate-y-2 ${className}`} */}
      <div className={`relative px-6 py-4 ${colorClass} rounded-xl shadow-md`}>
        <p className="text-lg font-medium text-black">
          {text}
        </p>
      </div>
    </div>
  );
};

export default TextComponent;