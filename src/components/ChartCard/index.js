import React, {Component} from 'react';
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import ChartSelectorService from '../../chart_engine/chart_selector.service';

import './style.scss';

/**
 * The main App Bar handling global navigation.
 */
class ChartCard extends Component {
	constructor(props){
		super(props);
		this.chartSelector = new ChartSelectorService();
	}

	componentDidMount(){
		let chart = this.chartSelector.getChart(this.props.chartName);
		chart.draw(this.props.chartConfig, this.chartElement, this.props.chartData);

		setInterval(() => {
			//chart.draw(this.props.chartConfig, this.chartElement, this.props.chartData);
		},2000)
	}

	render() {
		return <Card>
			<CardHeader
				title={this.props.chartTitle}
				subtitle={this.props.chartSubTitle}
			/>
			<CardMedia
				mediaStyle={{'height':'300px','position':'relative'}}
				children={<div ref={(div) => { this.chartElement = div; }} id="chart-wrapper"></div>}>
			</CardMedia>
			<CardText>
				{ this.props.chartText }
			</CardText>
		</Card>
	}
}

export default ChartCard;
