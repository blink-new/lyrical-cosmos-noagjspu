import { Artist } from '../data/genres'

export interface SongData {
  id: string
  title: string
  description: string
  lyrics: string
  genre: string
  subgenre: string
  primaryArtist: Artist
  fusionArtist?: Artist
  idea: string
  albumArt?: string
  chordProgression?: string
  stylePrompt?: string
  storyboard?: StoryboardClip[]
  musicalDNA?: {
    melodicContour: string
    authenticityScore: number
    feedback: string
  }
  createdAt: Date
  updatedAt: Date
}

export interface StoryboardClip {
  id: string
  timestamp: string
  keyLyric: string
  visualPrompt: string
  shotType: string
  lighting: string
  keywords: string[]
  animationUrl?: string
}

export interface LyricalSettings {
  // Core Directives
  emotionalArc: number
  aggression: number
  vulnerability: number
  originalityBoost: number
  
  // Narrative & Character
  pointOfView: string
  narrativeReliability: string
  conflictAxis: string
  characterFlaws: string
  
  // Imagery & Sensory
  abstractConcrete: number
  imageryStyle: string
  symbolism: string
  sensoryPalette: {
    sight: number
    sound: number
    smell: number
    taste: number
    touch: number
  }
  
  // Poetic & Structural
  metaphorDensity: number
  showDontTell: number
  diction: string
  rhymeScheme: string
  songStructure: string
  
  // Conceptual & Thematic
  philosophicalStance: string
  centralQuestion: string
  forbiddenWord: string
}

export interface SonicSettings {
  // Vocals
  vocalStyle: string
  vocalType: string
  backingVocals: string
  vocalProcessing: string
  
  // Rhythm & Groove
  tempo: string
  feel: string
  drumSound: string
  basslineStyle: string
  
  // Instrumentation
  instruments: string[]
  guitarTone: string
  synthStyle: string
  leadInstrument: string
  
  // Structure & Dynamics
  complexity: number
  dynamicRange: number
  mood: string
  reverb: string
  production: string
}

export interface WorkflowStep {
  id: number
  title: string
  description: string
  completed: boolean
}