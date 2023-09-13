import { Lateef, Aref_Ruqaa } from 'next/font/google';

export const lateef = Lateef({
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-lateef',
});

export const aref_ruqaa = Aref_Ruqaa({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-aref',
});
