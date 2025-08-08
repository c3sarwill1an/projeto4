const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após a escola, você encontra uma nova tecnologia, um chat que responde a todas as suas dúvidas e cria imagens e áudios incríveis. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é uma revolução! A tecnologia vai melhorar nossa qualidade de vida e criar um futuro mais justo.",
                afirmacao: "Você sente uma empolgação positiva ao pensar como a IA pode ajudar a resolver problemas globais e criar um futuro melhor para todos."
            },
            {
                texto: "Incrível! Isso pode transformar a educação e o trabalho, trazendo mais oportunidades para todos.",
                afirmacao: "Você está animado com a possibilidade de utilizar a IA para melhorar a educação, o trabalho e o bem-estar de todos."
            }
        ]
    },
    {
        enunciado: "Uma professora de tecnologia decide fazer uma sequência de aulas sobre Inteligência Artificial. Ao final, ela pede um trabalho sobre o uso de IA na educação. O que você faz?",
        alternativas: [
            {
                texto: "Utilizo uma ferramenta de IA para pesquisar e entender melhor o impacto da tecnologia, explicando de maneira simples o seu potencial.",
                afirmacao: "Você se sente inspirado a usar a IA para facilitar seu aprendizado e ajudar outras pessoas a entenderem a importância dessa tecnologia."
            },
            {
                texto: "Escrevo o trabalho com base na minha experiência e nas discussões da turma, complementando com as descobertas sobre como a IA pode humanizar o ensino.",
                afirmacao: "Você percebe que a IA pode trazer mais empatia para a educação, criando soluções personalizadas para cada aluno."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora organiza um debate sobre como a IA impacta o trabalho do futuro. Como você se posiciona?",
        alternativas: [
            {
                texto: "Acredito que a IA vai abrir novas oportunidades de emprego e vai aprimorar as habilidades humanas, permitindo uma era de colaboração entre humanos e máquinas.",
                afirmacao: "Você está empolgado com as novas possibilidades profissionais e vê a IA como uma aliada que vai fortalecer as habilidades humanas e criar empregos mais criativos e inovadores."
            },
            {
                texto: "A IA vai melhorar a vida das pessoas, mas devemos garantir que todos tenham acesso a essas oportunidades de maneira justa e igualitária.",
                afirmacao: "Você vê a IA como uma ferramenta poderosa para a inclusão social, promovendo igualdade e oportunidades para todos, independentemente de sua origem."
            }
        ]
    },
    {
        enunciado: "Depois da discussão, você precisa criar uma imagem no computador para ilustrar suas ideias sobre a IA. O que você faz?",
        alternativas: [
            {
                texto: "Criar uma imagem em uma plataforma de design tradicional, mas compartilhando minhas ideias sobre como a IA pode democratizar a arte e o design.",
                afirmacao: "Você pensa em como as ferramentas digitais vão democratizar o design, tornando mais pessoas capazes de expressar suas ideias criativas, independentemente de sua habilidade manual."
            },
            {
                texto: "Utilizo um gerador de imagens de IA para acelerar o processo criativo, combinando minha visão com a inovação da IA.",
                afirmacao: "Você percebe que a IA é uma excelente ferramenta para ampliar sua criatividade e facilitar o processo de criação, permitindo que você produza mais e melhore a qualidade do trabalho."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, mas o andamento está um pouco atrasado. Um colega usou a IA para ajudar no trabalho. O que você faz?",
        alternativas: [
            {
                texto: "A IA é uma ferramenta incrível, então aceito a ajuda e a utilizo para melhorar o trabalho com minha própria contribuição.",
                afirmacao: "Você vê que a IA pode ser usada como apoio para resolver problemas complexos, mas sempre assegura que sua voz e visão pessoal estejam presentes no trabalho final."
            },
            {
                texto: "A IA pode fornecer sugestões, mas o importante é garantir que o trabalho reflita o que aprendemos e a forma como a tecnologia pode ser usada de forma ética.",
                afirmacao: "Você entende que a IA deve ser usada de forma responsável, aproveitando o seu potencial para acelerar o trabalho, mas com a consciência de que o aprendizado pessoal e a ética são essenciais."
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
