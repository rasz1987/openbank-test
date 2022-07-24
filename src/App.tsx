import {
	BrowserRouter,
	Route,
	Routes
} from 'react-router-dom';
import { FC } from 'react';
import routes from './Routes'

const App: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				{
					routes.map((ele, i) => (
						<Route
							key={i}
							path={ele.url}
							element={ele.component}
						/>
					))
				}
			</Routes>
		</BrowserRouter>
	);
};

export default App;