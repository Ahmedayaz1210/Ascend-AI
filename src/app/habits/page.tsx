"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { PlusCircle, CheckCircle, XCircle, TrendingUp, Calendar, Trash2 } from "lucide-react"
import Header from "@/components/Header"

// Mock data for habits
const initialHabits = [
  { id: 1, name: "Morning Meditation", completed: false, streak: 5, progress: 70, frequency: "Daily" },
  { id: 2, name: "Read 30 minutes", completed: true, streak: 12, progress: 90, frequency: "Daily" },
  { id: 3, name: "Exercise", completed: false, streak: 3, progress: 40, frequency: "3 times a week" },
  { id: 4, name: "Drink 8 glasses of water", completed: false, streak: 7, progress: 60, frequency: "Daily" },
  { id: 5, name: "Practice guitar", completed: false, streak: 2, progress: 30, frequency: "4 times a week" },
  { id: 6, name: "Write in journal", completed: true, streak: 15, progress: 95, frequency: "Daily" },
]

export default function AllHabits() {
  const [habits, setHabits] = useState(initialHabits)
  const [newHabit, setNewHabit] = useState({ name: "", frequency: "Daily" })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const toggleHabitCompletion = (id: number) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ))
  }

  const removeHabit = (id: number) => {
    setHabits(habits.filter(habit => habit.id !== id))
  }

  const addHabit = () => {
    if (newHabit.name.trim() !== "") {
      const newId = Math.max(...habits.map(h => h.id)) + 1
      setHabits([...habits, { ...newHabit, id: newId, completed: false, streak: 0, progress: 0 }])
      setNewHabit({ name: "", frequency: "Daily" })
      setIsDialogOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-teal-50 to-teal-100">
      <Header />
      <main className="container mx-auto p-4 mt-10">
        <h1 className="text-4xl font-bold text-teal-800 mb-8 text-center">Habits</h1>
        <div className="flex justify-end mb-8">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-teal-600 text-white hover:bg-teal-700 shadow-lg transition-all duration-200 ease-in-out">
                  <PlusCircle className="h-5 w-5 mr-2" />
                  Quick Add Habit
                </Button>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white/90 backdrop-blur-md shadow-xl rounded-lg border border-teal-200">
              <DialogHeader className="border-b border-teal-200 pb-4">
                <DialogTitle className="text-2xl font-bold text-teal-800">Add New Habit</DialogTitle>
                <DialogDescription className="text-teal-600">
                  Enter the details of your new habit here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 py-6">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right text-teal-700 font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={newHabit.name}
                    onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
                    className="col-span-3 border-teal-300 focus:border-teal-500 focus:ring-teal-500"
                    placeholder="Enter habit name"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="frequency" className="text-right text-teal-700 font-medium">
                    Frequency
                  </Label>
                  <Select
                    value={newHabit.frequency}
                    onValueChange={(value) => setNewHabit({ ...newHabit, frequency: value })}
                  >
                    <SelectTrigger className="col-span-3 border-teal-300 focus:border-teal-500 focus:ring-teal-500">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Daily">Daily</SelectItem>
                      <SelectItem value="Weekly">Weekly</SelectItem>
                      <SelectItem value="Once time a week">Once a week</SelectItem>
                      <SelectItem value="Twice times a week">Twice a week</SelectItem>
                      <SelectItem value="3 times a week">3 times a week</SelectItem>
                      <SelectItem value="4 times a week">4 times a week</SelectItem>
                      <SelectItem value="5 times a week">5 times a week</SelectItem>
                      <SelectItem value="6 times a week">6 times a week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter className="border-t border-teal-200 pt-4">
                <Button onClick={addHabit} className="bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-200">
                  Save Habit
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {habits.map(habit => (
            <Card key={habit.id} className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="bg-teal-600 text-white rounded-t-lg">
                <CardTitle className="flex justify-between items-center">
                  <span className="truncate">{habit.name}</span>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleHabitCompletion(habit.id)}
                      className="text-white hover:text-teal-200"
                    >
                      {habit.completed ? <CheckCircle className="h-6 w-6" /> : <XCircle className="h-6 w-6" />}
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeHabit(habit.id)}
                      className="bg-red-500 hover:bg-red-600 text-white"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-teal-600 font-medium">Progress</span>
                    <span className="text-sm text-teal-600">{habit.progress}%</span>
                  </div>
                  <Progress value={habit.progress} className="w-full" />
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1 text-teal-600" />
                      <span>Streak: {habit.streak} days</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-teal-600" />
                      <span>{habit.frequency}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}