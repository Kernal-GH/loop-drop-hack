var behave = require('dom-behavior')

var behaviors = {
  'slot': {
    selector: require('./slot/selector'),
    drag: require('./slot/drag'),
    fill: require('./slot/fill')
  },
  'editor': {
    raw: require('./editor/raw'),
    nodes: require('./editor/nodes'),
    sampleTrimmer: require('./editor/sample_trimmer'),
    modeSelector: require('./editor/mode_selector'),
    noteChooser: require('./editor/note_chooser'),
    param: require('./editor/param')
  },
  'deck': {
    selected: require('./deck/selected'),
    kits: require('./deck/kits'),
    control: require('./deck/control'),
    loopPosition: require('./deck/loop_position')
  },
  'project': require('./project'),
  'engine': require('./engine'),
  'window': {
    tempo: require('./window/tempo'),
    vu: require('./window/vu'),
    projectButtons: require('./window/project_buttons'),
    qwertyKeys: require('./window/qwerty_keys.js')
  },
  'soundbanks': require('./soundbanks')
}

module.exports = function(target){
  return behave(behaviors, target)
}
