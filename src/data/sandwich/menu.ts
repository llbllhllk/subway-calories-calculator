import {
  blt,
  chicken_bacon_avocado,
  chicken_slice,
  chicken_teriyaki,
  egg_mayo,
  ham,
  italian_bmt,
  k_bbq,
  new_spicy_shrimp,
  pulled_pork_barbecue,
  roasted_chicken,
  rotisserie_barbecue_chicken,
  shrimp,
  spicy_italian,
  steak_and_cheese,
  subway_club,
  tuna,
  veggi_delite,
} from '@assets/images/sandwiches/menu/index'
import { IContent } from '../type'

const menu: IContent[] = [
  {
    id: 1,
    name: 'New 쉬림프',
    image: shrimp,
    alt: 'shrimp',
    calories: 32.7,
  },
  {
    id: 2,
    name: 'New 스파이시 쉬림프',
    image: shrimp,
    alt: 'new spicy shrimp',
    calories: 36.7,
  },
  {
    id: 3,
    name: '스테이크 & 치즈',
    image: steak_and_cheese,
    alt: 'steak and cheese',
    calories: 146.7,
  },
  {
    id: 4,
    name: '치킨 베이컨 아보카도',
    image: chicken_bacon_avocado,
    alt: 'chicken bacon avocado',
    calories: 146.7,
  },
  {
    id: 5,
    name: '로스트 치킨',
    image: roasted_chicken,
    alt: 'roasted chicken',
    calories: 91.7,
  },
  {
    id: 6,
    name: '로티세리 바비큐 치킨',
    image: rotisserie_barbecue_chicken,
    alt: 'rotisserie barbecue chicken',
    calories: 118.7,
  },
  {
    id: 6,
    name: 'K-바비큐',
    image: k_bbq,
    alt: 'k bbq',
    calories: 163.8,
  },
  {
    id: 7,
    name: '폴드 포크 바비큐',
    image: pulled_pork_barbecue,
    alt: 'pulled pork barbecue',
    calories: 118.7,
  },
  {
    id: 8,
    name: '써브웨이 클럽',
    image: subway_club,
    alt: 'subway club',
    calories: 90.7,
  },
  {
    id: 9,
    name: '치킨 데리야끼',
    image: chicken_teriyaki,
    alt: 'chicken teriyaki',
    calories: 105.7,
  },
  {
    id: 10,
    name: '스파이시 이탈리안',
    image: spicy_italian,
    alt: 'spicy italian',
    calories: 255.7,
  },
  {
    id: 11,
    name: '이탈리안 비엠티',
    image: italian_bmt,
    alt: 'italian bmt',
    calories: 179.7,
  },
  {
    id: 12,
    name: '비엘티',
    image: blt,
    alt: 'blt',
    calories: 91.7,
  },
  {
    id: 13,
    name: '치킨 슬라이스',
    image: chicken_slice,
    alt: 'chicken slice',
    calories: 56.7,
  },
  {
    id: 14,
    name: '참치',
    image: tuna,
    alt: 'tuna',
    calories: 107.7,
  },
  {
    id: 15,
    name: '햄',
    image: ham,
    alt: 'ham',
    calories: 53.7,
  },
  {
    id: 16,
    name: '에그마요',
    image: egg_mayo,
    alt: 'egg mayo',
    calories: 207.7,
  },
  {
    id: 17,
    name: '베지',
    image: veggi_delite,
    alt: 'veggi delite',
    calories: 0,
  },
]

export default menu
