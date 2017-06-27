const sectroMeta = {}

// allowed concept connections
sectroMeta.goalArray = ['goal', 'actor',
  'plan', 'resource', 'threat', 'constraint', 'and', 'or'
]
sectroMeta.actorArray = ['goal']
sectroMeta.planArray = ['resource', 'threat', 'goal', 'constraint', 'and', 'or']
sectroMeta.resourceArray = ['threat', 'constraint',
  'plan', 'goal', 'and', 'or'
]
sectroMeta.threatArray = ['resource', 'plan', 'goal', 'constraint']

sectroMeta.constraintArray = ['threat', 'resource', 'plan', 'goal',
  'mechanism'
]
sectroMeta.mechanismArray = ['constraint']
sectroMeta.andArray = ['goal', 'plan', 'resource']
sectroMeta.orArray = sectroMeta.andArray

module.exports = sectroMeta
