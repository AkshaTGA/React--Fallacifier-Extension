import starFilled from '../star2.png';
import starEmpty from '../empty_star2.png';
import { Fragment } from 'react';

const StarRating = ({ stars=4 }) => {
  const totalStars = 5;

  return (
<Fragment>
      {[...Array(totalStars)].map((_, i) => (
        <img
          key={i}
          src={i < stars ? starFilled : starEmpty}
          alt={i < stars ? 'filled star' : 'empty star'}
          width={15}
          height={15}
        />
      ))}
    </Fragment>
  );
};

export default StarRating;
