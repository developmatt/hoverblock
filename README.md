# HoverBlock
![Hoverblock plugin example](https://i.postimg.cc/G2nB893T/hoverblock.gif)  

## Making it work:

- Install plugin from Github or NPMJS
`npm install --save developmatt/hoverblock-plugin` or `npm install hoverblock`

- Insert it's Hoverblock in your project script
`require('hoverblock');`

- Put the data attribute `data-hoverblock="content"` in the container who contains the elements to be "hoverblocked".

- Inform to plugin the blocks that will be hoverblocked putting in this the attribute `data-hoverblock=fillable-block`.;

- To add text to fillable blocks, put the attribute `data-hoverblock-text="Text to be shown"` in the element, and fill the value with the desired text.

  

## Styling elements

In this plugin we have two main elements and the both can be stylized. To do this, just use its class

-  `.hoverblock-filler`: This is the element who covers the blocks.

  

-  `.hoverblock-filler-text`: The text inside the block.