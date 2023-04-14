import React, {useEffect} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import About from '../../Components/About/About';
import Cart from '../../Components/Cart/Cart';
import Catalog from '../../Components/Catalog/Catalog';
import Contacts from '../../Components/Contacts/Contacts';
import IndexLoaded from '../../Components/Index-loaded/IndexLoaded';
import NotFound from '../../Components/NotFound/NotFound';
import {useDispatch} from "react-redux";
import {getProducts} from "../../store/productsSlice";
import InfoCard from "../../Components/InfoCard/InfoCard";

function Main() {
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts())
	}, [location])

	return (
		<Routes>
			<Route path='/' element={<IndexLoaded />} />
			<Route path='/about' element={<About />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/Catalog' element={<Catalog />} />
			<Route path='/Catalog/id#' element={<InfoCard />} />
			<Route path='/Contacts' element={<Contacts />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default Main;
