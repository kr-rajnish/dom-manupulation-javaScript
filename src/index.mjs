import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Learning DOM manupulation</h1>`;

/*//simply we creating a div element
const div = document.createElement('div')
// console.log(div)
div.className = "main"
div.id = "mainId"
div.setAttribute("title","generated title")
div.style.backgroundColor = "green"
div.style.padding = "12px"
// div.innerHTML = "Rajnish Kumar Rai"
const addText = document.createTextNode("Rajnish Kumar Rai")
div.appendChild(addText)

document.body.appendChild(div)

console.log(document.getElementsByName('body'))
*/

//now we working with function to create some li under ul of class=language.

function addLanguage(language){
  const li = document.createElement('li')
  li.innerHTML = `${language}`
  document.querySelector('.language').appendChild(li)
}
addLanguage("python")
addLanguage("typeScript")
// hear we traverse the whole tree of node to add li node in last

//so we go with optimized way so that we not traverse to whole node every time

function addOptiLanguage(language){
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(language))
  document.querySelector('.language').appendChild(li)
}
addOptiLanguage("golang")


//how to edit dom node 
const secondLang = document.querySelector("li:nth-child(2)")
// secondLang.innerHTML = "Mojo" //but again it traverse the whole node
const newli = document.createElement('li')
newli.textContent = "Mojo"
secondLang.replaceWith(newli)

//Or we can edit like but above is good
const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML = '<li>TypeScript</li>'

// How to Remove the node
const lastLang = document.querySelector('li:last-child')
lastLang.remove()

