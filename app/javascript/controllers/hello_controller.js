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
  static targets = [ "output", 'file' ]

  static values = {
    numberCount: Number,
    name: String
  }

  connect() {
    console.log(this.numberCountValue)
    console.log(this.nameValue)
    this.outputTarget.textContent = 'Hello, Team'
  }

  aler() {
    alert('text')
    this.fad()
  }

  fad() {
    alert('Hello from current Method')
  }
}
