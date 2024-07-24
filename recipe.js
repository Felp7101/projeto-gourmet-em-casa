const recipes = {
  1: {
    title: "Costeletas de porco marinadas na cachaça",
    image: "../assets/costelinha-de-porco.jpg",
    description: `Aprenda a fazer essas costeletas com um sabor indescritível,
         perfeito para ocasiões especiais.`,
    difficulty: "Fácil",
    momentRecipes: false,
    rate: 4.8,
    prepTime: "90 min",
  },
  2: {
    title: "Tiras de carne com molho de queijo",
    image: "../assets/tiras-de-carne-com-molho-de-queijo.png",
    description: `Aprenda a fazer essas deliciosas
  tiras de carne com um delicioso molho de queijo.
  Impossivel não gostar!`,
    difficulty: "Fácil",
    momentRecipes: true,
    rate: 4.3,
    prepTime: "690 min",
  },
  3: {
    title: "Suflê de banana-da-terra com carne",
    image: `../assets/sufle-de-banana-da-terra-com-carne.jpg`,
    description: `Uma receita perfeita e memorável.
  Aprenda a fazer agora essa receita deliciosa,
  que é capaz de deixar a vida ainda mais feliz`,
    difficulty: "Fácil",
    momentRecipes: false,
    rate: 4.5,
    prepTime: "50 min",
  },
  4: {
    title: "Arroz doce brûlée",
    image: "../assets/arroz-doce-brulee.jpg",
    description: `Aprenda  a fazer essa doce receita
  de arroz doce brúlê, uma
  ótima escolha para a sobremesa.`,
    difficulty: "Fácil",
    momentRecipes: true,
    rate: 4.6,
    prepTime: "50 min",
  },
  5: {
    title: "Lasanha doce",
    image: "../assets/lasanha-doce.png",
    description: `Uma receita incrivel, tão macio quanto
  uma nuvem. Aprenda a fazer uma deliciosa
  lasanha doce para comer num final de tarde.`,
    difficulty: "Fácil",
    momentRecipes: false,
    rate: 4.8,
    prepTime: "90 min",
    desserts: true,
  },
  6: {
    title: "conchiglione recheado com queijo",
    image: "../assets/conchiglione.jpg",
    description: `
        Aprenda a fazer esse saboroso conchiglione
  recheado com queijo. Uma deliciosa iguaria e
  perfeita para um almoço de família.
  `,
    difficulty: "Fácil",
    momentRecipes: true,
    rate: 4.4,
    prepTime: "40 min",
  },
  7: {
    title: "Risoto de bacalhau",
    image: "../assets/risoto-de-bacalhau.jpg",
    description: ` Uma receita com um sabor intenso, que
      definitivamente consegue surpeender
      todos que experimentam essa comida.`,
    difficulty: "Médio",
    momentRecipes: false,
    rate: 4.8,
    prepTime: "4 min",
  },
  8: {
    title: "Cheesecake de frutas vermelhas",
    image: "../assets/cheesecake-de-frutas-vermelhas.png",
    description: `Aprenda a fazer essa sobremesa que
  é simplesmente irresistivel.
  com uma textura suave e um sabor equilibrado.`,
    difficulty: "Média",
    momentRecipes: true,
    rate: 4.7,
    prepTime: "50 min",
    desserts: true,
  },
  9: {
    title: "Mousse de café com chantilly",
    image: "../assets/mousse-cafe-chantilly.jpg",
    description: `Aprenda a fazer essa sobremesa com um
  gosto acentuado, leve e extremamente apaixonante. Perfeito para os amantes de café`,
    difficulty: "Fácil",
    momentRecipes: false,
    rate: 4.0,
    prepTime: "150 min",
    desserts: true,
  },
  10: {
    title: "medalhão de filé mignon",
    image: "../assets/medalhao-de-file-mignon.jpg",
    description: `Aprenda a fazer esse medalhão de filé mignon
  um molho saboroso de azeitonas.
  Uma receita simples, fácil e que vale muito a pena.`,
    difficulty: "Fácil",
    momentRecipes: false,
    rate: 4.8,
    prepTime: "40 min",
  },
  11: {
    title: "Salada de arroz com camarão",
    image: "../assets/salada-arroz-camarao.jpg",
    description: `Aprenda fazer essa receita com um sabor diverso e delicioso,`,
    difficulty: "Fácil",
    momentRecipes: true,
    rate: 4.9,
    prepTime: "40 min",
  },
  12: {
    title: "Brownie com creme de avelã com nozes",
    image: "../assets/brownie-creme-avela-nozes.jpg",
    description: `Aprenda a fazer essa receita de dar água na boca,
  que é deliciosa, crocante, divina.
  E o melhor, é muito fácil.`,
    difficulty: "Fácil",
    momentRecipes: true,
    rate: 4.8,
    prepTime: "45 min",
    desserts: true,
  },
  13: {
    title: "Salmão com crosta crocante e risoto",
    image: "../assets/salmao-crosta-crocante-risoto.jpg",
    description: `Quem é que não gosta de salmão não é mesmo?
  Agora imagine salmão com crosta crocante, sensacional não é?
  Mas melhora, nessa receita você ainda vai
  aprender a fazer um delioso risoto. Simplesmente um banquete.`,
    difficulty: "Fácil",
    momentRecipes: false,
    rate: 4.0,
    prepTime: "90 min",
  },
  14: {
    title: "Lasanha de beringela ao molho bolonhesa ",
    image: "../assets/lasanha-de-berinjela-bolonhesa.jpg",
    description: `Aprenda a fazer uma lasanha de beringela que
  transforma qualquer refeição.
  Clique abaixo para ver a receita!
  `,
    difficulty: "Fácil",
    momentRecipes: false,
    rate: 4.4,
    prepTime: "70 min",
  },
  15: {
    title: "Muffin de mirtilo",
    image: "../assets/muffin-de-mirtilo-blueberry.png",
    description: `Aprenda a fazer esses deliciosos muffins de
  mirtilo, capazes de fazerem você se apaixonar por eles.
  Que tal fazer hoje para acompanhar o seu almoço?`,
    difficulty: "Fácil",
    momentRecipes: false,
    rate: 4.6,
    prepTime: "25 min",

  },

  16: {
    title: "Fricassê de camarão",
    image: "../assets/fricasse-de-camarao.jpg",
    description: `Está com vontade de impressionar seus convidados
  com um prato sofisticado e delicioso?
  então que tal você experimentar a receita
  irresistível de Fricassê de Camarão.`,
    difficulty: "Fácil",
    momentRecipes: true,
    rate: 4.9,
    prepTime: "30 min",
  },
  17: {
    title: "Bolo floresta negra",
    image: "../assets/bolo-floresta-negra.jpg",
    description: `Se você busca uma sobremesa que combine beleza, sabor e tradição,
  o bolo Floresta Negra é a escolha perfeita!
  Capaz de surpreender qualquer paladar como sempre.`,
    difficulty: "Fácil",
    momentRecipes: true,
    rate: 4.7,
    prepTime: "240 min",
    desserts: true,
  },
};
