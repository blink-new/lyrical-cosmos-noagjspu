import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Lightbulb, Sparkles, Zap } from 'lucide-react'
import { getAllArtists } from '../../data/genres'
import blink from '../../blink/client'
import { toast } from 'react-hot-toast'

interface LyricalSparkProps {
  idea: string
  onIdeaChange: (idea: string) => void
  sunoOptimization: boolean
  onSunoOptimizationChange: (enabled: boolean) => void
  onNext: () => void
}

export default function LyricalSpark({ 
  idea, 
  onIdeaChange, 
  sunoOptimization, 
  onSunoOptimizationChange,
  onNext 
}: LyricalSparkProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const [selectedArtist, setSelectedArtist] = useState('')
  const [isLuckyGenerating, setIsLuckyGenerating] = useState(false)
  
  const allArtists = getAllArtists()

  const generateFreshIdea = async () => {
    setIsGenerating(true)
    try {
      const { text } = await blink.ai.generateText({
        prompt: `Generate a unique, evocative, and unexpected song concept. The idea should be:
        - Emotionally resonant and relatable
        - Specific enough to inspire lyrics but open to interpretation
        - Avoiding clichés while being accessible
        - Creative and thought-provoking
        
        Return just the core concept in 1-2 sentences, no explanations.`,
        maxTokens: 100
      })
      
      onIdeaChange(text.trim())
      toast.success('Fresh idea generated!')
    } catch (error) {
      console.error('Error generating idea:', error)
      toast.error('Failed to generate idea. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleLuckyMode = async () => {
    if (!selectedArtist) {
      toast.error('Please select an artist first')
      return
    }
    
    setIsLuckyGenerating(true)
    try {
      // For now, just generate an idea - we'll expand this later
      const { text } = await blink.ai.generateText({
        prompt: `Generate a song concept that would be perfect for ${selectedArtist}'s style. Consider their typical themes, vocal approach, and musical characteristics. Make it authentic to their artistic identity while being fresh and creative.
        
        Return just the core concept in 1-2 sentences.`,
        maxTokens: 100
      })
      
      onIdeaChange(text.trim())
      toast.success(`Lucky mode activated for ${selectedArtist}!`)
      
      // TODO: In a full implementation, this would:
      // 1. Analyze the artist's style
      // 2. Auto-configure all settings
      // 3. Generate complete song
      // 4. Skip to masterpiece view
      
    } catch (error) {
      console.error('Error in lucky mode:', error)
      toast.error('Lucky mode failed. Please try again.')
    } finally {
      setIsLuckyGenerating(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="bg-black/20 backdrop-blur-md border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Lightbulb className="w-5 h-5 text-yellow-400" />
            <span>Your Lyrical Spark</span>
          </CardTitle>
          <CardDescription className="text-gray-300">
            Every great song begins with a spark of inspiration. What's your idea?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-white">Song Concept</Label>
            <Textarea
              value={idea}
              onChange={(e) => onIdeaChange(e.target.value)}
              placeholder="Describe your song idea... (e.g., 'A song about finding courage in small moments of everyday life')"
              className="bg-black/40 border-white/20 text-white placeholder:text-gray-400 min-h-[100px]"
            />
          </div>
          
          <Button 
            onClick={generateFreshIdea}
            disabled={isGenerating}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
          >
            {isGenerating ? (
              <>
                <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Get a Fresh Idea
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-black/20 backdrop-blur-md border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Zap className="w-5 h-5 text-orange-400" />
            <span>I'm Feeling Lucky Mode</span>
          </CardTitle>
          <CardDescription className="text-gray-300">
            One-click song factory: Select an artist and we'll create a complete song in their style
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-white">Select Artist</Label>
            <Select value={selectedArtist} onValueChange={setSelectedArtist}>
              <SelectTrigger className="bg-black/40 border-white/20 text-white">
                <SelectValue placeholder="Choose an artist from the entire catalog..." />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-white/20">
                {allArtists.map((artist, index) => (
                  <SelectItem key={index} value={artist.name} className="text-white">
                    {artist.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            onClick={handleLuckyMode}
            disabled={isLuckyGenerating || !selectedArtist}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
          >
            {isLuckyGenerating ? (
              <>
                <Zap className="w-4 h-4 mr-2 animate-pulse" />
                Creating Magic...
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 mr-2" />
                I'm Feeling Lucky
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-black/20 backdrop-blur-md border-white/10">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-white">Suno.ai Optimization</Label>
              <p className="text-sm text-gray-400">
                Format lyrics with structural tags for AI music generation
              </p>
            </div>
            <Switch
              checked={sunoOptimization}
              onCheckedChange={onSunoOptimizationChange}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button
          onClick={onNext}
          disabled={!idea.trim()}
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
        >
          Next: Define Your Sound
        </Button>
      </div>
    </div>
  )
}