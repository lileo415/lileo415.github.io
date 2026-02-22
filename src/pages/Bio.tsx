import { Mail, MapPin, GraduationCap, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const Bio = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50/50 to-white dark:from-slate-900 dark:to-slate-900">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-16">
          <div className="flex-shrink-0">
            <Avatar className="w-40 h-40 md:w-48 md:h-48 border-4 border-primary/10">
              <AvatarImage src="/avatar.jpg" alt="Profile" />
              <AvatarFallback className="text-4xl bg-primary/10 text-primary">
                DR
              </AvatarFallback>
            </Avatar>
          </div>
          
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                Dexuan Li
              </h1>
              <p className="text-xl text-slate-500 dark:text-slate-400">
                Undergraduate Researcher
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>University of Auckland, NZ</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4" />
                <a href="mailto:lileo9224@gmail.com" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  lileo9224@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">
                AI4Health
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Biomedical Signal Processing
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Deep Learning
              </Badge>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <Button size="sm" className="gap-2 bg-sky-600 hover:bg-sky-700 text-white dark:bg-sky-500 dark:hover:bg-sky-600">
                <BookOpen className="w-4 h-4" />
                Google Scholar
              </Button>
              <Button size="sm" variant="outline" className="gap-2 border-sky-200 text-slate-700 hover:bg-sky-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700">
                <ExternalLink className="w-4 h-4" />
                CV / Resume
              </Button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            About Me
          </h2>
          <div className="prose-academic space-y-4">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Hi, I'm an undergraduate student currently enrolled in a joint program between Northeastern University and the University of Auckland. My research interests focus on AI4Health, biomedical signal processing and deep learning.
            </p>
          </div>
        </section>

        {/* Research Interests */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            Research Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'AI4Health',
                description: 'Applying artificial intelligence to healthcare and medical applications'
              },
              {
                title: 'Biomedical Signal Processing',
                description: 'Analysis and interpretation of physiological and biomedical signals'
              },
              {
                title: 'Deep Learning',
                description: 'Neural network architectures and learning algorithms for complex tasks'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-sky-100 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bio;
