class CenterHtml extends HTMLElement{
    connectCallback(){
        this.innerHTML = `<div style=text-align:center">${this.innerHTML}</div>`;
    }
}

customElements.define("x-center", CenterHtml);