let initRoutesMap = (router) => {

  let catalogArea = router.createArea('catalog');
  catalogArea.mapRoute('/catalog/:controller?/:action?/:id?');

  let modelArea = router.createArea('model');
  modelArea.mapRoute('/model/:controller?/:action?/:id?');

  let commonArea = router.createArea('common');
  commonArea.mapRoute('/', {
    controller: 'master',
    action: 'index'
  });

  commonArea.mapRoute('/:controller?/:action?/:id?');
};

module.exports = initRoutesMap;