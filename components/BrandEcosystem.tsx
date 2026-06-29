"use client";

import {
    Shirt,
    Sparkles,
    Baby,
    Footprints,
    Gem,
    Leaf,
    ArrowRight,
    Dumbbell,
    Watch,
    Glasses,
    Brush,
    Flower2,
    Home,
    Briefcase,
} from "lucide-react";

const brands = [
    {
        title: "NextGrid Lifestyle",
        subtitle: "Men's Fashion",
        description:
            "Sophisticated clothing crafted for modern gentlemen with timeless elegance.",
        icon: Shirt,
        color: "from-blue-500 via-cyan-500 to-sky-500",
    },
    {
        title: "NextGrid HerStyle",
        subtitle: "Women's Fashion",
        description:
            "Elegant collections celebrating confidence, beauty, and individuality.",
        icon: Sparkles,
        color: "from-pink-500 via-rose-500 to-fuchsia-500",
    },
    {
        title: "NextGrid LittleStyle",
        subtitle: "Kids Fashion",
        description:
            "Comfortable, playful and colorful apparel designed for every adventure.",
        icon: Baby,
        color: "from-orange-400 via-amber-400 to-yellow-500",
    },
    {
        title: "NextGrid SoleStyle",
        subtitle: "Footwear",
        description:
            "Luxury sneakers, formal shoes, sandals and everyday footwear engineered for style and comfort.",
        icon: Footprints,
        color: "from-violet-500 via-indigo-500 to-blue-600",
        status: "Upcoming",
    },
    {
        title: "NextGrid Spark",
        subtitle: "Accessories & Jewelry",
        description:
            "Premium handbags, wallets, belts, watches, sunglasses and jewelry to elevate every look.",
        icon: Gem,
        color: "from-yellow-400 via-amber-500 to-orange-500",
        status: "Upcoming",
    },
    {
        title: "NextGrid EcoWear",
        subtitle: "Sustainable Fashion",
        description:
            "Eco-conscious collections created using ethical sourcing and recycled materials for a greener future.",
        icon: Leaf,
        color: "from-green-500 via-emerald-500 to-lime-500",
        status: "Upcoming",
    },
    {
        title: "NextGrid Active",
        subtitle: "Sportswear & Athleisure",
        description:
            "Performance apparel and activewear designed for fitness, movement and everyday comfort.",
        icon: Dumbbell,
        color: "from-red-500 via-orange-500 to-yellow-500",
        status: "Upcoming",
    },
    {
        title: "NextGrid Beauty",
        subtitle: "Cosmetics & Skincare",
        description:
            "Premium skincare, cosmetics, beauty essentials and personal care products crafted for modern lifestyles.",
        icon: Brush,
        color: "from-pink-500 via-rose-500 to-red-400",
        status: "Upcoming",
    },
    {
        title: "NextGrid Fragrance",
        subtitle: "Luxury Perfumes",
        description:
            "Signature fragrances inspired by elegance, confidence and timeless sophistication.",
        icon: Flower2,
        color: "from-fuchsia-500 via-pink-500 to-purple-500",
        status: "Upcoming",
    },
    {
        title: "NextGrid Living",
        subtitle: "Home & Lifestyle Products",
        description:
            "Modern home décor, everyday essentials and lifestyle products designed with premium quality.",
        icon: Home,
        color: "from-teal-500 via-cyan-500 to-sky-500",
        status: "Upcoming",
    },
    {
        title: "NextGrid WorkStyle",
        subtitle: "Formal & Corporate Wear",
        description:
            "Professional clothing and business essentials tailored for modern workplaces and executives.",
        icon: Briefcase,
        color: "from-slate-700 via-slate-800 to-black",
        status: "Upcoming",
    },
    {
        title: "NextGrid Time",
        subtitle: "Watches & Wearables",
        description:
            "Luxury watches, smart wearables and timeless accessories that blend technology with style.",
        icon: Watch,
        color: "from-amber-500 via-orange-500 to-red-500",
        status: "Upcoming",
    },
    {
        title: "NextGrid Vision",
        subtitle: "Eyewear",
        description:
            "Fashion-forward sunglasses and optical eyewear combining comfort, protection and premium design.",
        icon: Glasses,
        color: "from-indigo-500 via-blue-500 to-cyan-500",
        status: "Upcoming",
    },
    {
        title: "NextGrid Street",
        subtitle: "Streetwear & Urban Fashion",
        description:
            "Contemporary streetwear inspired by youth culture, creativity and modern urban lifestyles.",
        icon: Shirt,
        color: "from-zinc-800 via-slate-700 to-gray-600",
        status: "Upcoming",
    },

];

export default function BrandEcosystem() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-28">

            {/* Background Blur */}
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Header */}

                <div className="text-center">

                    <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold tracking-wide text-blue-700">
                        NEXTGRID STYLE BRAND ECOSYSTEM
                    </span>


                    <h2 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-6xl">
                        One Vision.
                        <br />
                        A Growing Fashion Ecosystem.
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
                        <span className="bg-gradient-to-r from-slate-900 via-blue-700 to-cyan-600 bg-clip-text font-extrabold text-transparent">
                            NextGrid Style
                        </span>{" "}
                        is building the future of fashion through an expanding portfolio of premium
                        brands across apparel, footwear, beauty, accessories, lifestyle, and
                        AI-powered retail innovation—creating one unified ecosystem for the next
                        generation of global fashion.
                    </p>

                </div>

                {/* Brand Cards */}

                <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {brands.map((brand) => {
                        const Icon = brand.icon;

                        return (
                            <div
                                key={brand.title}
                                className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
                            >
                                <div
                                    className={`mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${brand.color} shadow-lg`}
                                >
                                    <Icon className="h-10 w-10 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900">
                                    {brand.title}
                                </h3>

                                <h4 className="mt-2 font-semibold text-blue-600">
                                    {brand.subtitle}
                                </h4>

                                <p className="mt-5 leading-7 text-slate-600">
                                    {brand.description}
                                </p>

                                <div className="mt-8 flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-4">
                                    Explore Brand
                                    <ArrowRight className="h-5 w-5" />
                                </div>

                                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-slate-100 to-transparent opacity-60" />
                            </div>
                        );
                    })}

                </div>

                {/* Bottom CTA */}

                <div className="mt-28 rounded-[40px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-16 text-center text-white shadow-2xl">

                    <h2 className="text-4xl font-black">
                        The Future of Fashion Starts Here
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
                        From premium apparel and sustainable collections to AI-powered
                        fashion technology, NextGrid is building a connected ecosystem that
                        redefines the future of global fashion.
                    </p>

                    <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105">
                        Discover Our Brands
                        <ArrowRight size={20} />
                    </button>

                </div>

            </div>
        </section>
    );
}