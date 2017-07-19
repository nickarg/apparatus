'use strict'

const load = require('./src/core/load.js')
const initialize = require('./src/initialize.js')
const cyOptions = require('./src/core/cyOptions.js')

const template = '../../graphs/modelTemplate.js'
const testGraph = '../../graphs/implementation/smartHome.js'

let cy = {}

<<<<<<< HEAD
// require design-state Models
const addDgnStateEdge = require('./src/design-state/addDgnStateEdge.js')
const dgnState = require('./src/design-state/dgnState.js')

// reguire implementation modules
const addImpEdge = require('./src/implementation/addImpEdge.js')
const imp = require('./src/implementation/implementation.js')

// require implementation-state modules
const addImpStateEdge = require('./src/implementation-state/addImpStateEdge.js')
const impState = require('./src/implementation-state/impState.js')

// require sectro modules
const addSectroComponent = require('./src/sectro/addSectroComponent.js')

// configuration for the graphs style
const graphStyle = require(`./style/graphStyle.js`)
// require the initial graph file
let graphModel = require(`./graphs/implementation/smartHome.js`)

// setting up the graph container
let cy = cytoscape({
  container: document.getElementById('graph-container'),
  autounselectify: true,
  elements: graphModel.elements, // loads the elements object of the graph
  style: graphStyle.style
})

// graph layout
cy.layout({
  name: 'cose'
})

let selectedNode = ''
let selectedEdge = ''
let srcNode = ''
let trgNode = ''
let srcNodeCpt = ''
let trgNodeCpt = ''

// initial label render
cy.nodes().addClass('label-nodes')
cy.edges().addClass('label-edges')

// cy.on does stuff when intrecting with the graph

// do stuff when tapping on node
cy.on('tap', 'node', selection => {
  // removes previous selections
  cy.elements().removeClass('selection')
  cy.elements().removeClass('attention')
  cy.elements().removeClass('protect')
  selectedNode = selection.target[0]
  // nodeInfo(selectedNode) // global module
  selectedNode.addClass('selection')
  srcNode = trgNode // second selection
  trgNode = selectedNode.data().id
  srcNodeCpt = trgNodeCpt // second selection
  trgNodeCpt = selectedNode.data().info.concept
  selectedEdge = '' // clear token
  totalNodes(cy) // global module
  editNode.removeElement() // remove the edit node element
})
// do stuff when tapping on an edge
cy.on('tap', 'edge', selection => {
  // removes previous selections
  cy.elements().removeClass('selection')
  cy.elements().removeClass('attention')
  cy.elements().removeClass('protect')
  selection.target.addClass('selection')
  selectedNode = '' // clear token
  selectedEdge = selection.target[0]
  totalNodes(cy) // global module
  editNode.removeElement() // remove the edit node element
})
// do stuff when tapping the stage
cy.on('tap', selection => {
  // checks if only the stage was clicked
  if (selection.target === cy) {
    // removes previous selections
    cy.elements().removeClass('faded')
    cy.elements().removeClass('selection')
    cy.elements().removeClass('attention')
    cy.elements().removeClass('protect')
    // clear tokens
    document.getElementById('module-group').selectedIndex = ''
    document.getElementById('selection-id').selectedIndex = ''
    selectedNode = ''
    selectedEdge = ''
    totalNodes(cy) // global module
    editNode.removeElement() // remove the edit node element
  }
})
// right clicking
cy.on('cxttapend', 'node', selection => {
  selectedNode = selection.target[0]
  editNode.formNode(selectedNode) // global module
})
// do stuff when hovering over a node
cy.on('mouseover', 'node', event => {
  hoverNodeInfo(event.target[0]) // global module
})
// do stuff when hovering out of a node
cy.on('mouseout', 'node', event => {
  // hides the hover container
  document.getElementById('container-node-id').style.display = 'none'
})

// create the paths of each phase
const dgnPath = 'design.html'
const dgnStatePath = 'design-state.html'
const impPath = 'implementation.html'
const impStatePath = 'implementation-state.html'
const sectroPath = 'sectro.html'
<<<<<<< HEAD
// store the last word of the window path to make it cross plaform
// blame chromium and its Posix paths on windows for this ugliness
const pathLocation = (window.location.pathname).split('/').pop()
=======

// store the last word of the window path to make it cross plaform
// blame chromium and its Posix paths on windows for this ugliness
const pathLocation = window.location.pathname.split('/').pop()
>>>>>>> acdd0cdea08a5861ed3bbdb9e4c8a4f385a08069

// here we load the buttons for each phase
=======
// loads the empty template
const newGraph = () => {
  cyOptions(cy, template)
  initialize(cy.out)
}
// loads the debugging graph
const debugGraph = () => {
  cyOptions(cy, testGraph)
  initialize(cy.out)
}
>>>>>>> upstream/master

// TODO move it to different modules
// creates the option menu on startup
// the element is removed on selection
const start = () => {
  const graph = document.getElementById('graph-container')
  const wrapper = document.createElement('wrapper')
  wrapper.id = 'wrapper-id'
  wrapper.className = 'wrapper'
  wrapper.textContent = 'select'

  const buttonNew = document.createElement('button')
  buttonNew.id = 'new-id'
  buttonNew.className = 'startButtons'
  buttonNew.type = 'button'
  buttonNew.value = 'new'
  buttonNew.textContent = 'new graph'

  const buttonLoad = document.createElement('button')
  buttonLoad.id = 'load-id'
  buttonLoad.className = 'startButtons'
  buttonLoad.type = 'button'
  buttonLoad.value = 'load'
  buttonLoad.textContent = 'load graph'

  const buttonDebug = document.createElement('button')
  buttonDebug.id = 'debug-id'
  buttonDebug.className = 'startButtons'
  buttonDebug.type = 'button'
  buttonDebug.value = 'debug'
  buttonDebug.textContent = 'bebug app'

  wrapper.appendChild(buttonNew)
  wrapper.appendChild(buttonLoad)
  wrapper.appendChild(buttonDebug)

  graph.appendChild(wrapper)

  buttonNew.addEventListener('click', () => {
    newGraph()
    graph.removeChild(wrapper)
  })
  buttonLoad.addEventListener('click', () => {
    load(cy)
    graph.removeChild(wrapper)
  })
  buttonDebug.addEventListener('click', () => {
    debugGraph(cy)
    graph.removeChild(wrapper)
  })
} else if (pathLocation === sectroPath) {
  // validate model
  // const buttonModelValidate = document.getElementById('model-validate-button')
  // buttonModelValidate.addEventListener('click', () => {
  //   impStateModelValidation(cy) // imp-state module
  // })
  // model overview
  // const buttonOverview = document.getElementById('overview-button')
  // buttonOverview.addEventListener('click', () => {
  //   impStateOverview(cy) // imp-state module
  // })
  // add implementation-state component
  const add = document.getElementById('add-component-id')
  add.addEventListener('change', (e) => {
    addSectroComponent(cy, e.target.value) // imp-state module
    // reset moduleGroup selection
    document.getElementById('add-component-id').selectedIndex = ''
  })
    totalNodes(cy) // global module
}

start()

/*
The default behavior of the app (asking to load graphs) can be annoying
when developing new features. To prevent that, uncomment the code below and
comment everything above it. It loads a hard coded graph every time you reload
the app.
*/

// uncomment the code below for debugging

// const testGraph = '../../graphs/implementation/smartHome.js'
// const initialize = require('./src/initialize.js')
// const cyOptions = require('./src/core/cyOptions.js')
//
// let cy = {}
// cyOptions(cy, testGraph) // uncomment for debugging
// initialize(cy.out) // uncomment for debugging
