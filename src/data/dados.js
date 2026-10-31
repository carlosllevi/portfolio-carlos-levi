export const informacoesPessoais = {
  nome: 'Carlos Levi Vasconcelos de Castro',
  cargo: 'Estudante de Ciência da Computação',
  foto: `${import.meta.env.BASE_URL}imagens/foto-perfil.png`,
  email: 'carlos2levi@gmail.com',
  github: 'https://github.com/carlosllevi',
  linkedin: 'https://www.linkedin.com/in/carlos-levi-castro-02a510265/',
}

export const sobreMim = [
  'Graduando em Ciência da Computação pela Universidade de Fortaleza (Unifor), com previsão de conclusão para dezembro de 2028. Desenvolvedor com foco em soluções práticas, possuindo interesse e competências voltadas para o Backend.',
  'Possui experiência prática em todo o ciclo de desenvolvimento de software, desde o levantamento de requisitos e prototipação até a implementação de código. Entre as principais entregas acadêmicas e de portfólio, destacam-se o desenvolvimento do aplicativo mobile ZeroDesperdício (React Native e JavaScript) e o jogo educativo Rocket Math (Godot Engine). Atuou também no ambiente acadêmico como tutor no programa Amigo Nota 10, prestando suporte em Programação Orientada a Objetos (Java) e Fundamentos de Sistemas.',
  'Atualmente, atua como Estagiário de Planejamento na Diplan (Unifor), onde desenvolve habilidades analíticas por meio da elaboração de relatórios orçamentários, acompanhamento de indicadores estratégicos e ferramentas de dados. Busca uma oportunidade de estágio na área de tecnologia para aplicar solidez lógica e colaborar com o desenvolvimento de sistemas.',
]

export const conhecimentos = [
  { nome: 'Java', icone: 'devicon-java-plain' },
  { nome: 'JavaScript', icone: 'devicon-javascript-plain' },
  { nome: 'Python', icone: 'devicon-python-plain' },
  { nome: 'HTML', icone: 'devicon-html5-plain' },
  { nome: 'CSS', icone: 'devicon-css3-plain' },
  { nome: 'Git', icone: 'devicon-git-plain' },
  { nome: 'GitHub', icone: 'devicon-github-original' },
]

export const projetos = [
  {
    titulo: 'ZeroDesperdício',
    imagem: `${import.meta.env.BASE_URL}imagens/ZeroDesperdicioMobile.jpg`,
    alt: 'Captura de tela do aplicativo ZeroDesperdício',
    descricao:
      'Atuou em todo o ciclo de desenvolvimento do aplicativo mobile ZeroDesperdício, construído utilizando React Native e JavaScript, com foco estratégico na redução do desperdício de alimentos. A participação compreendeu desde a etapa inicial de levantamento de requisitos e prototipação da interface até a implementação prática e codificação da solução, integrando conceitos de arquitetura de software e experiência do usuário para conectar doadores e receptores de forma eficiente.',
    tecnologias: ['React Native', 'JavaScript'],
  },
  {
    titulo: 'Rocket Math',
    imagem: `${import.meta.env.BASE_URL}imagens/rocketMath.jpg`,
    alt: 'Captura de tela do jogo Rocket Math',
    descricao:
      'Atuou no desenvolvimento do Rocket Math, um jogo educativo focado em desafios matemáticos construído com a Godot Engine e a linguagem GDScript. O projeto envolveu a aplicação prática de lógica de programação para ambientes 2D, estruturação de mecânicas de jogo e desenvolvimento de interfaces de usuário (UI) interativas, com o objetivo de unir conceitos pedagógicos e entretenimento digital de forma eficiente.',
    tecnologias: ['Godot Engine', 'GDScript'],
  },
]