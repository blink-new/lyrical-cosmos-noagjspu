import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { toast } from 'react-hot-toast'
import blink from '../../blink/client'

interface MasterpieceProps {
  idea: string
  lyrics: string
  sunoOptimization: boolean
  onLyricsChange: (lyrics: string) => void
  onNext: () => void
  onBack: () => void
}

export default function Masterpiece({ idea, lyrics, sunoOptimization, onLyricsChange, onNext, onBack }: MasterpieceProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const generateLyricsWithVocalCues = async () => {
    setIsGenerating(true)
    try {
      const prompt = `Generate song lyrics based on this idea: "${idea}". Include human vocal sounds such as breathing, sighs, and other expressive sounds naturally embedded in the lyrics as bracketed cues like [breath], [soft sigh], [inhale], [exhale], [vocal fry]. Format the lyrics with structural tags if Suno.ai optimization is enabled: ${sunoOptimization ? 'Yes' : 'No'}. Return the lyrics only.`
      const { text } = await blink.ai.generateText({
        prompt,
        maxTokens: 1000
      })
      onLyricsChange(text.trim())
      toast.success('Lyrics with vocal cues generated!')
    } catch (error) {
      console.error('Error generating lyrics:', error)
      toast.error('Failed to generate lyrics. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="bg-black/20 backdrop-blur-md border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Your Masterpiece</CardTitle>
          <CardDescription className="text-gray-300">
            Review and refine your song lyrics with expressive vocal cues
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-white">Lyrics</Label>
            <Textarea
              value={lyrics}
              onChange={(e) => onLyricsChange(e.target.value)}
              className="bg-black/40 border-white/20 text-white placeholder:text-gray-400 min-h-[200px] whitespace-pre-wrap font-mono"
              spellCheck={false}
            />
          </div>
          <div className="flex space-x-4">
            <Button
              onClick={generateLyricsWithVocalCues}
              disabled={isGenerating || !idea.trim()}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              {isGenerating ? 'Generating...' : 'Generate Lyrics with Vocal Cues'}
            </Button>
            <Button
              onClick={onNext}
              disabled={!lyrics.trim()}
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
            >
              Next: The Lyrical Forge
            </Button>
          </div>
          <Button
            onClick={onBack}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            Back: Define Sonic Palette
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
