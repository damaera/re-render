/* TypeScript file generated from RenderArray.re by genType. */
/* eslint-disable import/first */


import * as React from 'react';

// tslint:disable-next-line:no-var-requires
const RenderArrayBS = require('./RenderArray.bs');

// tslint:disable-next-line:interface-over-type-literal
export type Props<T1> = { readonly array: T1[]; readonly children: (_1:T1) => JSX.Element };

export const $$default: React.ComponentType<{ readonly array: any[]; readonly children: (_1:any) => JSX.Element }> = RenderArrayBS.default;

export default $$default;
