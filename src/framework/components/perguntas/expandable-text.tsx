"use client"
import { useState } from 'react';
import Image from 'next/image';
import ArrowImage from '../../../../assets/images/arrow.svg'; // Importe a imagem da seta para baixo
import '../../screens/perguntas-page/styles.scss'

interface ExpandableTextProps {
  initialText: string;
  expandedText: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ initialText, expandedText }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`expandable-text ${expanded ? 'expanded' : ''}`}>
      <div className="title text-[18px]">
        {initialText}
        <div className="w-6">
          <button className={`expand-button ${expanded ? 'transition-all rotate-180' : 'transition-all'}`} onClick={toggleExpanded}>
            <Image src={ArrowImage} alt='' />
          </button>
        </div>
      </div>
      <div className="description" style={{ display: expanded ? 'block' : 'none' }}>
        <div className="divider"></div>
        {expandedText}
      </div>
    </div>
  );
};


export default ExpandableText;