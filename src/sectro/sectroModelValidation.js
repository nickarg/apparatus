'use strict'

const sectroMetamodel = require('./sectroSchema.js')
const printChat = require('../core/printChat.js')
// checks if the instance is correct

module.exports = function moduleValidation (cy) {
  // valid component connections
  const actorArray = sectroMetamodel.actorArray
  const goalArray = sectroMetamodel.goalArray
  const planArrayy = sectroMetamodel.planArray
  const resourceArray = sectroMetamodel.resourceArray
  const mechanismArray = sectroMetamodel.mechanismArray
  const constraintArray = sectroMetamodel.constraintArray
  const threatArray = sectroMetamodel.threatArray
  const andArray = sectroMetamodel.andArray
  const orArray = sectroMetamodel.orArray
  // decleration of arrays
  let result = '' // posted on the nodeInfo div
  let arrWrong = [] // stores wrong connection of nodes

  function componentValidation (cy, component, componentArray) {
    cy.nodes().map(node => {
      // checks if node is the desired component
      if (node.data().info.concept === component) {
        // stores the neighboring nodes of the component
        const neighborNodes = node.neighborhood().add(node)
        const neigborObject = neighborNodes.data().info.concept
        Object.keys(neigborObject).map(() => {
          // every neighbor node is added to the array arrWrong
          arrWrong.push(neigborObject)
          // if the neighbor is a valid connection it is removed from the array
          if (componentArray.includes(neigborObject) === true) {
            arrWrong.pop(neigborObject)
          }
        })
      }
    })

    result = `${arrWrong}`
    // if the string is empty, the module is correct
    if (result === '') {
      result = 'model instance is valid\n👍'
    } else {
      printChat(result)
    }
  }

  componentValidation(cy, 'actor', actorArray)
  componentValidation(cy, 'goal', goalArray)
  componentValidation(cy, 'plan', planArray)
  componentValidation(cy, 'resource', resourceArray)
  componentValidation(cy, 'constraint', constraintArray)
  componentValidation(cy, 'threat', threatArray)
  componentValidation(cy, 'mechanism', mechanismArray)
  componentValidation(cy, 'and', andArray)
  componentValidation(cy, 'or', orArray)

  printChat(result)
}
