import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import TopNavBar from './components/TopNav/index';
import ChartCard from './components/ChartCard/index';

const neuronPulseConfig = { margin: { top: 0, right: 0, bottom: 0, left: 50 } };

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					<TopNavBar />
					<div className="app-wrapper container">
						<ChartCard chartTitle="Neuron Pulse"
						           chartSubTitle="A super duper nice chart !"
									chartText="Loreum Ipsum dolor sit emmet."
						           chartName="neuronPulse"
						           chartData = {[
							           {x:-2,y:-70},
							           {x:-1,y:-70},
							           {x:0,y:-70},
							           {x:1,y:-70},
							           {x:1.5,y:20},
							           {x:2,y:40},
							           {x:2.5,y:20},
							           {x:3,y:-85},
							           {x:3.3,y:-90},
							           {x:4,y:-75},
							           {x:5,y:-70},
							           {x:6,y:-70},
							           {x:7,y:-70},
							           {x:8,y:-70}
						           ]}
						           chartConfig = {neuronPulseConfig}
						/>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
