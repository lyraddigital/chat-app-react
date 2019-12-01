import React from 'react';
import renderer from 'react-test-renderer';

import ChatTitle from './ChatTitle';

test('Chat title loads with correct title for selected conversation', () => {
    const selectedConversation = { title: 'My Conversation' };
    
    const component = renderer.create(
        <>
            <ChatTitle selectedConversation={selectedConversation} />
        </>
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

test('contents missing when there is no selected conversation', () => {
    const component = renderer.create(
        <>
            <ChatTitle />
        </>
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
