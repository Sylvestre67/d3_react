import React, {Component} from 'react';
import './style.css';

import AppBar from 'material-ui/AppBar';

/**
 * The main App Bar handling global navigation.
 */
class TopNavBar extends Component {
	render() {
		return <div className="top-nav">
				<AppBar title="D3" iconStyleLeft={{'display': 'none'}} />
			</div>
	}
}

export default TopNavBar;