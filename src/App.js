import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg'

import './App.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
// import Product from './components/Product'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'


function App() {
	return (
		<>
			<Navbar />
			<ProductList />
			<Details />
			<Cart />
			<Default />
		</>
	);
}

export default App;
