export interface ProductItem {
  id: string;
  name: string;
  subtitle?: string;
  weight: string;
  serves?: string;
  servesHighlight?: boolean;
  image: string;
  alt: string;
  badge?: string;
}

export interface BeverageItem {
  id: string;
  name: string;
  type: string;
}

export const BRAND = {
  name: 'MS Lasanha',
  tagline: 'Lasanhas feitas com dedicação, sabor e história.',
  logo: 'https://i.postimg.cc/CMRrP99F/file-000000004494820e949297e1148b9a44.png',
  neutralBackground: 'https://i.postimg.cc/ZKfJ6WBd/modelo-de-plano-de-fundo-padrao-de-cor-neutra-vetor-656853-281.jpg',
};

export const LINKS = {
  ifood: 'https://www.ifood.com.br/delivery/maceio-al/ms-lasanha-sao-jorge/2e4281c4-a2b5-4986-ac09-10c6aa6b9e6a?UTM_Medium=share',
  ninetyNineFood: 'https://oia.99app.com/dlp9/eisSJT?share_media=system',
  whatsapp: 'https://wa.link/07ka99',
  instagram: 'https://www.instagram.com/mslasanha?stkn=MWwwOG1hd2Uya2Rrbw==',
};

export const PRODUCTS: ProductItem[] = [
  {
    id: 'mista-500g',
    name: 'Lasanha Mista',
    subtitle: 'Frango + Carne',
    weight: '500g',
    image: 'https://i.postimg.cc/CKfXZX0W/Screenshot-20260920-091102-i-Food.png',
    alt: 'Lasanha Mista de Frango e Carne artesanal MS Lasanha',
    badge: 'Mais Pedida',
  },
  {
    id: 'frango-350g',
    name: 'Lasanha de Frango',
    subtitle: 'Receita Tradicional',
    weight: '350g',
    image: 'https://i.postimg.cc/Bn9z1NYq/Screenshot-20260920-084644-i-Food.png',
    alt: 'Lasanha de Frango 350g MS Lasanha',
    badge: 'Porção Individual',
  },
  {
    id: 'frango-1kg',
    name: 'Lasanha de Frango',
    subtitle: 'Lasanha de Frango',
    weight: '1kg',
    serves: 'Serve 2 pessoas',
    servesHighlight: true,
    image: 'https://i.postimg.cc/XYBfMxqV/IMG-20260921-WA0138.jpg',
    alt: 'Lasanha de Frango 1kg MS Lasanha - Serve 2 pessoas',
    badge: 'Para Compartilhar',
  },
];

export const BEVERAGES: BeverageItem[] = [
  { id: 'coca', name: 'Coca-Cola', type: 'Lata' },
  { id: 'coca-zero', name: 'Coca-Cola Zero', type: 'Lata' },
  { id: 'guarana', name: 'Guaraná', type: 'Lata' },
];

export const HISTORY_PARAGRAPHS = [
  'Se olhar para trás, eu jamais imaginava onde Deus iria me levar. A história do MS Lasanha começou com um sonho, muita fé e quase nada de estrutura: eu não tinha nem forno próprio. Comecei vendendo apenas 2 sabores e 2 tamanhos, para as pessoas aquecerem no micro-ondas ou no forno de casa.',
  'Sempre busquei inspiração na história de grandes empresas e empresários. Fui atrás de conhecimento, fiz cursos de gastronomia, trabalhei em estágios e aprendi muito na prática — vendo chefs e profissionais experientes colocarem a mão na massa. Com o tempo e com o fruto do meu trabalho, fui comprando meus equipamentos e estruturando tudo.',
  'Tenho muito orgulho de tudo o que passei e do homem que me tornei até aqui. O MS Lasanha é o resultado do meu aprendizado diário, da minha dedicação e da minha certeza de que, com trabalho duro, as coisas acontecem.',
  'Obrigado a cada um de vocês que acredita no meu trabalho e faz parte desta jornada!',
];
