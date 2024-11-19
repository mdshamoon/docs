### **5 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Beginner`**

### Contents
1. [Pre-requisites](#pre-requisites)
2. [Set-up](#set-up)
8. [Pricing](#pricing)

### Pre-requisites
1. Have an active phone number with a normal WhatsApp account linked to it.
3. Should have the WhatsApp groups created and the phone number should be part of the WhatsApp groups. (it is advised to have the WhatsApp Groups named in an appropriate manner)


### Set-up
#### Step 1: Linking phone number to Maytapi account


1. Create maytapi account https://console.maytapi.com/login
2. Log in with google id and link a phone number (follow instructions given on Maytapi page)
3. Set up the payment option (~30$ per phone per month) in Maytapi. (For difficulties with the payments reach out directly to Maytapi team on info@maytapi.com keeping your Glific team POC in loop.)
4. Or proceed with free trial which disables the connection in 3 days.
5. Make a note of the "product id" and "token" given by Maytapi. This needs to be shared with the Glific team. 
<img width="1276" alt="Screenshot 2024-11-18 at 3 52 57 PM" src="https://github.com/user-attachments/assets/408e6382-4c49-4a6c-ab51-67c185ff59b7" />


#### Step 2: Filling the Glific onboarding form
1. Fill the Glific [onboarding form](https://prod.glific.com/organization-registration).
  - For "App Name" and "Gupshup API key" fill the following details respectively
   - App name: 2023OBF1
   - Gupshup API key: 9imaygevg6fuwa82s54hbuyoiuuohmug
  - Follow the rest of the onboarding form documentation [here](https://glific.github.io/docs/docs/Onboarding/Onboarding%20Form%20Fill%20Up/)   
<img width="824" alt="Screenshot 2024-11-18 at 3 35 30 PM" src="https://github.com/user-attachments/assets/68ddcd1b-8872-4b92-b2ba-e0074d602f6e" />
2. After completion of this step, Glific team will share the platform url, along with the log-in credentials.


#### Step 3: Connecting Maytapi to Glific 

1. In Maytapi go to webhook and enter the following webhook url `https://api.**ngo-shortcode**.glific.com/maytapi`

Ex, if your glific domain is `www.xyz.glific.com` then use the maytapi webhook url becomes `https://api.xyz.glific.com/maytapi`

<img width="1274" alt="Screenshot 2024-11-18 at 3 59 18 PM" src="https://github.com/user-attachments/assets/a2ff1a6e-b034-47e5-90de-ce2bfe37df44" />

2. In Glific, go to setting, go to maytapi, and check if the product and token id as provided my Maytapi is added. 
3. If it is not, then add the product and token it from Maytapi and click save.
4. This completes the set-up
<img width="1277" alt="Screenshot 2024-11-18 at 3 57 07 PM" src="https://github.com/user-attachments/assets/b76f6415-4ee0-4d56-9555-1304886df5d5" />

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
