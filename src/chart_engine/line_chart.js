import * as d3 from 'd3';
import './line_chart.css';

class LineChart{
	constructor(){
		this.d3= d3;
	}

	draw(config,element,data){
		let d3          = this.d3,
			margins     = config.margin,
			full_width  = element.offsetWidth,
			full_height = element.parentElement.offsetHeight,
			width       = full_width -  margins['left'] - margins['right'],
			height      = full_height - margins['top']  - margins['bottom'];

		let y_domain = d3.extent(data,function(d){ return d.y; });
		let x_domain = d3.extent(data,function(d){ return d.x; });

		let x = d3.scaleLinear()
			.domain(x_domain)
			.rangeRound([0, width]);
		
		let y = d3.scaleLinear()
			.domain(y_domain)
			.rangeRound([height, 0]);

		let xAxis = d3.axisBottom(x)
			.tickSizeOuter([0]);

		let yAxis = d3.axisLeft(y)
			.tickSizeOuter([0])
			.tickArguments([5]);

		let line = d3.line()
			.x(function(d) { return x(d.x) })
			.y(function(d) { return y(d.y) });

		d3.select(element).select('svg').remove();

		let svg = d3.select(element)
			.append('svg')
			.attr('width', width)
			.attr('height', full_height)
			.attr('class','line-svg');

		let g = svg.append('g')
			.attr('transform', 'translate(' + margins['left'] + ',' + margins['top'] + ')');

		g.append('path')
			.attr('class','data-line')
			.datum(data)
			.attr('fill', 'none')
			.attr('stroke-linejoin', 'round')
			.attr('stroke-linecap', 'round')
			.attr('stroke-width', 2.5)
			.attr('d', line);

		let data_points = g.selectAll('.data-points')
			.data(data);

		let point = data_points.enter()
			.append('g')
			.attr('class','data-points')
			.attr('transform',function(d,i){
				return 'translate(' + x(d.x) + ',' + y(d.y) + ')';
			});

		point.append('circle').attr('r',5).attr('class',function(d,i){
			return (d.y == 0) ? 'null' : '';
		});

		g.append('g')
			.attr('class', 'axis axis--y')
			.call(yAxis)
			.append('text')
			.attr('class','axis-label')
			.attr('y', -19)
			.attr('dy', '0.71em')
			.attr('text-anchor', 'end')
			.text('Deg.');

		g.append('g')
			.attr('class', 'axis axis--x')
			.attr('transform', 'translate(0,' + height + ')')
			.call(xAxis)
			.append('text')
			.attr('dx',() => { return width - 50 + 'px'})
			.attr('dy', '2em')
			.attr('class','axis-label')
			.attr('text-anchor', 'end')
			.text('Days');

	}
}

export default LineChart;
