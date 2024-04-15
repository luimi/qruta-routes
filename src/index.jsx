import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import Parse from 'parse';

const root = createRoot(document.getElementById('app'));
Parse.initialize(process.env.REACT_APP_APPID);
Parse.serverURL = process.env.REACT_APP_SERVER;
root.render(<StrictMode><App /></StrictMode>);
