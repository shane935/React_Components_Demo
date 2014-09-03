'use strict';

describe('Column', function () {
  var Column, component;

  beforeEach(function () {
    Column = require('../../../src/scripts/components/Column.jsx');
    component = Column();
  });

  it('should create a new instance of Column', function () {
    expect(component).toBeDefined();
  });
});
