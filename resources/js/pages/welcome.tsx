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
                    <div className="flex items-center gap-2 text-2xl font-bold text-white">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Tripvana
                    </div>
                    <nav className="hidden items-center gap-8 rounded-full bg-white/10 px-8 py-4 backdrop-blur-md md:flex border border-white/20 text-white font-medium absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ fontFamily: 'Aspekta, sans-serif' }}>
                        <a href="#" className="transition-colors hover:text-[var(--color-tripvana-a0f751)]">Home</a>
                        <a href="#" className="transition-colors hover:text-[var(--color-tripvana-a0f751)]">About us</a>
                        <a href="#" className="transition-colors hover:text-[var(--color-tripvana-a0f751)]">Packages</a>
                        <a href="#" className="transition-colors hover:text-[var(--color-tripvana-a0f751)]">Blog</a>
                        <a href="#" className="transition-colors hover:text-[var(--color-tripvana-a0f751)]">Contact</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <div className="hidden items-center gap-2 text-white/80 lg:flex">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <span className="font-medium">+1 (800) 123 456</span>
                        </div>
                        <Button variant="primary" className="rounded-full">Book Now</Button>
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

                {/* ---------- BLOG & TIPS ---------- */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-[var(--_sizes---container--max-width)]">
                        <div className="flex flex-col items-center justify-between gap-6 md:flex-row mb-12">
                            <SectionHeading 
                                subtitle="Blog & Tips" 
                                title="Latest travel insights" 
                            />
                            <div className="mt-6 md:mt-0">
                                <Button variant="outline">View All Posts</Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <BlogCard 
                                image="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=800&auto=format&fit=crop"
                                date="March 15, 2024"
                                tag="Travel Tips"
                                title="10 Essential Items to Pack for a Backpacking Trip in Europe"
                                excerpt="Discover the ultimate packing list for your European adventure. Don't leave home without these essentials."
                            />
                            <BlogCard 
                                image="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=800&auto=format&fit=crop"
                                date="March 10, 2024"
                                tag="Destinations"
                                title="Why Bali Should Be Your Next Spiritual Retreat Destination"
                                excerpt="Explore the serene temples, lush jungles, and spiritual practices of Bali that will rejuvenate your soul."
                            />
                            <BlogCard 
                                image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop"
                                date="March 05, 2024"
                                tag="Guides"
                                title="A Beginner's Guide to Navigating Tokyo's Subway System"
                                excerpt="Master the Tokyo subway like a local with our comprehensive guide to tickets, maps, and etiquette."
                            />
                        </div>
                    </div>
                </section>

                {/* ---------- FAQ ---------- */}
                <section className="py-24 bg-[var(--color-tripvana-f8f8f8)]">
                    <div className="container mx-auto px-6 max-w-[var(--_sizes---container--max-width)]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div>
                                <SectionHeading 
                                    subtitle="General Questions" 
                                    title="Frequently asked questions" 
                                />
                                <p className="mt-6 mb-8 text-[var(--color-tripvana-656e7f)] leading-relaxed text-lg">
                                    Find answers to the most common questions about booking, payments, and our travel services.
                                </p>
                                <img 
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
                                    alt="Customer Support" 
                                    className="rounded-3xl w-full h-[300px] object-cover"
                                />
                            </div>
                            
                            <div>
                                <Accordion items={[
                                    { question: "How do I book a tour package?", answer: "Booking is easy! Simply browse our packages, select your desired dates, and click 'Book Now'. Follow the secure payment prompts to confirm your reservation." },
                                    { question: "Are flights included in the package?", answer: "Most of our standard packages cover land arrangements only. However, we do offer comprehensive packages that include flights. Please check the specific package details." },
                                    { question: "What is your cancellation policy?", answer: "Cancellations made 30 days prior to departure qualify for a full refund. Cancellations between 15-29 days receive a 50% refund. Please read our full terms." },
                                    { question: "Do you offer custom itineraries?", answer: "Yes, we specialize in tailor-made journeys. Contact our travel experts with your requirements and we'll craft a personalized itinerary just for you." },
                                    { question: "Is travel insurance required?", answer: "While not strictly required, we highly recommend purchasing comprehensive travel insurance to cover unexpected cancellations, medical emergencies, or lost baggage during your trip." }
                                ]} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------- FOOTER ---------- */}
                <footer className="bg-[var(--color-tripvana-091733)] text-white pt-24 pb-12">
                    <div className="container mx-auto px-6 max-w-[var(--_sizes---container--max-width)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 border-b border-white/10 pb-16">
                            
                            <div className="lg:col-span-4">
                                <div className="flex items-center gap-2 text-2xl font-bold mb-6">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Tripvana
                                </div>
                                <p className="text-[var(--color-tripvana-9ea7b8)] leading-relaxed pr-8">
                                    We are dedicated to providing the ultimate travel experience. Our expert guides and carefully curated itineraries ensure every journey is memorable.
                                </p>
                            </div>

                            <div className="lg:col-span-2">
                                <h4 className="text-xl font-bold mb-6">Company</h4>
                                <ul className="flex flex-col gap-4 text-[var(--color-tripvana-9ea7b8)]">
                                    <li><a href="#" className="hover:text-[var(--color-tripvana-a0f751)] transition-colors">About Us</a></li>
                                    <li><a href="#" className="hover:text-[var(--color-tripvana-a0f751)] transition-colors">Careers</a></li>
                                    <li><a href="#" className="hover:text-[var(--color-tripvana-a0f751)] transition-colors">Travel Blog</a></li>
                                    <li><a href="#" className="hover:text-[var(--color-tripvana-a0f751)] transition-colors">Contact Us</a></li>
                                </ul>
                            </div>

                            <div className="lg:col-span-2">
                                <h4 className="text-xl font-bold mb-6">Destinations</h4>
                                <ul className="flex flex-col gap-4 text-[var(--color-tripvana-9ea7b8)]">
                                    <li><a href="#" className="hover:text-[var(--color-tripvana-a0f751)] transition-colors">Europe</a></li>
                                    <li><a href="#" className="hover:text-[var(--color-tripvana-a0f751)] transition-colors">Asia</a></li>
                                    <li><a href="#" className="hover:text-[var(--color-tripvana-a0f751)] transition-colors">Americas</a></li>
                                    <li><a href="#" className="hover:text-[var(--color-tripvana-a0f751)] transition-colors">Africa</a></li>
                                </ul>
                            </div>

                            <div className="lg:col-span-4">
                                <h4 className="text-xl font-bold mb-6">Newsletter</h4>
                                <p className="text-[var(--color-tripvana-9ea7b8)] leading-relaxed mb-6">
                                    Subscribe to our newsletter for travel tips, exclusive deals, and inspiration.
                                </p>
                                <div className="flex bg-white/5 rounded-full p-2 border border-white/10 focus-within:border-[var(--color-tripvana-a0f751)] transition-colors">
                                    <input 
                                        type="email" 
                                        placeholder="Your email address" 
                                        className="bg-transparent border-none outline-none px-4 text-white flex-1 w-full"
                                    />
                                    <Button variant="primary" className="h-12 w-12 !px-0 rounded-full flex shrink-0 items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                        </svg>
                                    </Button>
                                </div>
                            </div>

                        </div>
                        
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[var(--color-tripvana-9ea7b8)] text-sm">
                            <p>© 2024 Tripvana. All rights reserved.</p>
                            <div className="flex gap-6">
                                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </>
    );
}
