// Single source of truth for the Practice Finder tool.
//
// To add a new article to the finder: add one entry to the `articles` array
// below and tag it with one or more problem areas. The first problem in the
// array is the PRIMARY area (what the practice is best for); the rest are
// secondary. The finder ranks primary matches above secondary matches.
//
// No other file needs to change — the finder reads this list directly.

export type ProblemArea =
  | 'back'
  | 'neck-shoulders'
  | 'balance'
  | 'posture'
  | 'stress-sleep'
  | 'breathing'
  | 'mobility';

// Display labels + descriptions for the quiz UI. Order here = order shown.
export const PROBLEM_AREAS: { id: ProblemArea; label: string; description: string }[] = [
  { id: 'back',           label: 'Back pain or stiffness',     description: 'Lower or upper back tension and aches' },
  { id: 'neck-shoulders', label: 'Neck & shoulders',          description: 'Tension, knots, and restricted movement' },
  { id: 'posture',        label: 'Posture',                   description: 'Rounded shoulders, forward head, slouching' },
  { id: 'balance',        label: 'Balance & stability',       description: 'Steadiness on your feet, fall prevention' },
  { id: 'mobility',       label: 'General mobility & energy',  description: 'Overall stiffness, flexibility, and vitality' },
  { id: 'stress-sleep',   label: 'Stress & sleep',            description: 'Calming the mind, relaxation, better rest' },
  { id: 'breathing',      label: 'Breathing',                 description: 'Diaphragm, core, and breath control' },
];

export interface Article {
  title: string;          // short display title for the result card
  url: string;
  blurb: string;          // one-line "why this helps"
  problems: ProblemArea[]; // [0] = primary area, rest = secondary
}

export const articles: Article[] = [
  {
    title: 'Sotai Natural Movement',
    url: '/sotai-natural-movement',
    blurb: 'Gentle movement therapy that relieves pain by moving toward comfort, not through it. Covers neck, shoulders, back, and hips.',
    problems: ['back', 'neck-shoulders', 'posture', 'mobility'],
  },
  {
    title: 'Towel Stretch for Back Pain (Fukutsuji)',
    url: '/towel-stretch-for-back',
    blurb: 'A rolled towel under the lower back to ease pain and improve posture in five minutes a day.',
    problems: ['back', 'posture'],
  },
  {
    title: 'Fukutsuji Method vs Yoga',
    url: '/fukutsuji-vs-yoga',
    blurb: 'An honest comparison to help you pick the gentler back-and-posture practice for your body.',
    problems: ['back', 'posture'],
  },
  {
    title: 'Japanese Long Breath Method',
    url: '/japanese-long-breath-method',
    blurb: 'A 2-minute breathing exercise that strengthens the core, supports posture, and eases back pain.',
    problems: ['breathing', 'posture', 'back'],
  },
  {
    title: 'Hara Belly Breathing',
    url: '/hara-breathing-exercises',
    blurb: 'Japanese diaphragmatic breathing that lowers stress, calms anxiety, and boosts energy.',
    problems: ['breathing', 'stress-sleep'],
  },
  {
    title: 'Do-In Self Massage',
    url: '/do-in-self-massage',
    blurb: 'Acupressure self-massage to release tension in the neck, shoulders, and whole body.',
    problems: ['neck-shoulders', 'stress-sleep', 'mobility'],
  },
  {
    title: 'Seiza Sitting',
    url: '/seiza-sitting-benefits',
    blurb: 'Traditional kneeling posture that improves upright alignment and keeps knees and hips mobile.',
    problems: ['posture', 'mobility'],
  },
  {
    title: 'Makko-Ho Stretching',
    url: '/makko-ho-stretching',
    blurb: 'A 4-pose meridian stretching routine for whole-body flexibility and energy.',
    problems: ['mobility', 'back'],
  },
  {
    title: 'Asa no Taisō Morning Stretch',
    url: '/asa-no-taiso-morning-stretch',
    blurb: 'A 10-minute morning routine for flexibility, balance, and energy to start the day pain-free.',
    problems: ['mobility', 'balance'],
  },
  {
    title: 'Radio Taiso Calisthenics',
    url: '/rajio-taiso-radio-calisthenics',
    blurb: "Japan's beloved 13-movement morning exercise for flexibility, balance, and steady energy.",
    problems: ['mobility', 'balance'],
  },
  {
    title: 'Kinhin Walking Meditation',
    url: '/kinhin-walking-meditation',
    blurb: 'Zen walking meditation that calms the mind and trains balance one mindful step at a time.',
    problems: ['stress-sleep', 'balance'],
  },
  {
    title: 'Shinrin-Yoku Forest Bathing',
    url: '/shinrin-yoku-forest-bathing',
    blurb: 'Science-backed mindful time in nature to reduce stress, lower blood pressure, and restore calm.',
    problems: ['stress-sleep'],
  },
];
