### **7 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Advanced`**

## Overview
This feature enables the organization using Glific to provide personalized certificates and/or badges to the contacts upon completion of a certain task or action or a desired behaviour recorded through the flows. 

Using this feature organizations can upload multiple certificate or badge templates, and share these for the contacts  having their personalized information such as "name", or "course participation", "course completion" details or any other such contact specific details be printed on the certificates and have the certificate shared with the contacts through the flows. 

## Pre-requisites 
Custom certificates feature is released as a trial feature and as a result cannot be accessed by all orgs using Glific out of the box. For being part of the beta program and trying out this feature, please write to tejas@glific.org. The feature has to be enabled for a particular account in order to access the screens where certificate templates can be added in the Glific platform.

### Google Cloud Studio Setup
1. Enable Slides API
Use this [wizard](https://console.developers.google.com/start/api?id=slides.googleapis.com) on the selected  project in the Google Developers Console. This will automatically turn on the Slides API.

<img width="652" alt="Screenshot 2025-04-07 at 2 55 36 PM" src="https://github.com/user-attachments/assets/d5c0efc8-18cb-4081-9b21-021d7a0a3351" />

2. Enable Drive API
Use this [wizard](https://console.developers.google.com/start/api?id=drive.googleapis.com) on the selected  project in the Google Developers Console. This will automatically turn on the Drive API.

<img width="602" alt="Screenshot 2025-04-07 at 2 55 53 PM" src="https://github.com/user-attachments/assets/f87da468-9f54-4d84-8bb9-24fd64faead5" />

3. Create a new service account on the Google Cloud which has the “editor” permission to the Google Cloud Studio. Go to Google Cloud Console, and ensure that you’re in the right project. (same project which has the BigQuery and Google Cloud Storage bucket linked to your Glific account)

- a. Go to API and Services.
- b. Go to `Credentials` -> `Create Credentials` -> Select `Service Account`

<img width="488" alt="Screenshot 2025-04-07 at 2 57 21 PM" src="https://github.com/user-attachments/assets/5082595d-504f-4c1a-99ec-e33dac660493" />


- c. Give the service account an appropriate name. 
- d. Give the the “editor” access and complete the creation.

<img width="480" alt="Screenshot 2025-04-07 at 2 59 26 PM" src="https://github.com/user-attachments/assets/627d471d-0739-44eb-ab23-bc07ee511a8c" />

- e. Once the service account is created, new keys need to be generated.
- f. Go to `manage keys` -> `Create new key` ->  select `json`.
- g. This downloads the json file

<img width="458" alt="Screenshot 2025-04-07 at 3 00 23 PM" src="https://github.com/user-attachments/assets/016099b8-553d-4750-af98-48f81c951f06" />

- h. These JSON needs to be copied into the `Google Slides` provider on the `Settings` page

<img width="457" alt="Screenshot 2025-04-07 at 3 00 39 PM" src="https://github.com/user-attachments/assets/adc38b2e-186b-4b80-b259-0a0a8015d7e2" />

### Setup on Glific
Go to `Settings` -> `Google Slides` -> Activate this setting and enter the json key that was generated in the earlier step.

<img width="989" alt="Screenshot 2025-04-07 at 3 01 07 PM" src="https://github.com/user-attachments/assets/fb970bed-8c2d-4db5-ab24-b3d9622b191c" />

## Aspect Ratios 
### For best results:
- **Landscape certificates**: Use a resolution of 3300 x 2550 px.
- **Portrait certificates**: Use resolution of 816 x 1056 px
- **Badges**: Use a square format, resolution of 600 x 600 px.

<img width="648" alt="Screenshot 2025-04-07 at 3 07 49 PM" src="https://github.com/user-attachments/assets/0baada75-2e7e-49c8-bdb9-5e89c6ec651b" />


To change the page dimensions for a google slide
1. Go to `file` -> `page setup` -> `custom`.
2. This provides the menu to alter the dimensions of the page
3. It is advised to research on your own behalf for the most suitable aspect ratio of the base template that suits your use case. 

## Sending the certificates/badges to contacts

### 1. Create/ Import template design in Google Slides
1. For certificates created on canva or other softwares, export the designs as “ppt” and save it on your computer
2. The design template should have placeholders where the personalized information for the Glific contacts will be populated. 

<img width="597" alt="Screenshot 2025-04-07 at 3 10 29 PM" src="https://github.com/user-attachments/assets/2f9d73d0-5251-4343-9d93-9b0b659dcb0d" />

3. Create the new slide file 
4. Go to “import slides” in “files” 
5. Select “upload” and “browse” to get the ppt file
6. Import the file and see it as slide 2 on your ppt.
7. This url on 2nd slide will be used to create the certificate template on Glific. 

<img width="634" alt="Screenshot 2025-04-07 at 3 10 53 PM" src="https://github.com/user-attachments/assets/89e4656d-1c03-4ebe-bc26-2608b540a7ef" />

8. Provide editor access to the google service account’s client email address.

<img width="544" alt="Screenshot 2025-04-07 at 3 12 14 PM" src="https://github.com/user-attachments/assets/bf05d262-36fc-4f11-b403-926bcbf17197" />

9. Certificate url is the link to the google slide template taken by copying the link.
- Ensure that the slide template does not end with “...slide=id.p1” 
- Ensure that the slide template is saved on the Google Drive linked to organization email id.



### 2. Save the certificate template in Glific 

1. On the Glific platform, go to `Flows` -> `Certificates` -> `Create` to add a new certificate template
<img width="571" alt="Screenshot 2025-04-07 at 3 14 12 PM" src="https://github.com/user-attachments/assets/4aa939da-58a0-4c4d-a444-3bbe20ff9993" />

2. Add a title, description (optional), and the certificate url (see step 6 in above section 
3. The design template is now saved.
4. The placeholders need to be added as {1} or {2}. In single curly braces with the numbers. 
5. Ensure that the placeholders have a large enough text field to accommodate the information for contact being sent
6. The certificate is saved, and the copy id button can be used to refer back to the template while using the webhook in Glific flow. (refer steps ahead)

### 3. Use the certificate template in the flow
1. Call the webhook with `function` name as `create_certificate` and give it an appropriate result name. 

2. Go to `Function Body` and ensure that the following parameters are passed to the webhook
```
{
  "certificate_id": 5,
  "contact": "@contact",
  "replace_texts": {
    "{1}": "@contact.name"
  }
}
```
<img width="648" alt="Screenshot 2025-04-07 at 3 16 58 PM" src="https://github.com/user-attachments/assets/3e21c63e-44b6-4fd7-b635-c58ce2c2baf2" />


3. Here the `certificate_id` has to be taken from the certificate list page by using the `copy id` button for the certificate generated. 
4. `”contact”: “@contact”` has to be kept as it is. This enables the webhook to have access to all the contact variables being referenced in the webhook.
5. `”replace_texts”` parameter should contain the placeholders that should be replaced in the design template. The format for replace text has to be following 

```
“replace_texts”: { 
“{1}” : “@contact.fields.preferred_name” ,
 “{2}” : “@results…” }
```

6. Ensure that the placeholders on the template are the same as the placeholder replacement texts being referred in the webhook function body are matching.
7. The certificate url being generated can be used in the next `Send a message` node by going to the `attachments` and calling the `Expression` 
8. Based on the webhook result name defined, the Google Cloud media url is can be called by `@results.webhookresult.certificate_url`

## Error Handling

<img width="493" alt="Screenshot 2025-04-07 at 3 20 39 PM" src="https://github.com/user-attachments/assets/5f0d0268-be65-4f62-9245-2c57e6b4a00a" />

#### 1. Use the following validation before the `create_certificate` webhook call to ensure that the certificates are not generated for contacts for whom the placeholder parameters value is not present 

- a. Use the below expression to check if the variables being sent in the webhook indeed have a value for the given contact and do not end up printing a certificate like error 1 shared above. 
```
<%=  ["@contact.name", "@contact.abcd"] |> Enum.any?(&String.starts_with?(&1, "@")) %>
```
![File → Page Setup (15)](https://github.com/user-attachments/assets/d1b0235d-7624-4f12-97b2-df70905641ef)


- b. For more than 2 variables, add further commas in the first list and add the variable names in double quotes. 
- c. For just one variable, use split by custom expression and plainly enter the name of the variable and check for the condition “has only the phrase” and the variable name as shown in the screenshot. 
- d. The above expression returns the value true if any of the variables start with “@..” which indicates that the variable is empty. 
- c. This method can be used to avoid sending certificates for contacts where the variable is not present. 

#### 2. To catch certificates non-generation due to api level problems.

<img width="601" alt="Screenshot 2025-04-07 at 3 23 14 PM" src="https://github.com/user-attachments/assets/0d924466-93a2-40ad-990f-1465a17bf556" />

- a. Insert the following split by expression right after the webhook. Use `@results.webhookresultname.success` contains `true` when the certificate url is generated. 
- b. Use this condition to share a relevant message to inform the contact of certificate generation 

#### 3. “Error 1: URL ending with slide=id.p” 

This error happens because the id after slide indicates the location of the slide in the google drive and if the location is not present, then the code is not able to perform the steps like create a copy and replace the placeholder text with the variables from the webhook.

**Steps to resolve**
- a. Copy the root slide as slide 2 and slide 3
- b. Delete the slide 1 and 2
- c. Refresh the page 
- d. See the slide url is now changed. 
- e. Use this new url 

#### 4. “Error 2: Permission Issues” 

**Steps to resolve**
- a. Ensure that the design template is created in the google drive account linked to the org’s email id.
- b. Try by storing the template in a different location on the drive or on a different shared drive




