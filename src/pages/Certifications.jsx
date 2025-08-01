import React from 'react'

function Certifications() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12 animate-fade-in">
          Certifications
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Certifications List */}
          <div className="bg-card rounded-lg shadow-lg p-6 animate-slide-up hover:scale-[1.02] transition-transform ease-in-out duration-300">
            <h3 className="text-2xl font-bold mb-2">CompTIA Strata IT Fundamentals Certification</h3>
            <p className="text-muted-foreground">Issued by CompTIA</p>
            <p className="text-sm text-muted-foreground">July 2024</p>
          </div>
          <div className="bg-card rounded-lg shadow-lg p-6 animate-slide-up hover:scale-[1.02] transition-transform ease-in-out duration-300">
            <h3 className="text-2xl font-bold mb-2">Employability Skills – Job Ready</h3>
            <p className="text-muted-foreground">Issued by Wadhwani Foundation</p>
            <p className="text-sm text-muted-foreground">2025</p>
          </div>
          <div className="bg-card rounded-lg shadow-lg p-6 animate-slide-up hover:scale-[1.02] transition-transform ease-in-out duration-300">
            <h3 className="text-2xl font-bold mb-2">TOEIC Listening & Reading</h3>
            <p className="text-muted-foreground">Issued by TOEIC</p>
            <p className="text-sm text-muted-foreground">2025</p>
          </div>
          <div className="bg-card rounded-lg shadow-lg p-6 animate-slide-up hover:scale-[1.02] transition-transform ease-in-out duration-300">
            <h3 className="text-2xl font-bold mb-2">TOEIC Speaking & Writing</h3>
            <p className="text-muted-foreground">Issued by TOEIC</p>
            <p className="text-sm text-muted-foreground">2025</p>
          </div>
          <div className="bg-card rounded-lg shadow-lg p-6 animate-slide-up hover:scale-[1.02] transition-transform ease-in-out duration-300">
            <h3 className="text-2xl font-bold mb-2">Basic Blade Seminar</h3>
            <p className="text-muted-foreground">Issued by Aurotech</p>
            <p className="text-sm text-muted-foreground">2025</p>
          </div>
          <div className="bg-card rounded-lg shadow-lg p-6 animate-slide-up hover:scale-[1.02] transition-transform ease-in-out duration-300">
            <h3 className="text-2xl font-bold mb-2">Microsoft Season of AI Agents</h3>
            <p className="text-muted-foreground">Issued by Microsoft</p>
            <p className="text-sm text-muted-foreground">2025</p>
          </div>
          <div className="bg-card rounded-lg shadow-lg p-6 animate-slide-up hover:scale-[1.02] transition-transform ease-in-out duration-300">
            <h3 className="text-2xl font-bold mb-2">Power BI and 7QC Tools</h3>
            <p className="text-muted-foreground">Issued by STMicroelectronics Inc.</p>
            <p className="text-sm text-muted-foreground">2025</p>
          </div>
          <div className="bg-card rounded-lg shadow-lg p-6 animate-slide-up hover:scale-[1.02] transition-transform ease-in-out duration-300">
            <h3 className="text-2xl font-bold mb-2">Cybersecurity Awareness</h3>
            <p className="text-muted-foreground">Issued by STMicroelectronics Inc.</p>
            <p className="text-sm text-muted-foreground">2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
