
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Dashboard from '@/components/Dashboard';
import LectureScreen from '@/components/LectureScreen';
import QuizScreen from '@/components/QuizScreen';
import StudyPlanGenerator from '@/components/StudyPlanGenerator';
import ChapterMap from '@/components/ChapterMap';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'lecture':
        return <LectureScreen />;
      case 'quiz':
        return <QuizScreen />;
      case 'studyplan':
        return <StudyPlanGenerator />;
      case 'map':
        return <ChapterMap />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen w-full relative">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      {/* Main content area */}
      <div className="md:ml-64 min-h-screen p-4 md:p-8">
        {renderCurrentPage()}
      </div>
    </div>
  );
};

export default Index;
