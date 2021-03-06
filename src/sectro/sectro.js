'use strict'

// design module

// require design modules
const sectroModelValidation = require('./sectroModelValidation.js')
const sectroOverview = require('./sectroOverview.js')
const addSectroComponent = require('./addSectroComponent.js')
const addSectroEdge = require('./addSectroEdge.js')

// require global modules
const totalNodes = require('../core/totalNodes.js')
const threatVerification = require('../core/threatVerification.js')
const moduleSelection = require('../core/moduleSelection.js')

// design nodes
const addNode = (cy, nodeCounter) => {
  const addNode = document.getElementById('add-component-id')
  addNode.addEventListener('click', e => {
      nodeCounter += 1
    addSectroComponent(cy, e.target.textContent, nodeCounter)
    cy.nodes().addClass('label-dsc')
    totalNodes(cy) // global module
  })
}
// add design edges
const addEdge = (cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) => {
  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', () => {
    addSectroEdge(cy, srcNode.out, trgNode.out, srcNodeCpt.out, trgNodeCpt.out)
    cy.edges().addClass('label-edges')
  })
}
// validate model
const validate = cy => {
  const buttonModelValidate = document.getElementById('model-validate-button')
  buttonModelValidate.addEventListener('click', () => {
    sectroModelValidation(cy)
  })
}
// verify threats
const threatVerify = cy => {
  const buttonThreatVefiry = document.getElementById('threat-verify-button')
  buttonThreatVefiry.addEventListener('click', () => {
    threatVerification(cy) // global module
  })
}
// model overview
const overview = cy => {
  const buttonOverview = document.getElementById('overview-button')
  buttonOverview.addEventListener('click', () => {
    sectroOverview(cy)
  })
}
// module selection
const moduleGroup = cy => {
  const group = document.getElementById('module-group')
  group.addEventListener('click', e => {
    moduleSelection(cy, e.target.textContent) // global module
  })
}

module.exports = {
  addNode: addNode,
  addEdge: addEdge,
  threatVerify: threatVerify,
  validate: validate,
  overview: overview,
  moduleGroup: moduleGroup
}
