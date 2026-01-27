import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Play } from 'lucide-react';
import CorporateImg from '../assets/CorporateImg.avif';
import ProductImg from '../assets/ProductImg.avif';
import EventImg from '../assets/EventImg.avif';
import RealEstateImg from '../assets/RealEstateImg.avif';
import InterviewsImg from '../assets/InterviewsImg.avif';
import imgurl from '../assets/imgurl.avif';

export const ServiceDetail = () => {
  const { id } = useParams();
  const services = [
    {
      id: "photography-videography",
      title: "Photography & Videography",
      subtitle: "Professional photos and videos that make your brand look premium and build customer trust.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200",
      deliverables: [
        "High-resolution edited photographs",
        "4K cinematic video files",
        "Professional sound mixing",
        "Full commercial usage rights"
      ],
      Specializations: [
        {
          title: "Corporate Photoshoots",
          image: CorporateImg,
          desc: "Executive portraits and environmental office photography captured with high-end lighting setups.",
        },
        {
          title: "Product Photography",
          image: ProductImg,
          desc: "Precision e-commerce and catalog photography focusing on material texture and color accuracy.",
        },
        {
          title: "Event Documentation",
          image: EventImg,
          desc: "Comprehensive photo and video coverage for high-stakes corporate seminars and product launches.",
        },
        {
          title: "Real Estate & Interiors",
          image: RealEstateImg,
          desc: "Architectural photography using specialized lenses to document commercial and residential spaces.",
        },
        {
          title: "Interviews & Testimonials",
          image: InterviewsImg,
          desc: "Direct-to-camera video production featuring professional sound engineering and multicam setups.",
        },
        {
          title: "Business Campaign Shoots",
          image: imgurl,
          desc: "Concept-driven visual production for multi-channel digital ads and brand promotions.",
        }
      ]
    }, {
      id: "commercial-brand-production",
      title: "Commercial & Brand Production",
      subtitle: "Complete video production services to help your business grow and reach more people.",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop",
      deliverables: [
        "Full-length commercial videos",
        "Short-form social media clips",
        "Behind-the-scenes footage",
        "Custom thumbnails and graphics"
      ],
      Specializations: [
        {
          title: "Ad Creatives & Promotional Videos",
          image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop",
          desc: "Dynamic video ads optimized for social media platforms to drive engagement and conversions.",
        },
        {
          title: "Social Media Reels & Short-Form Content",
          image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=800&auto=format&fit=crop",
          desc: "Bite-sized video content tailored for platforms like Instagram, TikTok, and LinkedIn to boost brand visibility.",
        },
        {
          title: "Motion Graphics & Animated Titles",
          image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
          desc: "Engaging motion graphics and animated elements to enhance video storytelling and viewer retention.",
        }
      ]
    }, {
      id: "editing-post-production",
      title: "Editing & Post-Production",
      subtitle: "We turn your raw footage into professional videos that grab and keep attention.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
      deliverables: [
        "Edited video files in desired formats",
        "Color graded footage",
        "Enhanced audio tracks",
        "Final cut ready for distribution"
      ],
      Specializations: [
        {
          title: "Cinematic Editing & Story Pacing",
          image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
          desc: "Crafting compelling narratives through meticulous editing techniques that maintain audience engagement.",
        }, {
          title: "Color Grading & Film Looks",
          image: imgurl,
          desc: "Applying professional color grading to achieve specific moods and visual aesthetics aligned with brand identity.",
        }, {
          title: "Audio Cleanup & Sound Design",
          image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
          desc: "Enhancing audio quality through noise reduction, sound effects, and balanced mixing for a polished final product."
        }
      ]
    }, {
      id: "drone-photography-videography",
      subtitle: "Stunning aerial views for real estate, factories, and big construction projects.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop",
      deliverables: [
        "High-resolution aerial photographs",
        "4K drone video footage",
        "Edited and color graded content",
        "Compliance with aviation regulations"
      ],
      Specializations: [
        {
          title: "Real Estate Drone Tours",
          image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop",
          desc: "Captivating aerial footage showcasing property exteriors and surrounding landscapes for real estate marketing.",
        }, {
          title: "Corporate & Industrial Aerial Coverage",
          image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop",
          desc: "Professional drone videography for large-scale corporate events, construction sites, and industrial facilities.",
        }, {
          title: "Outdoor Events & Travel Visuals",
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
          desc: "Dynamic aerial coverage capturing the essence of outdoor events and travel experiences.",
        }, {
          title: "Construction Progress Monitoring",
          image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=800&auto=format&fit=crop",
          desc: "Regular aerial documentation of construction sites to monitor progress and provide stakeholders with visual updates.",
        }
      ]
    }, {
      id: "ai-powered-video-ugc-content",
      title: "AI-Powered Video & UGC Content",
      subtitle: "Using AI to create high-quality ads and customer-style videos quickly and affordably.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      deliverables: [
        "AI-generated video ads",
        "User-generated content (UGC) assets",
        "Optimized social media clips",
        "Performance analytics reports"
      ],
      Specializations: [
        {
          title: "AI-Generated Commercial Videos for Campaigns",
          image: imgurl,
          desc: "Utilizing generative AI to create engaging commercial videos tailored for digital marketing campaigns.",
        },
        {
          title: "Creator-Style AI UGC Ads (Reels, Shorts Formats)",
          image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
          desc: "Producing authentic, creator-style user-generated content using AI for platforms like Instagram Reels and YouTube Shorts.",
        },
        {
          title: "AI Product Reviews & Testimonial Videos",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
          desc: "Generating realistic product review and testimonial videos through advanced AI techniques to build trust and credibility.",
        },
        {
          title: "Script-to-Video Ads with AI Voiceovers",
          image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop",
          desc: "Transforming scripts into engaging video ads with AI-generated voiceovers for a polished and professional finish.",
        }
      ]
    }, {
      id: "graphic-design-creative-branding",
      title: "Graphic Design & Creative Branding",
      subtitle: "Modern designs that make your business look professional and trustworthy.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
      deliverables: [
        "Custom logo designs",
        "Marketing collateral (brochures, flyers)",
        "Digital assets (social media graphics, banners)",
        "Comprehensive brand style guide"
      ],
      Specializations: [
        {
          title: "Social Media Post & Ad Creatives",
          image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
          desc: "Eye-catching graphics designed for maximum engagement across various social media platforms.",
        },
        {
          title: "Posters, Flyers & Event Promotions",
          image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=800&auto=format&fit=crop",
          desc: "Creative designs for posters, flyers, and event promotions that capture attention and convey your message effectively.",
        },
        {
          title: "Business Cards & Corporate Stationery",
          image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?q=80&w=800&auto=format&fit=crop",
          desc: "Professional business card and corporate stationery designs that reinforce your brand identity.",
        },
        {
          title: "Pitch Deck & Company Profile Design",
          image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
          desc: "Visually compelling pitch decks and company profiles that effectively communicate your value proposition to stakeholders.",
        }, {
          title: "Thumbnails & YouTube Creative Design",
          image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop",
          desc: "Custom-designed thumbnails and YouTube graphics that enhance video visibility and attract viewers.",
        }
      ]
    }]
  const service = services.find(s => s.id === id);

  if (!service) return <div className="text-white">Service not found</div>;

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <section className="relative h-[70vh] flex items-end px-6 pb-20">
        <div className="absolute inset-0 z-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link to="/" className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors group">
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={25} />
            Back to Home
          </Link>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            {service.title}
          </motion.h1>
          <p className="max-w-2xl text-xl text-zinc-400 font-light leading-relaxed">{service.subtitle}</p>
        </div>
      </section>

      {/* Specialized Capabilities Section  */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="mb-20">
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-6">Service Specializations</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white max-w-3xl">
            Technical execution designed for commercial scale.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.Specializations?.map((item, i) => (
            <div key={i} className="group p-0 border border-zinc-900 bg-zinc-950/50 rounded-4xl hover:bg-zinc-900/30 hover:border-zinc-800 transition-all flex flex-col h-full overflow-hidden">
              <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600";
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 to-transparent pointer-events-none" />
              </div>
              <div className="p-8 pt-10 flex flex-col grow">
                <h4 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-zinc-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 grow">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Deliverables & Consultative CTA  */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-6">Deliverables & Standards</h2>
              <p className="text-zinc-400 font-light mb-8">Every project includes a comprehensive master asset package engineered for long-term utility.</p>
            </div>
            <div className="space-y-4">
              {service.deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-zinc-300 border-b border-zinc-900 pb-4 last:border-0">
                  <CheckCircle2 size={18} className="text-white shrink-0" />
                  <span className="text-base font-light tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white text-black p-14 rounded-[2.5rem] flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-[0.9]">
                Discuss Your Production Goals.
              </h3>
              <p className="text-zinc-600 mb-10 text-lg leading-relaxed">
                Skip the guesswork. Schedule a technical consultation to review your upcoming project requirements and receive a structured production proposal tailored to your brand.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-10 py-5 rounded-full font-bold hover:bg-zinc-800 transition-all text-center">
                Schedule Consultation
              </button>
              <button className="bg-transparent text-black border border-zinc-200 px-10 py-5 rounded-full font-semibold hover:bg-zinc-50 transition-all text-center">
                View Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Placeholder Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-zinc-900 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Behind the Lens</h2>
          <p className="text-zinc-500">Watch our production process in action.</p>
        </div>
        <div className="aspect-video w-full bg-zinc-900 rounded-3xl flex items-center justify-center border border-zinc-800 group cursor-pointer relative overflow-hidden">
          <div className="absolute inset-0 bg-zinc-800 opacity-0 group-hover:opacity-20 transition-opacity" />
          <Play size={64} className="text-white group-hover:scale-110 transition-transform" />
        </div>
      </section>
    </div>
  );
};