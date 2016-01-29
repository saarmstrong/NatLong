/* tslint:disable:no-unused-variable typedef */
import { Component } from 'angular2/core';
import {
  afterEach,
  beforeEach,
  describe,
  fdescribe,
  xdescribe,
  expect,
  it,
  fit,
  xit,
  beforeEachProviders,
  injectAsync,
  TestComponentBuilder
} from 'angular2/testing';

import { AuthService } from 'modules/auth/auth-service';
import { ProjectService } from 'modules/project/project-service';
import { Projects } from './projects';


describe('Projects', () => {
  beforeEachProviders(() => [
    AuthService,
    ProjectService
  ]);

  it('should display a list of projects', injectAsync([TestComponentBuilder], tcb => {
    return new Promise(resolve => {
      tcb.createAsync(Projects)
        .then(fixture => {
          fixture.detectChanges();
          let compiled = fixture.nativeElement;

          return fixture.componentInstance.loaded.then(() => {
            fixture.detectChanges();
            expect(compiled.querySelectorAll('li').length).toBe(2);
            resolve();
          });
        });
    });
  }));
});
