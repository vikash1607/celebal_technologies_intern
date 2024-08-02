import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Analytics() {
    const [analytics, setAnalytics] = useState(null);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/analytics');
                setAnalytics(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAnalytics();
    }, []);

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl mb-4">Analytics</h2>
            {analytics ? (
                <div>
                    <p>Total Posts: {analytics.totalPosts}</p>
                    <h3 className="text-xl mt-4">Platforms:</h3>
                    <ul>
                        {Object.entries(analytics.platforms).map(([platform, count]) => (
                            <li key={platform}>
                                {platform}: {count}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Analytics;
