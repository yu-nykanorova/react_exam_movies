import StarRatings from './react-star-ratings';

export const StarsRating = ({rating}: {rating: number}) => {
    return (
        <div>
            Rating: {rating}
            <StarRatings/>
        </div>
    );
};
