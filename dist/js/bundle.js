const fillerBlockStyle="position: absolute;\n    background-color: rgba(0, 0, 0, 0.8);\n    top: -50%;\n    left: 50%;\n    transition: 0.3s;\n    padding: 0 10px;\n    box-sizing: border-box;",hoverBlockContent="position: absolute; overflow: hidden";export{fillerBlockStyle,hoverBlockContent};import{fillerBlockStyle,hoverBlockContent}from"./components";window.onload=function(){let e=document.createElement("div");e.id="hoverblock-filler",e.className="hoverblock-filler",e.innerHTML='<p id="hoverblock-filler-text" class="hoverblock-filler-text"></p>',e.style=fillerBlockStyle,document.getElementsByClassName("hoverblock-content")[0].appendChild(e);let t=document.querySelector("[data-hoverblock=content]");t.style=hoverBlockContent;let o=document.querySelectorAll("[data-hoverblock=fillable-block]");t.addEventListener("mouseleave",function(){e.style.top="-"+t.offsetHeight+"px"}),o.forEach((t,o)=>{t.addEventListener("mouseover",function(){document.getElementById("hoverblock-filler-text").innerText=this.getAttribute("data-hoverblock-text"),e.style.top=this.offsetTop+"px",e.style.left=this.offsetLeft+"px",e.style.width=this.offsetWidth+"px",e.style.height=this.offsetHeight+"px"})})};