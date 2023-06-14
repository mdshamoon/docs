> ### **3 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Intermediate`**
___

This is for you if: 
- **You are struggling to acquire users for your chatbot due to challenges with users clicking the link or users not typing the keyword and want to ease the friction of them starting chatbot flows easily.**
- **You are operating your WhatsApp chatbot on Glific and have an Exotel number.**

## Setting up on Exotel
1. After logging in, make sure you have a number for the state where you expect most calls from.

2. Go to address book and create 2 lists – success and failure (success is for those whose missed call returned a response from Glific server successfully and failure for where it fails)

![1](https://user-images.githubusercontent.com/132430123/245516283-d1cbf291-febf-45fd-bee9-233401097dc9.png)
<br />

3. Go to App Bazaar in the menu and create a new app
![2](https://user-images.githubusercontent.com/132430123/245516373-660c9733-0850-491d-b526-024d483308e5.png)
<br />

4. Proceed to Edit the app and select and drop into the selection box the component called “Passthrough”
![3](https://user-images.githubusercontent.com/132430123/245516442-16892ecd-a3ea-46a5-a761-078a36c7073e.png)
<br />

5. When you drop it in place, you will see a new box opening up like below. Paste the link in this format – https://api.xxx.tides.coloredcow.com/webhook/exotel/optin where xxx is your org’s name. For example: https://api.staging.tides.coloredcow.com/webhook/exotel/optin
![4](https://user-images.githubusercontent.com/132430123/245516521-b40138a9-7fa4-4288-bfa3-dc7ea7b5acc0.png)
<br />

6. In the “In response” section, drag list manager in both boxes. Click on the list manager for “Once URL returns OK” and in the box which opens next, select the list for successful calls and in the section called “next” below, drag and drop Hangup.
![5](https://user-images.githubusercontent.com/132430123/245516586-25b97585-1682-451a-b9ca-db18e0a1a2b5.png)
<br />

7. In the previous card, click on the list manager under the head “If the URL returns anything else” and in the box which opens, select the list for all failed calls. In the Next header, drag and drop Hangup.
![6](https://user-images.githubusercontent.com/132430123/245516641-6d06323a-d8fc-4d62-9cd1-c4cb0b721a01.png)
<br />

8. Select save. This completes the setup on Exotel side.
___
## Integrating Exotel in Glific

1. You need to be an admin to get this access.

2. Login and go to flows and identify the flow your Exotel missed call should start. Select `Edit` to open the next screen
![7](https://user-images.githubusercontent.com/132430123/245516685-6e2aea22-2b6e-4acf-917b-f6e36f8e9d22.png)
<br />

3. In the URL, note down the Flow ID as highlighted. Click on `CONFIGURE` to make sure you have done the next 2 steps.
![8](https://user-images.githubusercontent.com/132430123/245516740-49938862-da43-4d61-b6a9-edec8241ea6d.png)
<br />

4. Start the flow with the Card for `Update Contact.` See next step to configure it.
![9](https://user-images.githubusercontent.com/132430123/245516813-3f0b39fd-c9e3-4b2e-bbd5-301d72920032.png)
<br />

5. In the drop down `Select what to update`, Select `Settings` and in the box below type “optin”. This will set the opt-in flag to true in WhatsApp. This is essential for the next step. Without this, no HSM template can be sent.
![10](https://user-images.githubusercontent.com/132430123/245516873-e3f22408-68a7-416f-b329-2331b9f90ffe.png)
<br />

6. Via Gupshup create a marketing template with a button. FaceBook seems to only approve marketing messages as of now – maybe it is due to the increased revenue this type of message offers. This button can be anything. The button will send a message from the user’s side after the flow has been started, so that the bot can actually send messages to the user.
![11](https://user-images.githubusercontent.com/132430123/245516912-389df91c-9104-4179-ae1e-e9a54f49aa22.png)
<br />

7. Map this message like this after the Optin message as shown in Steps 5 and 6 above. To create this – Select “send a message” in the dropdown, and then click on WhatsApp tab in the top right of the card and configure as show in the second image in this step – you have to select the template you just got approved in Gupshup.

![12](https://user-images.githubusercontent.com/132430123/245516966-fcdf34ca-4e9d-4074-874f-1cf5b98a5cbf.png)
<br />

![13](https://user-images.githubusercontent.com/132430123/245517020-c5509dc1-1cf2-49af-8ce1-23dfcf42b9c9.png)
<br />


8. Save the flow and go to `Settings` screen. Select `Edit` in the Exotel box as shown in the screen below. Remember, only admins can do this.
![14](https://user-images.githubusercontent.com/132430123/245517103-e21f26c9-8576-4f64-9437-a9f1856e8434.png)
<br />


9. Set `is Active` to true. Enter the Glific Flow ID you noted in Step 3 above. Set direction of call to `Inbound` and write your Exotel number in the last box and save.
![15](https://user-images.githubusercontent.com/132430123/245517175-d87d0e4f-fb78-44a0-87ad-5e79717709c0.png)
<br />


10. This completes your Exotel setup and linkage of Exotel to the bot.


A trick with your mobile number
1. On the mobile with your Chatbot number, activate unconditional call forwarding to the Exotel number. This way, your user can call the chatbot number and they will see their chatbot responding to them on WhatsApp.


___
## Best Practices
1. Test the missed call function thoroughly. Best way to do this is to use mobiles from different carriers, and prepaid and postpaid services.
2. Monitor the “failed calls” list weekly and contact those whose missed call failed.
3. If you have a prepaid number for the chatbot, set a calendar reminder to recharge 2 days in advance. If the balance expires, and then you recharge, the call forwarding is broken. In this case, you need to disable call forwarding on your mobile to Exotel and then re-enable after 5 minutes. All missed calls in this downtime are lost.

**Typical Costs** (this can change and is provided as an estimate for you to budget and plan expenses):
Exotel charges Missed call at Rs 0.3
WhatsApp sends marketing template messages at Rs 0.7

___
## Reference Article

- Reap Benefit has experimented with Exotel for their onboarding. [Click Here](https://glific.org/missed-call-feature-solving-the-design-flaw-for-easy-onboarding-and-continuous-re-engagement-of-your-beneficiaries-into-your-glific-chatbot/) to read more.

