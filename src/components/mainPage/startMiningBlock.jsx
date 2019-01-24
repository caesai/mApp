import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class startMiningBlock extends Component {
	constructor(props) {
		super(props);		
		this.state = {
		};
	}
	
	render() {
	    return <div class="startMiningBlock">
            <Link to="/mining/" class="startMiningBlock-button button _blue">
                Начать майнить
            </Link>
            <div class="startMiningBlock-description">
                Использование передовых технологий позволяет не&nbsp;устанавливая{" "}<br />
                никакого ПО майнить в&nbsp;браузере без&nbsp;потери эффективности!
            </div>
        </div>;
	}
}

export default startMiningBlock;