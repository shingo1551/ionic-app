import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

import { state } from '../../shared/store';

@Component({
  tag: 'app-profile',
})
export class AppProfile {
  @Prop() match: MatchResults;

  normalize() {
    const name = this.match.params.name;
    name ? name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase() : '';
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div>
          <p>
            Hello! My name is {this.normalize()}. My name was passed in
            through a route param!
          </p>
          <ion-button onClick={() => state.clicks++}>{state.clicks}</ion-button>
          <div>{JSON.stringify(state)}</div>
        </div>
      );
    }
  }
}
