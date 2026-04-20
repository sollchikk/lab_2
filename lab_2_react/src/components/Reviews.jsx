import React, { useState, useEffect } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Отримуємо дані з API
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
            .then((response) => response.json())
            .then((data) => {
                setReviews(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching reviews:", error);
                setLoading(false);
            });
    }, []);

    return (


        <section className="bg-white p-[20px] border-2 border-[#f2b6cc] rounded-[10px] shadow-sm hover:shadow-md transition-all duration-300 group">

            {/* Заголовок у загальному стилі */}
            <h2 className="mt-0 text-[24px] font-bold text-[#a64d79] border-b-2 border-[#f2b6cc] pb-[5px] mb-[20px] uppercase tracking-tight">
                Reviews
            </h2>

            {loading ? (
                <p className="text-[#4a3a40] text-center italic">Loading reviews...</p>
            ) : (
                // Контейнер для списку відгуків
                <div className="flex flex-col gap-[15px]">
                    {reviews.map((review) => (
                        // Окремий відгук - біла плашка з тіню всередині
                        <div
                            key={review.id}
                            className="p-[15px] bg-white border border-gray-200 rounded-[8px] shadow-inner"
                        >
                            {/* Заголовок відгуку (Name) - фіолетовий, жирний */}
                            <h3 className="font-bold text-[#a64d79] text-[15px] mb-[3px] leading-tight">
                                {review.name}
                            </h3>

                            {/* Email - сірий, маленький */}
                            <p className="text-[12px] text-gray-500 mb-[8px] italic">
                                {review.email}
                            </p>

                            {/* Текст відгуку */}
                            <p className="text-[#4a3a40] text-[14px] leading-relaxed">
                                {review.body}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Reviews; 