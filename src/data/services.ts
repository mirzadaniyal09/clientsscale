import {
    Bot,
    Palette,
    MousePointerClick,
    Search,
    Code2,
    Globe,
    PenTool,
    Share2,
    Layout,
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

export type ServiceItem = {
    slug: string;
    title: string;
    summary: string;
    description: string;
    icon: LucideIcon;
};

export const services: ServiceItem[] = [
    {
        slug: 'ai-automation',
        title: 'AI Automation',
        summary:
            'Intelligent automation solutions that streamline workflows, reduce manual work, and improve business efficiency.',
        description:
            'We implement AI-powered automation solutions that simplify repetitive tasks, optimize business workflows, enhance productivity, and help businesses operate more efficiently.',
        icon: Bot,
    },

    {
        slug: 'branding-graphic-designing',
        title: 'Branding & Graphic Designing',
        summary:
            'Creative branding and visual designs that build a strong and memorable brand identity.',
        description:
            'We create professional brand identities, logos, marketing graphics, social media designs, and visual assets that communicate your brand effectively and consistently.',
        icon: Palette,
    },

    {
        slug: 'pay-per-click-advertising',
        title: 'Pay Per Click Advertising Services',
        summary:
            'Performance-focused PPC campaigns designed to reach the right audience and maximize advertising results.',
        description:
            'We create, manage, and optimize targeted PPC campaigns to increase qualified traffic, generate leads, and improve return on ad spend.',
        icon: MousePointerClick,
    },

    {
        slug: 'search-engine-optimization',
        title: 'Search Engine Optimization',
        summary:
            'Data-driven SEO strategies that improve search rankings, organic traffic, and online visibility.',
        description:
            'We optimize website structure, content, technical performance, and search presence to help businesses rank higher and attract qualified organic traffic.',
        icon: Search,
    },

    {
        slug: 'software-development',
        title: 'Software Development Services',
        summary:
            'Custom software solutions built to solve business challenges and support long-term growth.',
        description:
            'We develop secure, scalable, and reliable software solutions tailored to your business requirements, from custom applications to enterprise-level systems.',
        icon: Code2,
    },

    {
        slug: 'web-development',
        title: 'Web Development Services',
        summary:
            'Fast, responsive, and scalable websites and web applications built for modern businesses.',
        description:
            'We develop modern websites and web applications with responsive interfaces, strong performance, secure architecture, and scalable technologies designed around your business goals.',
        icon: Globe,
    },

    {
        slug: 'content-creation-marketing',
        title: 'Content Creation & Marketing',
        summary:
            'Engaging content strategies that attract audiences, build trust, and drive business growth.',
        description:
            'We create and promote engaging content including articles, social media content, marketing campaigns, and other digital assets designed to connect your brand with the right audience.',
        icon: PenTool,
    },

    {
        slug: 'social-media-management',
        title: 'Social Media Management',
        summary:
            'Strategic social media management that strengthens your online presence and engages your audience.',
        description:
            'We manage social media accounts, create engaging content, plan campaigns, monitor performance, and build consistent online communities around your brand.',
        icon: Share2,
    },

    {
        slug: 'website-design',
        title: 'Website Design',
        summary:
            'Modern and visually appealing website designs focused on usability, engagement, and conversions.',
        description:
            'We design professional, responsive, and user-friendly websites with intuitive layouts, engaging visuals, and conversion-focused experiences that represent your brand effectively.',
        icon: Layout,
    },
];