import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import TopNavBar from './components/TopNav/index';
import ChartCard from './components/ChartCard/index';

const neuronPulseConfig = { margin: { top: 0, right: 0, bottom: 0, left: 50 } };
const lineChartConfig = { margin: { top: 20, right: 50, bottom: 20, left: 50 } };

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					<TopNavBar />
					<div className="app-wrapper container">
						<div className="row">
							<div className="col">
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

						<div className="row">
							<div className="col-6">
								<ChartCard chartTitle="Temperature"
								           chartSubTitle="Average temperature over the last year."
								           chartText="It is getting defeinetely warmer !"
								           chartName="lineChart"
								           chartData = {[
									           {x:0,y:70},
									           {x:1,y:7},
									           {x:2,y:10},
									           {x:3,y:40},
									           {x:4.5,y:20},
									           {x:5,y:40},
									           {x:6,y:20},
									           {x:7,y:5},
									           {x:8.3,y:8},
									           {x:9,y:5},
									           {x:10,y:10}
								           ]}
								           chartConfig = {lineChartConfig}
								/>
							</div>
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
