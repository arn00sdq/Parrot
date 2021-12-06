import React, { useState } from 'react';

import {
    ProfilImg, logo_parrot_adulte
} from '../../database/images'

function ProfilPage() {

    const [isContainerActive, setIsContainerActive] = React.useState(false);

    const toggleIn = () => {
        setIsContainerActive(true);
    };

    const toggleOut = () => {
        setIsContainerActive(false);
    };

    var countDate = new Date('Jan 2, 2021 00:00:00')

    var now = new Date().getTime();
    var gap = countDate - now;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (hour)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / (second));
    return (
        <div id="root-css">
            <img id="large-parrot" src={logo_parrot_adulte} />
            <div class="acc">
                <img src={ProfilImg.palm_tree} className="palm"/>
                <img src={ProfilImg.palm_tree} className="palm2"/>
                <section>
                    <div className="contentBx">
                        <h2>Coming Soon</h2>
                        <p>
                            Le site est sous renovation, une page profil sera ajouté <br/>
                            Revenez dans environs, approximativement 1000 jours
                        </p>
                        <div className="countdown">
                            <div class="time"><div className="day">2000</div><span>Days</span></div>
                            <div class="time"><div className="hour">50</div><span>Hours</span></div>
                            <div class="time"><div className="minute">60</div><span>Minutes</span></div>
                            <div class="time"><div className="second">7</div><span>Seconds</span></div>
                        </div>
                        <a href='#' onClick={() => toggleIn()}>Notify Me!</a>
                        <ul className="sci">
                            <li>
                                <a href="#"><img src={ProfilImg.facebook} /></a>
                            </li>
                            <li>
                                <a href="#"><img src={ProfilImg.twitter} /></a>
                            </li>
                            <li>
                                <a href="#"><img src={ProfilImg.instagram} /></a>
                            </li>
                        </ul>
                    </div>
                </section>
                <div className="newletter">
                    <h2>Stay tuned</h2>
                    <p>Get notified</p>
                    <div class="inputBox">
                        <form>
                            <input type="email" name="" required="" placeholder="enter the email"></input>
                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                    <img src={ProfilImg.close} class="close" onClick={() => toggleOut()} />
                </div>
            </div>
        </div>
    )
}

export default ProfilPage;
