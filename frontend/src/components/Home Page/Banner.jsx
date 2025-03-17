import React from 'react';

const Banner = ({ theme }) => {
    return (
        <div
            className={
                theme === "light"
                    ? "bg-red text-white p-2 mb-1 rounded-lg"
                    : "bg-red text-black p-2 mb-1 rounded-lg"
            }
        >
            <p className="text-lg font-sans">
                🚨 Trending: Major event happening right now! Stay tuned for updates. Major event happening right now! Stay tuned for.
            </p>
        </div>
    );
};

export default Banner;