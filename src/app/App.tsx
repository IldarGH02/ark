import React, {Suspense} from 'react';
import { Provider as ReduxProvider } from "react-redux"

import './style/index.scss'
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import {useAppSelector} from "../features/hooks";
import {MainRouting} from "../pages/mainRouting";

function App() {
    return (
          <div className='appWrapper'>
              <ReduxProvider store={store}>
                  <BrowserRouter>
                      <Suspense fallback='Загрузка...'>
                          <MainRouting/>
                      </Suspense>
                  </BrowserRouter>
              </ReduxProvider>
          </div>
    );
}

export default App;
