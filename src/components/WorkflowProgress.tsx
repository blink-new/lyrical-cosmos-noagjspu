import React from 'react'
import { Check, Circle } from 'lucide-react'
import { WorkflowStep } from '../types'

interface WorkflowProgressProps {
  steps: WorkflowStep[]
  currentStep: number
}

export default function WorkflowProgress({ steps, currentStep }: WorkflowProgressProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">Your Creative Journey</h2>
        <span className="text-sm text-gray-400">Step {currentStep} of {steps.length}</span>
      </div>
      
      <div className="relative">
        {/* Progress line */}
        <div className="absolute top-4 left-4 right-4 h-0.5 bg-gray-700">
          <div 
            className="h-full bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>
        
        {/* Step indicators */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep - 1
            const isCurrent = index === currentStep - 1
            
            return (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300
                  ${isCompleted 
                    ? 'bg-gradient-to-r from-purple-400 to-blue-400 border-transparent' 
                    : isCurrent 
                      ? 'bg-transparent border-purple-400 shadow-lg shadow-purple-400/50' 
                      : 'bg-gray-700 border-gray-600'
                  }
                `}>
                  {isCompleted ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <Circle className={`w-4 h-4 ${isCurrent ? 'text-purple-400' : 'text-gray-400'}`} />
                  )}
                </div>
                <span className={`
                  mt-2 text-xs text-center max-w-16 leading-tight
                  ${isCurrent ? 'text-purple-400 font-medium' : 'text-gray-400'}
                `}>
                  {step.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}