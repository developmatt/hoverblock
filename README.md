# HoverBlock


## Making it work:
- Put the class `hoverblock-content` in the container who contains the element to be "hoverblocked".
 - Inform to the plugin the blocks that will be hoverblocked putting in this the attribute `data-hoverblock=fillable-block`. The element to be hoverblocked will receive `data-hoverblock="fillable-block"`;
 - To add text to fillable blocks, put the attribute `data-hoverblock-text` in the element, and fill the value with the desired text.

## Styling elements
In this plugin we have two main elements and the both can be stylized. To do this, just use its class
 
 - `.hoverblock-filler`:  This is the element who covers the blocks.

 - `.hoverblock-filler-text`: The text inside the block.