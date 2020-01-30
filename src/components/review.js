import React from 'react';

const Review = ({text, author, link, source}) => {
  return (
    <div className="slide">
      <p className="slide-text">{text}</p>
      <div className="text-right">
        <p className="slide-author">— {author}</p>
        <p className="text-base"><a className="coor-link" href={link}>Avis posté sur {source}</a></p>
      </div>
    </div>
  );
}
 
export default Review;