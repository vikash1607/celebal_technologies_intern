import React from 'react';
import SchedulePost from './components/SchedulePost';
import Analytics from './components/Analytics';
import Interaction from './components/Interaction';
import Trends from './components/Trends';

function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <header className="bg-blue-600 text-white py-4 w-full">
                <h1 className="text-3xl text-center">Social Media Bot</h1>
            </header>
            <main className="flex-grow flex flex-col items-center py-8 space-y-8">
                <SchedulePost />
                <Analytics />
                <Interaction />
                <Trends />
            </main>
        </div>
    );
}

export default App;
