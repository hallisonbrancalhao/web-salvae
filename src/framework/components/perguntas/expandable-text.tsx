"use client"
import { useState } from 'react';
import Image from 'next/image';
import ArrowImage from '../../../../assets/images/arrow.svg'; // Importe a imagem da seta para baixo
import '../../screens/perguntas/styles.scss'

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
      <div className="container-text">
        {initialText}
        <div className="container-botao">
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