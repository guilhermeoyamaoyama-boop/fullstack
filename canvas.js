let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

/* retangulo cinza*/
ctx.beginPath();
ctx.fillStyle = 'gray';
ctx.fillRect(0,200,300,100);
ctx.closePath();

/* retangulo casa marrom*/
ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(100,100,100,100);
ctx.closePath();

/*janela esquerda*/
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(110,125,30,30);
ctx.closePath();

/*janela direita*/
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(160,125,30,30);
ctx.closePath();

/*porta*/
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(140,155,20,45);
ctx.closePath();

//teto

// sol
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(250,50,30,0.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();

//madeira 1
ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(40,155,20,45);
ctx.closePath();

//madeira 2
ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(250,200,20,45);
ctx.closePath();

//folhas1
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.arc(260,190,20,0.5*Math.PI,2.5*Math.PI);
ctx.fill();

ctx.closePath();

//folhas2
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.arc(50,150,20,0.5*Math.PI,2.5*Math.PI);
ctx.fill();

ctx.closePath();

//bola azul
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.arc(100,300,50,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();

//parte azul baixo
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(0,250,100,100);
ctx.closePath();

//parte azul lado
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(0,200,40,50);
ctx.closePath();

//bola azul superior
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.moveTo(0,200)
ctx.arc(0,200,40,1.5*Math.PI,0*Math.PI);
ctx.fill();
ctx.closePath();

//teto
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.moveTo(100,100);
ctx.lineTo(200,100);
ctx.lineTo(150,60);
ctx.lineTo(100,100);
ctx.fill();
ctx.closePath();


let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');


//caixa branca
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'white';
ctx2.strokeStyle = 'black';
ctx2.fillRect(10,10,280,280);
ctx2.strokeRect(10,10,280,280);
ctx2.closePath();

// texto
ctx2.beginPath();
ctx2.fillStyle = 'black';
ctx2.font = "10px Arial"
ctx2.textAlign = "center";
ctx2.fillText("Canvas",150,50);
ctx2.closePath();

//quadrado esquerda azul
ctx2.beginPath();
ctx2.fillStyle = 'blue';
ctx2.fillRect(10,10,50,50);
ctx2.closePath();

//quadrado direita vermelho
ctx2.beginPath();
ctx2.fillStyle = 'red';
ctx2.fillRect(240,10,50,50);
ctx2.closePath();

//quadrado esquerda amarelo
ctx2.beginPath();
ctx2.fillStyle = 'yellow';
ctx2.fillRect(10,250,40,40);
ctx2.closePath();

//quadrado esquerda amarelo
ctx2.beginPath();
ctx2.fillStyle = 'yellow';
ctx2.fillRect(50,250,40,40);
ctx2.closePath();
//quadrado esquerda amarelo
ctx2.beginPath();
ctx2.fillStyle = 'yellow';
ctx2.fillRect(10,210,40,40);
ctx2.closePath();


//quadrado direito preto
ctx2.beginPath();
ctx2.fillStyle = 'black';
ctx2.fillRect(250,250,40,40);
ctx2.closePath();

//quadrado direito preto
ctx2.beginPath();
ctx2.fillStyle = 'black';
ctx2.fillRect(210,250,40,40);
ctx2.closePath();

//quadrado direito preto
ctx2.beginPath();
ctx2.fillStyle = 'black';
ctx2.fillRect(250,210,40,40);
ctx2.closePath();


// bola direita
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'green';
ctx2.fillStyle = 'yellow';
ctx2.arc(200,230,15,0.5*Math.PI,2.5*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

// bola esquerda
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'green';
ctx2.fillStyle = 'yellow';
ctx2.arc(100,230,15,0.5*Math.PI,2.5*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

//linha meio
ctx2.beginPath();
ctx2.moveTo(10,150);
ctx2.lineTo(290,150);
ctx2.stroke();
//linha meio baixo
ctx2.beginPath();
ctx2.moveTo(150,150);
ctx2.lineTo(150,280);
ctx2.stroke();

//circulo baixo
ctx2.beginPath();
ctx2.fillStyle = 'yellow';
ctx2.arc(150,290,30,1*Math.PI,0*Math.PI);
ctx2.fill();
ctx2.closePath();

//quadrado vermelho centro
ctx2.beginPath();
ctx2.fillStyle = 'red';
ctx2.fillRect(110,150,40,40);
ctx2.closePath();

//quadrado esquedo ciano
ctx2.beginPath();
ctx2.fillStyle = 'aqua';
ctx2.fillRect(11,151,30,30);
ctx2.closePath();


//quadrado esquedo ciano
ctx2.beginPath();
ctx2.fillStyle = 'aqua';
ctx2.fillRect(11,119,30,30);
ctx2.closePath();


//quadrado direito ciano
ctx2.beginPath();
ctx2.fillStyle = 'aqua';
ctx2.fillRect(259,138,30,30);
ctx2.closePath();

//linha meio
ctx2.beginPath();
ctx2.moveTo(10,150);
ctx2.lineTo(290,150);
ctx2.stroke();

// linha azul
ctx2.beginPath();
ctx2.strokeStyle = 'blue';
ctx2.moveTo(150,150);
ctx2.lineTo(60,60);
ctx2.stroke();

// linha vermelho
ctx2.beginPath();
ctx2.strokeStyle = 'red';
ctx2.moveTo(150,150);
ctx2.lineTo(240,60);
ctx2.stroke();

// bola centro
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'blue';
ctx2.fillStyle = 'aqua';
ctx2.arc(150,120,15,0.5*Math.PI,2.5*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

//circulo baixo
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'green';
ctx2.fillStyle = 'aqua';
ctx2.arc(150,290,30,1*Math.PI,0*Math.PI);
ctx2.fill();
ctx2.closePath();
ctx2.stroke();


//circulo baixo metade baixa
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'green';
ctx2.fillStyle = 'aqua';
ctx2.arc(150,290,50,1.5*Math.PI,0*Math.PI);
ctx2.stroke();

//circulo baixo metade baixa
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'green';
ctx2.fillStyle = 'aqua';
ctx2.arc(150,290,60,1*Math.PI,1.5*Math.PI);
ctx2.stroke();
//circulo meio
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'green';
ctx2.fillStyle = 'aqua';
ctx2.arc(150,150,60,1*Math.PI,0*Math.PI);
ctx2.stroke();
//circulo meio esuqerda
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'green';
ctx2.fillStyle = 'aqua';
ctx2.arc(150,150,80,1.75*Math.PI,2*Math.PI);
ctx2.stroke();

//circulo meio esuqerda
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'green';
ctx2.fillStyle = 'aqua';
ctx2.arc(150,150,80,1*Math.PI,1.25*Math.PI);
ctx2.stroke();