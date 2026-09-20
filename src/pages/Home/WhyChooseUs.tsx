import Button from '../../components/ui/Button';
import { 
  CheckCircle, 
  DollarSign, 
  Sparkles, 
  TrendingUp,
  BarChart3,
  Shield,
  Target,
  ArrowRight,
  Award,
  Zap,
  Users,
  MessageSquare,
  Rocket,
  Gauge
} from 'lucide-react';

const points = [
    {
        number: '01',
        title: 'Data-Driven Strategy',
        text: 'Strategies built around real customer behavior, market data, and measurable business goals.',
        icon: BarChart3,
    },
    {
        number: '02',
        title: 'Complete Transparency',
        text: 'Clear weekly dashboards, performance updates, and ROI tracking so you always know what is working.',
        icon: Shield,
    },
    {
        number: '03',
        title: 'Lead Generation That Converts',
        text: 'Proven workflows designed to attract qualified prospects and move them smoothly toward sales.',
        icon: Target,
    },
    {
        number: '04',
        title: 'Continuous Optimization',
        text: 'We continuously test, analyze, and improve campaigns instead of letting them run on autopilot.',
        icon: Gauge,
    },
];

const features = [
    {
        icon: CheckCircle,
        title: 'Quality Assurance',
        text: 'Every campaign is tested, refined, and optimized.',
        bgColor: 'from-emerald-50 to-emerald-100/50',
        iconColor: 'text-emerald-600',
        borderColor: 'border-emerald-200',
        hoverBorder: 'hover:border-emerald-300',
    },
    {
        icon: DollarSign,
        title: 'Competitive Pricing',
        text: 'Flexible plans designed for growing businesses.',
        bgColor: 'from-amber-50 to-amber-100/50',
        iconColor: 'text-amber-600',
        borderColor: 'border-amber-200',
        hoverBorder: 'hover:border-amber-300',
    },
    {
        icon: Sparkles,
        title: 'Experienced Team',
        text: 'Experts in marketing, design, and automation.',
        bgColor: 'from-sky-50 to-blue-50',
        iconColor: 'text-sky-600',
        borderColor: 'border-sky-200',
        hoverBorder: 'hover:border-sky-300',
    },
    {
        icon: TrendingUp,
        title: 'Excellent Support',
        text: 'Clear communication and transparent reporting.',
        bgColor: 'from-purple-50 to-purple-100/50',
        iconColor: 'text-purple-600',
        borderColor: 'border-purple-200',
        hoverBorder: 'hover:border-purple-300',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white py-20 md:py-28">
            {/* Background decorations */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-50/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 xl:gap-20 items-start">
                    
                    {/* LEFT SIDE */}
                    <div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
                            </span>
                            Why Choose Us
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                            More than an agency.
                            <br />
                            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                                A growth partner.
                            </span>
                        </h2>

                        <p className="mt-4 text-lg text-slate-600 max-w-lg leading-relaxed">
                            We combine strategy, technology, and creativity to help businesses build a
                            stronger digital presence and generate measurable growth.
                        </p>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-4 mt-8 max-w-md">
                            <div className="group p-4 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50">
                                        <Award className="w-5 h-5 text-sky-600" />
                                    </div>
                                    <div>
                                        <strong className="block text-2xl font-extrabold text-slate-900 leading-none">
                                            10+
                                        </strong>
                                        <span className="block text-xs text-slate-500 mt-1 font-medium">
                                            Years Experience
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="group p-4 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 hover:border-sky-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-xl bg-white/80">
                                        <Rocket className="w-5 h-5 text-sky-600" />
                                    </div>
                                    <div>
                                        <strong className="block text-2xl font-extrabold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent leading-none">
                                            ROI
                                        </strong>
                                        <span className="block text-xs text-slate-600 mt-1 font-medium">
                                            Focused Approach
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Points with icons */}
                        <div className="mt-8 space-y-4">
                            {points.map((point) => {
                                const Icon = point.icon;
                                return (
                                    <div key={point.number} className="flex gap-4 group">
                                        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100 flex items-center justify-center group-hover:from-sky-100 group-hover:to-blue-100 transition-all duration-300">
                                            <Icon className="w-5 h-5 text-sky-600 group-hover:text-sky-700 transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                                                <span className="text-sky-500 font-bold">{point.number}</span>
                                                {point.title}
                                            </h4>
                                            <p className="text-sm text-slate-600 leading-relaxed mt-0.5">
                                                {point.text}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <div className="mt-10">
                            <Button 
                                to="/contact-us"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-base hover:from-sky-600 hover:to-blue-700 transition-all shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5 [&>*]:text-white"
                            >
                                <span className="text-white">Contact Us</span>
                                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Feature Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className={`group p-6 rounded-2xl bg-white border ${item.borderColor} ${item.hoverBorder} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-300 relative overflow-hidden`}
                                >
                                    {/* Decorative gradient background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                    
                                    <div className="relative">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bgColor} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                            <Icon className={`w-6 h-6 ${item.iconColor}`} />
                                        </div>

                                        <h4 className="font-bold text-slate-900 text-base group-hover:text-sky-600 transition-colors">
                                            {item.title}
                                        </h4>

                                        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                                            {item.text}
                                        </p>

                                        {/* Hover arrow indicator */}
                                        <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-sky-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2">
                                            Learn more
                                            <ArrowRight className="w-3 h-3" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Responsive styles */}
            <style>{`
                @media (max-width: 1024px) {
                    .lg\\:grid-cols-\\[0\\.9fr_1\\.1fr\\] {
                        grid-template-columns: 1fr !important;
                    }
                }

                @media (max-width: 640px) {
                    .sm\\:grid-cols-2 {
                        grid-template-columns: 1fr !important;
                    }
                    
                    .grid-cols-2 {
                        grid-template-columns: 1fr 1fr !important;
                    }
                }

                @media (max-width: 480px) {
                    .grid-cols-2 {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}   