import FeedEntry from './FeedEntry'

function EducationEntry() {
  return (
    <FeedEntry id="education">
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#6b6b6b] mb-4">
        Education
      </p>
      <h2 className="font-display text-3xl sm:text-4xl text-[#1a1a1a] mb-8">
        Education &amp; Training
      </h2>

      <div className="space-y-4">
        <div className="border border-[#e5e5e5] rounded-lg p-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-start">
            <h3 className="font-semibold text-[16px] text-[#1a1a1a]">Gettysburg College</h3>
            <span className="font-mono text-[11px] text-[#9b9b9b] sm:mt-0.5">Expected May 2028</span>
          </div>
          <p className="text-[15px] text-[#3a3a3a] mt-2">Bachelor of Science in Computer Science</p>
          <p className="text-[14px] text-[#6b6b6b] mt-1">Minor in Mathematics</p>
          <p className="text-[14px] text-[#3a3a3a] leading-relaxed mt-3">
            GPA: 3.7/4.0 · Dean&apos;s List · Presidential Scholar
          </p>
          <p className="text-[14px] text-[#3a3a3a] leading-relaxed mt-2">
            Dwight D. Eisenhower / Conrad N. Hilton Scholarship
          </p>
          <p className="text-[14px] text-[#3a3a3a] leading-relaxed mt-2">
            <span className="text-[#6b6b6b]">Relevant coursework:</span> Data Structures &amp; Algorithms, Software Engineering, Databases, Computer Security, Discrete Mathematics, Linear Algebra
          </p>
        </div>

        <div className="border border-[#e5e5e5] rounded-lg p-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-start">
            <h3 className="font-semibold text-[16px] text-[#1a1a1a]">Cornell University</h3>
            <span className="font-mono text-[11px] text-[#9b9b9b] sm:mt-0.5">Summer 2025</span>
          </div>
          <p className="text-[15px] text-[#3a3a3a] mt-2">Machine Learning Foundations</p>
          <p className="text-[14px] text-[#6b6b6b] mt-1">Break Through Tech AI Program</p>
          <p className="text-[15px] text-[#3a3a3a] leading-relaxed mt-2">
            Built a practical foundation in machine learning through Cornell-led training, working with predictive models, neural networks, and real-world datasets using Python.
          </p>
        </div>
      </div>
    </FeedEntry>
  )
}

export default EducationEntry
