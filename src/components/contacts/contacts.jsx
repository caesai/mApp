import React, { Component } from 'react'
import Header from '../layout/header';
import Footer from '../layout/footer';
import Container from '../container';

class contacts extends Component {
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
                <div class="content _contactsPage">
                    <div class="content-title">
                        Контакты
                    </div>
                    <div class="content-contacts contacts">
                        <div class="contacts-desktopGroup">
                            <div class="contacts-email">
                                <div class="contacts-email-label">
                                    Для вопросов и предложений
                                </div>
                                <div class="contacts-email-value">
                                    info@simplemining.com
                                </div>
                            </div>
                            <div class="contacts-email">
                                <div class="contacts-email-label">
                                    Для размещения рекламы
                                </div>
                                <div class="contacts-email-value">
                                    sales@simplemining.com
                                </div>
                            </div>
                            <div class="contacts-socials">
                                <a href="" class="contacts-socials-instagram"></a>
                                <a href="" class="contacts-socials-facebook"></a>
                            </div>
                            <div class="contacts-phone">
                                <div class="contacts-phone-label">
                                    Офис
                                </div>
                                <div class="contacts-phone-value">
                                    +3 (5343) 2342-50-30
                                </div>
                            </div>
                            <div class="contacts-linkToFeedback">
                                <div class="button _blue">
                                    Написать нам
                                </div>
                            </div>
                        </div>
                        <div class="contacts-desktopGroup">
                            <div class="contacts-phone">
                                <div class="contacts-phone-label">
                                    Офис
                                </div>
                                <div class="contacts-phone-value">
                                    +3 (5343) 2342-50-30
                                </div>
                            </div>
                            <div class="contacts-map"></div>
                            <div class="contacts-linkToFeedback">
                                <div class="button _blue">
                                    Написать нам
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			<Footer />
        </Container>;
	}
}

export default contacts;