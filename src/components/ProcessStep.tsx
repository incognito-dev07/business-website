import React from 'react'

interface ProcessStepProps {
  number: string
  title: string
  description: string
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <div className="process-step">
      <div className="step-number">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ProcessStep