
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left Info Panel */}
        <div className="lg:w-1/2 bg-indigo-600 p-10 md:p-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">지금 바로 지원하세요!</h2>
          <p className="text-indigo-100 mb-12">당신의 목소리가 더해질 때, 우리의 하모니는 비로소 완성됩니다. 망설이지 말고 문을 두드려 주세요.</p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">🗓️</div>
              <div>
                <h4 className="font-bold text-lg mb-1">연습 시간</h4>
                <p className="text-indigo-100">매주 월요일 PM 7:00 ~ 9:00</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">📍</div>
              <div>
                <h4 className="font-bold text-lg mb-1">연습 장소</h4>
                <p className="text-indigo-100">경기 의정부시 용민로 19번길 30 루브 하우스</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">📞</div>
              <div>
                <h4 className="font-bold text-lg mb-1">지원 및 문의</h4>
                <div className="space-y-1">
                  <p className="text-indigo-100">지휘자: 010-5307-6611</p>
                  <p className="text-indigo-100">단장: 010-8933-2606</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Recruitment Categories */}
        <div className="lg:w-1/2 p-10 md:p-16 bg-white">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">모집 분야</h3>
          <div className="grid grid-cols-2 gap-4 mb-12">
            {[
              { name: '소프라노', desc: 'Soprano' },
              { name: '알토', desc: 'Alto' },
              { name: '테너', desc: 'Tenor' },
              { name: '베이스', desc: 'Bass' }
            ].map((part) => (
              <div key={part.name} className="p-6 border-2 border-slate-100 rounded-2xl hover:border-indigo-100 hover:bg-indigo-50 transition-all text-center">
                <div className="text-indigo-600 font-bold text-lg mb-1">{part.name}</div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-widest">{part.desc}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
              모집 대상
            </h4>
            <ul className="text-slate-600 space-y-2 text-sm">
              <li className="flex gap-2">✅ 음악 경력이 없어도 열정만 있다면 언제나 환영!</li>
              <li className="flex gap-2">✅ 자아 성취와 음악을 통한 봉사의 즐거움을 나누고 싶은 분!</li>
              <li className="flex gap-2">✅ 노래를 사랑하는 성인이라면 누구나 지원 가능</li>
            </ul>
          </div>

          <div className="mt-8">
             <button className="w-full py-5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold transition-all shadow-xl flex items-center justify-center gap-3 group">
               지휘자님께 문자 상담하기
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
               </svg>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
