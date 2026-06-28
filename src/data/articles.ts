// Single source of truth for article metadata. Two surfaces read this list:
//   - the Practice Finder (/practice-finder) matches articles by `problems`
//   - the mobile navigation groups articles by `category`
//
// To add a new article: add one entry to the `articles` array below.
//   - `category` controls which nav dropdown it appears under (one category)
//   - `problems` drives the finder; the first problem is the PRIMARY area (what
//     the practice is best for), the rest are secondary
//
// No navigation code needs to change, the menu is generated from this list.

// ---------------------------------------------------------------------------
// Problem areas (used by the Practice Finder)
// ---------------------------------------------------------------------------

export type ProblemArea =
  | 'back'
  | 'neck-shoulders'
  | 'balance'
  | 'posture'
  | 'stress-sleep'
  | 'breathing'
  | 'mobility';

// Display labels, descriptions, and icons for the finder UI. Order here = order shown.
// Icons are Material Symbols names (the icon font is already loaded site-wide).
export const PROBLEM_AREAS: { id: ProblemArea; label: string; description: string; icon: string }[] = [
  { id: 'back',           label: 'Back pain or stiffness',     description: 'Lower or upper back tension and aches',        icon: 'accessibility_new' },
  { id: 'neck-shoulders', label: 'Neck & shoulders',          description: 'Tension, knots, and restricted movement',      icon: 'self_improvement' },
  { id: 'posture',        label: 'Posture',                   description: 'Rounded shoulders, forward head, slouching',   icon: 'straighten' },
  { id: 'balance',        label: 'Balance & stability',       description: 'Steadiness on your feet, fall prevention',     icon: 'directions_walk' },
  { id: 'mobility',       label: 'General mobility & energy',  description: 'Overall stiffness, flexibility, and vitality', icon: 'sprint' },
  { id: 'stress-sleep',   label: 'Stress & sleep',            description: 'Calming the mind, relaxation, better rest',    icon: 'spa' },
  { id: 'breathing',      label: 'Breathing',                 description: 'Diaphragm, core, and breath control',          icon: 'air' },
];

// ---------------------------------------------------------------------------
// Categories (used by the navigation menu — one per article, by practice type)
// ---------------------------------------------------------------------------

export type Category =
  | 'movement'
  | 'posture-towel'
  | 'breathing'
  | 'meditation';

// Display labels and icons for the nav dropdowns. Order here = order shown.
export const CATEGORIES: { id: Category; label: string; icon: string }[] = [
  { id: 'movement',      label: 'Movement & Stretching', icon: 'exercise' },
  { id: 'posture-towel', label: 'Posture & Towel Work',  icon: 'accessibility_new' },
  { id: 'breathing',     label: 'Breathing & Energy',    icon: 'air' },
  { id: 'meditation',    label: 'Meditation & Nature',   icon: 'forest' },
];

// ---------------------------------------------------------------------------
// Articles
// ---------------------------------------------------------------------------

export interface Article {
  title: string;          // short display title for cards and menus
  url: string;
  blurb: string;          // one-line "why this helps"
  category: Category;     // which nav dropdown it lives under
  problems: ProblemArea[]; // [0] = primary area, rest = secondary (finder only)
}

export const articles: Article[] = [
  {
    title: 'Sotai Natural Movement',
    url: '/sotai-natural-movement',
    blurb: 'Gentle movement therapy that relieves pain by moving toward comfort, not through it. Covers neck, shoulders, back, and hips.',
    category: 'movement',
    problems: ['back', 'neck-shoulders', 'posture', 'mobility'],
  },
  {
    title: 'Makko-Ho Stretching',
    url: '/makko-ho-stretching',
    blurb: 'A 4-pose meridian stretching routine for whole-body flexibility and energy.',
    category: 'movement',
    problems: ['mobility', 'back'],
  },
  {
    title: 'Asa no Taisō Morning Stretch',
    url: '/asa-no-taiso-morning-stretch',
    blurb: 'A 10-minute morning routine for flexibility, balance, and energy to start the day pain-free.',
    category: 'movement',
    problems: ['mobility', 'balance'],
  },
  {
    title: 'Radio Taiso Calisthenics',
    url: '/rajio-taiso-radio-calisthenics',
    blurb: "Japan's beloved 13-movement morning exercise for flexibility, balance, and steady energy.",
    category: 'movement',
    problems: ['mobility', 'balance'],
  },
  {
    title: 'The Fukutsuji Method (Complete Guide)',
    url: '/fukutsuji-method',
    blurb: 'The full guide to the Japanese towel exercise: what it is, who created it, how to do it safely after 50, and what it can and cannot do.',
    category: 'posture-towel',
    problems: ['back', 'posture'],
  },
  {
    title: 'Towel Stretch for Back Pain (Fukutsuji)',
    url: '/towel-stretch-for-back',
    blurb: 'A rolled towel under the lower back to ease pain and improve posture in five minutes a day.',
    category: 'posture-towel',
    problems: ['back', 'posture'],
  },
  {
    title: 'Towel Exercise for Posture (Fukutsuji)',
    url: '/japanese-towel-exercise-posture',
    blurb: 'A rolled towel under the upper back to open the chest and ease rounded shoulders in five minutes a day.',
    category: 'posture-towel',
    problems: ['posture', 'neck-shoulders'],
  },
  {
    title: 'Fukutsuji Method vs Yoga',
    url: '/fukutsuji-vs-yoga',
    blurb: 'An honest comparison to help you pick the gentler back-and-posture practice for your body.',
    category: 'posture-towel',
    problems: ['back', 'posture'],
  },
  {
    title: 'Seiza Sitting',
    url: '/seiza-sitting-benefits',
    blurb: 'Traditional kneeling posture that improves upright alignment and keeps knees and hips mobile.',
    category: 'posture-towel',
    problems: ['posture', 'mobility'],
  },
  {
    title: 'Hara Belly Breathing',
    url: '/hara-breathing-exercises',
    blurb: 'Japanese diaphragmatic breathing that lowers stress, calms anxiety, and boosts energy.',
    category: 'breathing',
    problems: ['breathing', 'stress-sleep'],
  },
  {
    title: 'Japanese Long Breath Method',
    url: '/japanese-long-breath-method',
    blurb: 'A 2-minute breathing exercise that strengthens the core, supports posture, and eases back pain.',
    category: 'breathing',
    problems: ['breathing', 'posture', 'back'],
  },
  {
    title: 'Do-In Self Massage',
    url: '/do-in-self-massage',
    blurb: 'Acupressure self-massage to release tension in the neck, shoulders, and whole body.',
    category: 'breathing',
    problems: ['neck-shoulders', 'stress-sleep', 'mobility'],
  },
  {
    title: 'Kinhin Walking Meditation',
    url: '/kinhin-walking-meditation',
    blurb: 'Zen walking meditation that calms the mind and trains balance one mindful step at a time.',
    category: 'meditation',
    problems: ['stress-sleep', 'balance'],
  },
  {
    title: 'Shinrin-Yoku Forest Bathing',
    url: '/shinrin-yoku-forest-bathing',
    blurb: 'Science-backed mindful time in nature to reduce stress, lower blood pressure, and restore calm.',
    category: 'meditation',
    problems: ['stress-sleep'],
  },
];
