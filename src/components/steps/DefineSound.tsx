import React from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Music2, Volume2 } from 'lucide-react'
import { genres } from '../../data/genres'

interface DefineSoundProps {
  selectedGenre: string
  selectedSubgenre: string
  onGenreChange: (genre: string) => void
  onSubgenreChange: (subgenre: string) => void
  onNext: () => void
  onBack: () => void
}

export default function DefineSound({ 
  selectedGenre, 
  selectedSubgenre, 
  onGenreChange, 
  onSubgenreChange,
  onNext,
  onBack
}: DefineSoundProps) {
  const currentGenre = genres.find(g => g.name === selectedGenre)
  const availableSubgenres = currentGenre ? currentGenre.subgenres : []

  const handleGenreChange = (genre: string) => {
    onGenreChange(genre)
    onSubgenreChange('') // Reset subgenre when genre changes
  }

  return (
    <div className="space-y-6">
      <Card className="bg-black/20 backdrop-blur-md border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Music2 className="w-5 h-5 text-blue-400" />
            <span>Define Your Sound</span>
          </CardTitle>
          <CardDescription className="text-gray-300">
            Choose the musical foundation that will shape your song's sonic identity
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-white">Primary Genre</Label>
              <Select value={selectedGenre} onValueChange={handleGenreChange}>
                <SelectTrigger className="bg-black/40 border-white/20 text-white">
                  <SelectValue placeholder="Select a genre..." />
                </SelectTrigger>
                <SelectContent className="bg-black/90 border-white/20">
                  {genres.map((genre) => (
                    <SelectItem key={genre.name} value={genre.name} className="text-white">
                      {genre.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-white">Subgenre</Label>
              <Select 
                value={selectedSubgenre} 
                onValueChange={onSubgenreChange}
                disabled={!selectedGenre}
              >
                <SelectTrigger className="bg-black/40 border-white/20 text-white">
                  <SelectValue placeholder="Select a subgenre..." />
                </SelectTrigger>
                <SelectContent className="bg-black/90 border-white/20">
                  {availableSubgenres.map((subgenre) => (
                    <SelectItem key={subgenre.name} value={subgenre.name} className="text-white">
                      {subgenre.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {selectedGenre && (
            <div className="p-4 bg-black/30 rounded-lg border border-white/10">
              <h3 className="text-white font-medium mb-2 flex items-center space-x-2">
                <Volume2 className="w-4 h-4 text-purple-400" />
                <span>Genre Overview: {selectedGenre}</span>
              </h3>
              <p className="text-gray-300 text-sm">
                {getGenreDescription(selectedGenre)}
              </p>
            </div>
          )}

          {selectedSubgenre && (
            <div className="p-4 bg-black/30 rounded-lg border border-white/10">
              <h3 className="text-white font-medium mb-2">
                Subgenre: {selectedSubgenre}
              </h3>
              <p className="text-gray-300 text-sm">
                {getSubgenreDescription(selectedSubgenre)}
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
          Back: Lyrical Spark
        </Button>
        <Button
          onClick={onNext}
          disabled={!selectedGenre || !selectedSubgenre}
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
        >
          Next: Choose Your Influence
        </Button>
      </div>
    </div>
  )
}

function getGenreDescription(genre: string): string {
  const descriptions: { [key: string]: string } = {
    "Blues": "Rooted in African American musical traditions, blues emphasizes emotional expression through call-and-response vocals, twelve-bar progressions, and expressive guitar work.",
    "Country": "Storytelling-focused music with roots in American folk traditions, featuring acoustic instruments and themes of rural life, love, and hardship.",
    "Electronic": "Technology-driven music utilizing synthesizers, drum machines, and digital production techniques to create innovative soundscapes.",
    "Folk": "Traditional acoustic music emphasizing storytelling, cultural heritage, and intimate acoustic arrangements with minimal production.",
    "Hip-Hop": "Rhythmic spoken-word music featuring beats, sampling, and rap vocals, often addressing social issues and urban experiences.",
    "Jazz": "Sophisticated music emphasizing improvisation, complex harmonies, and individual expression within ensemble settings.",
    "Metal": "Heavy, distorted guitar-driven music with powerful vocals and aggressive rhythms, often exploring darker themes.",
    "Pop": "Mainstream, accessible music designed for broad appeal, featuring catchy melodies and polished production.",
    "R&B / Soul": "Rhythm and blues with soulful vocals, emphasizing groove, emotion, and African American musical traditions.",
    "Rock": "Guitar-centric music with strong rhythms and powerful vocals, spanning from classic to alternative expressions."
  }
  return descriptions[genre] || "A diverse musical genre with its own unique characteristics and cultural significance."
}

function getSubgenreDescription(subgenre: string): string {
  const descriptions: { [key: string]: string } = {
    "Blues Rock": "Fusion of blues scales and rock energy, featuring electric guitars and powerful rhythms.",
    "Chicago Blues": "Urban blues style with electric instruments and sophisticated arrangements.",
    "Delta Blues": "Raw, acoustic blues from the Mississippi Delta, emphasizing slide guitar and storytelling.",
    "Alt-Country": "Alternative country blending traditional elements with indie rock sensibilities.",
    "Classic Country": "Traditional country music with steel guitar, fiddle, and heartfelt storytelling.",
    "Country Pop": "Mainstream country with pop production values and broader appeal.",
    "Ambient": "Atmospheric electronic music focused on mood and texture rather than rhythm.",
    "House": "Dance music with four-on-the-floor beats and electronic production.",
    "Techno": "Electronic dance music with repetitive beats and futuristic sounds.",
    "American Folk Revival": "1960s folk movement emphasizing social consciousness and acoustic instruments.",
    "Contemporary Folk": "Modern folk with indie influences and introspective songwriting.",
    "Alternative Hip-Hop": "Experimental hip-hop pushing genre boundaries with unconventional approaches.",
    "Conscious Hip-Hop": "Socially aware rap focusing on political and social issues.",
    "Gangsta Rap": "Hardcore rap depicting urban street life and experiences.",
    "Trap": "Modern hip-hop subgenre with heavy bass and hi-hat patterns.",
    "Bebop": "Fast-paced jazz emphasizing improvisation and complex chord progressions.",
    "Vocal Jazz": "Jazz centered around vocal performance and interpretation.",
    "Death Metal": "Extreme metal with growled vocals and complex arrangements.",
    "Doom Metal": "Slow, heavy metal with dark atmospheres and crushing riffs.",
    "Heavy Metal": "Classic metal with powerful vocals and guitar-driven compositions.",
    "Thrash Metal": "Fast, aggressive metal with technical precision and intensity.",
    "Dance-Pop": "Pop music designed for dancing with electronic production.",
    "Indie Pop": "Independent pop with DIY aesthetics and creative freedom.",
    "Synth-Pop": "Pop music featuring synthesizers and electronic production.",
    "Classic Soul": "Traditional soul music with emotional vocals and groove-based arrangements.",
    "Contemporary R&B": "Modern R&B with sophisticated production and vocal techniques.",
    "Neo-Soul": "Contemporary soul with hip-hop influences and artistic innovation.",
    "Alternative Rock": "Non-mainstream rock with independent spirit and creative experimentation.",
    "Classic Rock": "Traditional rock from the 1960s-70s with timeless appeal.",
    "Indie Rock": "Independent rock with DIY ethos and artistic autonomy.",
    "Punk Rock": "Raw, energetic rock with anti-establishment themes and simple structures."
  }
  return descriptions[subgenre] || "A unique musical style with its own distinct characteristics and cultural context."
}