'use strict'

const printChat = require('./printChat.js')

module.exports = function addComponent (cy, sourceNode, targetNode, sourceNodeConcept, targetNodeConcept) {
//   if (sourceNodeConcept === 'goal' || sourceNodeConcept === 'plan') {
//       if (targetNodeConcept === 'resource') {
//         cy.add({
//           group: 'edges',
//           data: {
//             id: `${sourceNode}${targetNode}`,
//             source: `${sourceNode}`,
//             target: `${targetNode}`
//           }
//         }).addClass('creates')
//       }
// }
//
//       if (sourceNodeConcept ==='constraint') {
//         if (targetNodeConcept === 'goal' || targetNodeConcept === 'plan' || targetNodeConcept === 'resource') {
//           cy.add({
//             group: 'edges',
//             data: {
//               id: `${sourceNode}${targetNode}`,
//               source: `${sourceNode}`,
//               target: `${targetNode}`
//             }
//           }).addClass('restricts')
//         }
// }

        // default:
          cy.add({
            group: 'edges',
            data: {
              id: `${sourceNode}${targetNode}`,
              source: `${sourceNode}`,
              target: `${targetNode}`
            }
          })
      //  }

  // if (sourceNodeConcept === 'data' && targetNodeConcept === 'asset') {
  //   cy.add({
  //     group: 'edges',
  //     data: {
  //       id: `${sourceNode}${targetNode}`,
  //       source: `${sourceNode}`,
  //       target: `${targetNode}`
  //     }
  //   }).addClass('test-edge')
  // }
  // cy.add({
  //   group: 'edges',
  //   data: {
  //     id: `${sourceNode}${targetNode}`,
  //     source: `${sourceNode}`,
  //     target: `${targetNode}`
  //   }
  // })
  printChat('edge added')
}
