import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import ListaItens from './src/components/ListaItens';

export default class CatalogoDeProdutos extends Component {
  render() {
    return (
      <ListaItens />
      );
  }
}

AppRegistry.registerComponent('catalogoDeProdutos', () => CatalogoDeProdutos);