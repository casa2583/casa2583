
import React from 'react';

const programs = [
  {
    title: '클래식과 성가곡',
    description: '화음의 정수를 경험하며 음악적 깊이를 더합니다.',
    imageUrl: 'https://picsum.photos/id/336/600/400',
    tags: ['전통', '깊이', '화음']
  },
  {
    title: '가스펠 및 세계 민요',
    description: '에너지 넘치는 리듬으로 문화적 다양성을 체험합니다.',
    imageUrl: 'https://picsum.photos/id/111/600/400',
    tags: ['에너지', '리듬', '다양성']
  },
  {
    title: '뮤지컬과 팝송',
    description: '대중과 함께 호흡하며 노래하는 즐거움을 나눕니다.',
    imageUrl: 'https://picsum.photos/id/342/600/400',
    tags: ['즐거움', '대중적', '뮤지컬']
  }
];

const Programs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <h3 className="text-indigo-600 font-bold mb-2 uppercase tracking-widest">Our Journey</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-serif">
            다채로운 감동의 무대
          </h2>
          <p className="mt-4 text-slate-500">
            클래식부터 팝송까지, 장르를 넘나드는 폭넓은 스펙트럼으로 단원들에게 늘 새로운 도전과 성장의 기회를 제공합니다.
          </p>
        </div>
        <div className="flex gap-2">
          <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-600">7회 정기연주회</span>
          <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-600">초청 공연 다수</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative h-64 mb-6 overflow-hidden rounded-2xl">
              <img 
                src={program.imageUrl} 
                alt={program.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {program.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold rounded-full text-indigo-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
              {program.title}
            </h4>
            <p className="text-slate-600">
              {program.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
