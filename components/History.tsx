
import React from 'react';

const achievements = [
  {
    icon: '🏆',
    title: '춘천전국합창대회',
    description: '동상 수상',
  },
  {
    icon: '🏛️',
    title: '서초 예술의 전당',
    description: '민족합창축제 공연',
  },
  {
    icon: '🎼',
    title: '롯데홀',
    description: '합창연합회 합동공연 참여',
  },
  {
    icon: '🎖️',
    title: '군가 합창대회',
    description: '동상 및 장려상 수상',
  },
];

const History: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h3 className="text-indigo-600 font-bold mb-2 uppercase tracking-widest">Achievements</h3>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-serif">
          12년의 열정과 증명된 실력
        </h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow text-center group"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
            <p className="text-indigo-600 font-medium">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-indigo-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <blockquote className="text-2xl md:text-3xl font-serif italic mb-6">
              "12년의 역사는 단순한 시간이 아닙니다. 최고의 무대에서 쌓아 올린 화음의 깊이이자 열정의 증거입니다."
            </blockquote>
            <p className="text-indigo-300">
              2013년 배윤경 지휘자의 열정으로 시작되어 70여 명의 단원과 함께해 왔습니다.
            </p>
          </div>
          <div className="flex-shrink-0 text-center">
            <div className="text-6xl font-bold mb-2">12+</div>
            <div className="text-indigo-300 uppercase tracking-widest text-sm">Years History</div>
          </div>
        </div>
        {/* Abstract decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default History;
