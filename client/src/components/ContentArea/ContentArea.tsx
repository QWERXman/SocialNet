import {Routes as RoutesItems} from "../../routes/routes";
import {Route, Switch} from "react-router-dom";
import {RoutesEntity} from "../../entities/Routes";
import React from "react";

const ContentArea = () => {
   return (
       <div className="ContentArea">
           <Switch>
               {
                   RoutesItems.map((route: RoutesEntity) => (
                       <Route
                           path={route.path}
                           component={route.component}
                           key={route.path} />))
               }
           </Switch>
       </div>
)};

export default ContentArea;
