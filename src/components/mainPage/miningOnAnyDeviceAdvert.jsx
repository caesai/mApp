import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class miningOnAnyDeviceAdvert extends Component {
	constructor(props) {
		super(props);		
		this.state = {
		};
	}
	
	render() {		
	    return <div class="miningOnAnyDeviceAdvert">
            <div class="miningOnAnyDeviceAdvert-title">
                Майнинг в&nbsp;браузере на&nbsp;любом устройстве
            </div>
            <div class="miningOnAnyDeviceAdvert-description">
                Больше не требуется покупать дорогостоящее оборудование{" "}<br />
                и тратить свое время на настройку майнеров.
            </div>
            <div class="miningOnAnyDeviceAdvert-devicesList devicesList">
                <div class="devicesList-title">
                    Доступно на всех устройствах:
                </div>
                <div class="devicesList-list">
                    <div class="devicesList-list-item _computer">
                        Компьютер
                    </div>
                    <div class="devicesList-list-item _phone">
                        Телефон
                    </div>
                    <div class="devicesList-list-item _tablet">
                        Планшет
                    </div>
                    <div class="devicesList-list-item _console">
                        Игровая приставка
                    </div>
                </div>
            </div>
            <div class="miningOnAnyDeviceAdvert-tagline">
                Больше устройств - больше доход!
            </div>
            <a class="miningOnAnyDeviceAdvert-more button _white _arrowRight">
                Подробнее
            </a>
        </div>;
	}
}

export default miningOnAnyDeviceAdvert;