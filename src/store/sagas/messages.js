import { put, takeLatest } from 'redux-saga/effects';

const messageDetails = {
    '1': [
        {
            imageUrl: null,
            imageAlt: null,
            messageText: 'Ok then',
            createdAt: 'Apr 16',
            isMyMessage: true
        },
        {
            imageUrl: require('../../images/profiles/daryl.png'),
            imageAlt: 'Daryl Duckmanton',
            messageText: `
                Yeah I think it's best we do that. Otherwise things won't work well at all. 
                I'm adding more text here to test the sizing of the speech bubble and the 
                wrapping of it too.
            `,
            createdAt: 'Apr 16',
            isMyMessage: false
        },
        {
            imageUrl: null,
            imageAlt: null,
            messageText: 'Maybe we can use Jim\'s studio.',
            createdAt: 'Apr 15',
            isMyMessage: true
        },
        {
            imageUrl: require('../../images/profiles/daryl.png'),
            imageAlt: 'Daryl Duckmanton',
            messageText: `
                All I know is where I live it's too hard
                to record because of all the street noise.
            `,
            createdAt: 'Apr 15',
            isMyMessage: false
        },
        {
            imageUrl: null,
            imageAlt: null,
            messageText: `
                Well we need to work out sometime soon where
                we really want to record our video course.
            `,
            createdAt: 'Apr 15',
            isMyMessage: true
        },
        {
            imageUrl: require('../../images/profiles/daryl.png'),
            imageAlt: 'Daryl Duckmanton',
            messageText: `
                I'm just in the process of finishing off the
                last pieces of material for the course.
            `,
            createdAt: 'Apr 15',
            isMyMessage: false
        },
        {
            imageUrl: null,
            imageAlt: null,
            messageText: 'How\'s it going?',
            createdAt: 'Apr 13',
            isMyMessage: true
        },
        {
            imageUrl: require('../../images/profiles/daryl.png'),
            imageAlt: 'Daryl Duckmanton',
            messageText: ' Hey mate what\'s up?',
            createdAt: 'Apr 13',
            isMyMessage: false
        },
        {
            imageUrl: null,
            imageAlt: null,
            messageText: 'Hey Daryl?',
            createdAt: 'Apr 13',
            isMyMessage: true
        }
    ],
    '2': [
        {
            imageUrl: null,
            imageAlt: null,
            messageText: 'Ok fair enough. Well good talking to you.',
            createdAt: 'Oct 20',
            isMyMessage: true
        },
        {
            imageUrl: require('../../images/profiles/kim.jpeg'),
            imageAlt: 'Kim O\'Neil',
            messageText: `
                Not sure exactly yet. It will be next year sometime. Probably late.
            `,
            createdAt: 'Oct 20',
            isMyMessage: false
        },
        {
            imageUrl: null,
            imageAlt: null,
            messageText: 'Yeah I know. But oh well. So when is the big date?',
            createdAt: 'Oct 19',
            isMyMessage: true
        },
        {
            imageUrl: require('../../images/profiles/kim.jpeg'),
            imageAlt: 'Kim O\'Neil',
            messageText: `
                Well I know you like doing that stuff. But honestly I think
                you are already really talented. It's a shame you haven't found
                what you are looking for yet.
            `,
            createdAt: 'Oct 19',
            isMyMessage: false
        },
        {
            imageUrl: null,
            imageAlt: null,
            messageText: `
                I'm doing ok. Just working on building some applications to
                bulk up my resume, so I can get a better job.
            `,
            createdAt: 'Oct 19',
            isMyMessage: true
        },
        {
            imageUrl: require('../../images/profiles/kim.jpeg'),
            imageAlt: 'Kim O\'Neil',
            messageText: `
                I've just been really busy at work myself, looking to get
                married sometime next year too. How are you going?
            `,
            createdAt: 'Oct 19',
            isMyMessage: false
        },
        {
            imageUrl: null,
            imageAlt: null,
            messageText: 'Yes it has been a little while',
            createdAt: 'Oct 19',
            isMyMessage: true
        },
        {
            imageUrl: require('../../images/profiles/kim.jpeg'),
            imageAlt: 'Kim O\'Neil',
            messageText: 'Hey!!!! Have not spoken to you for a while',
            createdAt: 'Oct 19',
            isMyMessage: false
        },
        {
            imageUrl: null,
            imageAlt: null,
            messageText: 'Hi Kim?',
            createdAt: 'Oct 19',
            isMyMessage: true
        }
    ],
    '3': [
        {
            imageUrl: null,
            imageAlt: null,
            messageText: 'Hi',
            createdAt: '1 week ago',
            isMyMessage: true
        }
    ],
    '4': [
        {
            imageUrl: null,
            imageAlt: null,
            messageText: 'Hi',
            createdAt: '1 week ago',
            isMyMessage: true
        }
    ],
    '5': [
        {
            imageUrl: null,
            imageAlt: null,
            messageText: 'Hi',
            createdAt: '1 week ago',
            isMyMessage: true
        }
    ],
    '6': [
        {
            imageUrl: null,
            imageAlt: null,
            messageText: 'Hi',
            createdAt: '1 week ago',
            isMyMessage: true
        }
    ],
    '7': [
        {
            imageUrl: null,
            imageAlt: null,
            messageText: 'Hi',
            createdAt: '1 week ago',
            isMyMessage: true
        }
    ],
    '8': [
        {
            imageUrl: null,
            imageAlt: null,
            messageText: 'Hi',
            createdAt: '1 week ago',
            isMyMessage: true
        }
    ],
    '9': [
        {
            imageUrl: null,
            imageAlt: null,
            messageText: 'Hi',
            createdAt: '1 week ago',
            isMyMessage: true
        }
    ]
};

const delay = (ms) => new Promise(res => setTimeout(res, ms));

const messagesSaga = function*(action) {
    const { conversationId } = action.payload;
    const messages = messageDetails[conversationId];

    yield delay(1000);

    yield put({
        type: 'MESSAGES_LOADED',
        payload: {
            messages,
            conversationId
        }
    });
}

export const watchGetMessagesAsync = function*() {
    yield takeLatest('MESSAGES_REQUESTED', messagesSaga);
}