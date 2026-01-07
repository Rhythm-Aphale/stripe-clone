"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

function stringToHslColor(str: string, s = 60, l = 50) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash) % 360;
  return `hsl(${h} ${s}% ${l}%)`;
}

function CompanyLogoSVG({ name, size = 40, className = '' }: { name: string; size?: number; className?: string }) {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  const bg = stringToHslColor(name, 65, 50);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label={name}>
      <rect width="100%" height="100%" rx={Math.round(size / 6)} fill={bg} />
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto" fontSize={Math.round(size / 2.1)} fill="#fff" fontWeight="700">{initials}</text>
    </svg>
  );
} 

const svgMap: { [key: string]: string } = {
  BMW: '/svg/bmw.svg',
  Amazon: '/svg/amazon.svg',
  Twilio: '/svg/twillo.svg',
  Maersk: '/svg/maersk.svg',
};

const caseStudies = [
  {
    id: 1,
    company: "BMW",
    logo: "https://logo.clearbit.com/bmw.com",
    title: "How BMW streamlined global payments across 50+ markets",
    mainMetric: "+8.2%",
    mainMetricLabel: "Increase in conversion rates",
    secondaryMetric: "+2.5%",
    secondaryMetricLabel: "Reduction in payment failures",
    products: ["Payments", "Billing"],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop",
    bgColor: "from-blue-400 to-blue-300"
  },
  {
    id: 2,
    company: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
    title: "See how Amazon simplified cross-border payments with Stripe",
    mainMetric: "5+",
    mainMetricLabel: `Amazon businesses on Stripe including Prime,
                      Audible, and Amazon Pay.`,
    secondaryMetric: "50+",
    secondaryMetricLabel: "Payment methods available on Stripe",
    products: ["Payments", "Connect"],
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop",
    bgColor: "from-orange-400 to-orange-300"
  },
  {
    id: 3,
    company: "Maersk",
    logo: "https://logo.clearbit.com/maersk.com",
    title: "Maersk modernizes B2B payments with Stripe",
    mainMetric: "+6.5%",
    mainMetricLabel: "Faster payment reconciliation",
    secondaryMetric: "+4%",
    secondaryMetricLabel: "Reduction in manual processes",
    products: ["Payments", "Invoicing"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop",
    bgColor: "from-cyan-400 to-cyan-300"
  },
  {
    id: 4,
    company: "Twilio",
    logo: "https://logo.clearbit.com/twilio.com",
    title: "See how Twilio increased authorisation rates by 10% with Stripe",
    mainMetric: "+5.5%",
    mainMetricLabel: "Uplift from Stripe's Global Payments Infrastructure",
    secondaryMetric: "+1%",
    secondaryMetricLabel: "Uplift from Adaptive Acceptance",
    products: ["Payments", "Stripe Sigma"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
    bgColor: "from-rose-400 to-rose-300"
  }
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with Amazon (index 1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeStudy = caseStudies[activeIndex];

  return (
    <div className="w-full bg-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-16 space-y-6">
        <h4 className="text-[#635BFF] font-semibold text-3xl ">Enterprise reinvention</h4>
        <h2 className="text-3xl md:text-5xl font-semibold ">Bring agility to your enterprise</h2>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          Quickly build great payments experiences, improve performance, expand into new markets, 
          and engage customers with subscriptions and marketplaces. Get expert integration guidance 
          from our <span className="text-[#635BFF] cursor-pointer hover:underline">professional services</span> team and <span className="text-[#635BFF] cursor-pointer hover:underline">certified partners</span>, and connect Stripe to Salesforce, 
          SAP, and more through the <span className="text-[#635BFF] cursor-pointer hover:underline">Stripe App Marketplace</span>.
        </p>
        <button className="bg-[#635BFF] text-white px-3 py-3 rounded-full  transition-colors  font-medium">
          Explore Stripe for enterprises →
        </button>
      </div>

      {/* Case Studies Slider Section */}
      <div className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-[350px,1fr] gap-12 items-start">
            {/* Left Panel - Metrics and Products */}
            <div className="space-y-10">
              {/* Metrics */}
              <div className="space-y-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{activeStudy.mainMetric}</div>
                  <div className="text-sm text-gray-500 mt-3 leading-relaxed text-wrap">{activeStudy.mainMetricLabel}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">{activeStudy.secondaryMetric}</div>
                  <div className="text-sm text-gray-500 mt-3 leading-relaxed">{activeStudy.secondaryMetricLabel}</div>
                </div>
              </div>

              {/* Products Used */}
              <div>
                <div className="text-sm font-semibold text-gray-900 mb-4">Products used</div>
                <div className="space-y-3">
                  {activeStudy.products.map((product, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gradient-to-br from-[#635BFF] to-[#00D4FF] rounded-sm"></div>
                      <span className="text-sm text-gray-700 font-medium">{product}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Hero Image Card */}
            <div 
              className={`ml-70 top-[-400] relative rounded-3xl overflow-hidden h-[450px] bg-gradient-to-br ${activeStudy.bgColor} transition-all duration-700 shadow-xl`}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <Image
                src={activeStudy.image}
                alt={activeStudy.company}
                fill
                className="object-cover mix-blend-overlay opacity-50"
                unoptimized
              />
              <div className=" absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
              
              {/* Company Logo */}
              <div className="absolute top-8 left-8 z-10">
                <Image
                  src={activeStudy.logo}
                  alt={activeStudy.company}
                  width={40}
                  height={40}
                  className="h-10 filter brightness-0 invert"
                  onError={(e: any) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                    const nextEl = (e.currentTarget as HTMLElement).nextElementSibling;
                    if (nextEl) (nextEl as HTMLElement).style.display = 'block';
                  }}
                  unoptimized
                />
                {svgMap[activeStudy.company] ? (
                  <Image
                    src={svgMap[activeStudy.company]}
                    alt={activeStudy.company}
                    width={40}
                    height={40}
                    className="hidden h-10 filter brightness-0 invert"
                    onError={(e: any) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
                  />
                ) : (
                  <CompanyLogoSVG name={activeStudy.company} size={40} className="hidden" />
                )}
              </div>

              {/* Title */}
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                  {activeStudy.title}
                </h3>
              </div>

              {/* Document Icon */}
              <div className="absolute top-8 right-8 z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Company Logos Navigation - Below the main content */}
          <div className=" mt-[-306] pt-12 border-t border-gray-200">
            <div className="flex justify-center items-center gap-16">
              {caseStudies.map((study, index) => (
                <button
                  key={study.id}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`transition-all duration-300 ${
                    activeIndex === index 
                      ? 'opacity-100 scale-110' 
                      : 'opacity-30 hover:opacity-60 scale-100'
                  }`}
                >
                  <img
                    src={svgMap[study.company] ?? study.logo}
                    alt={study.company}
                    width={48}
                    height={48}
                    className={`h-12 transition-all ${activeIndex === index ? 'grayscale-0 opacity-100 scale-110' : 'grayscale opacity-30'}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}