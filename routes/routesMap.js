let initRoutesMap = (router) => {

  let catalogArea = router.createArea('catalog');
  catalogArea.mapRoute('/catalog/:controller?/:action?/:id?');

  let commonArea = router.createArea('common');
  commonArea.mapRoute('/', {
    controller: 'home',
    action: 'index'
  });

  commonArea.mapRoute('/:controller?/:action?/:id?');
};

module.exports = initRoutesMap;