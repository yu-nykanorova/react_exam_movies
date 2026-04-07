import {StarFull} from "../icons/stars/StarFull.tsx";
import {StarHalf} from "../icons/stars/StarHalf.tsx";
import {StarEmpty} from "../icons/stars/StarEmpty.tsx";
import type {FC} from "react";

type StarsRatingProps = {
    rating: number;
    votes: number;
    className?: string;
}

export const StarsRating: FC<StarsRatingProps> = ({rating, votes, className}) => {
    const stars = rating / 2;

    return (
        <div className={className}>
            <p className="px-2 text-[14px] text-brand-light-blue">
                Rating: {(rating / 2).toFixed(2)}
                <span className="text-brand-white"> ({votes} votes)</span>
            </p>
            <div className="px-2 py-1 flex">
                {
                    [1, 2, 3, 4, 5].map((i) => {
                        if (i <= stars) {
                            return <span key={i}><StarFull/></span>
                        }
                        if (i - 0.5 <= stars) {
                            return <span key={i}><StarHalf/></span>
                        }
                        return <span key={i}><StarEmpty/></span>
                    })
                }
            </div>
        </div>
    );
};





