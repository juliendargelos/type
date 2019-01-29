exports.defineTags = function(dictionary) {
  const augmentparams = {
    mustHaveValue: false,
    mustNotHaveDescription: true,
    canHaveType: false,
    canHaveName: false,
    onTagged: (doclet, tag) => {
      if(!doclet.augmentsparams) doclet.augmentsparams = []
      var [name, offset] = (tag.value || '').split(':')
      if(!name) name = doclet.augments && doclet.augments[0]
      if(!name) throw '@augments, @extends, @augmentsparams or @extendsparams must have a value.'
      doclet.augmentsparams.push({name, offset: parseInt(offset, 10) || 0})
    }
  }

  dictionary.defineTag('augmentsparams', augmentparams)
  dictionary.defineTag('extendsparams', augmentparams)
}

exports.handlers = {
  processingComplete: ({doclets}) => {
    const subjects = {}
    const augmented = {}
    var count = 0

    doclets.forEach(function (doclet) {
      if(doclet.params) {
        if(doclet.params.length) {
          subjects[doclet.longname] = doclet;
        }
      }

      if(doclet.augmentsparams && doclet.augmentsparams.length) {
        augmented[doclet.longname] = doclet;
      }
    })

    while(Object.keys(augmented).length !== count) {
      count = Object.keys(augmented).length;
      Object.keys(augmented).forEach(name => {
        var doclet = augmented[name];

        if(doclet.augmentsparams.some(augment => (
          augment.name !== name &&
          augmented[augment.name]
        ))) {
          return
        }

        if(!doclet.params) doclet.params = []

        ;[...doclet.augmentsparams].reverse().forEach(augment => {
          if(
            augment.name === name ||
            !subjects[augment.name] ||
            !subjects[augment.name].params
          ) {
            return
          }

          ;[...subjects[augment.name].params].reverse().forEach(augmentedParam => {
            if(doclet.params[augmentedParam.name]) return
            const param = {...augmentedParam}
            param.inherited = param.inherited || augment.name
            doclet.params.splice(augment.offset, 0, param)
          })
        })

        delete augmented[name];
      })
    }
  }
}
