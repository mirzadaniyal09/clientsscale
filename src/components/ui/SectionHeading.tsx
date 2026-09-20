type SectionHeadingProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    center?: boolean;
};

export default function SectionHeading({
    eyebrow,
    title,
    description,
    center = false,
}: SectionHeadingProps) {
    return (
        <div className={center ? 'text-center' : ''}>
            {eyebrow ? (
                <p style={{ textTransform: 'uppercase', letterSpacing: '0.12em', color: '#0369a1', fontWeight: 700, fontSize: '0.75rem' }}>
                    {eyebrow}
                </p>
            ) : null}
            <h2 className="section-title">{title}</h2>
            {description ? <p className="section-subtitle">{description}</p> : null}
        </div>
    );
}
