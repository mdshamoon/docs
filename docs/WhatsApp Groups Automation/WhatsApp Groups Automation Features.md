### **5 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Beginner`**

## User Guide: WhatsApp Groups Automation Features: Basic
This document provides details on using basic features of syncing all the WhatsApp Groups, sending messages and media to the groups from the Glific interface, creating collections or groups of groups to send targetted messages to a large number of groups and scheduling messages to the collections in advance. 

### Group Chats 

1. Shows all the groups and the group chats that the maytapi linked phone number is part of. 
2. Provides an interface to see the chats, group details, and send messages and media to the groups. 

### Group Collections
1. Group collection is a group of groups. A way to club together with groups. This is to enable sending or scheduling of messages to the bulk of the groups from the single action. 

#### How to create Group Collections
1. Go to Group Collection

<img width="1129" alt="Screenshot 2024-04-16 at 3 27 27 PM" src="https://github.com/glific/docs/assets/141305477/10d30710-c7d2-4c3b-b9f0-b9675bba0c70"/>

3. Go to create collection - give it a name and description 
4. Add the groups to a collection by selecting from the dropdown

<img width="1047" alt="Screenshot 2024-04-16 at 3 28 16 PM" src="https://github.com/glific/docs/assets/141305477/e3368d3f-8c69-4e21-ae86-66b0dade17e8"/>

### Sending Messages 
1. Send message to the group via group chat
<img width="1038" alt="Screenshot 2024-04-16 at 3 28 59 PM" src="https://github.com/glific/docs/assets/141305477/d972cf1b-1443-43df-b3fd-0119f63464cf" />

2. Send message to a `Collection` by navigating to `Collections` list next to `Groups` window.

### Sending Media
#### Prerequisite for sending media:

1. Should have a google cloud storage account set up [refer here](https://glific.github.io/docs/docs/Onboarding/GCS%20Setup/Google%20Cloud%20Storage%20Setup).
2.  Within the google cloud storage, should have a public bucket setup [refer here](https://glific.github.io/docs/docs/Onboarding/GCS%20Setup/Create%20an%20account%20in%20Google%20Cloud%20Storage%20GCS)
3.  Upload files to the google cloud storage and generate the links [refer here](https://glific.github.io/docs/docs/Onboarding/GCS%20Setup/Upload%20files%20on%20GCS)

### Sending media in a group

1. Sending media to a collection is possible through
2. Go to attach option in the text bar
3. Select the type of media
4. Select enter the google cloud storage media url
5. Click ok
6. Click on send button 

<img width="1051" alt="Screenshot 2024-04-16 at 4 26 48 PM" src="https://github.com/glific/docs/assets/141305477/57e72b41-cf08-4103-96ec-0b98a4d2b889" />

### Sending media to a collection  
Follow the same steps as above under the `Groups Collection` menu in the `Group Chats` page

<img width="1058" alt="Screenshot 2024-04-16 at 4 28 01 PM" src="https://github.com/glific/docs/assets/141305477/7e1db214-baa8-41b3-9efb-7912906b1779"/>

### Scheduling Messages and Media

1. Messages and media can be scheduled in advance.
2. A flow having only one message or one media can be scheduled. (a flow with multiple messages or media cannot be scheduled for groups)
3. Multiple such flows can be scheduled.

#### Scheduling Messages
1. Go to `Flows` and Create a flow, which contains just `send contact a message` node. 
<img width="1053" alt="Screenshot 2024-04-16 at 4 30 07 PM" src="https://github.com/glific/docs/assets/141305477/afd42691-ae36-4256-9081-99e97f79adc5" />

2. Publish the flow
3. Create a groups collection
4. Go to `Triggers` menu under `Quick Tools`
5. Select `Create`
6. Choose the flow with one message from the drop down, and enter other details regarding the date range, and time.
7. Select `WhatsApp Groups`
8. Select the collection of groups to send the message to
9. Click save

<img width="653" alt="Screenshot 2024-04-16 at 4 31 14 PM" src="https://github.com/glific/docs/assets/141305477/99bf5651-985d-4a2e-a243-cdcf89a72887" />


### Video Showcase
<iframe width="560" height="315" src="https://www.youtube.com/embed/RdYJTBmSXYs?si=r1lCTEq2eO18ZEXo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
