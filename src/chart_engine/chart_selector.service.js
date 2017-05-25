import NeuronPulse from './neuron_pulse';
import LineChart   from './line_chart';

class ChartSelectorService {

	getChart(name){
		let chart;
		switch(name){
			case "neuronPulse":
				chart = new NeuronPulse();
				return chart;
			case "lineChart":
				chart = new LineChart();
				return chart;
			default:
				chart = null;
				throw('Chart not found. Please adjust the name of the chart.');
				return chart
		}
	}
}

export default ChartSelectorService;
