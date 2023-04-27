import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import Cart from './components/Cart'
import Default from './components/Default'
import Details from './components/Details'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'


function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/e-commerce-site-react" component={ProductList} />
				<Route path="/e-commerce-site-react/details" component={Details} />
				<Route path="/e-commerce-site-react/cart" component={Cart} />
				<Route component={Default} />
			</Switch>
			<Modal />
		</>
	);
}

export default App
