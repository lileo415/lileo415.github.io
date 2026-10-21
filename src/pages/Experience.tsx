import { Briefcase, Calendar, GraduationCap } from 'lucide-react';

interface ExperienceItem {
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  supervisor?: string;
  status?: string;
  description?: string;
}

const internships: ExperienceItem[] = [
  {
    title: 'Algorithm Engineer Intern',
    organization: 'Wenxin Tech',
    startDate: '03/2024',
    endDate: '06/2026',
    description: 'Developed an ECG and PCG CNN-LSTM algorithm for heart disease detection and a lung sound classification algorithm based on wearable devices. Contributed to a cardiovascular medical language model using multimodal physiological signals for risk assessment and clinical decision support.'
  }
];

const research: ExperienceItem[] = [
  {
    title: 'RespMIL: Multiple Instance Learning for Respiratory Sound Classification',
    organization: 'Nanjing University',
    supervisor: 'Prof. Yechao Bai',
    startDate: '02/2026',
    endDate: '05/2026',
    description: 'Developed a DASS-based multiple instance learning pipeline for respiratory sound classification on the ICBHI dataset. Achieved an ICBHI score of 64.77.'
  },
  {
    title: 'A Deep Learning Framework for Auxiliary Pneumonia Screening Using Lung Sounds from Wearable Device',
    organization: 'Fudan University',
    supervisor: 'Prof. Lei Liu',
    startDate: '06/2026',
    endDate: 'Present',
    description: 'Developed an AI-assisted lung sound screening framework for bedside pneumonia assessment. On a private dataset of 367 recordings, the CNN-BiGRU model achieved a recording-level AUC of 0.923.'
  }
];

const education: ExperienceItem[] = [
  {
    title: 'Bachelor of Science',
    organization: 'Northeastern University',
    startDate: '09/2023',
    endDate: '07/2027',
    description: 'Major in Mathematics and Applied Mathematics'
  },
  {
    title: 'Bachelor of Science',
    organization: 'University of Auckland',
    startDate: '07/2026',
    endDate: '06/2027',
    description: 'Major in Mathematics'
  }
];

const Timeline = ({ items, education = false }: { items: ExperienceItem[]; education?: boolean }) => (
  <div className="relative">
    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-sky-200 dark:bg-sky-800" />

    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="relative flex gap-6">
          <div className="relative z-10 flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-900 border-2 border-sky-400 dark:border-sky-500 flex items-center justify-center">
              {education ? (
                <GraduationCap className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              ) : (
                <Briefcase className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              )}
            </div>
          </div>

          <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl border border-sky-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  {item.title}
                </h3>
                <p className="text-sky-600 dark:text-sky-400 font-medium">
                  {item.organization}
                </p>
                {item.supervisor && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Supervisor: {item.supervisor}
                  </p>
                )}
                {item.status && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 italic mt-1">
                    {item.status}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm whitespace-nowrap">
                <Calendar className="w-4 h-4" />
                <span>{item.startDate} – </span>
                <span className={item.endDate === 'Present' ? 'text-sky-600 dark:text-sky-400 font-medium' : ''}>
                  {item.endDate}
                </span>
              </div>
            </div>

            {item.description && (
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

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
            My internship and research experience
          </p>
        </div>

        {/* Internship Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
            Internship
          </h2>
          <Timeline items={internships} />
        </section>

        {/* Research Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
            Research
          </h2>
          <Timeline items={research} />
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
            Education
          </h2>
          <Timeline items={education} education />
        </section>
      </div>
    </div>
  );
};

export default Experience;
