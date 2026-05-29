import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { COURSE_DETAILS } from '../constants';

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const course = COURSE_DETAILS[courseId!];

  if (!course) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-4xl font-display font-bold text-text mb-4">Course Not Found</h2>
        <button onClick={() => navigate('/courses')} className="text-mauve font-bold hover:underline">
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <section className="pt-40 pb-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-mauve/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <button
          onClick={() => navigate('/courses')}
          className="flex items-center gap-2 text-subtext1 hover:text-white transition-colors mb-8 group"
        >
          <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Courses
        </button>

        <div className="bg-surface1/40 backdrop-blur-2xl rounded-[40px] border border-white/5 p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <span className="px-3 py-1 rounded-full bg-surface2/50 text-subtext1 text-xs font-bold uppercase tracking-widest border border-white/10">
                {course.level}
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-text mt-4 mb-2">{course.title}</h1>
              <p className="text-lg text-subtext1">{course.description}</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-mauve to-blue">{course.price}</div>
            </div>
          </div>

          <div className="max-w-none mb-12">
            <h3 className="text-2xl font-bold text-text mb-4">About This Course</h3>
            <p className="text-subtext1 leading-relaxed">{course.fullContent}</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-text mb-6">Curriculum</h3>
            <div className="space-y-3">
              {course.curriculum.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-surface0/50 backdrop-blur-md rounded-2xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-mauve flex-shrink-0 drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
                  <span className="text-text font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full mt-12 bg-mauve text-[#ffffff] py-5 rounded-2xl font-bold hover:bg-mauve/90 transition-all shadow-[0_0_30px_rgba(139,92,246,0.3)] active:scale-[0.98]">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
}
