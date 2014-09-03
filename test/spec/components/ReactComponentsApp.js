'use strict';

describe('Main', function () {
  var ReactComponentsApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactComponentsApp = require('../../../src/scripts/components/ReactComponentsApp.jsx');
    component = ReactComponentsApp();
  });

  it('should create a new instance of ReactComponentsApp', function () {
    expect(component).toBeDefined();
  });
});
