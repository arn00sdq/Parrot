import React from 'react';

import {
    basket_jump,terrorisme
} from '../../../database/images'

function FeatureCard(props) {
    return (

        <div className="container-card feature-card">
            <div className="container-card-header">
                <div className="container-title-card">Our latest additions</div>
            </div>
            <div className="container-card-body display-card">
                <div className="cardF">
                    <div className="circle">
                        <img className="img-feature" src={basket_jump} />
                        <h2>01</h2>
                    </div>
                    <div class="content">
                        {/*<img src={history} className="img-paperCard" />
                    <div className="date-paperCard">{value[i].date}</div>*/}
                        <div className="category-feature sport-feature">Sport</div>
                        <div className="title-feature">Jump over 50M</div>
                        <div className="text-feature">He is the first man who crossed <br/>
                                                    over a canyon in one jump...</div>
                    </div>
                </div>
                <div className="cardF">
                    <div className="circle">
                        <img className="img-feature" src={terrorisme} />
                        <h2>01</h2>
                    </div>
                    <div class="content">
                        {/*<img src={history} className="img-paperCard" />
                    <div className="date-paperCard">{value[i].date}</div>*/}
                        <div className="category-feature politic-feature">Politique</div>
                        <div className="title-feature">Ak-48</div>
                        <div className="text-feature">Une nouvelle version de la  <br/>
                                                    celèbre a été annoncé</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default FeatureCard;