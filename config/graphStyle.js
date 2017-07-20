// CSS style for the graphs

const config = require(`./config.js`)

const graphStyle = {}

graphStyle.style = [{
  selector: 'node',
  style: {
    shape: 'ellipse',
    'background-color': config.white,
  }
}, {
  selector: 'edge',
  style: {
    'curve-style': 'bezier',
    'line-color': config.white,
    'width': 2
  }
}, {
  selector: '.faded',
  style: {
    'opacity': 0.25,
    'text-opacity': 0
  }
}, {
  selector: '.selection',
  style: {
    'border-color': config.white,
    'line-color': config.blue,
    'border-width': 6
  }
}, {
  selector: '.old-selection',
  style: {
    'border-color': config.white,
    'border-width': 3
  }
}, {
  selector: '.attention',
  style: {
    'background-color': config.yellow
  }
}, {
  selector: '.protect',
  style: {
    'background-color': config.cyan
  }
}, {
  selector: '.label-nodes',
  style: {
    label: 'data(label)',
    'text-valign': 'center',
    'color': config.white,
    'text-outline-width': 2,
    'text-outline-color': config.background
  }
}, {
  selector: '.label-edges',
  style: {
    label: 'data(label)',
    'target-arrow-shape': 'triangle',
    'target-arrow-color': config.white,
    'color': config.white,
    'text-outline-width': 2,
    'text-outline-color': config.background
  }
}, {
  selector: '.label-id',
  style: {
    label: 'data(id)',
    'text-valign': 'center',
    'color': config.white,
    'text-outline-width': 2,
    'text-outline-color': config.background
  }
}, {
  selector: '.label-dsc',
  style: {
    label: 'data(info.description)',
    'text-valign': 'center',
    'color': config.white,
    'text-outline-width': 2,
    'text-outline-color': config.background
  }
}, {
    selector: '.actor',
    style: {
      shape: 'ellipse',
      'background-color': config.magenta
    }
  }, {
    selector: '.goal',
    style: {
      shape: 'roundrectangle',
      'background-color': config.green
    }
  }, {
    selector: '.plan',
    style: {
      shape: 'hexagon',
      'background-color': config.blue
    }
  }, {
    selector: '.resource',
    style: {
      shape: 'rectangle',
      'background-color': config.yellow
    }
  }, {
    selector: '.mechanism',
    style: {
      shape: 'hexagon',
      'background-color': config.green
    }
  }, {
    selector: '.constraint',
    style: {
      shape: 'octagon',
      'background-color': config.red
    }
  }, {
    selector: '.threat',
    style: {
      shape: 'triangle',
      'background-color': config.orange
    }
  }, {
    selector: '.and',
    style: {
      shape: 'diamond',
      'background-color': config.blue
    }
  }, {
    selector: '.or',
    style: {
      shape: 'diamond',
      'background-color': config.blue
    }
  },
  // declare edge shapes
  {
    selector: '.standard',
    style: {
      //'line-style': 'dashed'
      label: ''
    }
  },
  {
    selector: '.creates',
    style: {
      //'line-style': 'dashed'
      label: 'creates'
    }
  },
  {
    selector: '.requires',
    style: {
      //'line-style': 'dashed'
      label: 'requires'
    }
  },
  {
    selector: '.restricts',
    style: {
      //'line-style': 'dashed'
       label: 'restricts'
    }
  },
  {
    selector: '.impacts',
    style: {
      label: 'impacts'
    }
  },
  {
    selector: '.implements',
    style: {
      label: 'impements'
    }
  },
  {
    selector: '.mitigates',
    style: {
      label: 'mitigates'
    }
  }]

module.exports = graphStyle
