class EmployeeTile extends HTMLElement {
   constructor() {
      super();

      this.innerHTML = `<style>h3 {color:coral} </style><h3>${this.getAttribute(
         "name"
      )}</h3>`;

      /* this.innerHTML = `<h3>${this.getAttribute("name")}</h3>`; */

      /* this.innerHTML = `${this.getAttribute("name")}`; */

      /* this.innerHTML = `Milton Chandradas`; */
   }
}

window.customElements.define("employee-tile", EmployeeTile);
