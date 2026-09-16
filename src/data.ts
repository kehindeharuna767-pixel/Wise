import { ServiceItem, TestimonialItem, ApproachItem } from './types';

export const WISE_SELF_SERVICES: ServiceItem[] = [
  {
    id: 'couples-therapy',
    title: 'Couples Therapy',
    subtitle: 'Relational Reconnection',
    description: 'Transform recurring conflicts into intimacy, understanding, and renewed emotional safety.',
    image: '/images/couples.jpg',
    tag: 'Primary Specialism',
    highlights: ['Imago Dialogue tools', 'De-escalating cycles', 'Rebuilding trust & safety']
  },
  {
    id: 'individual-therapy',
    title: 'Individual Therapy',
    subtitle: 'Personal Growth & Healing',
    description: 'A private space to untangle anxiety, self-worth, life transitions, and underlying emotional blocks.',
    image: '/images/individual.jpg',
    tag: 'Tailored 1:1',
    highlights: ['Anxiety & depression', 'Self-identity & confidence', 'Trauma-informed care']
  },
  {
    id: 'group-therapy',
    title: 'Group Therapy',
    subtitle: 'Shared Experience',
    description: 'Connect with a supportive community navigating shared relational and personal journeys.',
    image: '/images/group.jpg',
    tag: 'Guided Cohorts',
    highlights: ['Safe group dynamics', 'Relational feedback', 'Reduced isolation']
  },
  {
    id: 'workshops',
    title: 'Workshops',
    subtitle: 'Skill-Building Intensives',
    description: 'Practical, focused sessions delivering actionable psychological tools for couples and individuals.',
    image: '/images/workshop.jpg',
    tag: 'Interactive Sessions',
    highlights: ['Communication frameworks', 'Emotional regulation', 'Experiential practice']
  }
];

export const APPROACHES: ApproachItem[] = [
  {
    id: 'imago',
    title: 'Imago Relationship Therapy',
    subtitle: 'Conscious Communication',
    description: 'A structured dialogue process that transforms reactivity into empathy, allowing partners to truly hear and heal each other.',
    keyBenefit: 'Deep emotional empathy'
  },
  {
    id: 'transactional-analysis',
    title: 'Transactional Analysis',
    subtitle: 'Understanding Ego States',
    description: 'Identifies Parent, Adult, and Child ego states to break unproductive subconscious communication loops.',
    keyBenefit: 'Clear relational awareness'
  },
  {
    id: 'family-systems',
    title: 'Family Systems',
    subtitle: 'Relational Context',
    description: 'Explores how early family dynamics and learned emotional scripts shape current relationships and attachment.',
    keyBenefit: 'Uncovering root patterns'
  },
  {
    id: 'integrative',
    title: 'Integrative Psychotherapy',
    subtitle: 'Personalised Care',
    description: 'A thoughtful synthesis of humanistic, psychodynamic, and cognitive modalities adapted to your specific goals.',
    keyBenefit: 'Holistic & adaptable'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'sarah-andy',
    quote: 'Benham has made such a difference in our relationship. He is kind but firm and good at explaining how our dynamics are at play in everything we do. I would highly recommend him to any couple whether the relationship is going well or not so well. He gives you the techniques to better help you communicate and understand your partner.',
    author: 'Sarah & Andy',
    role: 'Couples Therapy Clients',
    tag: 'Couples Therapy',
    highlight: 'Gives you the techniques to communicate and understand your partner.'
  },
  {
    id: 'karen',
    quote: 'Benham has been brilliant so far. He has given me some really useful tools and helped me recognise things about my own behaviours that I wasn’t aware of. He has a wonderfully calm presence which makes talking feel very easy and judgement free.',
    author: 'Karen',
    role: 'Individual Therapy Client',
    tag: 'Individual Therapy',
    highlight: 'A wonderfully calm presence which makes talking feel very easy and judgement free.'
  },
  {
    id: 'group-client',
    quote: 'Excellent moderator, content, group dynamic, format. Found it extremely helpful.',
    author: 'Verified Attendee',
    role: 'Group Therapy Client',
    tag: 'Group Therapy',
    highlight: 'Excellent moderator, content, group dynamic, format.'
  }
];

export const PRACTICE_INFO = {
  therapist: 'Behnam Abdevand',
  title: 'Psychotherapist, MBACP',
  experience: '10+ Years in Practice',
  phone: '07944 000000', // standard contact
  email: 'ben@wiseself.co.uk',
  address: '464A Wilbraham Road, Chorlton, Manchester, M21 9AS',
  availability: 'By appointment only • In-person (Manchester) & Online (UK-wide)',
  accreditation: 'Registered Member MBACP • British Association for Counselling and Psychotherapy',
  bookingUrl: 'https://wiseself.janeapp.co.uk',
  whatsappUrl: 'https://wa.me/447944000000?text=Hi%20Behnam,%20I%20would%20like%20to%20inquire%20about%20therapy%20sessions%20at%20Wise%20Self'
};
