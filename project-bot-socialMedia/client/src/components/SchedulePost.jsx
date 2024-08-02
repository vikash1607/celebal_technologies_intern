import React, { useState } from 'react';
import axios from 'axios';

function SchedulePost() {
    const [content, setContent] = useState('');
    const [scheduledTime, setScheduledTime] = useState('');
    const [platform, setPlatform] = useState('Twitter');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/posting/schedule', {
                content,
                scheduledTime,
                platform,
            });
            alert('Post scheduled successfully!');
        } catch (error) {
            console.error(error);
            alert('Error scheduling post');
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl mb-4">Schedule a Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Content</label>
                    <textarea
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Scheduled Time</label>
                    <input
                        type="datetime-local"
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                        value={scheduledTime}
                        onChange={(e) => setScheduledTime(e.target.value)}
                    />
                </div>
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
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Schedule Post
                </button>
            </form>
        </div>
    );
}

export default SchedulePost;
