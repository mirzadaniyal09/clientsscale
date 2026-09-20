export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  href: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}
