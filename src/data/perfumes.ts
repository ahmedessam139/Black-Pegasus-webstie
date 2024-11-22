import { Perfume } from '../types/perfume';

export const perfumes: Perfume[] = [
  {
    id: 'midnight-rose',
    name: 'Midnight Rose',
    category: 'Women',
    description: 'A seductive blend of Bulgarian rose, midnight jasmine, and warm amber.',
    inspiredBy: 'Lancôme La Vie Est Belle',
    company: 'Lancôme',
    notes: {
      top: ['Bulgarian Rose', 'Black Currant', 'Pink Pepper'],
      middle: ['Midnight Jasmine', 'Peony', 'Lily of the Valley'],
      base: ['Amber', 'Musk', 'Vanilla']
    },
    price: {
      ml30: 85,
      ml50: 120,
      ml100: 180
    },
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=800',
    votes: {
      positive: 856,
      neutral: 124,
      negative: 32
    }
  },
  {
    id: 'obsidian-nights',
    name: 'Obsidian Nights',
    category: 'Men',
    description: 'A powerful composition of leather, tobacco, and spiced woods.',
    inspiredBy: 'Tom Ford Oud Wood',
    company: 'Tom Ford',
    notes: {
      top: ['Cardamom', 'Black Pepper', 'Bergamot'],
      middle: ['Leather', 'Tobacco', 'Cedar'],
      base: ['Oud', 'Vanilla', 'Amber']
    },
    price: {
      ml30: 95,
      ml50: 140,
      ml100: 200
    },
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800',
    votes: {
      positive: 1243,
      neutral: 156,
      negative: 45
    }
  },
  {
    id: 'celestial-mist',
    name: 'Celestial Mist',
    category: 'Unisex',
    description: 'An ethereal blend of iris, white musk, and precious woods.',
    inspiredBy: 'Maison Francis Kurkdjian Baccarat Rouge 540',
    company: 'Maison Francis Kurkdjian',
    notes: {
      top: ['Bergamot', 'Iris', 'White Tea'],
      middle: ['Orris', 'Violet', 'Ambrette'],
      base: ['White Musk', 'Sandalwood', 'Vetiver']
    },
    price: {
      ml30: 90,
      ml50: 130,
      ml100: 190
    },
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800',
    votes: {
      positive: 945,
      neutral: 134,
      negative: 28
    }
  }
];