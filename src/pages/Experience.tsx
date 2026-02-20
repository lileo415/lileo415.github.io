import { Briefcase, Calendar, GraduationCap } from 'lucide-react';

interface ExperienceItem {
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string;
  description?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Research Assistant',
    organization: 'Duke University',
    startDate: '2026-01',
    endDate: 'Present',
    description: 'Participating in research on ways to assess the quality of ECG and PCG signals based on a novel wearable device.'
  },
  {
    title: 'Research Assistant',
    organization: 'Shanxi Medical University',
    startDate: '2025-09',
    endDate: 'Present',
    description: 'Working on statistical methods to prove the effectiveness of a novel wearable device for pneumonia screening.'
  },
  {
    title: 'Research Assistant',
    organization: 'Nanjing University',
    startDate: '2025-03',
    endDate: '2025-08',
    description: 'Worked on transfer learning and few-shot learning in agricultural drone scenarios.'
  },
  {
    title: 'Research Intern',
    organization: 'Bayland Scientific',
    startDate: '2024-01',
    endDate: 'Present',
    description: 'Working on a novel algorithm to detect and analyse the severity of pneumonia based on respiratory sound.'
  }
];

const education: ExperienceItem[] = [
  {
    title: 'BS Mathematics',
    organization: 'University of Auckland',
    startDate: '2026-07',
    endDate: '2027-06'
  },
  {
    title: 'BS Mathematics and Applied Mathematics',
    organization: 'Northeastern University',
    startDate: '2023-09',
    endDate: '2026-06'
  }
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50/50 to-white dark:from-slate-900 dark:to-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Experience
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            My research journey and professional experience
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-sky-200 dark:bg-sky-800" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-6">
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-900 border-2 border-sky-400 dark:border-sky-500 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  </div>
                </div>

                <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl border border-sky-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                        {exp.title}
                      </h3>
                      <p className="text-sky-600 dark:text-sky-400 font-medium">
                        {exp.organization}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm whitespace-nowrap">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.startDate} – </span>
                      <span className={exp.endDate === 'Present' ? 'text-sky-600 dark:text-sky-400 font-medium' : ''}>
                        {exp.endDate}
                      </span>
                    </div>
                  </div>

                  {exp.description && (
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <section>
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
            Education
          </h2>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-sky-200 dark:bg-sky-800" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative flex gap-6">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-900 border-2 border-sky-400 dark:border-sky-500 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                    </div>
                  </div>

                  <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl border border-sky-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                          {edu.title}
                        </h3>
                        <p className="text-sky-600 dark:text-sky-400 font-medium">
                          {edu.organization}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm whitespace-nowrap">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.startDate} – {edu.endDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
