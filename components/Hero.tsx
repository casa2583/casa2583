
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/id/158/1920/1080)' }}
      >
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-indigo-300 font-medium tracking-widest mb-4 animate-fade-in-up">
          12 YEARS OF HARMONY
        </h2>
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 font-serif animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          이제 당신의 목소리로<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            하모니가 완성됩니다
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          음악으로 하나 되는 우리, '더잼콰이어'에서 함께 감동의 무대를 만들어갈 새로운 가족을 찾습니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-indigo-600/20"
          >
            지금 바로 지원하기
          </a>
          <a 
            href="#about" 
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full font-bold transition-all backdrop-blur-sm"
          >
            콰이어 소개 보기
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
