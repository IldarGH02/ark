import React from 'react';
import { Provider as ReduxProvider } from "react-redux"

import {Navbar} from "../widgets/navbar";
import {Routing} from "../pages";
import {withProviders} from "./providers";
import './style/index.scss'
import {store} from "./store";

function App() {
  return (
      <div className='appWrapper'>
          <ReduxProvider store={store}>
              <Navbar/>
              <Routing/>
          </ReduxProvider>
      </div>
  );
}

export default withProviders(App);
