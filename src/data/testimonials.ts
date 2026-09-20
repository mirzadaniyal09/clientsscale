export type TestimonialItem = {
    slug: string;
    name: string;
    role: string;
    quote: string;
    company: string;
};

export const testimonials: TestimonialItem[] = [
    {
        slug: 'client-one',
        name: 'Samira Khan',
        role: 'Product Lead',
        company: 'Northstar Labs',
        quote: 'The team translated our vision into a polished experience that our customers immediately trusted.',
    },
    {
        slug: 'client-two',
        name: 'Lucas Reed',
        role: 'Founder',
        company: 'BrightForge',
        quote: 'Their process was sharp, collaborative, and incredibly efficient from the first sprint to launch.',
    },
    {
        slug: 'client-three',
        name: 'Aisha Morgan',
        role: 'Operations Director',
        company: 'HorizonWorks',
        quote: 'We saw meaningful improvements in how our systems performed and how quickly we could innovate.',
    },
    {
        slug: 'client-four',
        name: 'Daniel Brooks',
        role: 'CTO',
        company: 'Stakepoint',
        quote: 'The architecture and delivery quality gave us the confidence to scale without friction.',
    },
    {
        slug: 'client-five',
        name: 'Priya Nair',
        role: 'Marketing Director',
        company: 'Signalframe',
        quote: 'Their design and development work helped us stand out in a crowded market and convert more leads.',
    },
];
