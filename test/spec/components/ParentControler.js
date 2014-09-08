'use strict';

describe('ParentControler', function () {
  var ParentControler, component;

  beforeEach(function () {
    ParentControler = require('../../../src/scripts/components/ParentControler.jsx');
    component = ParentControler();
  });

  it('should create a new instance of ParentControler', function () {
    expect(component).toBeDefined();
  });
});
