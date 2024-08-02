import React, { useState } from 'react';
import axios from 'axios';

function Interaction() {
    const [postId, setPostId] = useState('');
    const [comment, setComment] = useState('');
    const [platform, setPlatform] = useState('Twitter');

    const handleLike = async () => {
        try {
            await axios.post('http://localhost:5000/api/interaction/like', { postId, platform });
            alert('Post liked successfully!');
        } catch (error) {
            console.error(error);
            alert('Error liking post');
        }
    };

    const handleComment = async () => {
        try {
            await axios.post('http://localhost:5000/api/interaction/comment', { postId, platform, comment });
            alert('Comment added successfully!');
        } catch (error) {
            console.error(error);
            alert('Error adding comment');
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl mb-4">Interaction</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Post ID</label>
                <input
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    value={postId}
                    onChange={(e) => setPostId(e.target.value)}
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
            <div className="mb-4">
                <label className="block text-gray-700">Comment</label>
                <textarea
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>
            <button
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mr-2"
                onClick={handleLike}
            >
                Like
            </button>
            <button
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                onClick={handleComment}
            >
                Comment
            </button>
        </div>
    );
}

export default Interaction;
