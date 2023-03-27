import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../Components/About/About';
import Cart from '../../Components/Cart/Cart';
import Catalog from '../../Components/Catalog/Catalog';
import Contacts from '../../Components/Contacts/Contacts';
import IndexLoaded from '../../Components/Index-loaded/IndexLoaded';
import NotFound from '../../Components/NotFound/NotFound';

function Main() {
	return (
		<Routes>
			<Route path='/' element={<IndexLoaded />} />
			<Route path='/about' element={<About />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/Catalog' element={<Catalog />} />
			<Route path='/Contacts' element={<Contacts />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default Main;
