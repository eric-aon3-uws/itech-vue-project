// Fictional demo data, identical to src/data/stalls.js in the Development Tutorial.
export interface Stall {
  id: number
  name: string
  category: string
  location: string
  blurb: string
}

export const stalls: Stall[] = [
  {
    id: 1,
    name: 'Abbey Candle Co.',
    category: 'Crafts',
    location: 'Abbey Close',
    blurb: 'Hand-poured festive candles',
  },
  {
    id: 2,
    name: 'Paisley Pattern Prints',
    category: 'Gifts',
    location: 'High Street',
    blurb: 'Cards and prints in classic paisley designs',
  },
  {
    id: 3,
    name: 'Mulled Wine Corner',
    category: 'Food & Drink',
    location: 'Town Hall Steps',
    blurb: 'Warm, spiced and very festive',
  },
  {
    id: 4,
    name: 'Thistle Bakes',
    category: 'Food & Drink',
    location: 'Abbey Close',
    blurb: 'Shortbread, tablet and mince pies',
  },
  {
    id: 5,
    name: 'Loom & Lace',
    category: 'Crafts',
    location: 'High Street',
    blurb: 'Knitted scarves, hats and gloves',
  },
  {
    id: 6,
    name: "Santa's Toy Shed",
    category: 'Gifts',
    location: 'Town Hall Steps',
    blurb: 'Wooden toys for all ages',
  },
]
