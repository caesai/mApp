import React, { Component } from 'react'
import Header from '../layout/header';
import Footer from '../layout/footer';
import Container from '../container';

class blog extends Component {
	constructor(props) {
		super(props);		
		this.state = {
		};
	}
	
	render() {		
	    let containerClasses = ['_innerPage'];

        if (this.props.authData)
            containerClasses.push('_loggedIn');

	    return <Container classes={containerClasses}>
			<Header authData={this.props.authData} />					
                <div class="content _blogPage">
                    <div class="content-title">
                        Блог
                    </div>
                    <div class="content-blog blog">
                        <div class="blog-list">
                            <div class="blog-list-item blogPreviewItem">
                                <div class="blogPreviewItem-image">
                                    <img src="/static/tmp/images/test01.png"
                                    srcset="/static/tmp/images/test01@2x.png 2x,
                                    /static/tmp/images/test01@3x.png 3x" />
                                </div>
                                <div class="blogPreviewItem-title">
                                    Как заниматься своими делами, пока деньги поступают на счет?
                                </div>
                                <div class="blogPreviewItem-date">
                                    1 day ago
                                </div>
                            </div>
                            <div class="blog-list-item blogPreviewItem">
                                <div class="blogPreviewItem-image">
                                    <img src="/static/tmp/images/test01.png"
                                    srcset="/static/tmp/images/test01@2x.png 2x,
                                    /static/tmp/images/test01@3x.png 3x" />
                                </div>
                                <div class="blogPreviewItem-title">
                                    Как заниматься своими делами?
                                </div>
                                <div class="blogPreviewItem-date">
                                    1 day ago
                                </div>
                            </div>
                            <div class="blog-list-item blogPreviewItem">
                                <div class="blogPreviewItem-image">
                                    <img src="/static/tmp/images/test01.png"
                                    srcset="/static/tmp/images/test01@2x.png 2x,
                                    /static/tmp/images/test01@3x.png 3x" />
                                </div>
                                <div class="blogPreviewItem-title">
                                    Деньги поступают на счет?
                                </div>
                                <div class="blogPreviewItem-date">
                                    1 day ago
                                </div>
                            </div>
                            <div class="blog-list-item blogPreviewItem">
                                <div class="blogPreviewItem-image">
                                    <img src="/static/tmp/images/test01.png"
                                    srcset="/static/tmp/images/test01@2x.png 2x,
                                    /static/tmp/images/test01@3x.png 3x" />
                                </div>
                                <div class="blogPreviewItem-title">
                                    Как заниматься своими делами, пока деньги поступают на счет?
                                </div>
                                <div class="blogPreviewItem-date">
                                    1 day ago
                                </div>
                            </div>
                            <div class="blog-list-item blogPreviewItem">
                                <div class="blogPreviewItem-image">
                                    <img src="/static/tmp/images/test01.png"
                                    srcset="/static/tmp/images/test01@2x.png 2x,
                                    /static/tmp/images/test01@3x.png 3x" />
                                </div>
                                <div class="blogPreviewItem-title">
                                    Как заниматься своими делами?
                                </div>
                                <div class="blogPreviewItem-date">
                                    1 day ago
                                </div>
                            </div>
                            <div class="blog-list-item blogPreviewItem">
                                <div class="blogPreviewItem-image">
                                    <img src="/static/tmp/images/test01.png"
                                    srcset="/static/tmp/images/test01@2x.png 2x,
                                    /static/tmp/images/test01@3x.png 3x" />
                                </div>
                                <div class="blogPreviewItem-title">
                                    Деньги поступают на счет?
                                </div>
                                <div class="blogPreviewItem-date">
                                    1 day ago
                                </div>
                            </div>
                            <div class="blog-list-item blogPreviewItem">
                                <div class="blogPreviewItem-image">
                                    <img src="/static/tmp/images/test01.png"
                                    srcset="/static/tmp/images/test01@2x.png 2x,
                                    /static/tmp/images/test01@3x.png 3x" />
                                </div>
                                <div class="blogPreviewItem-title">
                                    Как заниматься своими делами, пока деньги поступают на счет?
                                </div>
                                <div class="blogPreviewItem-date">
                                    1 day ago
                                </div>
                            </div>
                            <div class="blog-list-item blogPreviewItem">
                                <div class="blogPreviewItem-image">
                                    <img src="/static/tmp/images/test01.png"
                                    srcset="/static/tmp/images/test01@2x.png 2x,
                                    /static/tmp/images/test01@3x.png 3x" />
                                </div>
                                <div class="blogPreviewItem-title">
                                    Как заниматься своими делами?
                                </div>
                                <div class="blogPreviewItem-date">
                                    1 day ago
                                </div>
                            </div>
                            <div class="blog-list-item blogPreviewItem">
                                <div class="blogPreviewItem-image">
                                    <img src="/static/tmp/images/test01.png"
                                    srcset="/static/tmp/images/test01@2x.png 2x,
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
                        <div class="blog-showEverything">
                            Показать ещё
                        </div>
                    </div>
                </div>				
			<Footer />
        </Container>;
	}
}

export default blog;