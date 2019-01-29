exports.defineTags = function(dictionary) {
  const augmentparams = {
    mustHaveValue: false,
    mustNotHaveDescription: true,
    canHaveType: false,
    canHaveName: false,
    onTagged: (doclet, tag) => {
      if(!doclet.augmentsparams) doclet.augmentsparams = []
      const path = tag.value || (doclet.augments && doclet.augments[0])
      if(!path) throw '@augments, @extends, @augments-params or @extends-params must have a value.'
      doclet.augmentsparams.push(path)
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

        if(doclet.augmentsparams.some(augmentedName => (
          augmentedName !== name &&
          augmented[augmentedName]
        ))) {
          return
        }

        doclet.params = doclet.params || [];
        var params = {};
        doclet.params.forEach(param => { params[param.name] = param })

        ;[...doclet.augmentsparams].reverse().forEach(augmentedName => {
          if(
            augmentedName === name ||
            !subjects[augmentedName] ||
            !subjects[augmentedName].params
          ) {
            return
          }

          ;[...subjects[augmentedName].params].reverse().forEach(augmentedParam => {
            if(doclet.params[augmentedParam.name]) return
            const param = {...augmentedParam}
            param.inherited = param.inherited || augmentedName
            doclet.params.splice(0, 0, param)
            params[param.name] = param
          })
        })

        delete augmented[name];
      })
    }
  }
}
