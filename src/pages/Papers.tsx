import { FileText, Clock } from 'lucide-react';

const Papers = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50/50 to-white dark:from-slate-900 dark:to-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center justify-center gap-3">
            <FileText className="w-8 h-8 text-sky-600 dark:text-sky-400" />
            Publications
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            A collection of my research papers
          </p>
        </div>

        {/* Upcoming Content */}
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-24 h-24 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center mb-6">
            <Clock className="w-12 h-12 text-sky-600 dark:text-sky-400" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Coming Soon
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-center max-w-md">
            My publications are currently being organized. Please check back later for updates on my research papers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Papers;
