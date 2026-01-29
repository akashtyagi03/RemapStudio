import { motion } from 'framer-motion';
import { Camera, Video, Palette, Zap, CheckCircle2, Target, Trophy, Clock } from 'lucide-react';

export const AboutPage = () => {

  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800">
      {/* What We Do Section */}
      <section className="py-15 px-6 border-y border-zinc-900 bg-zinc-950/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 font-bold mb-12 text-center">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Camera, title: "Photography", desc: "Professional product shoots and high-end corporate coverage." },
              { icon: Video, title: "Videography", desc: "Commercial films and ads designed for marketing campaigns." },
              { icon: Palette, title: "Branding", desc: "Modern visual systems and high-impact digital designs." },
              { icon: Zap, title: "AI Content", desc: "AI-powered UGC and ads for high-volume social growth." }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-2xl hover:border-zinc-500 transition-colors"
              >
                <service.icon className="text-zinc-400 mb-6" size={32} />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work section */}
      <section className="py-15 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">Our Process</h2>
              <p className="text-zinc-400 text-lg mb-8">We follow a simple, 4-step workflow to ensure your project is delivered with precision.</p>

              <div className="space-y-8">
                {[
                  { step: "01", title: "Understand", desc: "We learn about your project goals and business requirements." },
                  { step: "02", title: "Plan", desc: "We create a roadmap, storyboards, and production timelines." },
                  { step: "03", title: "Execute", desc: "We handle the entire creative process with professional gear." },
                  { step: "04", title: "Deliver", desc: "You receive polished, high-resolution assets ready for use." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <span className="text-zinc-700 font-bold text-2xl">{item.step}</span>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-zinc-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-zinc-900 aspect-square rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800"
                alt="Studio Workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us section */}
      <section className="py-14 px-6 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">Why Businesses Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {[
              { icon: Target, title: "Business-Focused Results", desc: "Visuals designed specifically to get you more customers." },
              { icon: Trophy, title: "Premium Quality", desc: "High standards in lighting, sound, and professional editing." },
              { icon: Clock, title: "Reliable Timelines", desc: "We stick to our schedules and deliver on or before the deadline." },
              { icon: CheckCircle2, title: "Market Expertise", desc: "Local Indian expertise with global production standards." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="p-3 bg-zinc-900 rounded-lg">
                  <item.icon className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
