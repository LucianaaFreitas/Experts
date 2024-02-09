const perguntas = [
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      resposta: [
        "var nomeVariavel;",
        "variable nomeVariavel;",
        "v nomeVariavel;",
      ],
      correta: 0
    },
    {
      pergunta: "Como se escreve um comentário de uma linha em JavaScript?",
      resposta: [
        "// Isto é um comentário",
        "-- Isto é um comentário",
        "# Isto é um comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método remove o último elemento de um array e o retorna?",
      resposta: [
        "array.removeLast()",
        "array.deleteLast()",
        "array.pop()",
      ],
      correta: 2
    },
    {
      pergunta: "Como você arredonda o número 7.25 para o inteiro mais próximo?",
      resposta: [
        "Math.rnd(7.25)",
        "Math.round(7.25)",
        "Math.floor(7.25)",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para parsear uma string para int?",
      resposta: [
        "int.parse('123')",
        "Number.parseInt('123')",
        "parseInt('123')",
      ],
      correta: 2
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      resposta: [
        "function minhaFuncao()",
        "var minhaFuncao = function()",
        "Ambas as respostas estão corretas",
      ],
      correta: 2
    },
    {
      pergunta: "Como você pode adicionar um comentário em um código JavaScript?",
      resposta: [
        "// Isto é um comentário",
        "<!-- Isto é um comentário -->",
        "/* Isto é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Como se chama uma função chamada 'minhaFuncao'?",
      resposta: [
        "call minhaFuncao()",
        "invoke minhaFuncao()",
        "minhaFuncao()",
      ],
      correta: 2
    },
    {
      pergunta: "Como se inicia um bloco de código IF para verificar se 'a' é igual a 100?",
      resposta: [
        "if a = 100 then",
        "if (a == 100)",
        "if a == 100",
      ],
      correta: 1
    },
    {
      pergunta: "Qual operador é usado para atribuir um valor a uma variável?",
      resposta: [
        "=",
        "==",
        "===",
      ],
      correta: 0
    },
  ];
  // buscar um elemento html e buscar uma variável
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  // somando os acertos 
  const corretas = new Set() 
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição. Entrar no array pegar esse item e trabalhar em cima desse item
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  // roda 3x para cada questao
    for(let resposta of item.resposta){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      // Expecificar as questões p clik
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      // mostrando para o pc que a questão tem 3 alternativas
      dt.querySelector('input').value = item.resposta.indexOf(resposta)
      // varicar ação que está acontecendo na tela 
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      }
  
  
  // chamando as outras alternativas das questões
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  // remover a primeira opção
    quizItem.querySelector('dl dt').remove()
    
    
    
    
    
    // coloca a pergunta na tela 
    quiz.appendChild(quizItem)
  
  }