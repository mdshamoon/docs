> ### **3 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Beginner`**

**Designing chatbots is an iterative process, and with every launch or pilot, you learn new things and make changes. But if you are launching your chatbot for the first time with your users, here are 15 quick things you need to cross check,to ensure that you have checked in all basic things for your Bot. It shouldn't take you more than 15 minutes to ensure everything is in place.**

1. Disable the automated opt-in message on Gupshup. Every chatbot needs to take consent from it’s user to be able to further send messages. Gupshup sends a default message. But that generic message might confuse your users. Hence it is suggested to disable it on Gupshup and take consent on chatbot itself.
To do this, click on your app on Gupshup, go to the Opt-ins tab, click on the Onboarding mechanisms dropdown arrow, and scroll down to disable the toggle.

![image5](https://user-images.githubusercontent.com/132430123/281605574-a6094adf-9a7b-4495-b431-e0474560c8c0.png)

2. The first message that a user receives upon joining the bot should be a consent message. Here are a few guidelines for designing your consent message:
- Clearly mention the name of the organization and the purpose of the bot.
- Clearly ask the user if they would like to receive messages from the bot (You can provide an interactive message with a "Yes" or 👍🏼 button).
- Users should have an option to opt out. Therefore, add the keyword in the footer through which users can opt out from the bot.

<img width="317" alt="image1" src="https://user-images.githubusercontent.com/132430123/281605857-d5e4ab08-653a-4098-af9d-61681071e4a2.png"/>

### Other pointers to remember- 
- It is recommended to have the first ever chatbot conversation initiated by the user instead of you broadcasting the message to users, even if you have user details. Broadcasting messages might lead to user reporting or blocking the bot, which can affect the overall health of the bot. Unless you have obtained user consent outside the bot (on your app or manually), the first message should always be user-initiated.
- Create a separate flow for users who type "STOP/ Opt Out" and add them to a collection. This will help you to reach out to them in future at least know how many of your users are opting out.

3. Update the Opt-in settings post-user consent. It is mandatory to update a contact's settings with Opt-in after their consent.

<img width="653" alt="image4" src="https://user-images.githubusercontent.com/132430123/281606075-975d6ec1-27aa-448b-adbd-982c2b87472b.png"/>

4. Important user information collected during registration, such as Name, Language, Training group, City, etc., should be updated in the contact profile. This will be helpful for you to refer in any flow in future

<img width="656" alt="image3" src="https://user-images.githubusercontent.com/132430123/281606152-983dce1d-5641-4294-a2fb-9cf931c86ab8.png"/>

5. Confirm key information (like Name, Language, etc.) which you would be using through out the bot, before updating the contact. Sometimes, users might enter incorrect information, which can impact the user experience throughout. 

For example, sharing a name as "My name is Krishna Priya" instead of just "Krishna Priya" can lead to the bot referring to the user with the incorrect name every time. Additionally, a user choosing the wrong language preference by mistake might discourage them from using the bot.

But please remember that, there is a tradeoff that it adds another click in the process for the user. So pick the info you would like to confirm.

<img width="741" alt="image2" src="https://user-images.githubusercontent.com/132430123/281606230-a244e1a6-b8e8-483e-b1c6-bd8c9a51f50b.png"/>

6. You can customize which flow you want to send to users who have come to your bot for the first time. You can update this new contact flow through Settings → Flows. If you haven’t set it, then users would get a pre-set new contact flow (by Glific) which might not be your preferred first flow for new users.

7. Add content in all nodes for all languages, if multiple languages are used for the bot.

8. Add users to relevant collections based on how you want to communicate with them in the future.

9. Use interactive messages wherever you want the user to choose from given options or when answers are predictable (e.g., grade, Yes/No, Gender, etc.).

10. If a flow is triggered from your end to the user, the first message of the flow should be an HSM/ Template message (because we don't know if the users are in the active session window or not).

11. Add labels for both outgoing and incoming messages for all the data you want to capture and check in the future.

12. Use appropriate names for Flows, Keywords, and Result names to make it easy to track them in the future.

13. Use emoticons, bold, italics, and media as needed. 
On a side note, Here is a [blog](https://glific.org/writing-your-first-chatbot-script/) written on writing the first chatbot script (along with some examples). Do give it a read!

14. Ensure the user does not encounter any dead ends in the bot, especially in the case of interactive messages. Make sure there is also an option for the user to send free text apart from the button options you provide, and clarify what the user is expected to do. Connect the user's response back to the main question and wait for their response so the flow can proceed.

<img width="954" alt="image6" src="https://user-images.githubusercontent.com/132430123/281606375-6c9082e1-bdb9-4430-b027-0983fb82a8a0.png"/>

15. Testing, Testing, Testing: Test the chatbot internally with at least 3 to 5 people on mobile phones before sharing it with actual users.

| Check to be done | Why it is important |
| -------- | ------- |
| Consent is collected at the beginning of the user journey on the chatbot, and their response is saved in the Contact profile  | The first message that a user receives upon joining the bot should be a welcome message followed by a consent message. Here are a few guidelines for designing your consent message: <ul> <li>Clearly mention the purpose of the bot (if needed- name of the organization/ program too)</li><li>Clearly ask the user if they would like to receive messages from the bot (You can provide an interactive message with a "Yes" or 👍🏼 button). </li><li>Users should have an option to opt out. Therefore, add the keyword in the footer through which users can opt out from the bot.</li></ul> Save the user's consent status using the "Update Contact" node, as you won’t be able to send messages to the user unless their opt-in is obtained and saved. |
| Key information (e.g., name, city, etc.) is reconfirmed with the user and saved in the Contact profile | Any important user information collected during flows, such as Name, Language, Training Group, City, etc., that will be used in the future to define the user experience should be saved in the contact profile using the "Update Contact" node. Since this information will be reused and may influence conversations, it is a good practice to reconfirm it with the user before saving.  |
| Answers are captured immediately after the question is asked | A Question node should always be followed by a "Wait for Response" node to capture user responses and proceed effectively. Otherwise, the flow may confuse the user or fail to progress properly. |
| User is hitting no dead ends in the flow   | Ensure that the user does not encounter any dead ends in the bot, unless you intentionally want to end the flow at that point. This is especially important for interactive messages—if a user types something other than the options provided, the flow should not end for them. In such cases, connect the "Others" option to a node that informs the user about what is expected and redirects them back to the main question. Then, wait for their response to ensure the flow can proceed smoothly. |
| Chatbot-initiated flows always start with HSM messages | Since you cannot determine how many of your users are within the session window, it is recommended that all chatbot-initiated flows start with an HSM message. This is also why you would encounter a warning on Glific platfprm when attempting to set a flow trigger where the first message is not an HSM message. |
| Proper nomenclature is consistently used throughout | Use appropriate names for Flows, Keywords, Contact variables, Result variables, Collections and labels to make it easy to refer them in the future. |
| Content is translated in all required languages  | If the bot is in multiple languages, do ensure all nodes (including interactive messages) are translated |
| Translations are included in the Wait for Response nodes | If the bot supports multiple languages, the "Wait for Response" node following an interactive message should include the translated options as well. Otherwise, the interactive messages will only work in the default language and not in other languages.  |
| Collections are created wherever needed to group users efficiently | Create collections wherever there is a need to engage repeatedly with a group of users sharing certain common traits (or sometimes not). Collections are typically formed based on factors like region, program, age, course selection, etc. |
| Labels are added wherever data needs to be captured for easier tracking  | While all your messages and user data are stored in BigQuery, adding labels will make it much easier to track and organize the data. Therefore, make sure to add labels while creating flows to enable efficient data usage later. |
| Messages are kept concise, user-friendly, and conversational | It is recommended to keep messages concise and conversational. Use emoticons, bold, or italics where appropriate to add a human touch to the chatbot experience.  |
| Testing- Testing- Testing | Test the chatbot internally with at least 3 to 5 people on mobile phones (not on Glific platform) before sharing it with actual users |

