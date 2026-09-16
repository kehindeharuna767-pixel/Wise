export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  tag: string;
  highlight: string;
}

export interface ApproachItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyBenefit: string;
}

export interface ConsultationBooking {
  name: string;
  email: string;
  phone: string;
  service: string;
  format: 'in-person' | 'online' | 'either';
  preferredTime: string;
  message?: string;
}
