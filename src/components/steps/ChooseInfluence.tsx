import React, { useState, useMemo } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Switch } from '../ui/switch'
import { Users, Search, Brain } from 'lucide-react'
import { genres, getAllArtists } from '../../data/genres'
import { Artist } from '../../data/genres'
import blink from '../../blink/client'
import { toast } from 'react-hot-toast'

interface ChooseInfluenceProps {
  selectedGenre: string
  selectedSubgenre: string
  primaryArtist: Artist | null
  fusionArtist: Artist | null
  onPrimaryArtistChange: (artist: Artist | null) => void
  onFusionArtistChange: (artist: Artist | null) => void
  onNext: () => void
  onBack: () => void
}

interface ArtistAnalysis {
  lyricalStyle: string
  vocalStyle: string
  styleProfile: string
}

export default function ChooseInfluence({ 
  selectedGenre,
  selectedSubgenre,
  primaryArtist,
  fusionArtist,
  onPrimaryArtistChange,
  onFusionArtistChange,
  onNext,
  onBack
}: ChooseInfluenceProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [artistAnalysis, setArtistAnalysis] = useState<ArtistAnalysis | null>(null)
  const [styleBlending, setStyleBlending] = useState(false)
  
  const currentGenre = genres.find(g => g.name === selectedGenre)
  const currentSubgenre = currentGenre?.subgenres.find(s => s.name === selectedSubgenre)
  const availableArtistsRaw = currentSubgenre ? currentSubgenre.artists : []
  const dedupe = (arr: Artist[]) => {
    const seen = new Set<string>()
    return arr.filter((a) => {
      if (seen.has(a.name)) return false
      seen.add(a.name)
      return true
    })
  }
  
  const availableArtists = useMemo(() => dedupe(availableArtistsRaw), [availableArtistsRaw])
  const allArtists = useMemo(() => dedupe(getAllArtists()), [])

  const analyzeArtist = async (artist: Artist) => {
    setIsAnalyzing(true)
    try {
      const { text } = await blink.ai.generateText({
        prompt: `Analyze ${artist.name} as a musical artist. Provide a detailed analysis in this format:

LYRICAL STYLE ANALYSIS:
[Analyze their lyrical themes, storytelling approach, metaphor usage, emotional expression, and typical subject matter in 2-3 sentences]

VOCAL STYLE ANALYSIS:
[Analyze their vocal delivery, range, tone, techniques, and distinctive characteristics in 2-3 sentences]

ARTIST STYLE PROFILE:
[Provide a comprehensive overview of their musical identity, including their typical approach to songwriting, emotional range, and what makes them unique in 2-3 sentences]

Make this analysis authentic and specific to ${artist.name}'s actual musical style and career.`,
        maxTokens: 400
      })
      
      // Parse the response
      const sections = text.split('\n\n')
      const lyricalStyle = sections[0]?.replace('LYRICAL STYLE ANALYSIS:', '').trim() || ''
      const vocalStyle = sections[1]?.replace('VOCAL STYLE ANALYSIS:', '').trim() || ''
      const styleProfile = sections[2]?.replace('ARTIST STYLE PROFILE:', '').trim() || ''
      
      setArtistAnalysis({
        lyricalStyle,
        vocalStyle,
        styleProfile
      })
      
      toast.success(`Analysis complete for ${artist.name}`)
    } catch (error) {
      console.error('Error analyzing artist:', error)
      toast.error('Failed to analyze artist. Please try again.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handlePrimaryArtistChange = (artistName: string) => {
    const artist = availableArtists.find(a => a.name === artistName) || null
    onPrimaryArtistChange(artist)
    setArtistAnalysis(null)
    
    if (artist) {
      analyzeArtist(artist)
    }
  }

  const handleFusionArtistChange = (artistName: string) => {
    const artist = allArtists.find(a => a.name === artistName) || null
    onFusionArtistChange(artist)
  }

  return (
    <div className="space-y-6">
      <Card className="bg-black/20 backdrop-blur-md border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Users className="w-5 h-5 text-green-400" />
            <span>Choose Your Influence</span>
          </CardTitle>
          <CardDescription className="text-gray-300">
            Select artists whose style will guide your songwriting approach
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label className="text-white">Primary Artist</Label>
            <Select value={primaryArtist?.name || ''} onValueChange={handlePrimaryArtistChange}>
              <SelectTrigger className="bg-black/40 border-white/20 text-white">
                <SelectValue placeholder="Select an artist from your chosen subgenre..." />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-white/20">
                {availableArtists.map((artist) => (
                  <SelectItem key={artist.name} value={artist.name} className="text-white">
                    {artist.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {isAnalyzing && (
            <div className="p-4 bg-black/30 rounded-lg border border-white/10">
              <div className="flex items-center space-x-2 text-purple-400">
                <Brain className="w-4 h-4 animate-pulse" />
                <span>Analyzing {primaryArtist?.name}'s style...</span>
              </div>
            </div>
          )}

          {artistAnalysis && primaryArtist && (
            <div className="space-y-4">
              <div className="p-4 bg-black/30 rounded-lg border border-white/10">
                <h3 className="text-white font-medium mb-2 flex items-center space-x-2">
                  <Search className="w-4 h-4 text-blue-400" />
                  <span>Lyrical Style Analysis</span>
                </h3>
                <p className="text-gray-300 text-sm">{artistAnalysis.lyricalStyle}</p>
              </div>

              <div className="p-4 bg-black/30 rounded-lg border border-white/10">
                <h3 className="text-white font-medium mb-2 flex items-center space-x-2">
                  <Search className="w-4 h-4 text-green-400" />
                  <span>Vocal Style Analysis</span>
                </h3>
                <p className="text-gray-300 text-sm">{artistAnalysis.vocalStyle}</p>
              </div>

              <div className="p-4 bg-black/30 rounded-lg border border-white/10">
                <h3 className="text-white font-medium mb-2 flex items-center space-x-2">
                  <Brain className="w-4 h-4 text-purple-400" />
                  <span>Artist Style Profile</span>
                </h3>
                <p className="text-gray-300 text-sm">{artistAnalysis.styleProfile}</p>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-white/10">
            <div className="space-y-1">
              <Label className="text-white">Style Blending</Label>
              <p className="text-sm text-gray-400">
                Blend with a fusion artist to create unique hybrid genres
              </p>
            </div>
            <Switch
              checked={styleBlending}
              onCheckedChange={setStyleBlending}
            />
          </div>

          {styleBlending && (
            <div className="space-y-2">
              <Label className="text-white">Fusion Artist</Label>
              <Select value={fusionArtist?.name || ''} onValueChange={handleFusionArtistChange}>
                <SelectTrigger className="bg-black/40 border-white/20 text-white">
                  <SelectValue placeholder="Select any artist from the entire catalog..." />
                </SelectTrigger>
                <SelectContent className="bg-black/90 border-white/20">
                  {allArtists.map((artist) => (
                    <SelectItem key={artist.name} value={artist.name} className="text-white">
                      {artist.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {fusionArtist && (
            <div className="p-4 bg-black/30 rounded-lg border border-white/10">
              <h3 className="text-white font-medium mb-2">
                Style Fusion: {primaryArtist?.name} × {fusionArtist.name}
              </h3>
              <p className="text-gray-300 text-sm">
                This unique combination will blend {primaryArtist?.name}'s core style with {fusionArtist.name}'s distinctive approach, creating an innovative hybrid sound.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button
          onClick={onBack}
          variant="outline"
          className="border-white/20 text-white hover:bg-white/10"
        >
          Back: Define Sound
        </Button>
        <Button
          onClick={onNext}
          disabled={!primaryArtist || isAnalyzing}
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
        >
          Next: Advanced Tools
        </Button>
      </div>
    </div>
  )
}