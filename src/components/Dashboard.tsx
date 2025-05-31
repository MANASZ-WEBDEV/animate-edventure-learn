
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, Target, Star, BookOpen, Clock, Award } from 'lucide-react';

const Dashboard = () => {
  const userStats = {
    name: "Alex Thompson",
    level: 12,
    xp: 2350,
    xpToNext: 3000,
    streak: 7,
    coursesCompleted: 8,
    totalStudyTime: 89
  };

  const goals = [
    { id: 1, title: "Complete React Fundamentals", progress: 75, target: "By Friday", type: "course" },
    { id: 2, title: "Study 2 hours daily", progress: 60, target: "This week", type: "habit" },
    { id: 3, title: "Pass JavaScript Quiz", progress: 0, target: "Tomorrow", type: "assessment" }
  ];

  const recentAchievements = [
    { id: 1, title: "Speed Learner", description: "Completed 5 lessons in one day", icon: "⚡" },
    { id: 2, title: "Quiz Master", description: "Scored 100% in 3 consecutive quizzes", icon: "🎯" },
    { id: 3, title: "Consistency Champion", description: "Maintained 7-day study streak", icon: "🔥" }
  ];

  const upcomingLessons = [
    { id: 1, title: "Advanced React Hooks", subject: "React Development", duration: "45 min" },
    { id: 2, title: "State Management with Redux", subject: "React Development", duration: "60 min" },
    { id: 3, title: "Building REST APIs", subject: "Backend Development", duration: "90 min" }
  ];

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Welcome Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-2">Welcome back, {userStats.name}! 👋</h1>
        <p className="text-muted-foreground text-lg">Ready to continue your learning journey?</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-morphism hover:scale-105 transition-transform duration-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-edtech-blue-100">
                <Star className="h-6 w-6 text-edtech-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">Level {userStats.level}</p>
                <p className="text-sm text-muted-foreground">Current Level</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-morphism hover:scale-105 transition-transform duration-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-edtech-purple-100">
                <Trophy className="h-6 w-6 text-edtech-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{userStats.coursesCompleted}</p>
                <p className="text-sm text-muted-foreground">Courses Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-morphism hover:scale-105 transition-transform duration-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-orange-100">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{userStats.totalStudyTime}h</p>
                <p className="text-sm text-muted-foreground">Study Time</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-morphism hover:scale-105 transition-transform duration-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-green-100">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{userStats.streak}</p>
                <p className="text-sm text-muted-foreground">Day Streak 🔥</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* XP Progress */}
      <Card className="glass-morphism">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Experience Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Level {userStats.level}</span>
              <span className="text-sm text-muted-foreground">
                {userStats.xp} / {userStats.xpToNext} XP
              </span>
            </div>
            <Progress 
              value={(userStats.xp / userStats.xpToNext) * 100} 
              className="progress-glow"
            />
            <p className="text-sm text-muted-foreground">
              {userStats.xpToNext - userStats.xp} XP until next level!
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Goals Section */}
        <Card className="glass-morphism">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-500" />
              Current Goals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {goals.map((goal) => (
              <div key={goal.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">{goal.title}</h4>
                  <Badge variant="outline">{goal.target}</Badge>
                </div>
                <Progress value={goal.progress} className="h-2" />
                <p className="text-sm text-muted-foreground">{goal.progress}% complete</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card className="glass-morphism">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAchievements.map((achievement) => (
              <div key={achievement.id} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 hover:scale-105 transition-transform duration-200">
                <span className="text-2xl">{achievement.icon}</span>
                <div>
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Lessons */}
      <Card className="glass-morphism">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-green-500" />
            Continue Learning
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingLessons.map((lesson) => (
              <div key={lesson.id} className="p-4 rounded-lg border border-border hover:shadow-lg transition-all duration-200 hover:scale-105">
                <h4 className="font-medium mb-2">{lesson.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{lesson.subject}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                  <Button size="sm">Start</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
