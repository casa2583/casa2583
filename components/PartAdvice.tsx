
import React, { useState } from 'react';
import { getAIPartAdvice } from '../services/geminiService';

const PartAdvice: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setLoading(true);
    const result = await getAIPartAdvice(userInput);
    setAdvice(result);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-block p-3 bg-white/10 rounded-2xl mb-4">
          <span className="text-3xl">🤖</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">더잼콰이어 AI 하모니 어드바이저</h2>
        <p className="text-indigo-200">어떤 파트가 나에게 맞을지 고민되시나요? 평소 목소리나 좋아하는 노래 스타일을 들려주세요.</p>
      </div>

      <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-10">
        <form onSubmit={handleSubmit} className="mb-8">
          <label className="block text-sm font-medium mb-3 text-indigo-300 uppercase tracking-widest">목소리 특징 들려주기</label>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="예: 저는 목소리가 굵고 낮은 편이에요. 혹은 평소 높은 가요를 부르는 걸 좋아해요!"
            className="w-full h-32 bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4 transition-all"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-indigo-500 hover:bg-indigo-400 disabled:bg-slate-600 text-white rounded-2xl font-bold transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                분석 중...
              </>
            ) : (
              '지휘자 AI에게 물어보기'
            )}
          </button>
        </form>

        {advice && (
          <div className="animate-fade-in-up bg-white text-slate-900 p-8 rounded-2xl border-l-8 border-indigo-500 relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-xl">💡</div>
              <h4 className="font-bold text-indigo-600">지휘자 AI의 추천 하모니</h4>
            </div>
            <div className="prose prose-slate whitespace-pre-wrap leading-relaxed">
              {advice}
            </div>
            {/* Small quote decoration */}
            <div className="absolute top-4 right-8 text-6xl text-slate-100 font-serif -z-0">“</div>
          </div>
        )}
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {['Soprano', 'Alto', 'Tenor', 'Bass'].map(part => (
          <div key={part} className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">
            {part}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartAdvice;
