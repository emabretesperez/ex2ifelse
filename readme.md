# Ex2 if/else espiral

O meu projeto é uma espiral interativa que representa um organismo vivo a respirar, a espiral roda sozinha, pulsa de forma natural e reage à posição e aos cliques do rato.

**O Conceito e a Representação da Respiração**

Para dar a sensação de que a espiral está viva, utilizei o frameCount em conjunto com a função matemática sin():
- O frameCount funciona como o relógio interno do computador, somando +1 a cada frame (cerca de 60 vezes por segundo) para contar o tempo que já passou.
- Como o tempo estaria sempre a subir, a função sin() utiliza nesse relógio e transforma-o numa onda suave que vai e volta entre (0 e 1)
- É esta combinação que faz com que a espiral se expanda e se retraia ciclicamente, simulando exatamente o ritmo natural da respiração.
- Decidi colocar bolinhas para ter mais movimento.

**A Interatividade (Cores e o Salto)**
Nós interagi-mos com o projeto, mudando as cores consoante o mover do rato e no clique no centro da espiral, que a faz saltar.

**As Cores dos Quadrantes** 
O ecrã está dividido em quatro zonas com base na posição do cursor (mouseX e mouseY). Dependendo do sítio onde colocas o rato, as cores da espiral mudam instantaneamente (verde, vermelho, azul e amarelo).

**O Efeito do salto**
 Se clicares com o rato exatamente no centro da espiral, ela dá um salto rápido (como se levasse um susto), encolhendo de imediato e depois volta ao seu ritmo normal de respiração graças a uma variável de impulso. 