import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Angular2AppApp} from '../app/angular2-app';

beforeEachProviders(() => [Angular2AppApp]);

describe('App: Angular2App', () => {
  it('should have the `defaultMeaning` as 42', inject([Angular2AppApp], (app: Angular2AppApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Angular2AppApp], (app: Angular2AppApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

