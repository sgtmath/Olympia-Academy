import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Sparkles, RefreshCw, BrainCircuit, CheckCircle2 } from 'lucide-react';
import 'katex/dist/katex.min.css';

const ProblemOfTheDay: React.FC = () => {
  const [problem, setProblem] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [solution, setSolution] = useState<string | null>(null);

  const generateProblem = async () => {
    setLoading(true);
    setError(null);
    setShowSolution(false);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "Generate a challenging Math Olympiad problem (Number Theory, Combinatorics, Geometry, or Algebra) for high school students. Format it in Markdown with LaTeX for math symbols. Include a clear 'Problem' section and a hidden 'Solution' section. Keep the problem elegant and non-trivial.",
        config: {
          systemInstruction: "You are a Math Olympiad problem setter. Your problems are creative, elegant, and challenging. Use LaTeX for all mathematical expressions (e.g., $x^2$, $\\sum_{i=1}^n i$).",
        }
      });

      const text = response.text || '';
      const parts = text.split(/Solution/i);
      setProblem(parts[0].replace(/Problem[:\s]*/i, '').trim());
      setSolution(parts[1]?.replace(/^[:\s]*/, '').trim() || "No solution provided.");
    } catch (err) {
      console.error(err);
      setError("Failed to generate problem. Please try again later.");
      // Fallback problem
      setProblem("Let $n$ be a positive integer. Prove that $n^2 + 3n + 5$ is never divisible by 121.");
      setSolution("Assume $n^2 + 3n + 5 \\equiv 0 \\pmod{121}$. This implies $n^2 + 3n + 5 \\equiv 0 \\pmod{11}$. Multiplying by 4, we get $4n^2 + 12n + 20 \\equiv 0 \\pmod{11}$, which is $(2n+3)^2 + 11 \\equiv 0 \\pmod{11}$. Thus $(2n+3)^2 \\equiv 0 \\pmod{11}$, so $2n+3 \\equiv 0 \\pmod{11}$. Let $2n+3 = 11k$. Then $(11k)^2 = 121k^2$. The original expression $4(n^2+3n+5) = (2n+3)^2 + 11 = 121k^2 + 11$. For this to be divisible by 121, 11 must be divisible by 121, which is impossible. Hence, no such $n$ exists.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateProblem();
  }, []);

  return (
    <section id="problem-of-the-day" className="py-24 bg-ctp-mantle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-ctp-base rounded-[2.5rem] shadow-2xl border border-ctp-surface0 overflow-hidden relative">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-ctp-mauve/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <div className="p-8 md:p-16 relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ctp-mauve/10 text-ctp-mauve text-sm font-bold uppercase tracking-wider mb-4">
                    <Sparkles className="w-4 h-4" />
                    Problem of the Day
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold font-serif text-ctp-text">Challenge Yourself</h2>
                </div>
                <button 
                  onClick={generateProblem}
                  disabled={loading}
                  className="flex items-center justify-center gap-2 bg-ctp-surface0 hover:bg-ctp-surface1 text-ctp-text px-6 py-3 rounded-2xl transition-all disabled:opacity-50 group"
                >
                  <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
                  New Challenge
                </button>
              </div>

              <div className="min-h-[300px] flex flex-col">
                {loading ? (
                  <div className="flex-grow flex flex-col items-center justify-center text-ctp-subtext0 space-y-4">
                    <BrainCircuit className="w-16 h-16 animate-pulse text-ctp-mauve" />
                    <p className="text-xl font-medium">Gemini is crafting a problem for you...</p>
                  </div>
                ) : error ? (
                  <div className="flex-grow flex flex-col items-center justify-center text-ctp-red p-8 bg-ctp-red/5 rounded-3xl border border-ctp-red/20">
                    <p className="text-lg font-bold mb-4">{error}</p>
                    <button onClick={generateProblem} className="text-ctp-text underline font-bold">Try Again</button>
                  </div>
                ) : (
                  <div className="flex-grow animate-fade-in">
                    <div className="markdown-body prose-xl mb-12">
                      <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                        {problem || ''}
                      </Markdown>
                    </div>

                    <div className="flex flex-col gap-6">
                      <button 
                        onClick={() => setShowSolution(!showSolution)}
                        className={`w-full py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${showSolution ? 'bg-ctp-mauve text-ctp-base shadow-lg shadow-ctp-mauve/20' : 'bg-ctp-surface0 text-ctp-text hover:bg-ctp-surface1'}`}
                      >
                        {showSolution ? 'Hide Solution' : 'Reveal Solution'}
                      </button>

                      {showSolution && (
                        <div className="animate-scale-in bg-ctp-mantle p-8 md:p-12 rounded-3xl border border-ctp-mauve/30 shadow-inner">
                          <div className="flex items-center gap-3 text-ctp-mauve mb-6">
                            <CheckCircle2 className="w-6 h-6" />
                            <h3 className="text-2xl font-bold font-serif">Solution</h3>
                          </div>
                          <div className="markdown-body prose-lg">
                            <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                              {solution || ''}
                            </Markdown>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <p className="text-center mt-10 text-ctp-subtext0 italic">
            "The only way to learn mathematics is to do mathematics." — Paul Halmos
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemOfTheDay;
