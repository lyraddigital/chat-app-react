import React from 'react';

import './Message-List.css';

function MessageList() {
    return (
        <div id="chat-message-list">
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">Ok then</div>
                    <div className="message-time">Apr 16</div>
                </div>
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <img src={require("../../images/profiles/daryl.png")} alt="Daryl Duckmanton" />
                    <div className="message-text">
                        Yeah I think it's best we do that. Otherwise things won't work well at all. 
                        I'm adding more text here to test the sizing of the speech bubble and the 
                        wrapping of it too.
                    </div>
                    <div className="message-time">Apr 16</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        Maybe we can use Jim's studio.
                    </div>
                    <div className="message-time">Apr 15</div>
                </div>
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <img src={require("../../images/profiles/daryl.png")} alt="Daryl Duckmanton" />
                    <div className="message-text">
                        All I know is where I live it's too hard
                        to record because of all the street noise.
                    </div>
                    <div className="message-time">Apr 16</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        Well we need to work out sometime soon where
                        we really want to record our video course.
                    </div>
                    <div className="message-time">Apr 15</div>
                </div>
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <img src={require("../../images/profiles/daryl.png")} alt="Daryl Duckmanton" />
                    <div className="message-text">
                        I'm just in the process of finishing off the
                        last pieces of material for the course.
                    </div>
                    <div className="message-time">Apr 14</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        How's it going?
                    </div>
                    <div className="message-time">Apr 13</div>
                </div>
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <img src={require("../../images/profiles/daryl.png")} alt="Daryl Duckmanton" />
                    <div className="message-text">
                        Hey mate what's up?
                    </div>
                    <div className="message-time">Apr 13</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        Hey Daryl?
                    </div>
                    <div className="message-time">Apr 13</div>
                </div>
            </div>
        </div>
    );
}

export default MessageList;