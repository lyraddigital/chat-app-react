import React from 'react';

import './Conversation-List.css';

function ConversationList() {
    return (
        <div id="conversation-list">
            <div className="conversation active">
                <img src={require("../../images/profiles/daryl.png")} alt="Daryl Duckmanton" />
                <div className="title-text">Daryl Duckmanton</div>
                <div className="created-date">Apr 16</div>
                <div className="conversation-message">
                    This is a message
                </div>
            </div>
            <div className="conversation">
                <img src={require("../../images/profiles/kim.jpeg")} alt="Kim O'Neil" />
                <div className="title-text">Kim O'Neil</div>
                <div className="created-date">2 days ago</div>
                <div className="conversation-message">
                    Very funny
                </div>
            </div>
            <div className="conversation">
                <img src={require("../../images/profiles/john.jpeg")} alt="John Anderson" />
                <div className="title-text">John Anderson</div>
                <div className="created-date">1 week ago</div>
                <div className="conversation-message">
                    Yes I love how Python does that
                </div>
            </div>
            <div className="conversation">
                <img src={require("../../images/profiles/ben.png")} alt="Ben Smith" />
                <div className="title-text">Ben Smith</div>
                <div className="created-date">2:49 PM</div>
                <div className="conversation-message">
                    Yeah Miami Heat are done
                </div>
            </div>
            <div className="conversation">
                <img src={require("../../images/profiles/douglas.png")} alt="Douglas Johannasen" />
                <div className="title-text">Douglas Johannasen</div>
                <div className="created-date">6:14 PM</div>
                <div className="conversation-message">
                    No it does not
                </div>
            </div>
            <div className="conversation">
                <img src={require("../../images/profiles/jacob.png")} alt="Jacob Manly" />
                <div className="title-text">Jacob Manly</div>
                <div className="created-date">3 secs ago</div>
                <div className="conversation-message">
                    Just be very careful doing that
                </div>
            </div>
            <div className="conversation">
                <img src={require("../../images/profiles/stacey.jpeg")} alt="Stacey Wilson" />
                <div className="title-text">Stacey Wilson</div>
                <div className="created-date">30 mins ago</div>
                <div className="conversation-message">
                    Awesome!!! Congratulations!!!!
                </div>
            </div>
            <div className="conversation">
                <img src={require("../../images/profiles/stan.jpeg")} alt="Stan George" />
                <div className="title-text">Stan George</div>
                <div className="created-date">1 week ago</div>
                <div className="conversation-message">
                    Good job
                </div>
            </div>
            <div className="conversation">
                <img src={require("../../images/profiles/sarah.jpeg")} alt="Sarah Momes" />
                <div className="title-text">Sarah Momes</div>
                <div className="created-date">1 year ago</div>
                <div className="conversation-message">
                    Thank you. I appreciate that.
                </div>
            </div>
        </div>
    );
}

export default ConversationList;