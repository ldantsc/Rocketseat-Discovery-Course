## Background

- Define um fundo para nosso elemento
- Sua área de atuação é a caixa toda
- Por padrão, é transparente


## Exemplos

- Usar cores solidas
- Usar imagens
- Controlar
    - a posição das imagens
    - se elas se repetem ou não
    - o tamanho delas na caixa
- Usar cor e imagem juntas
- Usar cor gradiente


```css

div {   
    background-color: rgb();
    background-image: url();
    
    /*Por padrão a imagem vai se repetir e podemos modificar essa opção usando a propriedade*/
    /* Podedmos usar 2 valores: horizontal | vertical */
    background-repeat: no-repeat; /* repeat-x; repeat-y; repeat; space; round; no-repeat; */
    
    /*Para mudar a posição da imagem do background*/
    background-position: center; /*top; bottom; left;...*/
    
    /*Para mudar o tamanho da imagem do background*/
    /* Podemos usar 2 valores, o primeiro é para a largura da imagem e o segundo é para a altura */
    background-size: contain; /*cover; contain;*/
    
    /*A propriedade background-origin é quem define o ponto de origem de uma imagem específica.*/
    background-origin: content-box; /* border-box; padding-box; content-box; */
    
    /*O background-clip define se a cor ou imagem do background iniciam debaixo de sua área de borda, preenchimento ou conteúdo.*/
    background-clip: content-box; /* border-box; padding-box; content-box; text; */
    
    /*A propriedade background-attachment determina se a posição da imagem vai ser fixa ou se vai rolar junto com o conteúdo.*/
    background-attachment: fixed; /* scroll; fixed; local;  */

    /*Shorthand*/
    background: rgb() url() no-repeat right top / 50px border-box content-box fixed;

    /*linear-gradient() é a função usada para criar gradient linear com o CSS.  */
    background: linear-gradient(18deg, red, yellow);
    
    /*radial-gradient() é a função usada para criar gradient circular.*/
    background: radial-gradient(green, red, yellow);
    background: radial-gradient(rgb(255,255,0,0), rgba(255,0,0,0.2));
}


```