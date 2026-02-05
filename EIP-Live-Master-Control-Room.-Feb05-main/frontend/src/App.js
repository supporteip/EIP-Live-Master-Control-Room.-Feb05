import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { LoadingScreen } from "@/components/shared/LoadingScreen";

// Stage Pages
import Stage1Boot from "@/pages/Stage1Boot";
import Stage2Approach from "@/pages/Stage2Approach";
import Stage3Compound from "@/pages/Stage3Compound";
import Stage4Security from "@/pages/Stage4Security";
import Stage5Multiviewer from "@/pages/Stage5Multiviewer";

// 6E Module Pages
import EducationPage from "@/pages/EducationPage";
import ExecutionPage from "@/pages/ExecutionPage";
import EntertainmentPage from "@/pages/EntertainmentPage";
import ExecutivesPage from "@/pages/ExecutivesPage";
import EnsemblePage from "@/pages/EnsemblePage";
import EngagePage from "@/pages/EngagePage";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [showApp, setShowApp] = useState(false);

    useEffect(() => {
        // Check if this is the first load in session
        const hasLoaded = sessionStorage.getItem('eip-loaded');
        if (hasLoaded) {
            setIsLoading(false);
            setShowApp(true);
        }
    }, []);

    const handleLoadingComplete = () => {
        sessionStorage.setItem('eip-loaded', 'true');
        setIsLoading(false);
        setTimeout(() => setShowApp(true), 100);
    };

    return (
        <>
            {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
            {showApp && (
                <BrowserRouter>
                    <Routes>
                        {/* Stage 1 - System Boot (Landing) */}
                        <Route path="/" element={<Stage1Boot />} />
                        
                        {/* Stage 2 - Stadium Approach (Auto-advance) */}
                        <Route path="/stage2" element={<Stage2Approach />} />
                        
                        {/* Stage 3 - Broadcast Compound */}
                        <Route path="/stage3" element={<Stage3Compound />} />
                        
                        {/* Stage 4 - PCR Security Gate */}
                        <Route path="/stage4" element={<Stage4Security />} />
                        
                        {/* Stage 5 - Multiviewer Hub */}
                        <Route path="/stage5" element={<Stage5Multiviewer />} />

                        {/* 6E Module Pages */}
                        <Route path="/education" element={<EducationPage />} />
                        <Route path="/execution" element={<ExecutionPage />} />
                        <Route path="/entertainment" element={<EntertainmentPage />} />
                        <Route path="/executives" element={<ExecutivesPage />} />
                        <Route path="/ensemble" element={<EnsemblePage />} />
                        <Route path="/engage" element={<EngagePage />} />
                    </Routes>
                </BrowserRouter>
            )}
        </>
    );
}

export default App;
