// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "field", "output" ]

  static values = {
    characterCount: Number
  }
  
  connect() {
    this.change()
  }

  change() {
    let value = this.fieldTarget.value.length
    this.outputTarget.textContent = `${value} Numbers!`
  }
}
