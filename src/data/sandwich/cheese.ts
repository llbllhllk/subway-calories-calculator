import {
  american_cheese,
  mozzarella_cheese,
  shredded_cheese,
} from '@assets/images/sandwiches/cheese'

import { IContent } from '../type'

const cheese: IContent[] = [
  {
    id: 1,
    name: '아메리칸 치즈',
    image: american_cheese,
    alt: 'american cheese',
    calories: 35.3,
  },
  {
    id: 2,
    name: '슈레드 치즈',
    image: shredded_cheese,
    alt: 'shredded cheese',
    calories: 53.6,
  },
  {
    id: 3,
    name: '모짜렐라 치즈',
    image: mozzarella_cheese,
    alt: 'mozzarella cheese',
    calories: 43.8,
  },
]

export default cheese
