import * as React from 'react';
import * as ReactDom from 'react-dom';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import Convention from './components/Convention';
import { IConventionProps } from './components/IConventionProps';

export interface IConventionWebPartProps {
  description: string;
}

export default class ConventionWebPart extends BaseClientSideWebPart<IConventionWebPartProps> {


  public render(): void {
    const element: React.ReactElement<IConventionProps> = React.createElement(
      Convention,
    );

    ReactDom.render(element, this.domElement);
  }

  
  
}
