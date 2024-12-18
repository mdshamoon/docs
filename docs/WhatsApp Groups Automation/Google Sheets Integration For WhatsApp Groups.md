### **5 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Beginner`**

# WhatsApp Groups and Google Sheets
This integration is to enable sending content from google sheets to WhatsApp Groups using the Glific flows.

## Prerequisites
Google cloud platform set up should be completed as per this [document](https://glific.github.io/docs/docs/Onboarding/GCS%20Setup/Google%20Cloud%20Storage%20Setup) to enable reading of google sheets

## Things to keep in mind
1. For flows which are being created to send messages to WhatsApp Groups, 
2. Only the first send message node will work.
3. Subsequent send message nodes or wait for response nodes in the flow have no effect. 

## When to use the Google Sheets Integration 
Some of the use cases where using google sheets integration to read the content from to send it to groups: 
1. When recurring triggers have to be scheduled for groups which send message based on logic such as date of the month, sequence of the message etc. 
- Ex: two messages need to be sent per week in sequence of messages.
2. When some part of the content needs to be altered based on the group names. 
- Ex: the images being sent along with the messages to groups need to be varied based on the group name
- Ex: some content of the message needs to be varied based on the group name. 

## How to implement google sheets to read messages 
1. Linking the readable google sheets
- Go to `google sheets` in the `flows`
- Create the `Readable` google sheet by, adding the link, giving it an appropriate name, and selecting read option. Also select “auto sync” option 
- Ensure the google sheet being linked as “anyone with link can read” access.

<img width="768" alt="Screenshot 2024-12-17 at 6 28 51 PM" src="https://github.com/user-attachments/assets/ee668bef-d2bb-49ec-a5aa-95e3996e9774" />


2. Creating the google sheet with “Key” and the custom content that needs to be sent
- Following values can be used as keys
  -   Group names: Can be got by taking an export of field called `label` from the table named `wa_groups` from BigQuery tables. Use `group.label` as the parameter to be passed to the google sheet in the `Link google sheet` node
  -   Custom created group fields: Read the next section to know how to create and update group fields.
 

- The first columns of the google sheet has to have the header “Key” 
- Provide the “content” to be sent in the subsequent columns
<img width="501" alt="Screenshot 2024-12-17 at 6 29 23 PM" src="https://github.com/user-attachments/assets/42d454d8-adfc-4378-a6b9-dd0b3329f36d" />


3. Creating and updating the group fields based on which the custom content can be sent. 

- Make sure the value of the group variable is initiated (using background flows) and is being updated at an appropriate point in the flow (if needed)
<img width="700" alt="Screenshot 2024-12-17 at 6 32 48 PM" src="https://github.com/user-attachments/assets/ec98f8e5-04ca-4168-b18d-3c3bc64805de" />


- To check if the group fields are created and initialized. Go to `Group Chats`, and go to find the `View Group Details`

**<img width="1296" alt="Screenshot 2024-12-17 at 7 00 07 PM" src="https://github.com/user-attachments/assets/d559be9f-4904-4326-b216-93432a1e9b70" />

- Click on `Details` to see the values of the group fields created and assiciated with the given group.

<img width="965" alt="Screenshot 2024-12-17 at 6 59 21 PM" src="https://github.com/user-attachments/assets/94264381-10f4-4f97-9e23-d4f18634301f" />

- Use the “Link Google Sheet” node and use the following options

<img width="679" alt="Screenshot 2024-12-17 at 6 30 12 PM" src="https://github.com/user-attachments/assets/ca05b879-d210-4218-92da-d680ec505e2a" />

- Provide the parameter / group variable based on which the custom content should be sent to the group. 


4. Using the combination of “link google sheet” node as well as “update the group field” node in the flow editor to implement the desired logic. 
- Below is an example of how group fields can be used to send messages based on a counter group variable. 

<img width="831" alt="Screenshot 2024-12-17 at 6 44 44 PM" src="https://github.com/user-attachments/assets/fa8c3a34-c9b7-47f3-96b4-22528f617a75" />


- In the given example, same flow can be used to send sequential messages to the WhatsApp groups as the counter keeps on incrementing after each time the flow has been broadcast to the group.
<img width="686" alt="Screenshot 2024-12-17 at 6 40 47 PM" src="https://github.com/user-attachments/assets/86677ac0-6c0e-4037-846e-496145405be7" />

Please reach out to Glific team over discord in case of queries or further guidance on how google sheets integration can be used to simplify and automate scheduling messages to groups. 
