import React from 'react';
import AppHeader from '../component/Appbar/Appbar';
import ProductNavbar from '../component/productNav/ProductNavBar';
import { Grid } from '@material-ui/core';
import Ribbon from '../component/ribbon/Ribbon';
import Hero from '../sections/iMac_hero/Hero';
const Home = () => {
	return (
		<React.Fragment>
			<AppHeader />
			<ProductNavbar />
			<Grid container component='main' sx={{ width: '100%' }}>
				<Ribbon />
				<Hero />
			</Grid>
		</React.Fragment>
	);
};

export default Home;
