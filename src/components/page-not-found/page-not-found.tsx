import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-not-found',
})
export class PageNotFound {

  render() {
    return (
      <div>
        <p>
          Page Not Found (404)
        </p>
      </div>
    );
  }
}
