/* TypeScript file generated from RenderList.re by genType. */
/* eslint-disable import/first */


import * as React from 'react';

// tslint:disable-next-line:no-var-requires
const RenderListBS = require('./RenderList.bs');

import {list} from '../src/ReasonPervasives.shim';

// tslint:disable-next-line:interface-over-type-literal
export type Props<T1> = { readonly children: (_1:T1) => JSX.Element; readonly list: list<T1> };

export const $$default: React.ComponentType<{ readonly children: (_1:any) => JSX.Element; readonly list: list<any> }> = RenderListBS.default;

export default $$default;
