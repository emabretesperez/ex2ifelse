let rotacaoAtual = 0;
let tamanhoBase = 0.25; 
let impulsoRecolher = 0; // Controla o efeito de recolher rápido

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
}

function draw() {
  background(22, 24, 26); // Cizento muito escuro
  
  translate(width / 2, height / 2); // Centraliza a espiral no ecrã

  // Rotação lenta
  rotacaoAtual += 0.4; 
  rotate(rotacaoAtual); 

  // --- 1. CORES DOS 4 QUADRANTES ---
  if (mouseX < width / 2 && mouseY < height / 2) {
    fill(0, 255, 0);   // Topo-Esquerdo: Verde
  } 
  else if (mouseX >= width / 2 && mouseY < height / 2) {
    fill(255, 0, 0);   // Topo-Direito: Vermelho
  } 
  else if (mouseX < width / 2 && mouseY >= height / 2) {
    fill(0, 0, 255);   // Fundo-Esquerdo: Azul
  } 
  else {
    fill(255, 255, 0); // Fundo-Direito: Amarelo
  }

  noStroke(); // Remove o contorno das bolinhas

  // O impulso vai diminuindo gradualmente a cada frame até voltar a 0 (efeito mola)
  impulsoRecolher = lerp(impulsoRecolher, 0, 0.1);

  // Respiração normal combinada com o impulso de recolher
  let fatorTamanho = tamanhoBase + sin(frameCount * 1) * 0.05 - impulsoRecolher;

  // Garante que o tamanho não fica negativo
  if (fatorTamanho < 0.02) {
    fatorTamanho = 0.02;
  }

  // Desenhar a espiral usando bolinhas
  for (let a = 0; a < 1440; a += 8) {
    let r = a * fatorTamanho;
    let x = r * cos(a);
    let y = r * sin(a);
    
    // Pulsação das bolinhas individuais
    let tamanhoBolinha = 8 + sin(frameCount * 2 + a * 0.1) * 4;

    ellipse(x, y, tamanhoBolinha, tamanhoBolinha); 
  }
}

// --- 2. CLICAR NO CENTRO PARA DAR O IMPULSO DE RECOLHER ---
function mousePressed() {
  // Mede a distância do rato ao centro do ecrã
  let distanciaAoCentro = dist(mouseX, mouseY, width / 2, height / 2);

  // Se clicares bem no centro (raio de 60 pixéis)
  if (distanciaAoCentro < 60) {
    impulsoRecolher = 0.20; // Dá um "puxão" forte para encolher de imediato!
  }
}
