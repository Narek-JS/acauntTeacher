import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import PagesDasntacner from "../src/PagesDasntacner/PagesDasntacner";
import Matyan from "../src/PageMatyan/PageMatyan";
import Teacher from "../src/components/Teacher/Teacher";
import PagePraktik from "../src/PagePraktik/PagePraktik";
import PageHachaxeliutyun from "./PageHachaxeliutyun/PageHachaxeliutyun";
import PageAshxatanqner from "./PageAshxatanqner/PageAshxatanqner";
import PageInformacia from "./PageInformacia/PageInformacia";
import PagePortfolio from "./PagePortfolio/PagePortfolio";
import PagePatvirvac from "./PagePatvirvac/PagePatvirvac";
import PageFrilans from "./PageFrilans/PageFrilans";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './index.css';

ReactDOM.render(
  <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/" exact component={Teacher} />
                <Route path="/Դասընթացներ" exact component={Teacher} />
                <Route path="/Էլեկտրոնային մատյան" exact component={Matyan} />
                <Route path="/Քնություններ" exact component={PagesDasntacner} />
                <Route path="/Պրակտիկա" exact component={PagePraktik} />
                <Route path="/Հաճախելիություն" exact component={PageHachaxeliutyun} />
                <Route path="/Աշխատավարձ" exact component={PageAshxatanqner} />
                <Route path="/Ինֆորմացիա" exact component={PageInformacia} />
                <Route path="/Պորտֆոլիո" exact component={PagePortfolio} />
                <Route path="/Պատվիրված աշխատանքներ" exact component={PagePatvirvac} />
                <Route path="/Ֆրիլանս" exact component={PageFrilans} />
            </Switch>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
