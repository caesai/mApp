import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class blogPreview extends Component {
	constructor(props) {
		super(props);		
		this.state = {
		};
	}
	
	render() {
	    return <div class="blogPreview">
            <div class="blogPreview-title">
                Блог
            </div>
            <div class="blogPreview-list">
                <div class="blogPreview-list-item blogPreviewItem">
                    <div class="blogPreviewItem-image">
                        <img src="/static/tmp/images/test01.png"
                        srcSet="/static/tmp/images/test01@2x.png 2x,
                        /static/tmp/images/test01@3x.png 3x" />
                    </div>
                    <div class="blogPreviewItem-title">
                        Как заниматься своими делами, пока деньги поступают на счет?
                    </div>
                    <div class="blogPreviewItem-date">
                        1 day ago
                    </div>
                </div>
                <div class="blogPreview-list-item blogPreviewItem">
                    <div class="blogPreviewItem-image">
                        <img src="/static/tmp/images/test01.png"
                        srcSet="/static/tmp/images/test01@2x.png 2x,
                        /static/tmp/images/test01@3x.png 3x" />
                    </div>
                    <div class="blogPreviewItem-title">
                        Как заниматься своими делами?
                    </div>
                    <div class="blogPreviewItem-date">
                        1 day ago
                    </div>
                </div>
                <div class="blogPreview-list-item blogPreviewItem">
                    <div class="blogPreviewItem-image">
                        <img src="/static/tmp/images/test01.png"
                        srcSet="/static/tmp/images/test01@2x.png 2x,
                        /static/tmp/images/test01@3x.png 3x" />
                    </div>
                    <div class="blogPreviewItem-title">
                        Деньги поступают на счет?
                    </div>
                    <div class="blogPreviewItem-date">
                        1 day ago
                    </div>
                </div>
            </div>
            <div class="blogPreview-more button _white _arrowRight">
                Читать блог
            </div>
        </div>;
	}
}

export default blogPreview;