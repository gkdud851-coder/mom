import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { 
  Phone, 
  MapPin, 
  Heart, 
  Activity, 
  Utensils, 
  Menu, 
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  ShieldCheck,
  Star,
  MessageSquare,
  Image as ImageIcon
} from 'lucide-react';

// --- Reusable Components ---

const SectionHeader = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-16 text-center max-w-2xl mx-auto">
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`text-xs font-bold tracking-[0.2em] uppercase mb-4 block ${light ? 'text-lime-300' : 'text-lime-600'}`}
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className={`text-4xl md:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-ink'}`}
    >
      {title}
    </motion.h2>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="warm-card p-10 flex flex-col items-center text-center group"
  >
    <div className="w-16 h-16 bg-lime-soft rounded-2xl flex items-center justify-center text-lime-brand mb-8 group-hover:scale-110 transition-transform">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-ink-muted leading-relaxed">{description}</p>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const reviewPhotos = [
    { src: "/카톡2.jpg", label: "보호자님 감사 메시지 1" },
    { src: "/카톡3.jpg", label: "보호자님 감사 메시지 2" },
    { src: "/카톡4.jpg", label: "보호자님 감사 메시지 3" },
    { src: "/카톡5.jpg", label: "보호자님 감사 메시지 4" },
    { src: "/카톡6.jpg", label: "보호자님 감사 메시지 5" },
    { src: "/카톡7.jpg", label: "보호자님 감사 메시지 6" },
  ];

  const navLinks = [
    { name: '센터소개', href: '#intro' },
    { name: '주요서비스', href: '#services' },
    { name: '시설안내', href: '#gallery' },
    { name: '오시는길', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-lime-200">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-warm-bg/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-lime-brand rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-lime-brand/20 group-hover:rotate-6 transition-transform">맘</div>
            <span className="text-xl font-bold tracking-tight">순천맘편한</span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-ink-muted hover:text-lime-brand transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => window.open('tel:061-742-5888')}
              className="bg-ink text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-lime-brand transition-all"
            >
              상담문의
            </button>
          </nav>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full bg-warm-bg border-b border-black/5 p-6 md:hidden"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-lg font-bold p-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <button 
                  onClick={() => window.open('tel:061-742-5888')}
                  className="w-full bg-lime-brand text-white py-4 rounded-2xl font-bold mt-4"
                >
                  지금 바로 전화하기
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding relative min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover opacity-60"
            >
              <source src="/감동영상.mp4" type="video/mp4" />
            </video>
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-warm-bg"></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-lime-brand text-white rounded-full text-xs font-bold mb-8 shadow-lg">
                <ShieldCheck className="w-4 h-4" />
                <span>정성을 다하는 어르신 안식처</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] mb-8 break-keep text-white">
                나이 듦이 <br />
                <span className="text-lime-300 italic">존중받는</span> <br />
                따뜻한 안식처
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl font-medium">
                부모님의 일상이 행복으로 채워지는 곳. <br />
                전문적인 재활과 정성 어린 케어로 <br />
                어르신과 가족의 미소를 지켜드립니다.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-5">
                <button 
                  onClick={() => window.open('tel:061-742-5888')}
                  className="bg-lime-brand text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl font-bold text-lg md:text-xl shadow-2xl shadow-lime-brand/40 hover:-translate-y-1 transition-all flex items-center gap-3"
                >
                  <Phone className="w-6 h-6 md:w-7 md:h-7" /> 전화 상담하기
                </button>
                <button 
                  onClick={() => window.open('https://map.naver.com/p/entry/place/1698145203')}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl font-bold text-lg md:text-xl hover:bg-white/20 transition-all flex items-center gap-3 shadow-lg"
                >
                  <MapPin className="w-6 h-6 md:w-7 md:h-7 text-lime-300" /> 위치보기
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
        <section id="intro" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <motion.img 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                src="/정성현케어1.jpg" 
                alt="정성현 대표" 
                className="pill-image w-full shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <span className="text-lime-600 font-bold tracking-widest uppercase text-xs">Director's Message</span>
                <h2 className="text-4xl md:text-6xl font-bold leading-tight break-keep">
                  "부모님을 모시는 마음, <br />
                  <span className="text-lime-brand italic">진심</span>이 닿을 때까지"
                </h2>
              </div>
              <div className="space-y-6 text-lg text-ink-muted leading-relaxed">
                <p>
                  안녕하세요. 순천맘편한 주간보호센터 대표 정성현입니다. 
                  저는 조부모님의 사랑을 듬뿍 받으며 자란 순천 청년입니다. 
                  어르신들의 손을 잡을 때마다 느껴지는 그 따뜻함은 제게 가장 큰 사명감을 줍니다.
                </p>
                <p>
                  단순히 어르신을 모시는 것을 넘어, 
                  어떻게 하면 조금이라도 더 즐겁게, 더 건강하게 하루를 보내실 수 있을까 고민합니다. 
                  가족의 마음으로, 전문가의 손길로 정성을 다하겠습니다.
                </p>
              </div>
              <div className="pt-6">
                <p className="text-3xl font-bold font-serif">정성현 올림</p>
                <p className="text-sm text-lime-600 font-bold mt-2">순천맘편한 주간보호센터 대표</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding bg-warm-bg">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              subtitle="Our Services" 
              title="어르신을 위한 전문적인 케어" 
            />
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard 
                icon={Activity}
                title="맞춤형 재활 프로그램"
                description="전문 재활 장비와 물리치료사가 어르신의 신체 기능 회복을 돕습니다."
              />
              <ServiceCard 
                icon={Utensils}
                title="영양 가득 건강 식단"
                description="매일 아침 신선한 식재료로 조리하는 균형 잡힌 식사와 간식을 제공합니다."
              />
              <ServiceCard 
                icon={Heart}
                title="정서 지원 및 소통"
                description="다양한 인지 프로그램과 보호자님과의 실시간 소통으로 안심을 드립니다."
              />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              subtitle="Facilities & Moments" 
              title="행복이 머무는 공간" 
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "/시설1.jpg", "/시설2.jpg", "/시설3.jpg", "/시설4.jpg",
                "/식사사진1.jpg", "/식사사진2.jpg", "/간식1.jpg", "/간식2.jpg",
                "/행복1.jpg", "/행복2.jpg", "/행복3.jpg", "/행복4.jpg",
                "/활동1.jpg", "/활동2.jpg", "/활동3.jpg", "/활동4.jpg"
              ].map((img, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square rounded-3xl overflow-hidden shadow-md"
                >
                  <img src={img} alt="갤러리" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-ink text-white">
          <div className="max-w-3xl mx-auto">
            <SectionHeader 
              subtitle="Location & Contact" 
              title="언제든 편하게 방문해 주세요" 
              light 
            />
            <div className="space-y-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-6 bg-white/5 p-8 rounded-3xl border border-white/10">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-lime-300 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">찾아오시는 길</h4>
                    <p className="text-white/60 leading-relaxed">전라남도 순천시 충효로 127 2층</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 bg-white/5 p-8 rounded-3xl border border-white/10">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-lime-300 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">운영 시간</h4>
                    <p className="text-white/60 leading-relaxed">월 - 토 | 08:00 - 18:00<br/>(일요일 휴무)</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center bg-lime-brand/10 p-10 rounded-[40px] border border-lime-brand/20 group cursor-pointer" onClick={() => window.open('tel:061-742-5888')}>
                <div className="w-20 h-20 bg-lime-brand rounded-3xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-2xl shadow-lime-brand/40">
                  <Phone className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold mb-2">상담 전화</h4>
                <p className="text-5xl md:text-6xl font-bold text-lime-300 hover:text-white transition-colors">061-742-5888</p>
                <p className="text-white/60 mt-4">클릭하면 바로 전화로 연결됩니다</p>
              </div>

              <button 
                onClick={() => window.open('https://map.naver.com/p/search/%EC%88%9C%EC%B2%9C%EB%A7%98%ED%8E%B8%ED%95%9C%EC%A3%BC%EA%B0%84%EB%B3%B4%ED%98%B8%EC%84%BC%ED%84%B0')}
                className="w-full bg-white text-ink py-6 rounded-3xl font-bold text-xl flex items-center justify-center gap-4 hover:bg-lime-soft transition-all shadow-xl"
              >
                <MapPin className="w-7 h-7 text-lime-brand" /> 네이버 지도에서 정확한 위치 확인하기
              </button>

              <button 
                onClick={() => setIsReviewOpen(true)}
                className="w-full bg-lime-brand text-white py-6 rounded-3xl font-bold text-xl flex items-center justify-center gap-4 hover:bg-lime-dark transition-all shadow-xl mt-4 hidden md:flex"
              >
                <MessageSquare className="w-7 h-7" /> 가족보호자분들 후기 사진 보기
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-warm-bg border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-lime-brand rounded-lg flex items-center justify-center text-white font-bold text-xs">맘</div>
            <span className="font-bold">순천맘편한 주간보호센터</span>
          </div>
          <p className="text-sm text-ink-muted">© 2024 순천맘편한 주간보호센터. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-medium text-ink-muted">
            <a href="#" className="hover:text-lime-brand">이용약관</a>
            <a href="#" className="hover:text-lime-brand">개인정보처리방침</a>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons (Mobile) */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50 md:hidden">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsReviewOpen(true)}
          className="w-16 h-16 bg-white text-lime-brand rounded-full shadow-2xl flex items-center justify-center border border-lime-brand/20"
        >
          <MessageSquare className="w-8 h-8" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open('tel:061-742-5888')}
          className="w-16 h-16 bg-lime-brand text-white rounded-full shadow-2xl flex items-center justify-center"
        >
          <Phone className="w-8 h-8" />
        </motion.button>
      </div>

      {/* Review Modal */}
      <AnimatePresence>
        {isReviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <div className="absolute inset-0 bg-ink/95 backdrop-blur-xl" onClick={() => setIsReviewOpen(false)} />
            
            <button 
              onClick={() => setIsReviewOpen(false)}
              className="absolute top-6 right-6 z-[110] p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg z-[105]"
            >
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                className="rounded-[32px] shadow-2xl overflow-hidden"
              >
                {reviewPhotos.map((photo, i) => (
                  <SwiperSlide key={i}>
                    <div className="bg-white flex items-center justify-center min-h-[60vh]">
                      <img 
                        src={photo.src} 
                        alt={photo.label} 
                        className="w-full h-auto max-h-[85vh] object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </SwiperSlide>
                ))}
                
                {/* Custom Navigation Buttons */}
                <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-ink shadow-lg hover:bg-white transition-all">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-ink shadow-lg hover:bg-white transition-all">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </Swiper>
              
              <p className="text-white/60 text-center mt-6 text-sm">화면을 넘기거나 화살표를 눌러 다음 후기를 확인하세요.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
