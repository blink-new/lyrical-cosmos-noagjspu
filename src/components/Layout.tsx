import React from 'react'
import { Sparkles, Music, BookOpen } from 'lucide-react'
import { Button } from './ui/button'

interface LayoutProps {
  children: React.ReactNode
  currentPage: 'generator' | 'archive'
  onPageChange: (page: 'generator' | 'archive') => void
}

export default function Layout({ children, currentPage, onPageChange }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                The Lyrical Cosmos
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant={currentPage === 'generator' ? 'default' : 'ghost'}
                onClick={() => onPageChange('generator')}
                className="flex items-center space-x-2"
              >
                <Music className="w-4 h-4" />
                <span>Generator</span>
              </Button>
              <Button
                variant={currentPage === 'archive' ? 'default' : 'ghost'}
                onClick={() => onPageChange('archive')}
                className="flex items-center space-x-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Archive</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}