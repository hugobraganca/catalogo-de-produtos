import React, { Component } from 'react';
import {
  	ScrollView,
	StyleSheet
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

class ListaItens extends Component {

	constructor(props) {
		super(props);

		this.state = { listaItens: [] };
	}

	componentWillMount() {
		//requisição HTTP
		axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
			.then(response => { this.setState({ listaItens: response.data }); })
			.catch(() => { console.log('Erro ao recuperar os dados'); });
	}

	render() {
		return (
			<ScrollView style={styles.fundo}>
				{ this.state.listaItens.map(item =>  (<Itens key={item.titulo} item={item} />))}
			</ScrollView>
		);
	}
}
const styles = StyleSheet.create ({
	fundo: {
		backgroundColor: '#DDD'
	}
})

export default ListaItens;

