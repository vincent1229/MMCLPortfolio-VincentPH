import React from 'react'

function Certifications() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12 animate-fade-in">
          Certifications
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Add your certifications here */}
          <div className="bg-card rounded-lg shadow-lg p-6 animate-slide-up">
            <h3 className="text-2xl font-bold mb-2">Your Certification Title</h3>
            <p className="text-muted-foreground">Issuing Organization</p>
            <p className="text-sm text-muted-foreground">Date Issued</p>
          </div>
          {/* Add more certification items as needed */}
        </div>
      </div>
    </section>
  )
}

export default Certifications
