import './global';
import { App } from 'vue';

export * from './components';

const install = (app: App<Element>) => {
  if (!app) return;
};

export default install;
