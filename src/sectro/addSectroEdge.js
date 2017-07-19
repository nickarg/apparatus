'use strict'

const printChat = require('../core/printChat.js')
const addEdge = require('../core/addEdge.js')

module.exports = function addComponent (
  cy,
  srcNode,
  trgNode,
  srcNodeCpt,
  trgNodeCpt,
  e
  // console.log
) {
  if (e === 'connection') {
    switch (true) {
      /*
      * Sectro shit
      */
      case (srcNodeCpt === 'threat' && (trgNodeCpt === 'resource' ||
      trgNodeCpt === 'goal' || trgNodeCpt === 'plan')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'impacts')
        break
      // mitigates(SC,T)
      case (srcNodeCpt === 'security constraint' && trgNodeCpt === 'threat'):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'mitigates')
        break
      //  exploits(T,V)
      case (srcNodeCpt === 'threat' &&  trgNodeCpt === 'vulnerability'):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'exploits')
        break
      //  restricts(SC,R|G|VR|PI|IN|CS)
      case (srcNodeCpt === 'security constraint' && (trgNodeCpt === 'resource' ||
      trgNodeCpt === 'goal' || trgNodeCpt === 'plan')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'restricts')
        break

      //  protects(SM,V)
      case (srcNodeCpt === 'security mechanism' && trgNodeCpt === 'vulnerability'):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'protects')
        break
      //  requires(R|VR|PI|IN,CS|R|VR|IN|PI)
      case ((srcNodeCpt === 'resource' || srcNodeCpt === 'goal' ||
      srcNodeCpt === 'plan') && (trgNodeCpt === 'resource')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'requires')
        break
      default:
        printChat(`${srcNodeCpt} -> ${trgNodeCpt}\nnot allowed 😔`)
    }
  }
  // Special case for owns relationship (Clashes with manages)
  else if (e === 'owns') {
    switch (true) {
      //  owns(CA,CS|R)
      case (srcNodeCpt === 'cloud actor' && (trgNodeCpt === 'cloud service' ||
      trgNodeCpt === 'resource')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'owns')
        break
      case (srcNodeCpt === 'cloud actor' && (trgNodeCpt === 'virtual resource' ||
      trgNodeCpt === 'physical infrastructure' || trgNodeCpt === 'infrastructure node')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'owns')
        break
      default:
        printChat(`${srcNodeCpt} -> ${trgNodeCpt}\nnot allowed 😔`)
    }
  }
  // Special case for manages relationship (Clashes with owns)
  else if (e === 'manages') {
    switch (true) {
      //  manages(CA,CS)
      case (srcNodeCpt === 'cloud actor' && trgNodeCpt === 'cloud service'):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'manages')
        break
      default:
        printChat(`${srcNodeCpt} -> ${trgNodeCpt}\nnot allowed 😔`)
    }
  }
  // Special case for permeates relationship (clashes with requires)
  else if (e === 'permeates') {
    switch (true) {
      //  manages(CA,CS)
      case ((srcNodeCpt === 'virtual resource' || srcNodeCpt === 'infrastructure node') &&
      (trgNodeCpt === 'virtual resource' || trgNodeCpt === 'physical infrastructure' ||
      trgNodeCpt === 'infrastructure node')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'permeates')
        break
      default:
        printChat(`${srcNodeCpt} -> ${trgNodeCpt}\nnot allowed 😔`)
    }
  }
  // Special case for permeates relationship (clashes with requires)
  else if (e === 'composition') {
    switch (true) {
      //  composition(IN,PI)
      case (srcNodeCpt === 'infrastructure node' && trgNodeCpt === 'physical infrastructure'):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'composition')
        break
      //  composition(CS,CS)
      case (srcNodeCpt === 'cloud service' && trgNodeCpt === 'cloud service'):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'composition')
        break
      //  composition(G,G)
      case (srcNodeCpt === 'goal' && trgNodeCpt === 'goal'):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'composition')
        break
      //  composition(V,V)
      case (srcNodeCpt === 'vulnerability' && trgNodeCpt === 'vulnerability'):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'composition')
        break
      default:
        printChat(`${srcNodeCpt} -> ${trgNodeCpt}\nnot allowed 😔`)
    }
  }

}
