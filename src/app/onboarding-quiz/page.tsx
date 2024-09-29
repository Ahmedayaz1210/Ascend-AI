"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight } from "lucide-react"

type QuestionType = 'text' | 'single-choice' | 'multiple-choice';

interface Question {
  id: number;
  question: string;
  type: QuestionType;
  options?: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What are your primary areas of focus for habit improvement? (Select up to 3)",
    type: "multiple-choice",
    options: [
      "Health and fitness",
      "Productivity",
      "Personal development",
      "Relationships",
      "Career growth",
      "Financial management",
      "Creativity",
      "Other (please specify)"
    ]
  },
  {
    id: 2,
    question: "How satisfied are you with your current habits overall?",
    type: "single-choice",
    options: [
      "Very dissatisfied",
      "Somewhat dissatisfied",
      "Neutral",
      "Somewhat satisfied",
      "Very satisfied"
    ]
  },
  {
    id: 3,
    question: "What time of day are you typically most productive?",
    type: "single-choice",
    options: [
      "Early morning",
      "Late morning",
      "Afternoon",
      "Evening",
      "Late night"
    ]
  },
  {
    id: 4,
    question: "How would you describe your current lifestyle?",
    type: "single-choice",
    options: [
      "Very busy, little free time",
      "Balanced between work and personal life",
      "Flexible schedule with ample free time",
      "Other (please specify)"
    ]
  },
  {
    id: 5,
    question: "What are your biggest challenges when it comes to forming new habits? (Select all that apply)",
    type: "multiple-choice",
    options: [
      "Lack of motivation",
      "Inconsistency",
      "Time management",
      "Distractions",
      "Lack of accountability",
      "Difficulty tracking progress",
      "Other (please specify)"
    ]
  },
  {
    id: 6,
    question: "How do you prefer to track your progress?",
    type: "single-choice",
    options: [
      "Digital tools (apps, spreadsheets)",
      "Physical journals or planners",
      "Visual methods (charts, stickers)",
      "Don't currently track progress"
    ]
  },
  {
    id: 7,
    question: "What type of rewards or incentives motivate you most?",
    type: "single-choice",
    options: [
      "Personal achievements (leveling up, badges)",
      "Social recognition",
      "Tangible rewards (treats, purchases)",
      "Progress visualization",
      "Other (please specify)"
    ]
  },
  {
    id: 8,
    question: "How much time can you realistically dedicate to new habits each day?",
    type: "single-choice",
    options: [
      "Less than 15 minutes",
      "15-30 minutes",
      "30-60 minutes",
      "More than 60 minutes"
    ]
  },
  {
    id: 9,
    question: "Do you prefer to:",
    type: "single-choice",
    options: [
      "Focus on one habit at a time",
      "Work on multiple habits simultaneously"
    ]
  },
  {
    id: 10,
    question: "What's your preferred learning style?",
    type: "single-choice",
    options: [
      "Reading",
      "Watching videos",
      "Hands-on practice",
      "Group discussions or collaboration"
    ]
  },
  {
    id: 11,
    question: "Are there any specific habits that you're interested in implementing? (Please name all)",
    type: "text"
  },
  {
    id: 12,
    question: "What's your ultimate goal for using this habit-tracking app?",
    type: "text"
  }
];

type Answers = Record<number, string | string[]>;

export default function OnboardingQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [direction, setDirection] = useState(0)
  const [otherText, setOtherText] = useState<Record<number, string>>({})

  const handleNext = () => {
    const currentAnswer = answers[questions[currentQuestion].id]
    if (currentAnswer === undefined || (Array.isArray(currentAnswer) && currentAnswer.length === 0)) {
      alert("Please answer the question before proceeding.")
      return
    }
    if (currentQuestion < questions.length - 1) {
      setDirection(1)
      setCurrentQuestion((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setDirection(-1)
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const question = questions[currentQuestion];
    let value: string | string[];
  
    switch (question.type) {
      case 'multiple-choice':
        const currentAnswers = answers[question.id] as string[] || [];
        if (e.target.checked) {
          value = [...currentAnswers, e.target.value];
        } else {
          value = currentAnswers.filter(answer => answer !== e.target.value);
        }
        break;
      case 'single-choice':
      case 'text':
        value = e.target.value;
        if (question.type === 'single-choice' && value === "Other (please specify)") {
          setOtherText(prev => ({ ...prev, [question.id]: '' }));
        } else if (question.type === 'single-choice') {
          setOtherText(prev => ({ ...prev, [question.id]: '' }));
        }
        break;
    }
  
    setAnswers(prev => ({
      ...prev,
      [question.id]: value,
    }));
  }

  const handleOtherTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const questionId = questions[currentQuestion].id;
    const newText = e.target.value;
    setOtherText(prev => ({
      ...prev,
      [questionId]: newText
    }));
    setAnswers(prev => ({
      ...prev,
      [questionId]: questions[currentQuestion].type === 'single-choice'
        ? `Other: ${newText}`
        : ['Other (please specify)', `Other: ${newText}`]
    }));
  }

  const handleSubmit = () => {
    const cleanedAnswers = { ...answers };
  
    [1, 5].forEach(questionId => {
      if (Array.isArray(cleanedAnswers[questionId])) {
        cleanedAnswers[questionId] = (cleanedAnswers[questionId] as string[]).filter(
          answer => answer !== "Other (please specify)"
        );
      }
    });
  
    console.log("Quiz answers:", cleanedAnswers);
    // Here you would typically send the cleanedAnswers to your backend or AI service
    // Redirect to the next step or dashboard
  }

  const renderQuestionInput = (question: Question) => {
    switch (question.type) {
      case 'text':
        return (
          <Input
            id={`question-${question.id}`}
            type="text"
            value={answers[question.id] as string || ''}
            onChange={handleInputChange}
            className="w-full"
          />
        );
      case 'single-choice':
      case 'multiple-choice':
        return (
          <div className="space-y-2">
            {question.options?.map((option: string, index: number) => (
              <div key={index} className="flex items-center">
                <input
                  type={question.type === 'single-choice' ? 'radio' : 'checkbox'}
                  id={`question-${question.id}-option-${index}`}
                  name={`question-${question.id}`}
                  value={option}
                  checked={
                    question.type === 'single-choice'
                      ? answers[question.id] === option || (option === "Other (please specify)" && (answers[question.id] as string)?.startsWith("Other:"))
                      : Array.isArray(answers[question.id]) && (answers[question.id] as string[]).includes(option)
                  }
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label htmlFor={`question-${question.id}-option-${index}`}>{option}</label>
              </div>
            ))}
            {((question.type === 'single-choice' && (answers[question.id] as string)?.startsWith("Other")) || 
              (question.type === 'multiple-choice' && Array.isArray(answers[question.id]) && (answers[question.id] as string[]).includes("Other (please specify)"))) && (
              <Input
                type="text"
                value={otherText[question.id] || ''}
                onChange={handleOtherTextChange}
                placeholder="Please specify"
                className="mt-2 w-full"
              />
            )}
          </div>
        );
      default:
        return null;
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-teal-50 to-teal-100 p-4">
      <Card className="w-full max-w-lg bg-white/80 backdrop-blur-sm shadow-xl">
        <CardHeader className="bg-teal-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold">Habit Tracking Onboarding</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentQuestion}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-semibold text-teal-800">{questions[currentQuestion].question}</h2>
              {renderQuestionInput(questions[currentQuestion])}
            </motion.div>
          </AnimatePresence>
        </CardContent>
        <CardFooter className="flex justify-between bg-teal-50 rounded-b-lg p-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="bg-white text-teal-600 border-teal-300 hover:bg-teal-50"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          {currentQuestion < questions.length - 1 ? (
            <Button onClick={handleNext} className="bg-teal-600 text-white hover:bg-teal-700">
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-teal-600 text-white hover:bg-teal-700">
              Submit
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}