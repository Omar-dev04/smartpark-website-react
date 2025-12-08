import { useEffect, useState } from "react";
import "./RatingCard.css";

export default function RatingCard() {
    const [rating, setRating] = useState(null);
    const [reviews, setReviews] = useState(null);
    const getStars = (value) => {
        if (!value) return "☆☆☆☆☆"; 
        const filled = "⭐".repeat(Math.floor(value));
        const empty = "☆".repeat(5 - Math.floor(value));
        return filled + empty;
    };
    useEffect(() => {
        setRating(4.7);  
        setReviews(256);  
    }, []);
    return (
        <div className="p-3 text-center cardsdashboard">
            <h5 className="fw-bold">Application Rating</h5>
            <div className="mt-2" style={{ fontSize: "30px",color:"#163960" }}>
                {getStars(rating)}
            </div>
            <h2 className="mt-2 mb-0">
                {rating?.toFixed(1)}
            </h2>
            <p className="mb-0">
                Based on {reviews} reviews
            </p>
        </div>
    );
}
