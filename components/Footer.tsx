
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12 mb-12">
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold font-serif mb-2 tracking-tighter">THE JAM CHOIR</div>
            <p className="text-slate-400">12년의 하모니, 음악으로 하나 되는 즐거움</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm text-slate-400">
          <div className="lg:col-span-2">
            <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">더잼콰이어 소개</h5>
            <p className="leading-relaxed">
              더잼콰이어는 2013년 창단 이래 이탈리아 유학파 지휘자 배윤경의 지도 아래, 클래식부터 현대음악까지 폭넓은 레퍼토리를 소화하며 지역사회와 소통해온 전문 아마추어 합창단입니다.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">콰이어 소개</a></li>
              <li><a href="#history" className="hover:text-white transition-colors">활동 연혁</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">연주 프로그램</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">모집 안내</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Contact</h5>
            <p>경기 의정부시 용민로 19번길 30</p>
            <p>지휘자: 010-5307-6611</p>
            <p>단장: 010-8933-2606</p>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-slate-500">
          <p>© 2025 THE JAM CHOIR. All Rights Reserved. "당신의 목소리가 우리의 하모니를 완성합니다."</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
