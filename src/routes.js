import React from "react";
import { Switch, Route} from "react-router-dom";

import GraphqlClient from "./components/graphqlClient";
import GraphqlClientVariable from "./components/graphqlClientVariable";


const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={GraphqlClient} />
            <Route exact path="/variable" component={GraphqlClientVariable} />
          
        </Switch>
    </div>    
) 

export default Routes;