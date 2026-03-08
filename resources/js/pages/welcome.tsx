import { Head, Link } from '@inertiajs/react';
import { Accordion } from '@/components/tripvana/Accordion';
import { ActivityCard } from '@/components/tripvana/ActivityCard';
import { BlogCard } from '@/components/tripvana/BlogCard';
import { Button } from '@/components/tripvana/Button';
import { FlowButton } from '@/components/ui/flow-button';
import { PackageCard } from '@/components/tripvana/PackageCard';
import { ReviewCard } from '@/components/tripvana/ReviewCard';
import { SectionHeading } from '@/components/tripvana/SectionHeading';

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
                <section className="py-24 bg-[var(--color-tripvana-f8f8f8)]">
                    <div className="container mx-auto px-6 max-w-[var(--_sizes---container--max-width)]">
                        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
                            <SectionHeading 
                                subtitle="Tour Activities" 
                                title="A new way to explore the world" 
                            />
                            <div className="flex flex-wrap items-center gap-3">
                                {['All', 'Wildlife', 'Relaxation', 'Cultural', 'Mountain'].map((tag, i) => (
                                    <button 
                                        key={tag}
                                        className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                                            i === 0 
                                                ? 'bg-[var(--color-tripvana-091733)] text-white' 
                                                : 'bg-white text-[var(--color-tripvana-656e7f)] hover:bg-black/5 border border-black/5'
                                        }`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Scrolling Container */}
                        <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
                            <div className="min-w-[70vw] snap-center sm:min-w-[40vw] lg:min-w-[25vw]">
                                <ActivityCard 
                                    image="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=800&auto=format&fit=crop" 
                                    title="Hiking in Swiss Alps" 
                                />
                            </div>
                            <div className="min-w-[70vw] snap-center sm:min-w-[40vw] lg:min-w-[25vw]">
                                <ActivityCard 
                                    image="https://images.unsplash.com/photo-1544644181-1484b3f8c8b4?q=80&w=800&auto=format&fit=crop" 
                                    title="Luxury Desert Safari" 
                                />
                            </div>
                            <div className="min-w-[70vw] snap-center sm:min-w-[40vw] lg:min-w-[25vw]">
                                <ActivityCard 
                                    image="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=800&auto=format&fit=crop" 
                                    title="Surfing in Bali" 
                                />
                            </div>
                            <div className="min-w-[70vw] snap-center sm:min-w-[40vw] lg:min-w-[25vw]">
                                <ActivityCard 
                                    image="https://images.unsplash.com/photo-1527668752968-14ce70a3d7e6?q=80&w=800&auto=format&fit=crop" 
                                    title="Cultural Temples" 
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------- BOOKING PROCESS ---------- */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-[var(--_sizes---container--max-width)] text-center">
                        <SectionHeading 
                            subtitle="Booking Process" 
                            title={<>Easy steps to book your<br/>next journey</>}
                            center 
                            className="mb-16"
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
                            {[
                                { num: '01', title: 'Browse Tours', desc: 'Find your perfect destination from our wide range of curated tours and packages.', icon: '🔍' },
                                { num: '02', title: 'Select a Package', desc: 'Choose the package that fits your schedule, budget, and travel preferences.', icon: '📦' },
                                { num: '03', title: 'Pay Securely', desc: 'Complete your booking with our secure payment system and get ready to travel.', icon: '💳' }
                            ].map((step, i) => (
                                <div key={i} className="relative p-8 rounded-3xl border border-[var(--color-tripvana-091733)]/10 hover:border-[var(--color-tripvana-a0f751)] transition-colors group">
                                    <div className="w-16 h-16 bg-[var(--color-tripvana-f8f8f8)] rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-[var(--color-tripvana-a0f751)] transition-colors">
                                        {step.icon}
                                    </div>
                                    <div className="text-5xl font-bold text-[var(--color-tripvana-091733)]/5 absolute top-8 right-8 pointer-events-none group-hover:block transition-all transform group-hover:-translate-y-2">{step.num}</div>
                                    <h3 className="text-2xl font-bold text-[var(--color-tripvana-091733)] mb-3">{step.title}</h3>
                                    <p className="text-[var(--color-tripvana-656e7f)] leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---------- TRAVEL PACKAGES ---------- */}
                <section className="py-24 bg-[var(--color-tripvana-f8f8f8)]">
                    <div className="container mx-auto px-6 max-w-[var(--_sizes---container--max-width)]">
                        <div className="flexflex-col items-center justify-between gap-6 md:flex-row mb-12">
                            <SectionHeading 
                                subtitle="Travel Packages" 
                                title="See our most popular destinations" 
                            />
                            <div className="mt-6 md:mt-0">
                                <Button variant="outline">View All Packages</Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <PackageCard 
                                image="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop"
                                location="Italy"
                                days={7}
                                title="Cinque Terre Coastline and Villages Tour"
                                price="$1,299"
                                rating={4.9}
                                reviews={128}
                            />
                            <PackageCard 
                                image="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop"
                                location="India"
                                days={5}
                                title="Taj Mahal and Golden Triangle Expedition"
                                price="$899"
                                rating={4.8}
                                reviews={85}
                            />
                            <PackageCard 
                                image="https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=800&auto=format&fit=crop"
                                location="Japan"
                                days={10}
                                title="Kyoto Temples and Tokyo City Adventure"
                                price="$2,499"
                                rating={5.0}
                                reviews={241}
                            />
                            <PackageCard 
                                image="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop"
                                location="France"
                                days={6}
                                title="Paris Romance and Louvre Museum"
                                price="$1,599"
                                rating={4.7}
                                reviews={156}
                            />
                            <PackageCard 
                                image="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=800&auto=format&fit=crop"
                                location="Netherlands"
                                days={4}
                                title="Amsterdam Canals and Windmills"
                                price="$799"
                                rating={4.6}
                                reviews={92}
                            />
                            <PackageCard 
                                image="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=800&auto=format&fit=crop"
                                location="Brazil"
                                days={8}
                                title="Rio de Janeiro Carnival and Beaches"
                                price="$1,899"
                                rating={4.9}
                                reviews={114}
                            />
                        </div>
                    </div>
                </section>

                {/* ---------- TRAVELERS REVIEW ---------- */}
                <section className="py-24 bg-[var(--color-tripvana-122242)] text-white">
                    <div className="container mx-auto px-6 max-w-[var(--_sizes---container--max-width)]">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-5">
                                <SectionHeading 
                                    subtitle="Travelers Review" 
                                    title="What people say about us" 
                                    subtitleColor="text-[var(--color-tripvana-a0f751)] border-[var(--color-tripvana-a0f751)]"
                                    titleColor="text-white"
                                />
                                <p className="mt-6 mb-8 text-[var(--color-tripvana-9ea7b8)] leading-relaxed">
                                    Don't just take our word for it. Read what our satisfied travelers have to say about their unforgettable experiences with Tripvana.
                                </p>
                                
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm max-w-xs">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="bg-[#00b67a] text-white p-1 rounded">★</div>
                                        <span className="font-bold text-xl">Trustpilot</span>
                                    </div>
                                    <div className="flex text-[#00b67a] text-xl mb-1">★★★★★</div>
                                    <p className="text-sm">Based on 10,000+ reviews</p>
                                </div>
                                
                                <div className="flex gap-4 mt-8">
                                    <Button variant="round" className="h-12 w-12 !border-white/20">←</Button>
                                    <Button variant="round" className="h-12 w-12 !border-white/20 hover:!bg-[var(--color-tripvana-a0f751)] hover:!text-[var(--color-tripvana-091733)] hover:!border-[var(--color-tripvana-a0f751)]">→</Button>
                                </div>
                            </div>
                            
                            <div className="lg:col-span-7">
                                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                                    <ReviewCard 
                                        text="Tripvana made our honeymoon absolutely perfect. The itinerary was flawless and every detail was taken care of."
                                        authorImage="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
                                        authorName="Sarah Jenkins"
                                        authorRole="Traveler"
                                    />
                                    <ReviewCard 
                                        text="The best travel agency I've ever used. Their local guides in Japan were incredibly knowledgeable and friendly."
                                        authorImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                                        authorName="Michael Chen"
                                        authorRole="Photographer"
                                    />
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
