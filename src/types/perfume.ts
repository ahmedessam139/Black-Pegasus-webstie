export type Note = {
  top: string[];
  middle: string[];
  base: string[];
};

export type Price = {
  ml30: number;
  ml50: number;
  ml100: number;
};

export type Perfume = {
  id: string;
  name: string;
  category: 'Men' | 'Women' | 'Unisex';
  description: string;
  inspiredBy: string;
  company: string;
  notes: Note;
  price: Price;
  image: string;
  votes: {
    positive: number;
    neutral: number;
    negative: number;
  };
};