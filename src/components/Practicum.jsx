import React from 'react'

function Practicum() {
  return (
    <section id="practicum" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12 animate-fade-in">
          Practicum Experience
        </h2>
        <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg p-8 animate-slide-up">
          <h3 className="text-2xl font-bold mb-4">Narrative Report</h3>
          <p className="text-muted-foreground mb-6">
            Download my comprehensive practicum narrative report to learn about my hands-on experience
            and professional development during the internship period in STMicroelectronics Inc. Calamba.
          </p>
          <div className="space-y-4">
            {/* Add a download button for the narrative report */}
            <a
              href="/documents/practicum/narrative-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Narrative Report
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Practicum
