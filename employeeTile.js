const template = document.createElement("template");
template.innerHTML = `
    <style>
        .tile {
            font-family: 'Arial', sans-serif;
            background: #d3d3d3;
            width: 500px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 10px;
            margin-bottom: 15px;
            border-bottom: darkorchid 5px solid;
        }  

        .tile img {
            width: 100%;
        }

        .tile button {
            cursor: pointer;
            background: darkorchid;
            color: #fff;
            border: 0;
            border-radius: 5px;
            padding: 5px 10px;    
        }
    </style>
    <div class="tile">
        <img />
        <div>
            <h3></h3>
            <div class="info">
                <p><slot name="email"/></p>
                <p><slot name="phone"/></p>
            </div>
            <button id="toggle-info">Hide Info...</button>
        </div> 
    </div>
`;

class EmployeeTile extends HTMLElement {
   constructor() {
      super();

      this.showInfo = true;

      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
      this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
   }

   toggleInfo() {
      console.log("toggleInfo() is called...");

      this.showInfo = !this.showInfo;
      const info = this.shadowRoot.querySelector(".info");
      const toggleBtn = this.shadowRoot.querySelector("#toggle-info");

      if (this.showInfo) {
         info.style.display = "block";
         toggleBtn.innerText = "Hide Info...";
      } else {
         info.style.display = "none";
         toggleBtn.innerText = "Show Info...";
      }
   }

   connectedCallback() {
      this.shadowRoot
         .querySelector("#toggle-info")
         .addEventListener("click", () => this.toggleInfo());
   }

   disconnectedCallback() {
      this.shadowRoot.querySelector("#toggle-info").removeEventListener();
   }
}

window.customElements.define("employee-tile", EmployeeTile);
