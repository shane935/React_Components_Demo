'use strict';

describe('GridComponent', function () {
  var GridComponent, component;

  beforeEach(function () {
    GridComponent = require('../../../src/scripts/components/GridComponent.jsx');
    component = GridComponent();
  });

  it('should create a new instance of GridComponent', function () {
    expect(component).toBeDefined();
  });
});
