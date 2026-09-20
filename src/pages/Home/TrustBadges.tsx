import { 
  CheckCircle, 
  DollarSign, 
  Brain, 
  BarChart3,
  Users,
  ArrowRight,
  Sparkles,
  Award,
  Rocket
} from 'lucide-react';

const badges = [
    {
        icon: CheckCircle,
        title: 'Quality Assurance',
        text: 'Every campaign is carefully tested, refined, and optimized to maximize your ROI.',
        color: '#22c55e',
        bgColor: 'from-emerald-50 to-emerald-100/50',
        borderColor: 'border-emerald-200',
        hoverBorder: 'hover:border-emerald-300',
        shadowColor: 'shadow-emerald-500/10',
    },
    {
        icon: DollarSign,
        title: 'Competitive Pricing',
        text: 'Flexible plans built specifically for small and mid-sized U.S. businesses.',
        color: '#f59e0b',
        bgColor: 'from-amber-50 to-amber-100/50',
        borderColor: 'border-amber-200',
        hoverBorder: 'hover:border-amber-300',
        shadowColor: 'shadow-amber-500/10',
    },
    {
        icon: Brain,
        title: 'Experienced Team',
        text: 'Skilled experts in marketing, design, automation, and growth strategies.',
        color: '#8b5cf6',
        bgColor: 'from-purple-50 to-purple-100/50',
        borderColor: 'border-purple-200',
        hoverBorder: 'hover:border-purple-300',
        shadowColor: 'shadow-purple-500/10',
    },
    {
        icon: BarChart3,
        title: 'Excellent Support',
        text: 'Fast, reliable support with transparent communication and detailed reporting.',
        color: '#3b82f6',
        bgColor: 'from-sky-50 to-blue-50',
        borderColor: 'border-sky-200',
        hoverBorder: 'hover:border-sky-300',
        shadowColor: 'shadow-sky-500/10',
    },
];

const stats = [
    { number: '200+', label: 'Projects Delivered', icon: Rocket },
    { number: '98%', label: 'Client Satisfaction', icon: Users },
    { number: '4.9', label: 'Average Rating', icon: Award },
];

export default function TrustBadges() {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-white via-slate-50/30 to-white py-20 md:py-28">
            {/* Background decorations */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-125 h-[500px] bg-sky-100/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-50/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
                        </span>
                        Why Choose Us
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                        Built for Your{' '}
                        <span className="bg-linear-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                            Business Growth
                        </span>
                    </h2>

                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        We combine strategy, creativity, and technology to deliver
                        measurable results for your business.
                    </p>
                </div>

                {/* Trust Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {badges.map(({ icon: Icon, title, text, color, bgColor, borderColor, hoverBorder, shadowColor }) => (
                        <div
                            key={title}
                            className={`group relative p-6 rounded-2xl bg-white border ${borderColor} ${hoverBorder} shadow-sm hover:shadow-xl ${shadowColor} transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
                        >
                            {/* Gradient background on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                            
                            {/* Decorative corner accent */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                style={{ background: color }}
                            />

                            <div className="relative">
                                {/* Icon */}
                                <div 
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                                    style={{
                                        background: `${color}15`,
                                        color: color,
                                    }}
                                >
                                    <Icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                                    {title}
                                </h3>

                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {text}
                                </p>

                                {/* Hover indicator */}
                                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-sky-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2">
                                    Learn more
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Bar */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div 
                                key={stat.label}
                                className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
                            >
                                <div className="flex items-center justify-center gap-3 mb-1">
                                    <div className="p-2 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 group-hover:from-sky-100 group-hover:to-blue-100 transition-all">
                                        <Icon className="w-5 h-5 text-sky-600" />
                                    </div>
                                    <span className="text-2xl font-extrabold text-slate-900">
                                        {stat.number}
                                    </span>
                                </div>
                                <span className="text-sm text-slate-500 font-medium">
                                    {stat.label}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4" />
                        Ready to Grow?
                    </div>
                    <p className="text-slate-600 mb-6">
                        Join hundreds of satisfied clients who trust us with their growth.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-base hover:from-sky-600 hover:to-blue-700 transition-all shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5"
                        >
                            <span className="text-white">Get Started</span>
                            <ArrowRight className="w-5 h-5 text-white" />
                        </a>
                        <a
                            href="/services"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-200 text-slate-700 font-semibold text-base hover:bg-slate-50 hover:border-slate-300 transition-all"
                        >
                            Explore Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}