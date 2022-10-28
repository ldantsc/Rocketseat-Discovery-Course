# Cores

Usamos CSS para alterar cores do nosso documento.

## Tipos

* background-color (para caixas)
* color (para textos)
* border-color (para caixas)
* outros...

## Valores

Podemos definir valores por:

* palavra-chave (blue, transparent)
* hexadecimal (#990011)
* funções: rgb, rgba, hsl, hsla
------------------------------------------------------------------------------------------------
## Keyword named values

color: red;
color: green;
color: currentcolor;

## Hexadecimal

/*<hex-color> values 0-9 e A-F*/
color: #090;    /*RED, GREEN, BLUE*/
color: #009900;
color: #090a;   /*red, green, blue, alfa*/
color:#009900aa;

## RGB

RGB → Red, Green e Blue

/*<rgb()> values*/
color: rgb(34, 12, 64, 0.6)     /*0-255*/
color: rgba(34, 12, 64, 0.6)
or
color: rgba(34, 12, 64, 60%)

## HSL

HSL → Hue - Saturation - Lightness
/*<hsl()> values*/

color: hsl(180, 100%, 50%, 0.6) /*Hue - Saturation - Luminance*/
color: hsla(180, 100%, 50%, 60%)


## Global values

/*Global values*/
color: inheritr;    /*Herda a cor do elemento anterior*/
color: initial;     /*Volta a sua cor inicial*/
color: unset;       /*Pega a cor do contexto*/


**https://developer.mozilla.org/en-US/docs/Web/CSS/color_value**