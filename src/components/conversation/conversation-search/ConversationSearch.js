import React from 'react';

import './ConversationSearch.scss';

const ConversationSearch = ({ conversations }) => {
    let searchInput = null;

    if (conversations && conversations.length > 0) {
        searchInput = <input type="text" placeholder="Search" />;
    }

    return (
        <div id="search-container">
            { searchInput }
        </div>
    );
}

export default ConversationSearch;