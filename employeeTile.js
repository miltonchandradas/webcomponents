class EmployeeTile extends HTMLElement {
   constructor() {
      super();
      this.innerHTML = `John Doe`;
   }
}

window.customElements.define("employee-tile", EmployeeTile);
