'use strict'

const printChat = require('../core/printChat.js')
const addEdge = require('../core/addEdge.js')

module.exports = function addComponent (
  cy,
  srcNode,
  trgNode,
  srcNodeCpt,
  trgNodeCpt
) {

    switch (true) {
      case ((srcNodeCpt === 'goal' || srcNodeCpt === 'plan') &&
       trgNodeCpt === 'resource'):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'creates')
        break
      case (srcNodeCpt === 'resource' &&
      (trgNodeCpt === 'goal' ||trgNodeCpt === 'plan')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'requires')
        break
      case (srcNodeCpt === 'constraint' &&
      (trgNodeCpt === 'goal' || trgNodeCpt === 'plan' || trgNodeCpt === 'resource')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'restricts')
        break
      case (srcNodeCpt === 'threat' &&
      (trgNodeCpt === 'goal' || trgNodeCpt === 'plan' || trgNodeCpt === 'resource')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'impacts')
        break
      case (srcNodeCpt === 'mechanism' && trgNodeCpt === 'constraint'):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'implements')
      case (srcNodeCpt === 'constraint' && trgNodeCpt === 'threat'):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'mitigates')
        break
      //default edge towards AND / OR
      case (srcNodeCpt === 'goal' && (trgNodeCpt === 'and' || trgNodeCpt === 'or')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, '')
        break
      case (srcNodeCpt === 'resource' && (trgNodeCpt === 'and' || trgNodeCpt === 'or')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, '')
        break
      case (srcNodeCpt === 'mechanism' && (trgNodeCpt === 'and' || trgNodeCpt === 'or')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, '')
        break
      //default edge starting from AND / OR
      case (srcNodeCpt === 'and' &&
      (trgNodeCpt === 'goal' || trgNodeCpt === 'resource' || trgNodeCpt === 'plan'
      || trgNodeCpt === 'mechanism')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, '')
        break
      case (srcNodeCpt === 'or' &&
      (trgNodeCpt === 'goal' || trgNodeCpt === 'resource' || trgNodeCpt === 'plan'
      || trgNodeCpt === 'mechanism')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, '')
        break
      default:
        printChat(`Edge from ${srcNodeCpt} to ${trgNodeCpt}\nnot allowed!`)
    }

}
