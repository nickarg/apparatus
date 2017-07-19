// // CSS style for the graphs
//
// const configGraph = require(`./configGraph.js`)
//
// const graphStyle = {}
//
// graphStyle.style = [{
//     selector: 'node',
//     style: {
//       // shape: 'ellipse',
//       'background-color': configGraph.gray,
//
//     }
//   }, {
//     selector: 'edge',
//     style: {
//       'curve-style': 'bezier',
//       'line-color': configGraph.gray,
//       'width': 2,
//     }
//   }, {
//   selector: '.label-nodes',
//   style: {
//     label: 'data(label)',
//     'text-valign': 'center',
//     'color': configGraph.white,
//     'text-outline-width': 2,
//     'text-outline-color': configGraph.black
//   }
// }, {
//   selector: '.label-edges',
//   style: {
//     label: 'data(label)',
//     'target-arrow-shape': 'triangle',
//     'target-arrow-color': configGraph.gray,
//     'color': configGraph.white,
//     'text-outline-width': 2,
//     'text-outline-color': configGraph.black
//     }
//   }, {
//     selector: '.faded',
//     style: {
//       'opacity': 0.25,
//       'text-opacity': 0
//     }
//   }, {
//     selector: '.selection',
//     style: {
//       'background-color': configGraph.blue,
//       'line-color': configGraph.blue,
//       label: 'data(label)'
//     }
//   }, {
//     selector: '.attention',
//     style: {
//       'background-color': configGraph.yellow
//     }
//   }, {
//     selector: '.protect',
//     style: {
//       'background-color': configGraph.lightBlue
//     }
//   }, {
//     selector: '.actor',
//     style: {
//       shape: 'ellipse',
//       'background-color': configGraph.magenta
//     }
//   }, {
//     selector: '.goal',
//     style: {
//       shape: 'roundrectangle',
//       'background-color': configGraph.green
//     }
//   }, {
//     selector: '.plan',
//     style: {
//       shape: 'hexagon',
//       'background-color': configGraph.blue
//     }
//   }, {
//     selector: '.resource',
//     style: {
//       shape: 'rectangle',
//       'background-color': configGraph.yellow
//     }
//   }, {
//     selector: '.mechanism',
//     style: {
//       shape: 'hexagon',
//       'background-color': configGraph.green
//     }
//   }, {
//     selector: '.constraint',
//     style: {
//       shape: 'octagon',
//       'background-color': configGraph.red
//     }
//   }, {
//     selector: '.threat',
//     style: {
//       shape: 'triangle',
//       'background-color': configGraph.orange
//     }
//   }, {
//     selector: '.and',
//     style: {
//       shape: 'diamond',
//       'background-color': configGraph.blue
//     }
//   }, {
//     selector: '.or',
//     style: {
//       shape: 'diamond',
//       'background-color': configGraph.blue
//     }
//   },
//   // declare edge shapes
//   {
//     selector: '.creates',
//     style: {
//       //'line-style': 'dashed'
//       label: 'creates'
//     }
//   },
//   {
//     selector: '.requires',
//     style: {
//       //'line-style': 'dashed'
//       label: 'requires'
//     }
//   }, {
//     selector: '.restricts',
//     style: {
//       //'line-style': 'dashed'
//        label: 'restricts',
//       // 'text-valign': 'bottom',
//       // 'source-arrow-color': configGraph.gray,
//       // 'source-arrow-shape': 'triangle',
//       // 'source-arrow-fill': 'filled'
//     }
//   }
// ]
//
// module.exports = graphStyle
