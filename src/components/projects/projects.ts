import { NgFor } from 'angular2/common';
import { Component, View } from 'angular2/core';
import { ProjectService } from '../../modules/project/project-service';

const styles: string = require('./projects.scss');
const template: string = require('./projects.html');


@Component({
  selector: 'projects',
  viewProviders: [
    ProjectService
  ]
})

@View({
  directives: [
    NgFor
  ],
  styles: [styles],
  template
})

export class Projects {
  loaded: Promise<any>;

  constructor(public projects: ProjectService) {
    this.loaded = projects.fetchProjects(1234);
  }
}