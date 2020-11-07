const template = document.createElement("template");
template.innerHTML = `
    <style>
        h3 {
            color: coral;
        }    
    </style>
    <div class="employee-tile">
        <h3></h3>
    </div>
`;

class EmployeeTile extends HTMLElement {
   constructor() {
      super();

      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");

      this.innerHTML = ``;
   }
}

window.customElements.define("employee-tile", EmployeeTile);
