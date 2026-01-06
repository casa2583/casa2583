
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img 
            src="https://picsum.photos/id/453/800/600" 
            alt="Choir practice" 
            className="rounded-2xl shadow-2xl relative z-10"
          />
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-indigo-100 rounded-2xl -z-0"></div>
        </div>
        <div>
          <h3 className="text-indigo-600 font-bold mb-2">당신의 열정을 기다리는 초대</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
            "혹시 일상 속에서 나만의 목소리를 잊고 지내진 않으셨나요?"
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            음악에 대한 열정으로 가슴이 뛰고, 아름다운 화음 속에서 나를 발견하고 싶은 분들을 기다립니다. 
            더잼콰이어는 단순한 합창단을 넘어, 함께 성장하고 감동을 만들어가는 따뜻한 음악 공동체입니다.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">열정 > 재능</h4>
                <p className="text-slate-500">음악 전공이 아니어도, 합창 경험이 없어도 괜찮습니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🤝</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">따뜻한 공동체</h4>
                <p className="text-slate-500">70여 명의 단원들과 맺는 끈끈한 사회적 유대감을 경험하세요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
