import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Filter, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import previewvideo from '../assets/video/preview-video.mp4';

//Data Structure for Projects
interface Project {
    id: number;
    title: string;
    category: string;
    type: string;
    image: string;
    description: string;
    videoUrl?: string; // Optional: Only for video projects
    clientNeed: string;
    ourWork: string;
    result: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Corporate Identity Film",
        category: "Videography",
        type: "Corporate Shoot",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800",
        videoUrl: previewvideo,
        description: "High-end brand story for a leading tech firm in Hyderabad.",
        clientNeed: "The client needed a professional way to introduce their tech firm to international investors.",
        ourWork: "We conducted a 2-day shoot at their office and used cinematic editing to highlight their team and technology.",
        result: "A 2-minute brand film used for their global website launch and investor pitches."
    },
    {
        id: 2,
        title: "Premium Tech Showcase",
        category: "Product / Brand Shoots",
        type: "Product Photography",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",
        description: "E-commerce visuals focusing on sleek design and texture.",
        clientNeed: "The client needed a professional way to introduce their tech firm to international investors.",
        ourWork: "We conducted a 2-day shoot at their office and used cinematic editing to highlight their team and technology.",
        result: "A 2-minute brand film used for their global website launch and investor pitches."
    },
    {
        id: 3,
        title: "Industrial Drone Coverage",
        category: "Events / Campaigns",
        type: "Drone Videography",
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800",
        description: "Aerial progress tracking for a large-scale construction site.",
        clientNeed: "The client needed a professional way to introduce their tech firm to international investors.",
        ourWork: "We conducted a 2-day shoot at their office and used cinematic editing to highlight their team and technology.",
        result: "A 2-minute brand film used for their global website launch and investor pitches."
    },
    {
        id: 4,
        title: "Executive Portraits",
        category: "Photography",
        type: "Corporate Shoot",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800",
        description: "Professional headshots for a board of directors.",
        clientNeed: "The client needed a professional way to introduce their tech firm to international investors.",
        ourWork: "We conducted a 2-day shoot at their office and used cinematic editing to highlight their team and technology.",
        result: "A 2-minute brand film used for their global website launch and investor pitches."
    },
    {
        id: 5,
        title: "Fashion Campaign 2026",
        category: "Product / Brand Shoots",
        type: "Campaign Photography",
        image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?q=80&w=800",
        description: "Visuals for a multi-channel digital marketing campaign.",
        clientNeed: "The client needed a professional way to introduce their tech firm to international investors.",
        ourWork: "We conducted a 2-day shoot at their office and used cinematic editing to highlight their team and technology.",
        result: "A 2-minute brand film used for their global website launch and investor pitches."
    },
    {
        id: 6,
        title: "AI-Generated UGC Ad",
        category: "Corporate Shoots",
        type: "AI Video",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
        description: "Fast-turnaround social media ad using generative AI.",
        clientNeed: "The client needed a professional way to introduce their tech firm to international investors.",
        ourWork: "We conducted a 2-day shoot at their office and used cinematic editing to highlight their team and technology.",
        result: "A 2-minute brand film used for their global website launch and investor pitches."
    }
];

const categories = ["All", "Photography", "Videography", "Corporate Shoots", "Product / Brand Shoots", "Events / Campaigns"];

export const PortfolioPage = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeFilter, setActiveFilter] = useState("All");
    const navigate = useNavigate();

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <div className="min-h-screen bg-black text-white pt-20 pb-24 px-6 selection:bg-zinc-800">
            {/* Back to Home Button */}
            <div className="max-w-7xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="group flex items-center cursor-pointer w-fit"
                    onClick={() => navigate('/')}
                >
                    <ArrowLeft className="mr-2 text-zinc-500 group-hover:text-white group-hover:-translate-x-2 transition-all duration-300" size={20} />
                    <span className="text-sm uppercase tracking-widest font-medium text-zinc-500 group-hover:text-white transition-colors duration-300">back to home</span>
                </motion.div>
            </div>

            <header className="max-w-7xl mx-auto mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-8xl font-bold tracking-tighter mb-6"
                >
                    Selected Work
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="max-w-xl text-xl text-zinc-400 font-light"
                >
                    A showcase of real projects delivered for real clients. No hype—just professional quality and business results.
                </motion.p>
            </header>

            {/* Work Categories (Filters) */}
            <section className="max-w-7xl mx-auto mb-12">
                <div className="flex flex-wrap gap-4 items-center">
                    <Filter size={18} className="text-zinc-600 mr-2" />
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeFilter === cat
                                ? "bg-white text-black"
                                : "bg-zinc-900 text-zinc-500 hover:text-white border border-zinc-800"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Portfolio Grid */}
            <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {filteredProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        layoutId={`project-${project.id}`}
                        className="group cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-zinc-900 mb-6 border border-zinc-800">
                            <img
                                src={project.image}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                                alt={project.title}
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="bg-white text-black p-5 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform">
                                    <ArrowRight size={28} />
                                </div>
                            </div>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{project.type}</p>
                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                    </motion.div>
                ))}
            </main>
            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-sm"
                    >
                        <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-3xl border border-zinc-800">

                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-white hover:text-black transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="grid lg:grid-cols-2">
                                <div className="aspect-video lg:aspect-auto bg-black">
                                    {selectedProject.videoUrl ? (
                                        <video
                                            src={selectedProject.videoUrl}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <img src={selectedProject.image} className="w-full h-full object-cover" />
                                    )}
                                </div>
                                <div className="p-8 md:p-12 space-y-10">
                                    <div>
                                        <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-2">{selectedProject.type}</p>
                                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">{selectedProject.title}</h2>
                                    </div>

                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-white font-semibold text-lg mb-2">The Client Need</h4>
                                            <p className="text-zinc-400 font-light leading-relaxed">{selectedProject.clientNeed}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold text-lg mb-2">Our Work</h4>
                                            <p className="text-zinc-400 font-light leading-relaxed">{selectedProject.ourWork}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold text-lg mb-2">Final Result</h4>
                                            <p className="text-zinc-400 font-light leading-relaxed">{selectedProject.result}</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => window.location.href = '/contact'}
                                        className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-zinc-200 transition-colors uppercase tracking-normal sm:tracking-widest text-[12px] sm:text-sm leading-tight"
                                    >
                                        Get Similar Results for Your Brand
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trust Section */}
            <section className="max-w-7xl mx-auto mt-32 py-20 border-t border-zinc-900 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                    Every project is executed with a clear business objective.
                </h2>
                <p className="max-w-2xl mx-auto text-zinc-500 text-lg font-light leading-relaxed">
                    We prioritize professional timelines, high-end quality, and work that helps your brand communicate clearly to its audience.
                </p>
            </section>
            {/* contact us */}
            <section className="max-w-7xl mx-auto mt-20 p-12 md:p-24 bg-zinc-900/50 rounded-3xl border border-zinc-800 text-center">
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Want similar work for your brand?</h3>
                <button
                    onClick={() => navigate('/contact')}
                    className="bg-white cursor-pointer text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all uppercase tracking-wider"
                >
                    Contact Us
                </button>
            </section>
        </div>
    );
};