let content = document.querySelector("[data-hoverblock=content]");
let fillableBlocks = document.querySelectorAll("[data-hoverblock=fillable-block]");
let fillerBlock= document.getElementById("filler-block");

let contentCoord = content.getBoundingClientRect();

content.addEventListener('mouseleave', function(){
    fillerBlock.style.top = '-' + content.offsetHeight + 'px';
})

fillableBlocks.forEach((item, index) => {
    item.addEventListener("mouseover", function(){
        //console.log(fillerBlock.childNodes);
        fillerBlock.childNodes[1].innerText = this.getAttribute('data-hoverblock-text');
        fillerBlock.style.top = this.offsetTop + 'px';
        fillerBlock.style.left = this.offsetLeft + 'px';
        fillerBlock.style.width = this.offsetWidth + 'px';
        fillerBlock.style.height = this.offsetHeight + 'px';
    })
})