'use strict';

describe('Grid', function () {
  var Grid, component;

  beforeEach(function () {
    Grid = require('../../../src/scripts/components/Grid.jsx');
    component = Grid();
  });

  it('should create a new instance of Grid', function () {
    expect(component).toBeDefined();
  });
});
