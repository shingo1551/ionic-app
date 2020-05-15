import { createStore } from "@stencil/store";

export const store = createStore({
  clicks: 0,
  seconds: 0,
  squaredClicks: 0
});

export const state = store.state;

store.onChange('clicks', value => {
  state.squaredClicks = value ** 2;
});
