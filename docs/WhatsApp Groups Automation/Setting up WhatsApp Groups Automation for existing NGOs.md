### **5 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Beginner`**

### Pre-requisites
1. Have an active phone number with a normal WhatsApp account linked to it.
2. Should have the WhatsApp groups created and the phone number should be part of the WhatsApp groups. (it is advised to have the WhatsApp Groups named in an appropriate manner)
3. Go to your Glific platform and see if the "WhatsApp Groups" option is shown. If it is not visible then contact Glific team POC or go to  [NGO support](https://discord.gg/YWgGxWJsMh) Discord channel and create an issue requesting for the WhatsApp Groups Automation to be enabled for your NGO account.
<img width="887" alt="Screenshot 2024-11-18 at 4 18 08 PM" src="https://github.com/user-attachments/assets/33bebb70-d70d-421e-bb22-7ae3811dba84" />



### Set-up
#### Step 1: Connecting Phone number to Maytapi 

1. Create Maytapi account at https://console.maytapi.com/login 
2. Log in with google id and link a phone number (follow instructions given on Maytapi page)
3. Set up the payment option (~30$ per phone per month) in Maytapi.
4. Or proceed with free trial which disables the connection in 3 days.
5. Make a note of the "product id" and "token" given by Maytapi. This needs to be shared with the Glific team.

<img width="1276" alt="Screenshot 2024-11-18 at 3 52 57 PM" src="https://github.com/user-attachments/assets/86b89bfb-4d7d-414b-93b2-ad4305122093" />

#### Step 2: Connecting Maytapi to Glific 

1. In Maytapi go to webhook and enter the following webhook url : `https://api.**ngo-shortcode**.glific.com/maytapi`

<img width="1274" alt="Screenshot 2024-11-18 at 3 59 18 PM" src="https://github.com/user-attachments/assets/83972900-4dd5-4f53-9f6f-e1c9f3ef054a" />

Ex, if your glific domain is `www.xyz.glific.com` then use the maytapi webhook url becomes `https://api.xyz.glific.com/maytapi`

2. In Glific, go to setting, go to Maytapi, add product and token id from the Maytapi
<img width="1277" alt="Screenshot 2024-11-18 at 3 57 07 PM" src="https://github.com/user-attachments/assets/59cf5745-bed1-4d88-8bb9-128816653c6e" />

4. Click on save
5. This completes the set-up

You should be able to see the whatsapp groups option in the left panel that the phone number is part of and perform operations like send, receive and schedule message to a group of groups. 

### Pricing
#### MayTapi
1. Free trial for 3 days
2. 30$ per month per phone being linked to Maytapi
3. Upto 3 phones can be linked per Maytapi account 

#### Messaging 
No separate cost for messaging needs to be paid.

### Video Showcase
<iframe width="560" height="315" src="https://www.youtube.com/embed/RdYJTBmSXYs?si=r1lCTEq2eO18ZEXo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
