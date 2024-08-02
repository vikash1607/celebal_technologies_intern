import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Trends() {
    const [platform, setPlatform] = useState('Twitter');
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        const fetchTrends = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/trend?platform=${platform}`);
                setTrends(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTrends();
    }, [platform]);

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl mb-4">Trends</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Platform</label>
                <select
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                >
                    <option value="Twitter">Twitter</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                </select>
            </div>
            {trends.length > 0 ? (
                <ul>
                    {trends.map((trend, index) => (
                        <li key={index} className="mb-2">
                            {trend}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No trends available</p>
            )}
        </div>
    );
}

export default Trends;
