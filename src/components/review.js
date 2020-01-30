import React from 'react';
import { FiLink2 } from 'react-icons/fi';

const Review = ({text, author, link, source}) => {
  return (
    <div className="slide">
      <p className="slide-text">{text}</p>
      <div className="text-right">
        <p className="text-1xl slide-author">— {author}</p>
        <p>
          <FiLink2 className="inline mb-1 mr-2"/>
          <a className="bg-link" title="Lien vers la source" href={link}>Avis posté sur {source}</a>
        </p>
      </div>
    </div>
  );
}
 
export default Review;