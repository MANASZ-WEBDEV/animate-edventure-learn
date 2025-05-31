
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookOpen, Clock, Target, Brain, Calendar, CheckCircle } from 'lucide-react';

const StudyPlanGenerator = () => {
  const [formData, setFormData] = useState({
    subject: '',
    syllabus: '',
    duration: '',
    studyHours: '',
    difficulty: '',
    goals: ''
  });
  const [showPlan, setShowPlan] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsGenerating(false);
      setShowPlan(true);
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const useCases = [
    {
      id: 1,
      title: "Frontend Development Bootcamp",
      description: "Complete guide to becoming a React developer",
      tags: ["React", "JavaScript", "CSS"],
      duration: "12 weeks",
      level: "Beginner to Advanced",
      icon: "💻"
    },
    {
      id: 2,
      title: "Data Science Journey",
      description: "Master data analysis and machine learning",
      tags: ["Python", "Statistics", "ML"],
      duration: "16 weeks",
      level: "Intermediate",
      icon: "📊"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      description: "Learn modern marketing strategies and tools",
      tags: ["SEO", "Social Media", "Analytics"],
      duration: "8 weeks",
      level: "Beginner",
      icon: "📱"
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Build iOS and Android apps from scratch",
      tags: ["React Native", "Flutter", "Mobile"],
      duration: "14 weeks",
      level: "Intermediate",
      icon: "📱"
    }
  ];

  const generatedPlan = {
    title: "Personalized React Development Study Plan",
    duration: "10 weeks",
    totalHours: 60,
    weeks: [
      {
        week: 1,
        title: "JavaScript Fundamentals",
        topics: ["Variables & Data Types", "Functions", "Arrays & Objects", "ES6 Features"],
        hours: 6,
        projects: ["Calculator App", "Todo List"]
      },
      {
        week: 2,
        title: "React Basics",
        topics: ["Components", "JSX", "Props", "State"],
        hours: 6,
        projects: ["Profile Card", "Counter App"]
      },
      {
        week: 3,
        title: "React Hooks",
        topics: ["useState", "useEffect", "useContext", "Custom Hooks"],
        hours: 6,
        projects: ["Weather App", "Recipe Finder"]
      },
      {
        week: 4,
        title: "State Management",
        topics: ["Redux Basics", "Redux Toolkit", "Context API"],
        hours: 6,
        projects: ["Shopping Cart", "Task Manager"]
      }
    ]
  };

  if (isGenerating) {
    return (
      <div className="max-w-4xl mx-auto space-y-6 animate-slide-up">
        <Card className="glass-morphism text-center py-12">
          <CardContent>
            <div className="animate-spin w-16 h-16 border-4 border-edtech-blue-200 border-t-edtech-blue-600 rounded-full mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold mb-4">Generating Your Personalized Study Plan</h2>
            <p className="text-muted-foreground mb-6">Our AI is analyzing your syllabus and creating an optimized learning path...</p>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Analyzing syllabus content
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <div className="animate-spin w-4 h-4 border-2 border-edtech-blue-200 border-t-edtech-blue-600 rounded-full"></div>
                Creating learning timeline
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                Optimizing study schedule
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showPlan) {
    return (
      <div className="max-w-6xl mx-auto space-y-6 animate-slide-up">
        {/* Plan Header */}
        <Card className="glass-morphism">
          <CardHeader>
            <div className="text-center">
              <CardTitle className="text-3xl mb-4 gradient-text">🎯 Your Personalized Study Plan</CardTitle>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{generatedPlan.duration}</div>
                  <p className="text-sm text-muted-foreground">Total Duration</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{generatedPlan.totalHours}h</div>
                  <p className="text-sm text-muted-foreground">Study Hours</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{generatedPlan.weeks.length}</div>
                  <p className="text-sm text-muted-foreground">Modules</p>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Weekly Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {generatedPlan.weeks.map((week) => (
            <Card key={week.week} className="glass-morphism hover:scale-105 transition-transform duration-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Week {week.week}: {week.title}</CardTitle>
                  <Badge variant="outline">{week.hours}h</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Topics to Cover
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {week.topics.map((topic, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Projects
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {week.projects.map((project, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-edtech-blue-500 rounded-full"></div>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center space-x-4">
          <Button size="lg" className="bg-edtech-blue-500 hover:bg-edtech-blue-600">
            Start Learning Journey
          </Button>
          <Button variant="outline" size="lg" onClick={() => setShowPlan(false)}>
            Modify Plan
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-slide-up">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4 gradient-text">🚀 AI Study Plan Generator</h1>
        <p className="text-xl text-muted-foreground">Create a personalized learning path tailored to your goals</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form */}
        <div className="lg:col-span-2">
          <Card className="glass-morphism">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Tell Us About Your Learning Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject/Field</Label>
                    <Input
                      id="subject"
                      placeholder="e.g., React Development, Data Science"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Target Duration</Label>
                    <Select onValueChange={(value) => handleInputChange('duration', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4weeks">4 weeks</SelectItem>
                        <SelectItem value="8weeks">8 weeks</SelectItem>
                        <SelectItem value="12weeks">12 weeks</SelectItem>
                        <SelectItem value="16weeks">16 weeks</SelectItem>
                        <SelectItem value="24weeks">24 weeks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="studyHours">Daily Study Hours</Label>
                    <Select onValueChange={(value) => handleInputChange('studyHours', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Hours per day" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1hour">1 hour</SelectItem>
                        <SelectItem value="2hours">2 hours</SelectItem>
                        <SelectItem value="3hours">3 hours</SelectItem>
                        <SelectItem value="4hours">4+ hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="difficulty">Current Level</Label>
                    <Select onValueChange={(value) => handleInputChange('difficulty', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="syllabus">Your Syllabus/Curriculum</Label>
                  <Textarea
                    id="syllabus"
                    placeholder="Paste your syllabus here or describe the topics you need to cover..."
                    value={formData.syllabus}
                    onChange={(e) => handleInputChange('syllabus', e.target.value)}
                    className="min-h-32"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">Specific Goals</Label>
                  <Textarea
                    id="goals"
                    placeholder="What do you want to achieve? Any specific projects or exams?"
                    value={formData.goals}
                    onChange={(e) => handleInputChange('goals', e.target.value)}
                    className="min-h-24"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-edtech-blue-500 hover:bg-edtech-blue-600"
                >
                  Generate My Study Plan 🚀
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Real-world Use Cases */}
        <div className="space-y-6">
          <Card className="glass-morphism">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Popular Learning Paths
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {useCases.map((useCase) => (
                <div 
                  key={useCase.id}
                  className="p-4 border rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer"
                  onClick={() => {
                    setFormData({
                      subject: useCase.title,
                      syllabus: useCase.description,
                      duration: useCase.duration,
                      studyHours: '2hours',
                      difficulty: useCase.level.toLowerCase(),
                      goals: `Master ${useCase.tags.join(', ')}`
                    });
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{useCase.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{useCase.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{useCase.description}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {useCase.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {useCase.duration}
                        </span>
                        <span>{useCase.level}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-morphism">
            <CardHeader>
              <CardTitle>✨ AI Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Personalized learning path
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Adaptive difficulty adjustment
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Real-world project suggestions
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Progress tracking & milestones
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudyPlanGenerator;
