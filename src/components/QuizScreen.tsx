
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Clock, Award } from 'lucide-react';

const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes

  const quiz = {
    title: "React Hooks Fundamentals",
    totalQuestions: 5,
    timeLimit: 300, // 5 minutes
    difficulty: "Intermediate"
  };

  const questions = [
    {
      id: 1,
      question: "What is the primary purpose of the useState hook in React?",
      options: [
        "To manage component lifecycle",
        "To manage local state in functional components",
        "To handle side effects",
        "To create custom hooks"
      ],
      correct: 1,
      explanation: "useState is used to add state management to functional components, allowing them to have local state."
    },
    {
      id: 2,
      question: "Which of the following is a rule of hooks?",
      options: [
        "Hooks can be called inside loops",
        "Hooks must be called at the top level of functions",
        "Hooks can be called conditionally",
        "Hooks can be called in event handlers"
      ],
      correct: 1,
      explanation: "Hooks must always be called at the top level of React functions, never inside loops, conditions, or nested functions."
    },
    {
      id: 3,
      question: "What does useEffect hook handle?",
      options: [
        "State management",
        "Side effects and lifecycle events",
        "Component rendering",
        "Event handling"
      ],
      correct: 1,
      explanation: "useEffect handles side effects like data fetching, subscriptions, and manually changing the DOM."
    },
    {
      id: 4,
      question: "How do you create a custom hook?",
      options: [
        "Start the function name with 'hook'",
        "Start the function name with 'use'",
        "Use the @custom decorator",
        "Extend the Hook class"
      ],
      correct: 1,
      explanation: "Custom hooks are JavaScript functions whose names start with 'use' and that may call other hooks."
    },
    {
      id: 5,
      question: "What happens when you call useState with an initial value?",
      options: [
        "It returns only the current state",
        "It returns an array with current state and setter function",
        "It returns an object with state properties",
        "It returns a promise"
      ],
      correct: 1,
      explanation: "useState returns an array with two elements: the current state value and a function to update it."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers, selectedAnswer];
      setAnswers(newAnswers);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correct) correct++;
    });
    return Math.round((correct / questions.length) * 100);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResult) {
    const score = calculateScore();
    const correctAnswers = answers.filter((answer, index) => answer === questions[index].correct).length;
    
    return (
      <div className="max-w-4xl mx-auto space-y-6 animate-slide-up">
        <Card className="glass-morphism text-center">
          <CardHeader>
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
              <Award className="h-10 w-10 text-white" />
            </div>
            <CardTitle className="text-3xl">Quiz Complete! 🎉</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600">{score}%</div>
                <p className="text-sm text-muted-foreground">Final Score</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">{correctAnswers}/{questions.length}</div>
                <p className="text-sm text-muted-foreground">Correct Answers</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">+{score * 2}</div>
                <p className="text-sm text-muted-foreground">XP Earned</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <Button size="lg" className="mr-4">Continue Learning</Button>
              <Button variant="outline" size="lg">Review Answers</Button>
            </div>
          </CardContent>
        </Card>

        {/* Answer Review */}
        <Card className="glass-morphism">
          <CardHeader>
            <CardTitle>Answer Review</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {questions.map((question, index) => {
              const userAnswer = answers[index];
              const isCorrect = userAnswer === question.correct;
              
              return (
                <div key={question.id} className="p-4 border rounded-lg">
                  <div className="flex items-start gap-3 mb-3">
                    {isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mt-1" />
                    )}
                    <div className="flex-1">
                      <h4 className="font-medium mb-2">Q{index + 1}: {question.question}</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Your answer: {question.options[userAnswer]}
                      </p>
                      {!isCorrect && (
                        <p className="text-sm text-green-600 mb-2">
                          Correct answer: {question.options[question.correct]}
                        </p>
                      )}
                      <p className="text-sm text-blue-600">
                        💡 {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-slide-up">
      {/* Quiz Header */}
      <Card className="glass-morphism">
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <CardTitle className="text-2xl">{quiz.title}</CardTitle>
              <div className="flex items-center gap-4 mt-2">
                <Badge variant="secondary">{quiz.difficulty}</Badge>
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-red-50 px-3 py-2 rounded-lg">
                <Clock className="h-4 w-4 text-red-500" />
                <span className="font-mono text-red-600">{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="progress-glow" />
        </CardContent>
      </Card>

      {/* Question Card */}
      <Card className="glass-morphism">
        <CardHeader>
          <CardTitle className="text-xl">Q{currentQuestion + 1}: {currentQ.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentQ.options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 ${
                selectedAnswer === index
                  ? 'border-edtech-blue-500 bg-edtech-blue-50'
                  : 'border-gray-200 hover:border-edtech-blue-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswer === index
                    ? 'border-edtech-blue-500 bg-edtech-blue-500'
                    : 'border-gray-300'
                }`}>
                  {selectedAnswer === index && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
                <span>{option}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button 
          variant="outline" 
          disabled={currentQuestion === 0}
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
        >
          Previous
        </Button>
        
        <div className="flex gap-2">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index < currentQuestion
                  ? 'bg-green-500'
                  : index === currentQuestion
                    ? 'bg-edtech-blue-500'
                    : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <Button 
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
          className="bg-edtech-blue-500 hover:bg-edtech-blue-600"
        >
          {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </Button>
      </div>
    </div>
  );
};

export default QuizScreen;
