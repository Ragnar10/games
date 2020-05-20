//CORE
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//STYLES
import Styles from './App.module.css';

//COMPONENTS
import Menu from '../Menu/Menu';
import Fifteens from '../Fifteens/Fifteens';
import Couples from  '../Couples/Couples';
import Balda from '../Balda/Balda';
import LadderToTop from '../LadderToTop/LadderToTop';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import ButtonBack from '../ButtonBack/ButtonBack';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <ErrorBoundry>
                        <Menu/>
                    </ErrorBoundry>
                </Route>
                <Route path='/fifteens'>
                    <ErrorBoundry>
                        <Fifteens/>
                    </ErrorBoundry>
                </Route>
                <Route path='/couples' >
                    <ErrorBoundry>
                        <Couples/>
                    </ErrorBoundry>
                </Route>
                <Route path='/balda'>
                    <ErrorBoundry>
                        <Balda/>
                    </ErrorBoundry>
                </Route>
                <Route path='/ladder2top'>
                    <ErrorBoundry>
                        <LadderToTop/>
                    </ErrorBoundry>
                </Route>
                <Route>
                    <div className={ Styles.error }>
                        <div className={ Styles.error_info }>
                            <span style={ {display: 'inline-block', width: '100%'} }>Упс! Что-то пошло не так...</span>
                            <span style={ {display: 'inline-block', width: '100%'} }>Можно вернуться в начальное меню.</span>
                        </div>
                        <div className={ Styles.error_back }>
                            <ButtonBack/>
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;