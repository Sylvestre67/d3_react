import * as d3 from 'd3';
import './neuron_pulse.css';

class NeuronalPulse{
	constructor(){
		this.d3 = d3;
	}

	draw(config,element,data){

		let d3          = this.d3,
			margins     = config.margin,
			full_width  = element.offsetWidth,
			full_height = element.parentElement.offsetHeight,
			width       = full_width - margins['left'] - margins['right'],
			height      = full_height - margins['top'] - margins['bottom'];

		d3.select(element).select('svg').remove();

		let x = d3.scaleLinear()
			.domain(d3.extent(data, function(d) { return d.x; }))
			.rangeRound([0, width]);

		let y = d3.scaleLinear()
			.domain(d3.extent(data, function(d) { return d.y; }))
			.rangeRound([height, 0]);

		let line = d3.line()
			.x(function(d) { return x(d.x); })
			.y(function(d) { return y(d.y); })
			.curve(d3.curveBundle.beta(1));

		let svg = d3.select(element)
			.append('svg')
			.attr('width', width)
			.attr('height', height)
			.attr('class','pulse-svg');

		let g = svg.append('g')
			.attr('transform', 'translate(' + margins['left'] + ',' + margins['top'] + ')');

		g.append('path')
			.datum(data)
			.attr('fill', 'none')
			.attr('stroke', 'steelblue')
			.attr('stroke-linejoin', 'round')
			.attr('stroke-linecap', 'round')
			.attr('stroke-width', 3)
			.attr('d', line);

		// TODO: Check why the gradient does not work on Safari, Firefox.
		// In the meantime, dropped the gradient for a plain white.
		let gradient = svg.append('defs')
			.append('linearGradient')
			.attr('id', 'gradient')
			.attr('x1', '0%')
			.attr('y1', '100%')
			.attr('x2', '100%')
			.attr('y2', '100%');

		gradient.append('stop')
			.attr('offset', '98%')
			.attr('stop-color','white')
			.attr('stop-opacity', 1);

		gradient.append('stop')
			.attr('offset', '100%')
			.attr('stop-color','white')
			.attr('stop-opacity', 0);


		let upfrontMask = svg.append('rect')
			.attr('transform','translate(0,0)')
			.attr('width', width)
			.attr('height', height)
			.style('fill','white');

		upfrontMask.transition().duration(1000).ease(d3.easeLinear)
			.attr('transform','translate(' + width + ',0)');

		let backWardMask = svg.append('rect')
			.attr('transform','translate(' + -width + ',0)')
			.attr('width',width)
			.attr('height',height)
			.style('fill','white')
			//.style('fill','url(#gradient)')
			.transition().delay(50).duration(1000).ease(d3.easeLinear)
			.attr('transform','translate(0,0)');

		backWardMask.transition().delay(20).duration(20).ease(d3.easeLinear).attr('width',width + 50);

		svg.append('circle')
			.attr('transform','translate(' + margins['left'] + ',' +  y(-70) + ')')
			.attr('r',0)
			.attr('fill', 'steelblue')
			.attr('class','blink')
			.transition().delay(1050).duration(20).ease(d3.easeLinear).attr('r',4);

	}
}
export default NeuronalPulse;


