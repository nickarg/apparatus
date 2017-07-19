'use strict'

const printChat = require('../core/printChat.js')
const dgnMetamodel = require('./sectroSchema.js')

module.exports = function overview (cy) {

  let result = ''

  const totalNodes = cy.elements().nodes().length
  result = `• total nodes: ${totalNodes}\n\n`

  let goalNode = 0
  let actorNode = 0
  let planNode = 0
  let resourceNode = 0
  let threarNode = 0
  let constraintNode = 0
  let mechanismNode = 0
  let andNode = 0
  let orNode = 0

  cy.nodes().map(node => {
    const nodeConcept = node.data().info.concept
    if (nodeConcept === 'goal') {
      goalNode += 1
    } else if (nodeConcept === 'actor') {
      actorNode += 1
    } else if (nodeConcept === 'plan') {
      planNode += 1
    } else if (nodeConcept === 'resource') {
      resourceNode += 1
    } else if (nodeConcept === 'threat') {
      threatNode += 1
    } else if (nodeConcept === 'constraint') {
      constraintNode += 1
    } else if (nodeConcept === 'mechanism') {
      mechanismNode += 1
    } else if (nodeConcept === 'and') {
      andNode += 1
    } else if (nodeConcept === 'or') {
      orNode += 1
    }
  })

  result = `${result}• goal nodes: ${goalNode}\n`
  result = `${result}• actor nodes: ${actorNode}\n`
  result = `${result}• plan nodes: ${planNode}\n`
  result = `${result}• resource nodes: ${resourceNode}\n`
  result = `${result}• threat nodes: ${threatNode}\n`
  result = `${result}• constraint nodes: ${constraintNode}\n`
  result = `${result}• mechanism nodes: ${mechanismNode}\n`
  result = `${result}• and nodes: ${andNode}\n`
  result = `${result}• or nodes: ${orNode}\n`

  printChat(result)
}
