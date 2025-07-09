import React from 'react';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const totalStars = 5;
  const stars = Array.from({ length: totalStars }, (_, index) =>
    index < rating ? '★' : '☆'
  );

  return (
    <div style={{ color: '#fbbf24', fontSize: '20px',marginLeft: '5px' }}>
      {stars.join(' ')}
    </div>
  );
};

export default StarRating;