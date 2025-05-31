
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, SkipForward, SkipBack, Volume2, Settings, MessageCircle, FileText } from 'lucide-react';

const LectureScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(320); // 5:20
  const [duration] = useState(1800); // 30:00
  const [showDoubtBox, setShowDoubtBox] = useState(false);

  const lecture = {
    title: "Introduction to React Hooks",
    instructor: "Dr. Sarah Chen",
    chapter: "React Fundamentals",
    level: "Intermediate",
    progress: 18
  };

  const keyPoints = [
    { time: "2:30", point: "What are React Hooks?", completed: true },
    { time: "5:20", point: "useState Hook Basics", active: true },
    { time: "8:45", point: "useEffect Hook", completed: false },
    { time: "12:10", point: "Custom Hooks", completed: false },
    { time: "15:30", point: "Hook Rules", completed: false }
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Lecture Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">{lecture.title}</h1>
          <div className="flex items-center gap-4 mt-2">
            <p className="text-muted-foreground">by {lecture.instructor}</p>
            <Badge variant="secondary">{lecture.level}</Badge>
            <Badge variant="outline">{lecture.chapter}</Badge>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => setShowDoubtBox(!showDoubtBox)}>
            <MessageCircle className="h-4 w-4 mr-2" />
            Ask Doubt
          </Button>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            Take Quiz
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Video Player */}
        <div className="lg:col-span-3 space-y-4">
          <Card className="glass-morphism overflow-hidden">
            <CardContent className="p-0">
              {/* Video Container */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
                  alt="React Hooks Tutorial"
                  className="w-full h-full object-cover"
                />
                
                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full w-16 h-16"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                  </Button>
                </div>

                {/* Live Animation Indicator */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-500 text-white animate-pulse-glow">
                    🔴 Live Animation
                  </Badge>
                </div>
              </div>

              {/* Video Controls */}
              <div className="p-4 bg-white/90 backdrop-blur">
                <div className="flex items-center gap-4 mb-3">
                  <Button size="sm" variant="ghost">
                    <SkipBack className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-edtech-blue-500 hover:bg-edtech-blue-600"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <Button size="sm" variant="ghost">
                    <SkipForward className="h-4 w-4" />
                  </Button>
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-sm font-mono">{formatTime(currentTime)}</span>
                    <Progress value={(currentTime / duration) * 100} className="flex-1" />
                    <span className="text-sm font-mono text-muted-foreground">{formatTime(duration)}</span>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Animated Explainer Box */}
          <Card className="glass-morphism animate-bounce-gentle">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                Real-time Animation Explanation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <h3 className="font-semibold mb-2">useState Hook in Action</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Watch as we demonstrate how the useState hook manages component state. 
                  The animation shows how state changes trigger re-renders in real-time.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">Current concept: State Management</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Doubt Solving Box */}
          {showDoubtBox && (
            <Card className="glass-morphism border-2 border-edtech-blue-200 animate-slide-up">
              <CardHeader>
                <CardTitle className="text-edtech-blue-600">🤔 Ask Your Doubt</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <textarea 
                    placeholder="Type your question here... Our AI will provide an instant animated explanation!"
                    className="w-full p-3 border rounded-lg resize-none h-24 focus:ring-2 focus:ring-edtech-blue-500 focus:border-transparent"
                  />
                  <div className="flex gap-2">
                    <Button className="bg-edtech-blue-500 hover:bg-edtech-blue-600">
                      Get Animated Answer
                    </Button>
                    <Button variant="outline" onClick={() => setShowDoubtBox(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar - Key Points & Progress */}
        <div className="space-y-6">
          {/* Progress Card */}
          <Card className="glass-morphism">
            <CardHeader>
              <CardTitle className="text-lg">Your Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-edtech-blue-600">{lecture.progress}%</div>
                <p className="text-sm text-muted-foreground">Complete</p>
              </div>
              <Progress value={lecture.progress} className="mb-4 progress-glow" />
              <p className="text-xs text-muted-foreground text-center">
                Keep going! You're doing great! 🎉
              </p>
            </CardContent>
          </Card>

          {/* Key Points */}
          <Card className="glass-morphism">
            <CardHeader>
              <CardTitle className="text-lg">Key Topics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {keyPoints.map((point, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-200 cursor-pointer hover:scale-105 ${
                    point.active 
                      ? 'bg-edtech-blue-100 border-2 border-edtech-blue-300' 
                      : point.completed 
                        ? 'bg-green-50 border border-green-200' 
                        : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full mt-1 ${
                    point.active 
                      ? 'bg-edtech-blue-500 animate-pulse' 
                      : point.completed 
                        ? 'bg-green-500' 
                        : 'bg-gray-300'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{point.point}</p>
                    <p className="text-xs text-muted-foreground">{point.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="glass-morphism">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                📝 Take Notes
              </Button>
              <Button variant="outline" className="w-full justify-start">
                🔖 Bookmark This
              </Button>
              <Button variant="outline" className="w-full justify-start">
                📤 Share with Friend
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LectureScreen;
