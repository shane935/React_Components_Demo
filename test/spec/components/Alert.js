'use strict';

describe('AlertComponent', function () {
  var AlertComponent, component;

  beforeEach(function () {
    AlertComponent = require('../../../src/scripts/components/AlertComponent.jsx');
    component = AlertComponent();
  });

  it('should create a new instance of AlertComponent', function () {
    expect(component).toBeDefined();
  });
});
