"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, TrendingUp } from "lucide-react"
import Header from "@/components/Header"

// Mock data for habits
const habits = [
  { id: 1, name: "Morning Meditation", completed: false, streak: 5, progress: 70 },
  { id: 2, name: "Read 30 minutes", completed: true, streak: 12, progress: 90 },
  { id: 3, name: "Exercise", completed: false, streak: 3, progress: 40 },
  { id: 4, name: "Drink 8 glasses of water", completed: false, streak: 7, progress: 60 },
]

export default function Dashboard() {
  const [userHabits, setUserHabits] = useState(habits)

  const toggleHabitCompletion = (id: number) => {
    setUserHabits(habits.map(habit => 
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-teal-50 to-teal-100">
      <Header />
      <main className="container mx-auto p-4 mt-8">
        <h1 className="text-4xl font-bold text-teal-800 mb-10 text-center">Your Habit Dashboard</h1>
        
        {/* Habit Tracker */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm shadow-xl">
          <CardHeader className="bg-teal-600 text-white">
            <CardTitle>Habit Tracker</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {userHabits.map(habit => (
                <div key={habit.id} className="flex items-center justify-between p-2 bg-white rounded-lg shadow">
                  <span className="font-medium">{habit.name}</span>
                  <Button
                    variant={habit.completed ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleHabitCompletion(habit.id)}
                  >
                    {habit.completed ? <CheckCircle className="h-4 w-4 mr-2" /> : null}
                    {habit.completed ? "Completed" : "Mark Complete"}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Progress Overview */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm shadow-xl">
          <CardHeader className="bg-teal-600 text-white">
            <CardTitle>Progress Overview</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              {userHabits.map(habit => (
                <div key={habit.id} className="flex items-center justify-between">
                  <span className="font-medium">{habit.name}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-teal-600">Streak: {habit.streak} days</span>
                    <Progress value={habit.progress} className="w-24" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Goal Visualization */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm shadow-xl">
          <CardHeader className="bg-teal-600 text-white">
            <CardTitle>Goal Visualization</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              {userHabits.map(habit => (
                <div key={habit.id} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{habit.name}</span>
                    <span className="text-sm text-teal-600">{habit.progress}%</span>
                  </div>
                  <Progress value={habit.progress} className="w-full" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Daily Focus */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm shadow-xl">
          <CardHeader className="bg-teal-600 text-white">
            <CardTitle>Daily Focus</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <ul className="space-y-2">
              {userHabits.slice(0, 3).map(habit => (
                <li key={habit.id} className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-teal-600" />
                  <span>{habit.name}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

      </main>
    </div>
  )
}