import NeuronPulse from'./neuron_pulse';

class ChartSelectorService {

	getChart(name){
		let chart;
		switch(name){
			case "neuronPulse":
				chart = new NeuronPulse();
				return chart;
			default:
				chart = null;
				console.error('Chart not found. Please adjust the name of the chart.');
				return chart
		}
	}
}

export default ChartSelectorService;
