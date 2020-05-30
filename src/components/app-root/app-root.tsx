import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Stencil App Starter</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
              <stencil-route component="page-not-found" />
            </stencil-route-switch>
          </stencil-router>
        </ion-content>
      </ion-app>
    );
  }
}
