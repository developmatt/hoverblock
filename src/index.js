import {fillerBlockStyle, hoverBlockContent} from './components';

window.onload = function(){
    let fillerBlock = document.createElement('div');
    fillerBlock.id = 'hoverblock-filler';
    fillerBlock.className = 'hoverblock-filler';
    fillerBlock.innerHTML = '<p id="hoverblock-filler-text" class="hoverblock-filler-text"></p>';
    fillerBlock.style = fillerBlockStyle;

    document.getElementsByClassName('hoverblock-content')[0].appendChild(fillerBlock);

    let content = document.querySelector("[data-hoverblock=content]");
    content.style = hoverBlockContent;

    let fillableBlocks = document.querySelectorAll("[data-hoverblock=fillable-block]");

    content.addEventListener('mouseleave', function(){
        fillerBlock.style.top = '-' + content.offsetHeight + 'px';
    })

    fillableBlocks.forEach((item, index) => {
        item.addEventListener("mouseover", function(){
            document.getElementById("hoverblock-filler-text").innerText = this.getAttribute('data-hoverblock-text');
            fillerBlock.style.top = this.offsetTop + 'px';
            fillerBlock.style.left = this.offsetLeft + 'px';
            fillerBlock.style.width = this.offsetWidth + 'px';
            fillerBlock.style.height = this.offsetHeight + 'px';
        })
    })
}