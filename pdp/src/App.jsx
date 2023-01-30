import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import SafeComponent from './SafeComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.scss';
const Header = React.lazy(() => import('home/Header'));
const Footer = React.lazy(() => import('home/Footer'));
import PDPContent from './PDPContent';
const App = () => {
	const [showHeader, setShowHeader] = useState(false);
	return (
		<Router>
			<div className="text-3xl mx-auto max-w-6xl">
				<SafeComponent>
					<Suspense fallback={<div>Loading...</div>}>
						<Header />
					</Suspense>
				</SafeComponent>
				<div className="m-10 text-3xl mx-auto max-w-6xl">
		<Switch>
      <Route path='/product/:id' component={PDPContent}/>
    </Switch>
						{/* <PDPContent /> */}
				
				</div>
				<SafeComponent>
					<Suspense fallback={<div>Loading...</div>}>
						<Footer />
					</Suspense>
				</SafeComponent>
			</div>
		</Router>
	);
};
ReactDOM.render(<App />, document.getElementById('app'));
