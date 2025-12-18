import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import VisualTruth from './VisualTruth';
import CoreFeatures from './CoreFeatures';
import Industries from './Industries';
import StatsGrid from './StatsGrid';
import OperationArc from './OperationArc';
import Footer from './Footer';
import DemoModal from './DemoModal';

const LandingPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenDemo = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-100 selection:text-brand-900">
            <Navbar onOpenDemo={handleOpenDemo} />
            <main>
                <Hero onOpenDemo={handleOpenDemo} />
                <VisualTruth />
                <CoreFeatures />
                <Industries />
                <StatsGrid />
                <OperationArc onOpenDemo={handleOpenDemo} />
            </main>
            <Footer onOpenDemo={handleOpenDemo} />
            <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default LandingPage;
