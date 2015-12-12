import { NgFor } from 'angular2/common';
import { Component, View } from 'angular2/core';
import { ProjectService } from '../../modules/project/project-service';

const styles = require('!raw!autoprefixer!sass!./projects.scss');
const template = require('./projects.html');


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
