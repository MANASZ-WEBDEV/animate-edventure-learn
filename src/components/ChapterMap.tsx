
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Lock, CheckCircle, Star, Play, Trophy } from 'lucide-react';

const ChapterMap = () => {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const chapters = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      status: "completed",
      progress: 100,
      xp: 500,
      stars: 3,
      lessons: 12,
      description: "Master the building blocks of modern web development",
      position: { x: 50, y: 90 }
    },
    {
      id: 2,
      title: "React Basics",
      status: "completed",
      progress: 100,
      xp: 750,
      stars: 3,
      lessons: 15,
      description: "Learn component-based architecture and React fundamentals",
      position: { x: 20, y: 70 }
    },
    {
      id: 3,
      title: "React Hooks",
      status: "current",
      progress: 65,
      xp: 450,
      stars: 2,
      lessons: 10,
      description: "Dive deep into React Hooks and state management",
      position: { x: 70, y: 60 }
    },
    {
      id: 4,
      title: "State Management",
      status: "locked",
      progress: 0,
      xp: 0,
      stars: 0,
      lessons: 18,
      description: "Advanced state management with Redux and Context",
      position: { x: 40, y: 40 }
    },
    {
      id: 5,
      title: "API Integration",
      status: "locked",
      progress: 0,
      xp: 0,
      stars: 0,
      lessons: 14,
      description: "Connect your apps to external APIs and services",
      position: { x: 80, y: 30 }
    },
    {
      id: 6,
      title: "Testing & Deployment",
      status: "locked",
      progress: 0,
      xp: 0,
      stars: 0,
      lessons: 16,
      description: "Test your applications and deploy to production",
      position: { x: 60, y: 10 }
    }
  ];

  const getChapterStyle = (chapter: any) => {
    switch (chapter.status) {
      case "completed":
        return "bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg shadow-green-200 border-green-300";
      case "current":
        return "bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg shadow-blue-200 border-blue-300 animate-pulse-glow";
      case "locked":
        return "bg-gray-300 text-gray-600 border-gray-400 opacity-60";
      default:
        return "bg-white border-gray-200";
    }
  };

  const getPathColor = (fromChapter: any, toChapter: any) => {
    if (fromChapter.status === "completed" && toChapter.status !== "locked") {
      return "stroke-green-400";
    } else if (fromChapter.status === "completed") {
      return "stroke-gray-300";
    } else {
      return "stroke-gray-200";
    }
  };

  const selectedChapterData = selectedChapter ? chapters.find(c => c.id === selectedChapter) : null;

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4 gradient-text">🗺️ Learning Journey Map</h1>
        <p className="text-xl text-muted-foreground">Track your progress through the React Development path</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Visualization */}
        <div className="lg:col-span-2">
          <Card className="glass-morphism h-[600px] relative overflow-hidden">
            <CardContent className="p-0 h-full">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-blue-50 to-purple-50"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-float"></div>
              <div className="absolute top-20 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-200 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>

              {/* SVG for connecting paths */}
              <svg className="absolute inset-0 w-full h-full" style={{zIndex: 1}}>
                {chapters.slice(0, -1).map((chapter, index) => {
                  const nextChapter = chapters[index + 1];
                  return (
                    <line
                      key={`path-${chapter.id}`}
                      x1={`${chapter.position.x}%`}
                      y1={`${chapter.position.y}%`}
                      x2={`${nextChapter.position.x}%`}
                      y2={`${nextChapter.position.y}%`}
                      strokeWidth="3"
                      strokeDasharray="5,5"
                      className={`${getPathColor(chapter, nextChapter)} transition-all duration-300`}
                    />
                  );
                })}
              </svg>

              {/* Chapter nodes */}
              {chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{
                    left: `${chapter.position.x}%`,
                    top: `${chapter.position.y}%`,
                    zIndex: 2
                  }}
                  onClick={() => setSelectedChapter(chapter.id)}
                >
                  <div className={`
                    w-20 h-20 rounded-full border-4 flex items-center justify-center
                    transition-all duration-300 hover:scale-110
                    ${getChapterStyle(chapter)}
                  `}>
                    {chapter.status === "completed" && <CheckCircle className="h-8 w-8" />}
                    {chapter.status === "current" && <Play className="h-8 w-8" />}
                    {chapter.status === "locked" && <Lock className="h-8 w-8" />}
                  </div>
                  
                  {/* Chapter number */}
                  <div className="text-center mt-2">
                    <div className="text-xs font-bold bg-white px-2 py-1 rounded-full shadow-sm">
                      {chapter.id}
                    </div>
                  </div>

                  {/* Chapter title */}
                  <div className="text-center mt-1 max-w-24">
                    <p className="text-xs font-medium text-gray-700 leading-tight">
                      {chapter.title}
                    </p>
                  </div>

                  {/* Stars for completed chapters */}
                  {chapter.status === "completed" && (
                    <div className="flex justify-center mt-1 gap-1">
                      {[...Array(3)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${i < chapter.stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  )}

                  {/* Progress for current chapter */}
                  {chapter.status === "current" && (
                    <div className="mt-2 w-24 bg-white rounded-full p-1 shadow-sm">
                      <Progress value={chapter.progress} className="h-1" />
                    </div>
                  )}
                </div>
              ))}

              {/* Floating achievement badges */}
              <div className="absolute top-4 left-4 animate-bounce-gentle">
                <Badge className="bg-yellow-500 text-white">🏆 React Master</Badge>
              </div>
              <div className="absolute bottom-4 right-4 animate-bounce-gentle" style={{animationDelay: '1s'}}>
                <Badge className="bg-purple-500 text-white">⚡ Speed Learner</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chapter Details Sidebar */}
        <div className="space-y-6">
          {selectedChapterData ? (
            <Card className="glass-morphism">
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{selectedChapterData.title}</h3>
                  <p className="text-sm text-muted-foreground">{selectedChapterData.description}</p>
                </div>

                {/* Chapter stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{selectedChapterData.lessons}</div>
                    <p className="text-xs text-muted-foreground">Lessons</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{selectedChapterData.xp}</div>
                    <p className="text-xs text-muted-foreground">XP Points</p>
                  </div>
                </div>

                {/* Progress */}
                {selectedChapterData.status !== "locked" && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{selectedChapterData.progress}%</span>
                    </div>
                    <Progress value={selectedChapterData.progress} className="progress-glow" />
                  </div>
                )}

                {/* Stars */}
                {selectedChapterData.status === "completed" && (
                  <div className="text-center space-y-2">
                    <p className="text-sm font-medium">Chapter Rating</p>
                    <div className="flex justify-center gap-1">
                      {[...Array(3)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-6 w-6 ${i < selectedChapterData.stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Action button */}
                <div className="text-center">
                  {selectedChapterData.status === "completed" && (
                    <Button variant="outline" className="w-full">
                      <Trophy className="h-4 w-4 mr-2" />
                      Review Chapter
                    </Button>
                  )}
                  {selectedChapterData.status === "current" && (
                    <Button className="w-full bg-edtech-blue-500 hover:bg-edtech-blue-600">
                      <Play className="h-4 w-4 mr-2" />
                      Continue Learning
                    </Button>
                  )}
                  {selectedChapterData.status === "locked" && (
                    <Button disabled className="w-full">
                      <Lock className="h-4 w-4 mr-2" />
                      Complete Previous Chapter
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="glass-morphism">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-medium mb-2">Select a Chapter</h3>
                <p className="text-sm text-muted-foreground">Click on any chapter in the map to view details</p>
              </CardContent>
            </Card>
          )}

          {/* Overall Progress */}
          <Card className="glass-morphism">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Overall Progress
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Chapters Completed</span>
                  <span>2 / 6</span>
                </div>
                <Progress value={33} className="progress-glow" />
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-xl font-bold text-purple-600">1,700</div>
                    <p className="text-xs text-muted-foreground">Total XP</p>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-xl font-bold text-orange-600">6</div>
                    <p className="text-xs text-muted-foreground">Achievements</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card className="glass-morphism">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">Recent Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 bg-yellow-50 rounded-lg">
                  <span className="text-xl">🏆</span>
                  <div>
                    <p className="text-sm font-medium">React Expert</p>
                    <p className="text-xs text-muted-foreground">Completed React Basics</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 bg-green-50 rounded-lg">
                  <span className="text-xl">⚡</span>
                  <div>
                    <p className="text-sm font-medium">Quick Learner</p>
                    <p className="text-xs text-muted-foreground">Finished chapter in 2 days</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChapterMap;
