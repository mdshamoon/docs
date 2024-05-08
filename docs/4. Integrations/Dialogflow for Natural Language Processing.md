> ### **6 minutes read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Advanced`**


**Dialog Flow can be used in flows to send responses to end-users based on their intent when a specific keyword doesn’t match.**

## Video Tutorial

<iframe width="800" height="500" src="https://www.youtube.com/embed/oXIE_b-9UnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br />

_The UI of the platform has been updated since the webinar was conducted. The functionalities shown all remain the same_

## Using DialogFlow NLP agent within Glific.

**Step 1 :** Open a GCP account, project and service account with a key (.json file).

**Step 2 :** Connect your Glific instance with this project by adding contents of its key file as GOTH credentials for Glific.

**Step 3 :** Open a DialogFlow Account and _create an NLP agent_ that links to the project created in Step 1.

**Step 4 :** Create some intents within your agent. You can do so by creating an intent from scratch OR by creating a KnowledgeBase from a set of FAQs

**Step 5 :** Create a flow in Glific that accepts a message from the user , maps it to an intent and delivers the response (as computed by the agent ) to the user.

Below are details on each of these steps.

**Step 1 : GCP Account and project**

Refer to the DialogFlow Quick start guide - [https://cloud.google.com/dialogflow/es/docs/quick/setup](https://cloud.google.com/dialogflow/es/docs/quick/setup) -  and execute the following  steps before you configure Glific

- Create a project 
- Enable Billing 
- Enable the API
- Set up Authentication (till you download the private key file.) You will use the content of this key file to set up your GOTH credentials in Glific.

Dialog Flow  can be used in flows to send responses to end-users based on their intent when a specific keyword doesn’t match.

**Step 3 : Open your DialogFlow account and create an Dialog flow agent connected with the project from step one.**

- Go to [https://dialogflow.cloud.google.com/](https://dialogflow.cloud.google.com/)

- Log in with your gmail id

- Click on &quot; Create Agent&quot;

- Choose Import an existing Project (You should be able to see your project from step 1 if you are in the same browser window)

**Step 4 :  Create some intents within your Dialog flow agent.**

1 . Create an intent

1 .  Go to Google Dialog flow [https://dialogflow.cloud.google.com/](https://dialogflow.cloud.google.com/)

2 . Click on `Create intent`button

![image](https://user-images.githubusercontent.com/32592458/212662142-af6ce124-9d8a-4c63-a6a6-7749a0189e21.png)



3 . Enter the `name` of the intent.

![image](https://user-images.githubusercontent.com/32592458/212662172-7a471ced-f64d-472b-b367-7c8e381ba16b.png)



4 . Enter the `phrases` you can expect user will send to BOT. Enter one phrase and hit enter to add it in the phrases list.

![image](https://user-images.githubusercontent.com/32592458/212662208-500f69f1-4899-4226-9e98-0a85e96f8cd2.png)

5 . Click on `Save` button.

![image](https://user-images.githubusercontent.com/32592458/212662375-6351b60a-233e-47f1-8abd-9bf8bddf4374.png)



6 .  It will be changed to `Done` after successful save

![image](https://user-images.githubusercontent.com/32592458/212662399-b0f8064e-af64-4e76-8beb-f23f64939ee7.png)



7 . Click on `setting` icon on top of the screen

![image](https://user-images.githubusercontent.com/32592458/212662419-dd2bb531-cd79-4855-a91a-638c3478a2dc.png)



8 .  Click on `ML Settings` and then click on `Train` button.

![image](https://user-images.githubusercontent.com/32592458/212662443-3f0340b2-868a-493d-ad6e-15a618d27507.png)

9 .  Click on `Save` button.

![image](https://user-images.githubusercontent.com/32592458/212662478-eb77daee-ba1d-4e43-bcec-a1758bbd0cb5.png)



10 .  After saving, click on `intents` menu.

11 .  To test type any phrase entered earlier in the `try it now` section and hit enter.

![image](https://user-images.githubusercontent.com/32592458/212662511-1aeedc29-328b-4336-b031-6e17cbc3c42d.png)

12 .  It will show the `intent` name matched to your phrase

![image](https://user-images.githubusercontent.com/32592458/212662537-a3bcc33b-d364-44ab-b8e3-f4bf7fb57993.png)

13 . Click on `Diagnostic info` button at the bottom of the section.  It will open an `API response`. Search for **Confidence** in the text to find the confidence level of the response match to the phrase. **Confidence** level **1**  is the highest level. Any thing above .75 is good matches to the phrase

![image](https://user-images.githubusercontent.com/32592458/212662560-bb9b4b7b-6984-45b2-9b83-319102fe82e0.png)



14 . Click on `Close` button. You are ready to use NLP in your flow.

NOTE : You can also create an intent by creating a Knowledge Base. This basically is a collection of FAQs that can be split across multiple documents.

a. Since this is a beta feature you will need to enable Beta features and API in your agent settings - under the General Tab.

b. Once done you will be able to create a Knowledge Base. Follow the instructions to point DialogFlow to your FAQ document(s)

c. Each knowledgebase is mapped to an auto-generated intent. You can test the knowledge base just like to test any intent. Ask a question from your FAQ and the agent should respond with corresponding answer.

Troubleshooting tip :  Added a new intent in Dialog Flow agent does not reflect in Glific split by intent dropdown ? IN settings  open Dialogflow  settings and just hit save without making a change.

## Step 2 : Configure Dialog Flow in Glific to connect to your GCP Project

1 .  Click on `NGO main account`, find `Settings` and go to `Dialogflow`.

<img width="384" alt="Screenshot 2024-03-04 at 3 11 54 PM" src="https://github.com/glific/docs/assets/141305477/1405fdf5-b01d-420c-adc3-3fee2849f03e" />



3 .  Enter `Goth Credentials` of your Dialog flow.  It is same as it is for your GCS account. Check the &quot;Is active&quot; box as well.

<img width="732" alt="Screenshot 2024-03-04 at 3 12 39 PM" src="https://github.com/glific/docs/assets/141305477/cb8c0128-5cfa-4b80-a0a9-0e7faf94acf2" />

4 . Click on **Save** button

## Give Google account Dialog flow access permissions

Note : This is only needed if your service account doesn&#39;t have complete owner privilege.

1 .  Go to [https://console.cloud.google.com/](https://console.cloud.google.com/)

2 .  Click on `IAM` menu from left menu list.

![image](https://user-images.githubusercontent.com/32592458/212662736-ad4a830c-e91e-4395-a8b5-4b9098bf811a.png)



3 .  Click on `members` button.

![image](https://user-images.githubusercontent.com/32592458/212662771-c0a57b1e-bb61-4f3e-ba31-ca5822c62b5e.png)



4 . Scroll down to the account you are using to link with Glific and check if user is having Dialog flow access permission. If not then click on `edit` icon next to the account permission section.

![image](https://user-images.githubusercontent.com/32592458/212662810-736cb0d7-75f0-45bf-8e42-4f01cce5feb2.png)



5 .  Click on `+ADD ANOTHER ROLE` link.



6 . From the dropdown search and select `Dialogflow API Admin`   and `Dialogflow Console Agent Editor` role.

![image](https://user-images.githubusercontent.com/32592458/212662843-3db1b51a-48c6-4d96-bf71-7b67d675d034.png)



7 .  Click on `Save` button at the bottom.

![image](https://user-images.githubusercontent.com/32592458/212662874-fbf6bd44-349b-4964-a50a-c5cb025c73ea.png)





## Step 5 : Create a flow in Glific that uses your DialogFlow Agent

1 .  Create a new Flow, or edit any existing flow.

2 . Use **Wait for response** action type to receive the intent phrase input  from user.

![image](https://user-images.githubusercontent.com/32592458/212662895-1d90e9f5-42c6-4f30-be85-096e2ec49710.png)



3 . Next linked node will be `Split by intent`

![image](https://user-images.githubusercontent.com/32592458/212662937-f7ca433b-b85d-4a35-a81b-2f52800f7913.png)

4 .  Select Dialog flow from the 2nd drop down.

5 .  Fill the details of your intent.

a) select `has top intent`

b) select your **intent name** created in dialog flow.

c) Enter the confidence level. (Enter the confidence you have got in intent to match it exactly with the phrase. or enter  **.5**  for now)

d) Enter category of the intent Ex. **intent name**

e) Enter the variable name to receive the input in `Result Name` section

![image](https://user-images.githubusercontent.com/32592458/212663016-95e4d7c8-2ac5-44fb-9cc1-121717375daf.png)

6 .  Click `ok` to save.



7 . You will get the **nlp response**, **nlp confidence** and **nlp intent** to use in your flow. syntax are

Response: **_@results.df_intent.response_**

Confidence: **_@results.df_intent.confidence_**

Intent: **_@results.df_intent.intent_**



![image](https://user-images.githubusercontent.com/32592458/212663042-68f1fa3b-9c24-4bfe-9aaf-aefb3c84ff2b.png)

**Flow Sample**

![image](https://user-images.githubusercontent.com/32592458/212663070-d7d43c7e-3c3f-47f2-8a0b-ccb0bc6e0471.png)



**Flow Results**

**Success case**

![image](https://user-images.githubusercontent.com/32592458/212663085-2fe17b6b-df29-4e56-905f-952fec2b27c2.png)



**No Match found case**

![image](https://user-images.githubusercontent.com/32592458/212663103-a76a7e11-2adf-4e1c-8cd7-bad58f735de9.png)
