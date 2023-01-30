import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import SafeComponent from './SafeComponent';
import './index.scss';
import HomeContent from './HomeContent';

const App = () => (
	<>
		<Header />
		<div className="m-10 text-3xl mx-auto max-w-6xl">
			<p>Home page content</p>
			<HomeContent />
		</div>
		<Footer />
	</>
);
ReactDOM.render(<App />, document.getElementById('app'));
