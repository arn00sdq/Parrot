import React, { useState } from 'react';
import ClockDay from "../common/tool/Clock/ClockDay"
import ClockHour from "../common/tool/Clock/ClockHour"
import ClockMinute from "../common/tool/Clock/ClockMinute"
import ClockSeconds from "../common/tool/Clock/ClockSeconds"
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

    
    return (
        <div id="root-css">
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
                            <div class="time"><div className="day"><ClockDay /></div><span>Days</span></div>
                            <div class="time"><div className="hour"><ClockHour /></div><span>Hours</span></div>
                            <div class="time"><div className="minute"><ClockMinute /></div><span>Minutes</span></div>
                            <div class="time"><div className="second"><ClockSeconds /></div><span>Seconds</span></div>
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
                
                <div className={`newletter ${isContainerActive ? "active" : ""}`}>
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
