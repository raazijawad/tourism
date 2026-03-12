import { Head, Link } from '@inertiajs/react';
import { Accordion } from '@/components/tripvana/Accordion';
import { ActivityCard } from '@/components/tripvana/ActivityCard';
import { BlogCard } from '@/components/tripvana/BlogCard';
import { Button } from '@/components/tripvana/Button';
import { FlowButton } from '@/components/ui/flow-button';
import { DestinationCard } from '@/components/ui/card-21';
import { Gallery4 } from '@/components/ui/gallery4';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { PackageCard } from '@/components/tripvana/PackageCard';
import { ReviewCard } from '@/components/tripvana/ReviewCard';
import { SectionHeading } from '@/components/tripvana/SectionHeading';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Search, Package, CreditCard, Star } from 'lucide-react';
import { DestinationCard as DestinationCardNew } from '@/components/ui/destination-card';
import { TestimonialCard } from '@/components/ui/testimonial-card';

export default function Welcome() {
    return (
        <>
            <Head title="Tripvana - Travel Agency" />
            
            {/* Global Wrapper */}
            <div className="min-h-screen bg-[var(--color-tripvana-white)] text-[var(--color-tripvana-656e7f)] selection:bg-[var(--color-tripvana-a0f751)] selection:text-[var(--color-tripvana-091733)] font-['Inter_Tight']">
                
                {/* ---------- NAVBAR ---------- */}
                <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6">
                    <div className="flex items-center gap-2.5 text-2xl font-bold text-white" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-[var(--color-tripvana-a0f751)]/30 rounded-lg blur-md" />
                            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-tripvana-a0f751)] to-[var(--color-tripvana-a0f751)]/70 flex items-center justify-center">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--color-tripvana-091733)]">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <span className="tracking-tight">Tripvana</span>
                    </div>
                    <nav className="hidden items-center gap-1 rounded-full bg-white/10 px-2 py-2 backdrop-blur-md md:flex border border-white/20 text-white" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
                        <a href="#" className="group relative px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 hover:text-[var(--color-tripvana-a0f751)]">
                            Home
                            <span className="absolute inset-x-4 bottom-1.5 h-px bg-[var(--color-tripvana-a0f751)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </a>
                        <a href="#" className="group relative px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 hover:text-[var(--color-tripvana-a0f751)]">
                            About us
                            <span className="absolute inset-x-4 bottom-1.5 h-px bg-[var(--color-tripvana-a0f751)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </a>
                        <a href="#" className="group relative px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 hover:text-[var(--color-tripvana-a0f751)]">
                            Packages
                            <span className="absolute inset-x-4 bottom-1.5 h-px bg-[var(--color-tripvana-a0f751)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </a>
                        <a href="#" className="group relative px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 hover:text-[var(--color-tripvana-a0f751)]">
                            Blog
                            <span className="absolute inset-x-4 bottom-1.5 h-px bg-[var(--color-tripvana-a0f751)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </a>
                        <a href="#" className="group relative px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 hover:text-[var(--color-tripvana-a0f751)]">
                            Contact
                            <span className="absolute inset-x-4 bottom-1.5 h-px bg-[var(--color-tripvana-a0f751)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <a href="tel:+1800123456" className="hidden items-center gap-2.5 text-white/70 hover:text-white transition-colors lg:flex" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <span className="text-sm font-medium tracking-wide">+1 (800) 123 456</span>
                        </a>
                        <Button variant="primary" className="rounded-full text-sm font-semibold tracking-wide" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>Book Now</Button>
                    </div>
                </header>

                {/* ---------- HERO SECTION ---------- */}
                <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden pt-32 lg:pt-0">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-[var(--color-tripvana-091733)]">
                        <img
                            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
                            alt="Paragliding background"
                            className="h-full w-full object-cover opacity-60"
                        />
                    </div>

                    <div className="container relative z-10 mx-auto flex items-center justify-center px-6 max-w-[var(--_sizes---container--max-width)]">
                        <div className="max-w-4xl text-white text-center">
                                <h1 className="mb-6 mt-12 text-6xl font-bold" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                                    Your Next Adventure <br />Starts Here
                                </h1>
                                <p className="mb-8 text-xs text-white/80 text-center max-w-md mx-auto">
                                    Discover the most beautiful places, experience authentic cultures, and create unforgettable memories with our expertly crafted travel packages.
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-4">
                                    <FlowButton text="Explore Tours" variant="light" />
                                </div>

                                {/* Govaisor Widget Placeholder */}
                                <div className="mt-12 flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-md max-w-sm border border-white/20">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00aa6c] text-white">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M15.5 10c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5z"/><path d="M12 18c2.21 0 4-1.79 4-4H8c0 2.21 1.79 4 4 4z"/></svg>
                                    </div>
                                    <div>
                                        <div className="flex text-[var(--color-tripvana-a0f751)] mb-1">★★★★★</div>
                                        <p className="text-sm font-medium">Over 2.5k+ Reviews on TripAdvisor</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section>

                {/* ---------- TOUR ACTIVITIES ---------- */}
                <section className="bg-white">
                    <div className="container relative mx-auto px-6 max-w-[var(--_sizes---container--max-width)]">
                        <Gallery4
                            title="A new way to explore the world"
                            description="Discover breathtaking destinations, immerse yourself in new cultures, and create unforgettable memories with our curated travel experiences."
                            centered
                            autoPlay
                            autoPlayInterval={3000}
                            items={[
                                {
                                    id: "swiss-alps",
                                    title: "Hiking in Swiss Alps",
                                    description: "Experience the majesty of snow-capped peaks, pristine lakes, and charming alpine villages on this unforgettable mountain adventure.",
                                    href: "#",
                                    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=800&auto=format&fit=crop",
                                },
                                {
                                    id: "dubai",
                                    title: "Luxury Desert Safari",
                                    description: "Embark on an exhilarating desert adventure with dune bashing, camel rides, and a traditional Bedouin camp experience under the stars.",
                                    href: "#",
                                    image: "https://images.unsplash.com/photo-1544644181-1484b3f8c8b4?q=80&w=800&auto=format&fit=crop",
                                },
                                {
                                    id: "bali",
                                    title: "Surfing in Bali",
                                    description: "Ride the perfect waves in paradise, explore ancient temples, and discover the vibrant culture of the Island of the Gods.",
                                    href: "#",
                                    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=800&auto=format&fit=crop",
                                },
                                {
                                    id: "kyoto",
                                    title: "Cultural Temples of Kyoto",
                                    description: "Journey through Japan's ancient capital, visiting serene temples, traditional tea houses, and breathtaking cherry blossom gardens.",
                                    href: "#",
                                    image: "https://images.unsplash.com/photo-1527668752968-14ce70a3d7e6?q=80&w=800&auto=format&fit=crop",
                                },
                                {
                                    id: "santorini",
                                    title: "Santorini Island Escape",
                                    description: "Relax in the stunning white-washed villages, enjoy spectacular sunsets, and explore the crystal-clear waters of the Aegean Sea.",
                                    href: "#",
                                    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
                                },
                            ]}
                        />
                    </div>
                </section>

                {/* ---------- BOOKING PROCESS ---------- */}
                <section className="py-24 relative bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/beaach.jpg')" }}>
                    <div className="absolute inset-0 bg-white/60"></div>
                    <div className="container relative mx-auto px-6 max-w-[var(--_sizes---container--max-width)] text-center">
                        <SectionHeading
                            subtitle="Booking Process"
                            title={<>Easy steps to book your<br/>next journey</>}
                            center
                            titleFont="Unbounded, sans-serif"
                            className="mb-16"
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                            {[
                                { num: '01', title: 'Browse Tours', desc: 'Find your perfect destination from our wide range of curated tours and packages.', icon: Search },
                                { num: '02', title: 'Select a Package', desc: 'Choose the package that fits your schedule, budget, and travel preferences.', icon: Package },
                                { num: '03', title: 'Pay Securely', desc: 'Complete your booking with our secure payment system and get ready to travel.', icon: CreditCard }
                            ].map((step, i) => {
                                const IconComponent = step.icon;
                                return (
                                    <div key={i} className="relative group">
                                        <GlowCard 
                                            customSize
                                            className="w-full h-full"
                                        >
                                            <div className="p-6 flex flex-col h-full">
                                                <div className="w-12 h-12 bg-[var(--color-tripvana-f8f8f8)]/50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[var(--color-tripvana-a0f751)] transition-colors">
                                                    <IconComponent className="w-6 h-6 text-[var(--color-tripvana-091733)]" />
                                                </div>
                                                <div className="text-4xl font-bold text-[var(--color-tripvana-091733)]/5 absolute top-6 right-6 pointer-events-none transition-all transform group-hover:-translate-y-2" style={{ fontFamily: 'Inter Tight, sans-serif' }}>{step.num}</div>
                                                <h3 className="text-xl font-bold text-[var(--color-tripvana-091733)] mb-2" style={{ fontFamily: 'Inter Tight, sans-serif' }}>{step.title}</h3>
                                                <p className="text-sm text-[var(--color-tripvana-656e7f)] leading-relaxed" style={{ fontFamily: 'Inter Tight, sans-serif' }}>{step.desc}</p>
                                            </div>
                                        </GlowCard>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ---------- TRAVEL PACKAGES ---------- */}
                <section className="relative overflow-hidden bg-[var(--color-tripvana-091733)] py-16">
                    {/* Background Decorative Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-[var(--color-tripvana-a0f751)]/5 blur-[120px]" />
                        <div className="absolute -bottom-40 -left-40 h-[300px] w-[300px] rounded-full bg-[var(--color-tripvana-122242)] blur-[100px]" />
                    </div>

                    <div className="container relative mx-auto px-6 max-w-[var(--_sizes---container--max-width)]">
                        {/* Header */}
                        <div className="mb-15 flex flex-col items-center text-center">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                                <span className="text-[var(--color-tripvana-a0f751)]">+</span> Travel Packages
                            </div>
                            <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                                See our most popular <br />
                                <span className="text-[var(--color-tripvana-a0f751)]">destinations</span>
                            </h2>
                        </div>

                        {/* Destination Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Featured Card - Large */}
                            <DestinationCardNew
                                image="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop"
                                location="Cinque Terre"
                                country="Italy"
                                days={7}
                                title="Cinque Terre Coastline and Villages Tour"
                                price="$1,299"
                                rating={4.9}
                                reviews={128}
                                featured
                            />

                            {/* Regular Cards */}
                            <DestinationCardNew
                                image="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop"
                                location="Jaipur"
                                country="India"
                                days={5}
                                title="Taj Mahal and Golden Triangle Expedition"
                                price="$899"
                                rating={4.8}
                                reviews={85}
                            />

                            <DestinationCardNew
                                image="https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=800&auto=format&fit=crop"
                                location="Kyoto"
                                country="Japan"
                                days={10}
                                title="Kyoto Temples and Tokyo City Adventure"
                                price="$2,499"
                                rating={5.0}
                                reviews={241}
                            />

                            <DestinationCardNew
                                image="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop"
                                location="Paris"
                                country="France"
                                days={6}
                                title="Paris Romance and Louvre Museum"
                                price="$1,599"
                                rating={4.7}
                                reviews={156}
                            />

                            <DestinationCardNew
                                image="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=800&auto=format&fit=crop"
                                location="Amsterdam"
                                country="Netherlands"
                                days={4}
                                title="Amsterdam Canals and Windmills"
                                price="$799"
                                rating={4.6}
                                reviews={92}
                            />

                            <DestinationCardNew
                                image="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=800&auto=format&fit=crop"
                                location="Rio de Janeiro"
                                country="Brazil"
                                days={8}
                                title="Rio Carnival and Beaches Experience"
                                price="$1,899"
                                rating={4.9}
                                reviews={114}
                            />
                        </div>
                    </div>
                </section>

                {/* ---------- TRAVELERS REVIEW - CENTERED LUXURY ---------- */}
                <section className="relative overflow-hidden py-28">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-tripvana-f8f8f8)] via-white to-[var(--color-tripvana-f8f8f8)]">
                        {/* Gradient orbs */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-[var(--color-tripvana-a0f751)]/10 to-transparent blur-[120px]" />
                        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[var(--color-tripvana-091733)]/5 to-transparent blur-[100px]" />
                        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-[var(--color-tripvana-a0f751)]/8 to-transparent blur-[100px]" />
                        {/* Noise texture */}
                        <div className="absolute inset-0 opacity-[0.35]" style={{
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)"/%3E%3C/svg%3E")'
                        }} />
                        {/* Subtle grid pattern */}
                        <div className="absolute inset-0 opacity-[0.02]" style={{
                            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, #000000 50px, #000000 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, #000000 50px, #000000 51px)'
                        }} />
                    </div>

                    <div className="container relative mx-auto px-6 max-w-[var(--_sizes---container--max-width)]">
                        {/* Centered Editorial Header */}
                        <div className="mb-24">
                            <div className="flex flex-col items-center text-center">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-3 rounded-full bg-[var(--color-tripvana-091733)] px-6 py-2.5 text-xs font-bold tracking-[0.2em] text-white uppercase mb-8 shadow-lg shadow-[var(--color-tripvana-091733)]/20" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-tripvana-a0f751)] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-tripvana-a0f751)]"></span>
                                    </span>
                                    Travelers Review
                                </div>
                                
                                {/* Main Heading */}
                                <h2 className="text-5xl lg:text-8xl font-bold text-[var(--color-tripvana-091733)] leading-[0.9] tracking-tight mb-6" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                                    What people<br />
                                    <span className="relative inline-block">
                                        <span className="relative z-10 text-[var(--color-tripvana-a0f751)]">say about us</span>
                                        {/* Underline accent */}
                                        <svg className="absolute -bottom-2 left-0 w-full h-3 text-[var(--color-tripvana-a0f751)]/30" viewBox="0 0 200 9" fill="currentColor">
                                            <path d="M2.00025 6.00003C28.0003 3.00003 103.5 0.500031 198 6.50003" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                                        </svg>
                                    </span>
                                </h2>
                                
                                {/* Description */}
                                <p className="text-[var(--color-tripvana-656e7f)] text-lg leading-relaxed max-w-2xl mt-6">
                                    Authentic stories from adventurers who trusted us with their most precious memories. Each journey, uniquely crafted.
                                </p>
                            </div>
                        </div>

                        {/* Featured Testimonial - Hero Card */}
                        <div className="mb-20 relative">
                            <div className="group relative overflow-hidden rounded-3xl bg-[var(--color-tripvana-091733)] p-8 lg:p-14">
                                {/* Background Image with Parallax */}
                                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                                    <img
                                        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1600&auto=format&fit=crop"
                                        alt="Travel destination"
                                        className="h-full w-full object-cover opacity-30"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-tripvana-091733)] via-[var(--color-tripvana-091733)]/80 to-transparent" />
                                </div>
                                
                                {/* Content */}
                                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
                                    {/* Quote Section */}
                                    <div className="lg:col-span-2">
                                        <div className="flex items-center gap-2 mb-7">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-[var(--color-tripvana-a0f751)] fill-[var(--color-tripvana-a0f751)]" />
                                            ))}
                                        </div>
                                        <blockquote className="text-2xl lg:text-3xl text-white font-medium leading-snug" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                                            "Tripvana made our honeymoon absolutely perfect. The itinerary was flawless and every single detail was taken care of."
                                        </blockquote>
                                    </div>
                                    
                                    {/* Author Info */}
                                    <div className="flex lg:flex-col items-center lg:items-start gap-5">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-[var(--color-tripvana-a0f751)]/40 rounded-full blur-xl" />
                                            <img
                                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
                                                alt="Sarah Jenkins"
                                                className="relative w-16 h-16 rounded-full object-cover border-2 border-[var(--color-tripvana-a0f751)]/50"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-lg" style={{ fontFamily: 'Unbounded, sans-serif' }}>Sarah Jenkins</div>
                                            <div className="text-[var(--color-tripvana-a0f751)] text-sm">Honeymoon in Santorini</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonials Grid - Centered Layout */}
                        <div className="mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="group relative rounded-2xl bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--color-tripvana-a0f751)]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="flex items-center gap-1.5 mb-5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-[var(--color-tripvana-a0f751)] fill-[var(--color-tripvana-a0f751)]" />
                                    ))}
                                </div>
                                <blockquote className="text-[var(--color-tripvana-656e7f)] text-sm leading-relaxed mb-7 line-clamp-3" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
                                    "The best travel agency I've ever used. Their local guides in Japan were incredibly knowledgeable and friendly."
                                </blockquote>
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                                        alt="Michael Chen"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="text-[var(--color-tripvana-091733)] font-bold text-xs" style={{ fontFamily: 'Unbounded, sans-serif' }}>Michael Chen</div>
                                        <div className="text-[var(--color-tripvana-9ea7b8)] text-[10px] uppercase tracking-wide">Photographer</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="group relative rounded-2xl bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--color-tripvana-a0f751)]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="flex items-center gap-1.5 mb-5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-[var(--color-tripvana-a0f751)] fill-[var(--color-tripvana-a0f751)]" />
                                    ))}
                                </div>
                                <blockquote className="text-[var(--color-tripvana-656e7f)] text-sm leading-relaxed mb-7 line-clamp-3" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
                                    "From booking to return, everything was seamless. The hotels were perfect and tours unforgettable."
                                </blockquote>
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                                        alt="Emma Rodriguez"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="text-[var(--color-tripvana-091733)] font-bold text-xs" style={{ fontFamily: 'Unbounded, sans-serif' }}>Emma Rodriguez</div>
                                        <div className="text-[var(--color-tripvana-9ea7b8)] text-[10px] uppercase tracking-wide">Adventure Seeker</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 - Dark Highlight */}
                            <div className="group relative rounded-2xl bg-[var(--color-tripvana-091733)] p-7 shadow-[0_8px_40px_rgba(9,23,51,0.3)] hover:shadow-[0_16px_64px_rgba(9,23,51,0.5)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-tripvana-a0f751)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-1.5 mb-5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 text-[var(--color-tripvana-a0f751)] fill-[var(--color-tripvana-a0f751)]" />
                                        ))}
                                    </div>
                                    <blockquote className="text-white text-sm leading-relaxed mb-7 line-clamp-3" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
                                        "I was skeptical about using a travel agency, but Tripvana exceeded all expectations. Will definitely book again!"
                                    </blockquote>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
                                            alt="David Thompson"
                                            className="w-10 h-10 rounded-full object-cover border border-white/20"
                                        />
                                        <div>
                                            <div className="text-white font-bold text-xs" style={{ fontFamily: 'Unbounded, sans-serif' }}>David Thompson</div>
                                            <div className="text-white/60 text-[10px] uppercase tracking-wide">Business Traveler</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="group relative rounded-2xl bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--color-tripvana-a0f751)]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="flex items-center gap-1.5 mb-5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-[var(--color-tripvana-a0f751)] fill-[var(--color-tripvana-a0f751)]" />
                                    ))}
                                </div>
                                <blockquote className="text-[var(--color-tripvana-656e7f)] text-sm leading-relaxed mb-7 line-clamp-3" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
                                    "The personalized attention and local insights made our family trip to Italy truly special."
                                </blockquote>
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                                        alt="Lisa Park"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="text-[var(--color-tripvana-091733)] font-bold text-xs" style={{ fontFamily: 'Unbounded, sans-serif' }}>Lisa Park</div>
                                        <div className="text-[var(--color-tripvana-9ea7b8)] text-[10px] uppercase tracking-wide">Family Traveler</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 5 */}
                            <div className="group relative rounded-2xl bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--color-tripvana-a0f751)]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="flex items-center gap-1.5 mb-5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-[var(--color-tripvana-a0f751)] fill-[var(--color-tripvana-a0f751)]" />
                                    ))}
                                </div>
                                <blockquote className="text-[var(--color-tripvana-656e7f)] text-sm leading-relaxed mb-7 line-clamp-3" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
                                    "Amazing experience from start to finish. The team went above and beyond to make our trip memorable."
                                </blockquote>
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                                        alt="James Wilson"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="text-[var(--color-tripvana-091733)] font-bold text-xs" style={{ fontFamily: 'Unbounded, sans-serif' }}>James Wilson</div>
                                        <div className="text-[var(--color-tripvana-9ea7b8)] text-[10px] uppercase tracking-wide">Couple Traveler</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 6 - Trustpilot */}
                            <div className="group relative rounded-2xl bg-gradient-to-br from-[#00aa6c] to-[#008f5a] p-7 shadow-[0_8px_40px_rgba(0,170,108,0.3)] hover:shadow-[0_16px_64px_rgba(0,170,108,0.5)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                <div className="absolute inset-0 opacity-10" style={{
                                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #ffffff 2px, #ffffff 4px)'
                                }} />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-1.5 mb-5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 text-white fill-white" />
                                        ))}
                                    </div>
                                    <div className="text-white font-bold text-2xl mb-2" style={{ fontFamily: 'Unbounded, sans-serif' }}>Trustpilot</div>
                                    <div className="text-white/80 text-xs mb-5">Verified Reviews</div>
                                    <div className="flex items-center gap-2 text-white/90">
                                        <div className="text-3xl font-bold" style={{ fontFamily: 'Unbounded, sans-serif' }}>4.9</div>
                                        <div className="text-xs">Based on 10,000+ reviews</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Section - Centered Bar */}
                        <div className="relative rounded-2xl bg-white border border-[var(--color-tripvana-091733)]/10 p-10 lg:p-12 overflow-hidden">
                            {/* Background accent */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-b from-[var(--color-tripvana-a0f751)]/5 to-transparent rounded-full blur-[80px]" />
                            
                            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-2 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 text-[var(--color-tripvana-a0f751)] fill-[var(--color-tripvana-a0f751)]" />
                                        ))}
                                    </div>
                                    <div className="text-5xl font-bold text-[var(--color-tripvana-091733)] mb-3" style={{ fontFamily: 'Unbounded, sans-serif' }}>4.9/5</div>
                                    <div className="text-[var(--color-tripvana-9ea7b8)] text-xs uppercase tracking-[0.15em]">Average Rating</div>
                                </div>
                                <div className="text-center md:border-l border-[var(--color-tripvana-091733)]/10">
                                    <div className="text-5xl font-bold text-[var(--color-tripvana-091733)] mb-3" style={{ fontFamily: 'Unbounded, sans-serif' }}>15k+</div>
                                    <div className="text-[var(--color-tripvana-9ea7b8)] text-xs uppercase tracking-[0.15em]">Happy Travelers</div>
                                </div>
                                <div className="text-center md:border-l border-[var(--color-tripvana-091733)]/10">
                                    <div className="text-5xl font-bold text-[var(--color-tripvana-091733)] mb-3" style={{ fontFamily: 'Unbounded, sans-serif' }}>50+</div>
                                    <div className="text-[var(--color-tripvana-9ea7b8)] text-xs uppercase tracking-[0.15em]">Destinations</div>
                                </div>
                                <div className="text-center md:border-l border-[var(--color-tripvana-091733)]/10">
                                    <div className="text-5xl font-bold text-[var(--color-tripvana-091733)] mb-3" style={{ fontFamily: 'Unbounded, sans-serif' }}>12+</div>
                                    <div className="text-[var(--color-tripvana-9ea7b8)] text-xs uppercase tracking-[0.15em]">Years Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Decorative divider */}
                            <div className="h-px bg-gradient-to-r from-[var(--color-tripvana-091733)]/70 via-[var(--color-tripvana-091733)]/40   to-transparent" />

                {/* ---------- BLOG & TIPS - EDITORIAL MAGAZINE ---------- */}
                <section className="relative overflow-hidden py-28 bg-[var(--color-tripvana-f8f8f8)]">
                    {/* Background Details */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[var(--color-tripvana-a0f751)]/8 to-transparent rounded-full blur-[120px]" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[var(--color-tripvana-091733)]/5 to-transparent rounded-full blur-[100px]" />
                        {/* Noise texture */}
                        <div className="absolute inset-0 opacity-[0.3]" style={{
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)"/%3E%3C/svg%3E")'
                        }} />
                    </div>

                    <div className="container relative mx-auto px-6 max-w-[var(--_sizes---container--max-width)]">
                        {/* Editorial Header */}
                        <div className="mb-20">
                            <div className="flex flex-col items-center text-center">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2.5 rounded-full bg-white border border-[var(--color-tripvana-091733)]/10 px-5 py-2 text-xs font-bold tracking-[0.15em] text-[var(--color-tripvana-091733)] uppercase mb-7 shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-[var(--color-tripvana-a0f751)]" />
                                    Blog & Tips
                                </div>
                                
                                {/* Main Heading - 2 rows, centered, smaller */}
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-tripvana-091733)] leading-[1.15] tracking-tight mb-6" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                                    Latest travel<br />
                                    <span className="text-[var(--color-tripvana-a0f751)]">insights</span>
                                </h2>
                                
                                {/* Description */}
                                <p className="text-[var(--color-tripvana-656e7f)] text-sm max-w-lg leading-relaxed mb-6">
                                    Expert guides, packing tips, and destination inspiration for the modern traveler.
                                </p>
                                
                                {/* View All Link */}
                                <a
                                    href="#"
                                    className="group inline-flex items-center gap-3 text-[var(--color-tripvana-091733)] font-bold text-xs uppercase tracking-wider hover:text-[var(--color-tripvana-a0f751)] transition-colors"
                                    style={{ fontFamily: 'Unbounded, sans-serif' }}
                                >
                                    <span>View All Posts</span>
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                            
                            
                        </div>

                        {/* Blog Grid - Asymmetric Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Featured Post - Large Card */}
                            <div className="lg:col-span-7 group relative">
                                <div className="relative h-[500px] lg:h-[580px] rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
                                    {/* Image */}
                                    <div className="absolute inset-0">
                                        <img
                                            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1200&auto=format&fit=crop"
                                            alt="Backpacking Europe"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-tripvana-091733)] via-[var(--color-tripvana-091733)]/40 to-transparent" />
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
                                        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                            {/* Tag */}
                                            <div className="inline-flex items-center gap-2 bg-[var(--color-tripvana-a0f751)] px-4 py-1.5 rounded-full mb-5">
                                                <span className="text-[10px] font-bold text-[var(--color-tripvana-091733)] uppercase tracking-wider" style={{ fontFamily: 'Unbounded, sans-serif' }}>Travel Tips</span>
                                            </div>
                                            
                                            {/* Title */}
                                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                                                10 Essential Items to Pack for a Backpacking Trip in Europe
                                            </h3>
                                            
                                            {/* Excerpt */}
                                            <p className="text-white/80 text-sm leading-relaxed mb-5 line-clamp-2">
                                                Discover the ultimate packing list for your European adventure. Don't leave home without these essentials.
                                            </p>
                                            
                                            {/* Meta */}
                                            <div className="flex items-center gap-4 text-white/60 text-xs">
                                                <span className="flex items-center gap-2">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    March 15, 2024
                                                </span>
                                                <span className="w-1 h-1 rounded-full bg-white/40" />
                                                <span className="flex items-center gap-2 group-hover:text-[var(--color-tripvana-a0f751)] transition-colors">
                                                    Read Article
                                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Secondary Posts - Stacked */}
                            <div className="lg:col-span-5 flex flex-col gap-6">
                                {/* Post 2 */}
                                <div className="group relative flex-1 rounded-2xl overflow-hidden bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] transition-all duration-500">
                                    <div className="flex flex-col sm:flex-row h-full">
                                        {/* Image */}
                                        <div className="sm:w-48 h-48 sm:h-full flex-shrink-0 overflow-hidden">
                                            <img
                                                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=600&auto=format&fit=crop"
                                                alt="Bali Temple"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="flex-1 p-6 flex flex-col justify-center">
                                            <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                                                {/* Tag */}
                                                <div className="inline-flex items-center gap-1.5 mb-3">
                                                    <span className="text-[9px] font-bold text-[var(--color-tripvana-a0f751)] uppercase tracking-wider" style={{ fontFamily: 'Unbounded, sans-serif' }}>Destinations</span>
                                                </div>
                                                
                                                {/* Title */}
                                                <h3 className="text-lg font-bold text-[var(--color-tripvana-091733)] mb-2 leading-snug group-hover:text-[var(--color-tripvana-a0f751)] transition-colors" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                                                    Why Bali Should Be Your Next Spiritual Retreat Destination
                                                </h3>
                                                
                                                {/* Excerpt */}
                                                <p className="text-[var(--color-tripvana-656e7f)] text-xs leading-relaxed mb-4 line-clamp-2">
                                                    Explore the serene temples, lush jungles, and spiritual practices of Bali.
                                                </p>
                                                
                                                {/* Meta */}
                                                <div className="flex items-center gap-3 text-[var(--color-tripvana-9ea7b8)] text-[10px]">
                                                    <span className="flex items-center gap-1.5">
                                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        March 10, 2024
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Post 3 */}
                                <div className="group relative flex-1 rounded-2xl overflow-hidden bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] transition-all duration-500">
                                    <div className="flex flex-col sm:flex-row h-full">
                                        {/* Image */}
                                        <div className="sm:w-48 h-48 sm:h-full flex-shrink-0 overflow-hidden">
                                            <img
                                                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&auto=format&fit=crop"
                                                alt="Tokyo Subway"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="flex-1 p-6 flex flex-col justify-center">
                                            <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                                                {/* Tag */}
                                                <div className="inline-flex items-center gap-1.5 mb-3">
                                                    <span className="text-[9px] font-bold text-[var(--color-tripvana-a0f751)] uppercase tracking-wider" style={{ fontFamily: 'Unbounded, sans-serif' }}>Guides</span>
                                                </div>
                                                
                                                {/* Title */}
                                                <h3 className="text-lg font-bold text-[var(--color-tripvana-091733)] mb-2 leading-snug group-hover:text-[var(--color-tripvana-a0f751)] transition-colors" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                                                    A Beginner's Guide to Navigating Tokyo's Subway System
                                                </h3>
                                                
                                                {/* Excerpt */}
                                                <p className="text-[var(--color-tripvana-656e7f)] text-xs leading-relaxed mb-4 line-clamp-2">
                                                    Master the Tokyo subway like a local with our comprehensive guide.
                                                </p>
                                                
                                                {/* Meta */}
                                                <div className="flex items-center gap-3 text-[var(--color-tripvana-9ea7b8)] text-[10px]">
                                                    <span className="flex items-center gap-1.5">
                                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        March 05, 2024
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="mt-20 relative">
                            <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-tripvana-091733)]/10 to-transparent" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-tripvana-f8f8f8)] px-6">
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-[var(--color-tripvana-a0f751)]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                    </svg>
                                    <span className="text-[10px] font-bold text-[var(--color-tripvana-091733)] uppercase tracking-[0.2em]" style={{ fontFamily: 'Unbounded, sans-serif' }}>More Stories Coming Soon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------- FAQ - MINIMAL REFINED ---------- */}
                <section className="relative overflow-hidden py-28 bg-white">
                    {/* Background Details */}
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[var(--color-tripvana-a0f751)]/6 to-transparent rounded-full blur-[100px]" />
                        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[var(--color-tripvana-091733)]/4 to-transparent rounded-full blur-[120px]" />
                        {/* Noise texture */}
                        <div className="absolute inset-0 opacity-[0.25]" style={{
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)"/%3E%3C/svg%3E")'
                        }} />
                    </div>

                    <div className="container relative mx-auto px-6 max-w-[var(--_sizes---container--max-width)]">
                        {/* Centered Header */}
                        <div className="mb-20">
                            <div className="flex flex-col items-center text-center">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2.5 rounded-full bg-[var(--color-tripvana-f8f8f8)] border border-[var(--color-tripvana-091733)]/10 px-5 py-2 text-xs font-bold tracking-[0.15em] text-[var(--color-tripvana-091733)] uppercase mb-7">
                                    <svg className="w-3.5 h-3.5 text-[var(--color-tripvana-a0f751)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    General Questions
                                </div>
                                
                                {/* Heading */}
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-tripvana-091733)] leading-[1.15] tracking-tight mb-6" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                                    Frequently asked<br />
                                    <span className="text-[var(--color-tripvana-a0f751)]">questions</span>
                                </h2>
                                
                                {/* Description */}
                                <p className="text-[var(--color-tripvana-656e7f)] text-sm max-w-lg leading-relaxed">
                                    Find answers to the most common questions about booking, payments, and our travel services.
                                </p>
                            </div>
                        </div>

                        {/* FAQ Grid - 2 Columns */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                            {/* FAQ Column 1 */}
                            <div className="space-y-4">
                                {/* Question 1 */}
                                <div className="group rounded-2xl bg-[var(--color-tripvana-f8f8f8)] p-6 transition-all duration-500 hover:bg-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-tripvana-091733)] flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[var(--color-tripvana-091733)] font-bold text-sm mb-2 leading-snug" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                                                How do I book a tour package?
                                            </h3>
                                            <p className="text-[var(--color-tripvana-656e7f)] text-xs leading-relaxed">
                                                Booking is easy! Simply browse our packages, select your desired dates, and click 'Book Now'. Follow the secure payment prompts to confirm your reservation.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Question 2 */}
                                <div className="group rounded-2xl bg-[var(--color-tripvana-f8f8f8)] p-6 transition-all duration-500 hover:bg-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-tripvana-091733)] flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[var(--color-tripvana-091733)] font-bold text-sm mb-2 leading-snug" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                                                Are flights included in the package?
                                            </h3>
                                            <p className="text-[var(--color-tripvana-656e7f)] text-xs leading-relaxed">
                                                Most of our standard packages cover land arrangements only. However, we do offer comprehensive packages that include flights. Please check the specific package details.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Question 3 */}
                                <div className="group rounded-2xl bg-[var(--color-tripvana-f8f8f8)] p-6 transition-all duration-500 hover:bg-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-tripvana-a0f751)] flex items-center justify-center">
                                            <svg className="w-5 h-5 text-[var(--color-tripvana-091733)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[var(--color-tripvana-091733)] font-bold text-sm mb-2 leading-snug" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                                                What is your cancellation policy?
                                            </h3>
                                            <p className="text-[var(--color-tripvana-656e7f)] text-xs leading-relaxed">
                                                Cancellations made 30 days prior to departure qualify for a full refund. Cancellations between 15-29 days receive a 50% refund. Please read our full terms.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Column 2 */}
                            <div className="space-y-4">
                                {/* Question 4 */}
                                <div className="group rounded-2xl bg-[var(--color-tripvana-f8f8f8)] p-6 transition-all duration-500 hover:bg-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-tripvana-a0f751)] flex items-center justify-center">
                                            <svg className="w-5 h-5 text-[var(--color-tripvana-091733)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[var(--color-tripvana-091733)] font-bold text-sm mb-2 leading-snug" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                                                Do you offer custom itineraries?
                                            </h3>
                                            <p className="text-[var(--color-tripvana-656e7f)] text-xs leading-relaxed">
                                                Yes, we specialize in tailor-made journeys. Contact our travel experts with your requirements and we'll craft a personalized itinerary just for you.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Question 5 */}
                                <div className="group rounded-2xl bg-[var(--color-tripvana-f8f8f8)] p-6 transition-all duration-500 hover:bg-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-tripvana-091733)] flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[var(--color-tripvana-091733)] font-bold text-sm mb-2 leading-snug" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                                                Is travel insurance required?
                                            </h3>
                                            <p className="text-[var(--color-tripvana-656e7f)] text-xs leading-relaxed">
                                                While not strictly required, we highly recommend purchasing comprehensive travel insurance to cover unexpected cancellations, medical emergencies, or lost baggage during your trip.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact CTA Card */}
                                <div className="relative rounded-2xl bg-[var(--color-tripvana-091733)] p-6 overflow-hidden group">
                                    {/* Background accent */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-tripvana-a0f751)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="relative z-10 flex flex-col h-full justify-center">
                                        <div className="w-10 h-10 rounded-full bg-[var(--color-tripvana-a0f751)]/20 flex items-center justify-center mb-4">
                                            <svg className="w-5 h-5 text-[var(--color-tripvana-a0f751)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-white font-bold text-sm mb-2 leading-snug" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                                            Still have questions?
                                        </h3>
                                        <p className="text-white/60 text-xs leading-relaxed mb-4">
                                            Our team is here to help you plan your perfect journey.
                                        </p>
                                        <a href="#" className="inline-flex items-center gap-2 text-[var(--color-tripvana-a0f751)] font-bold text-xs uppercase tracking-wider hover:text-white transition-colors" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                                            <span>Contact Us</span>
                                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------- FOOTER - LUXURY EDITORIAL ---------- */}
                <footer className="relative bg-[var(--color-tripvana-091733)] text-white overflow-hidden">
                    {/* Background Details */}
                    <div className="absolute inset-0">
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-tripvana-091733)] via-[var(--color-tripvana-091733)] to-[var(--color-tripvana-0f1f47)]" />
                        {/* Large gradient orb */}
                        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[var(--color-tripvana-a0f751)]/15 to-transparent blur-[140px]" />
                        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[var(--color-tripvana-a0f751)]/8 to-transparent blur-[120px]" />
                        {/* Subtle grid pattern */}
                        <div className="absolute inset-0 opacity-[0.02]" style={{
                            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, #ffffff 40px, #ffffff 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #ffffff 40px, #ffffff 41px)'
                        }} />
                        {/* Noise texture */}
                        <div className="absolute inset-0 opacity-[0.2]" style={{
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)"/%3E%3C/svg%3E")'
                        }} />
                    </div>

                    <div className="container relative mx-auto px-6 max-w-[var(--_sizes---container--max-width)]">
                        {/* Main Footer Content */}
                        <div className="pt-20 pb-16">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                                {/* Brand Column - Spans 4 cols */}
                                <div className="lg:col-span-4">
                                    {/* Logo */}
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-[var(--color-tripvana-a0f751)]/30 rounded-xl blur-lg" />
                                            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-tripvana-a0f751)] to-[var(--color-tripvana-a0f751)]/70 flex items-center justify-center">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--color-tripvana-091733)]">
                                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Unbounded, sans-serif' }}>Tripvana</span>
                                    </div>
                                    
                                    {/* Description */}
                                    <p className="text-[var(--color-tripvana-9ea7b8)] leading-relaxed mb-8 pr-4">
                                        We are dedicated to providing the ultimate travel experience. Our expert guides and carefully curated itineraries ensure every journey is memorable.
                                    </p>
                                    
                                    {/* Social Links */}
                                    <div className="flex items-center gap-3">
                                        <a href="#" className="group w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-tripvana-a0f751)] hover:border-[var(--color-tripvana-a0f751)] hover:text-[var(--color-tripvana-091733)] transition-all duration-300">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                                        </a>
                                        <a href="#" className="group w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-tripvana-a0f751)] hover:border-[var(--color-tripvana-a0f751)] hover:text-[var(--color-tripvana-091733)] transition-all duration-300">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                        </a>
                                        <a href="#" className="group w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-tripvana-a0f751)] hover:border-[var(--color-tripvana-a0f751)] hover:text-[var(--color-tripvana-091733)] transition-all duration-300">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                                        </a>
                                        <a href="#" className="group w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-tripvana-a0f751)] hover:border-[var(--color-tripvana-a0f751)] hover:text-[var(--color-tripvana-091733)] transition-all duration-300">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                                        </a>
                                    </div>
                                </div>

                                {/* Links Columns */}
                                <div className="lg:col-span-2">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-[0.15em] mb-6" style={{ fontFamily: 'Unbounded, sans-serif' }}>Company</h4>
                                    <ul className="flex flex-col gap-3">
                                        <li><a href="#" className="text-[var(--color-tripvana-9ea7b8)] text-sm hover:text-[var(--color-tripvana-a0f751)] transition-colors inline-block hover:translate-x-1 duration-200">About Us</a></li>
                                        <li><a href="#" className="text-[var(--color-tripvana-9ea7b8)] text-sm hover:text-[var(--color-tripvana-a0f751)] transition-colors inline-block hover:translate-x-1 duration-200">Careers</a></li>
                                        <li><a href="#" className="text-[var(--color-tripvana-9ea7b8)] text-sm hover:text-[var(--color-tripvana-a0f751)] transition-colors inline-block hover:translate-x-1 duration-200">Travel Blog</a></li>
                                        <li><a href="#" className="text-[var(--color-tripvana-9ea7b8)] text-sm hover:text-[var(--color-tripvana-a0f751)] transition-colors inline-block hover:translate-x-1 duration-200">Contact Us</a></li>
                                        <li><a href="#" className="text-[var(--color-tripvana-9ea7b8)] text-sm hover:text-[var(--color-tripvana-a0f751)] transition-colors inline-block hover:translate-x-1 duration-200">Press</a></li>
                                    </ul>
                                </div>

                                <div className="lg:col-span-2">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-[0.15em] mb-6" style={{ fontFamily: 'Unbounded, sans-serif' }}>Destinations</h4>
                                    <ul className="flex flex-col gap-3">
                                        <li><a href="#" className="text-[var(--color-tripvana-9ea7b8)] text-sm hover:text-[var(--color-tripvana-a0f751)] transition-colors inline-block hover:translate-x-1 duration-200">Europe</a></li>
                                        <li><a href="#" className="text-[var(--color-tripvana-9ea7b8)] text-sm hover:text-[var(--color-tripvana-a0f751)] transition-colors inline-block hover:translate-x-1 duration-200">Asia</a></li>
                                        <li><a href="#" className="text-[var(--color-tripvana-9ea7b8)] text-sm hover:text-[var(--color-tripvana-a0f751)] transition-colors inline-block hover:translate-x-1 duration-200">Americas</a></li>
                                        <li><a href="#" className="text-[var(--color-tripvana-9ea7b8)] text-sm hover:text-[var(--color-tripvana-a0f751)] transition-colors inline-block hover:translate-x-1 duration-200">Africa</a></li>
                                        <li><a href="#" className="text-[var(--color-tripvana-9ea7b8)] text-sm hover:text-[var(--color-tripvana-a0f751)] transition-colors inline-block hover:translate-x-1 duration-200">Oceania</a></li>
                                    </ul>
                                </div>

                                <div className="lg:col-span-2">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-[0.15em] mb-6" style={{ fontFamily: 'Unbounded, sans-serif' }}>Support</h4>
                                    <ul className="flex flex-col gap-3">
                                        <li><a href="#" className="text-[var(--color-tripvana-9ea7b8)] text-sm hover:text-[var(--color-tripvana-a0f751)] transition-colors inline-block hover:translate-x-1 duration-200">Help Center</a></li>
                                        <li><a href="#" className="text-[var(--color-tripvana-9ea7b8)] text-sm hover:text-[var(--color-tripvana-a0f751)] transition-colors inline-block hover:translate-x-1 duration-200">FAQs</a></li>
                                        <li><a href="#" className="text-[var(--color-tripvana-9ea7b8)] text-sm hover:text-[var(--color-tripvana-a0f751)] transition-colors inline-block hover:translate-x-1 duration-200">Terms of Service</a></li>
                                        <li><a href="#" className="text-[var(--color-tripvana-9ea7b8)] text-sm hover:text-[var(--color-tripvana-a0f751)] transition-colors inline-block hover:translate-x-1 duration-200">Privacy Policy</a></li>
                                        <li><a href="#" className="text-[var(--color-tripvana-9ea7b8)] text-sm hover:text-[var(--color-tripvana-a0f751)] transition-colors inline-block hover:translate-x-1 duration-200">Sitemap</a></li>
                                    </ul>
                                </div>

                                {/* Newsletter Column */}
                                <div className="lg:col-span-2">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-[0.15em] mb-6" style={{ fontFamily: 'Unbounded, sans-serif' }}>Newsletter</h4>
                                    <p className="text-[var(--color-tripvana-9ea7b8)] text-sm leading-relaxed mb-5">
                                        Subscribe for travel tips, exclusive deals, and inspiration.
                                    </p>
                                    <form className="flex flex-col gap-3">
                                        <div className="relative">
                                            <input
                                                type="email"
                                                placeholder="Your email address"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-tripvana-a0f751)] focus:bg-white/10 transition-all duration-300 pr-12"
                                            />
                                            <button
                                                type="submit"
                                                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-[var(--color-tripvana-a0f751)] text-[var(--color-tripvana-091733)] flex items-center justify-center hover:bg-white transition-colors duration-300"
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                    
                                    {/* Contact Info */}
                                    <div className="mt-6 space-y-2">
                                        <a href="tel:+1800123456" className="flex items-center gap-2 text-[var(--color-tripvana-9ea7b8)] text-xs hover:text-[var(--color-tripvana-a0f751)] transition-colors">
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            +1 (800) 123 456
                                        </a>
                                        <a href="mailto:hello@tripvana.com" className="flex items-center gap-2 text-[var(--color-tripvana-9ea7b8)] text-xs hover:text-[var(--color-tripvana-a0f751)] transition-colors">
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            hello@tripvana.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="border-t border-white/10 pt-8 pb-8">
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                                {/* Copyright */}
                                <p className="text-[var(--color-tripvana-9ea7b8)] text-xs">
                                    © 2024 Tripvana. All rights reserved.
                                </p>
                                
                                {/* Legal Links */}
                                <div className="flex items-center gap-6">
                                    <a href="#" className="text-[var(--color-tripvana-9ea7b8)] text-xs hover:text-white transition-colors">Privacy Policy</a>
                                    <span className="w-px h-3 bg-white/10" />
                                    <a href="#" className="text-[var(--color-tripvana-9ea7b8)] text-xs hover:text-white transition-colors">Terms of Service</a>
                                    <span className="w-px h-3 bg-white/10" />
                                    <a href="#" className="text-[var(--color-tripvana-9ea7b8)] text-xs hover:text-white transition-colors">Cookie Policy</a>
                                </div>
                                
                                {/* Payment Methods */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-6 rounded bg-white/10 flex items-center justify-center">
                                        <svg className="w-6 h-4 text-white/60" viewBox="0 0 38 24" fill="currentColor"><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#fff" fill-opacity=".05"/><path d="M9.5 12.8c.3-.7.8-1.3 1.4-1.8.6-.5 1.4-.8 2.3-.8.6 0 1.1.1 1.6.3.5.2.9.5 1.2.9.3-.4.7-.7 1.2-.9.5-.2 1-.3 1.6-.3.9 0 1.7.3 2.3.8.6.5 1.1 1.1 1.4 1.8.3.7.5 1.5.5 2.4 0 .9-.2 1.7-.5 2.4-.3.7-.8 1.3-1.4 1.8-.6.5-1.4.8-2.3.8-.6 0-1.1-.1-1.6-.3-.5-.2-.9-.5-1.2-.9-.3.4-.7.7-1.2.9-.5.2-1 .3-1.6.3-.9 0-1.7-.3-2.3-.8-.6-.5-1.1-1.1-1.4-1.8-.3-.7-.5-1.5-.5-2.4 0-.9.1-1.7.5-2.4z" fill="#fff" fill-opacity=".6"/></svg>
                                    </div>
                                    <div className="w-10 h-6 rounded bg-white/10 flex items-center justify-center">
                                        <svg className="w-6 h-4 text-white/60" viewBox="0 0 38 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="#fff" fill-opacity=".3"/><circle cx="26" cy="12" r="10" fill="#fff" fill-opacity=".5"/></svg>
                                    </div>
                                    <div className="w-10 h-6 rounded bg-white/10 flex items-center justify-center">
                                        <svg className="w-6 h-4 text-white/60" viewBox="0 0 38 24" fill="currentColor"><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#fff" fill-opacity=".05"/><rect x="6" y="6" width="10" height="12" rx="1" fill="#fff" fill-opacity=".4"/><rect x="22" y="6" width="10" height="12" rx="1" fill="#fff" fill-opacity=".4"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </>
    );
}
