import React, { useState, useEffect } from 'react'

const sentences = [
  "Modern websites that convert visitors into customers",
  "E-commerce stores with seamless checkout experiences",
  "Professional portfolios that showcase your best works",
  "Custom web applications built exactly to your needs",
  "High-converting landing pages that drive sales"
]

const TypingAnimation: React.FC = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  
  const typingSpeed = 60
  const deleteSpeed = 20
  const pauseBetween = 2000

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    
    const currentSentence = sentences[sentenceIndex]
    
    if (!isDeleting && charIndex <= currentSentence.length) {
      // Typing - slower
      timeout = setTimeout(() => {
        if (charIndex < currentSentence.length) {
          setDisplayText(currentSentence.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          // Finished typing, wait then start deleting
          timeout = setTimeout(() => {
            setIsDeleting(true)
          }, pauseBetween)
          return
        }
      }, typingSpeed)
    } else if (isDeleting && charIndex >= 0) {
      // Deleting - FASTER
      timeout = setTimeout(() => {
        if (charIndex > 0) {
          setDisplayText(currentSentence.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          // Finished deleting, move to next sentence
          setIsDeleting(false)
          setSentenceIndex((sentenceIndex + 1) % sentences.length)
        }
      }, deleteSpeed)
    }
    
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, sentenceIndex])

  // Start animation on mount
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setCharIndex(1)
      setDisplayText(sentences[0][0])
    }, 500)
    return () => clearTimeout(startTimeout)
  }, [])

  return (
    <div className="typing-section">
      <span className="typing-text" id="typingText">{displayText}</span>
      <span className="typing-cursor">|</span>
    </div>
  )
}

export default TypingAnimation