import React, { useState } from 'react'
import Layout from './components/Layout'
import WorkflowProgress from './components/WorkflowProgress'
import LyricalSpark from './components/steps/LyricalSpark'
import DefineSound from './components/steps/DefineSound'
import ChooseInfluence from './components/steps/ChooseInfluence'
import { WorkflowStep } from './types'
import { Artist } from './data/genres'

const workflowSteps: WorkflowStep[] = [
  { id: 1, title: "Lyrical Spark", description: "Generate your song idea", completed: false },
  { id: 2, title: "Define Sound", description: "Choose genre and subgenre", completed: false },
  { id: 3, title: "Choose Influence", description: "Select primary artist", completed: false },
  { id: 4, title: "The Forge", description: "Advanced lyrical tools", completed: false },
  { id: 5, title: "Sonic Palette", description: "Define the sound", completed: false },
  { id: 6, title: "Masterpiece", description: "Generated song", completed: false },
  { id: 7, title: "Lyrical Forge", description: "Refine your lyrics", completed: false },
  { id: 8, title: "AI Composer", description: "Prepare for music generation", completed: false },
  { id: 9, title: "Video Director", description: "Create music video storyboard", completed: false },
  { id: 10, title: "Projector", description: "Generate video clips", completed: false }
]

function App() {
  const [currentPage, setCurrentPage] = useState<'generator' | 'archive'>('generator')
  const [currentStep, setCurrentStep] = useState(1)
  
  // Step 1: Lyrical Spark
  const [idea, setIdea] = useState('')
  const [sunoOptimization, setSunoOptimization] = useState(false)
  
  // Step 2: Define Sound
  const [selectedGenre, setSelectedGenre] = useState('')
  const [selectedSubgenre, setSelectedSubgenre] = useState('')
  
  // Step 3: Choose Influence
  const [primaryArtist, setPrimaryArtist] = useState<Artist | null>(null)
  const [fusionArtist, setFusionArtist] = useState<Artist | null>(null)

  const handleNextStep = () => {
    if (currentStep < workflowSteps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <LyricalSpark
            idea={idea}
            onIdeaChange={setIdea}
            sunoOptimization={sunoOptimization}
            onSunoOptimizationChange={setSunoOptimization}
            onNext={handleNextStep}
          />
        )
      case 2:
        return (
          <DefineSound
            selectedGenre={selectedGenre}
            selectedSubgenre={selectedSubgenre}
            onGenreChange={setSelectedGenre}
            onSubgenreChange={setSelectedSubgenre}
            onNext={handleNextStep}
            onBack={handlePrevStep}
          />
        )
      case 3:
        return (
          <ChooseInfluence
            selectedGenre={selectedGenre}
            selectedSubgenre={selectedSubgenre}
            primaryArtist={primaryArtist}
            fusionArtist={fusionArtist}
            onPrimaryArtistChange={setPrimaryArtist}
            onFusionArtistChange={setFusionArtist}
            onNext={handleNextStep}
            onBack={handlePrevStep}
          />
        )
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Step {currentStep}: {workflowSteps[currentStep - 1]?.title}
            </h2>
            <p className="text-gray-300 mb-8">
              This step is coming soon! We're building an amazing experience for you.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handlePrevStep}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNextStep}
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )
    }
  }

  const renderGenerator = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
          Your AI Songwriting Partner
        </h1>
        <p className="text-xl text-gray-300">
          From initial spark to finished masterpiece - let's create something amazing together
        </p>
      </div>
      
      <WorkflowProgress steps={workflowSteps} currentStep={currentStep} />
      
      <div className="max-w-4xl mx-auto">
        {renderCurrentStep()}
      </div>
    </div>
  )

  const renderArchive = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
          Your Song Archive
        </h1>
        <p className="text-xl text-gray-300">
          Manage and explore your musical creations
        </p>
      </div>
      
      <div className="text-center py-12">
        <p className="text-gray-300 mb-8">
          Your archive is empty. Create your first song to see it here!
        </p>
        <button
          onClick={() => setCurrentPage('generator')}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors"
        >
          Create Your First Song
        </button>
      </div>
    </div>
  )

  return (
    <Layout 
      currentPage={currentPage} 
      onPageChange={setCurrentPage}
    >
      {currentPage === 'generator' ? renderGenerator() : renderArchive()}
    </Layout>
  )
}

export default App