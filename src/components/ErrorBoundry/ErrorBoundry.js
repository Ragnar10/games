//CORE
import React, { Component } from 'react';

//COMPONENTS
import ButtonBack from '../ButtonBack/ButtonBack';

//STYLES
import Styles from './ErrorBoundry.module.css';

export default class ErrorBoundry extends Component {

    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render() {

        if (this.state.hasError) {
            return (
                <div className={ Styles.error }>
                    <div className={ Styles.error_info }>
                        <span style={ {display: 'inline-block', width: '100%'} }>Извините, произошла ошибка!</span>
                        <span style={ {display: 'inline-block', width: '100%'} }>Можно вернуться в начальное меню.</span>
                    </div>
                    <div className={ Styles.error_back }>
                        <ButtonBack/>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
};
