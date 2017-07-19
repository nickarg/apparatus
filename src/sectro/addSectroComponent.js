'use strict'

// add components in the graph

module.exports = function addSectroComponent (cy, component) {
  let lastNode = cy.nodes().length + 1

  switch (component) {
    case 'goal':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'goal'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      }).addClass('goal')
      break
    case 'actor':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'actor'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      }).addClass('actor')
      break
    case 'plan':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'plan'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      }).addClass('plan')
      break
    case 'resource':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'resource'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      }).addClass('resource')
      break
    case 'constraint':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            objective: '',
            concept: 'constraint'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      }).addClass('constraint')
      break
    case 'mechanism':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'mechanism'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      }).addClass('mechanism')
      break
    case 'threat':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'threat'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      }).addClass('threat')
      break
    case 'and':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'and'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      }).addClass('and')
      break
    case 'or':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'or'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      }).addClass('or')
      break
    default:
      console.error('error in addComponent.js')
  }
}
