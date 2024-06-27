> ### **2 minutes read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Intermediate`**
___

## Message Events

Below diagram shows the simplified architecture that enables exchange of message between chatbot of an NGO using Glific and the end beneficiaries. 
<img width="887" alt="Screenshot 2024-06-27 at 4 58 00 PM" src="https://github.com/glific/docs/assets/141305477/4f737ac3-1375-4650-aea5-2e6b342c5979"/>


For sending messages, the message is routed through Gupshup, to WhatsApp Business API and finally to each of the beneficiaries WhatsApp numbers. Same chain is executed in reverse order when a beneficiary messages the chatbot of an organization. 

All messages being sent from Glific to Gupshup to WhatsApp are tracked and for each message sent, there are events returned to show the status of the message.  

For the tracking to be enabled, please make sure that you have activated tracking of these events in your gupshup app. Refer [this documentation to configure the read receipts
](https://glific.github.io/docs/docs/FAQ/Read%20Receipts/)

The status of each message can be found in the `messages` table, under the `bsp_status`in the organization’s BigQuery account. 

Following are the types of events that can be see, and what it means 

## Enqueued 
This event is received when a message is in queue to be sent. Since a large number of messages are exchanged over Gupshup and WhatsApp Business API, this event indicates that the message is in the process of being sent.

## Sent
This  event is received when the message is sent to the end-user. Akin to a single tick. 

## Delivered 
This event is received when the message is delivered to the end user. Aking to a double tick

## Read 
This event is received when the user has read the message. Read notifications will only be available for users who have read receipts enabled. For users that do not have it enabled, you will only receive the delivered notification.
## Delete 
This event is received when a user deletes a message for everyone (not 'delete for me') which they have sent to your WhatsApp Business API.

## Others 
Rare cases when some other events are received like `Mismatch`,  `Sync Failed`, `Async Failed`. Read more on them [here](https://docs.gupshup.io/docs/message-events)


