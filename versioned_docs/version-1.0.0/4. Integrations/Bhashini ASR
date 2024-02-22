> ### **4 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Advanced`**

**“Bhashini” is a project or initiative aimed at providing easy access to the Internet and digital services for all Indians in their native languages. The primary goal of the project is to increase the amount of content available in Indian languages, thereby promoting digital inclusivity and accessibility for a broader population**

---

## Bhashini in Glific
- Bhashini APIs are used in Glific for speech recognition
- Whatsapp user can share an audio file, which could be converted to text (in the language chosen by the user)
- The converted text could be stored in Google Sheets, used in flows/ used as per the use case

---

## Sample Chat
![image1](https://user-images.githubusercontent.com/132430123/274799942-b380b55e-c326-4f82-99bb-3c2289de81ff.jpg)

---

## Steps to integrate Bhashini ASR in Glific flows
1. Create an account in [Bhashini website](https://bhashini.gov.in/ulca/user/register#) using name & email ID. Please verify the account using the email received.
![image4](https://user-images.githubusercontent.com/132430123/274800251-9d80c40d-1ffa-4945-a542-7b405a8c60e0.png)

2. Go to ‘My Profile’ on the top-right corner. 
![image6](https://user-images.githubusercontent.com/132430123/274800442-cf1a04ff-2be4-4c18-8b22-af9dd7fb5388.png)

3. Generate ‘ULCA API Key’ (top-right corner). Also make note of the User ID on top of the button. This will be used inside the webhook call in Glific flow.
![image10](https://user-images.githubusercontent.com/132430123/274800897-be8948ad-2526-430c-8f04-f240e54c7ecc.png)

4. Make note of the API Key generated. This is required inside the webhook call used in the Glific flow for calling the Bhashini API. (Starting with 01af.. here)
![image2](https://user-images.githubusercontent.com/132430123/274801109-1d03b553-d1c3-4fe4-914d-d639d92659d3.png)

5. Now login to your Glific instance and create a flow. In this example we’ll use a flow called Maven ASR Bhashini, used for recording incoming audio queries in a Google Sheet. The flow starts with asking the user to share the query as a voice note and it is saved as ‘speech’. 

The download link for a few sample flows are given below to test it for yourself.
![image11](https://user-images.githubusercontent.com/132430123/274801303-e87be8d0-c968-40f6-826c-483fa4cdc8d7.png)


6. After the audio is captured, the Bhashini ASR API is called using a Webhook function called ‘speech_to_text_with_bhasini’ and the response is stored as ‘speech2text’.

- The function name is pre-defined, you should always use the name ‘speech_to_text_with_bhasini’ to call the Bhashini API
- The response stored (speech2text here) could be given any name of your liking, just like any other flow variable

![image7](https://user-images.githubusercontent.com/132430123/274801489-a54cb427-0e79-4b45-9b11-9745e8cfa0fa.png)

7. The webhook body is shown below. Please update the parameters as shown :

- speech : It should be updated with the result name given for the audio file captured. Here, it is saved as ‘speech’ (Step 5), hence the value is @results.speech.input (If the audio note captured was saved as ‘query’, then the value will be @results.query.input)
- userID : The userID is updated with the userID captured from Bhashini website. (Refer Step 3)
- ulcaApiKey :  The API Key needs to be updated with the ULCA API key captured from Bhashini website. (Refer Step 4)
- pipelineId : Keep the value as given in the screenshot below - “64392f96daac500b55c543cd”
- base_url : Keep the value as given in the screenshot below - “https://meity-auth.ulcacontrib.org/ulca/apis/v0/model/”
- contact : Keep the value as given in the screenshot below - “@contact”
You can read more about the variables used inside the webhook body/ Bhashini APIs [here](https://bhashini.gitbook.io/bhashini-apis/)

![image3](https://user-images.githubusercontent.com/132430123/274801670-40988471-c09d-4f4f-a9e0-fd80d869dd73.png)

8. Once the webhook is updated, you could always refer to the translated text as ‘@results.speech2text.asr_response_text’ to use it inside the flow. 

The output of the text response from the Bhashini depends on the language preference of the user. For instance if a user has selected Hindi language, the response from Glific will be in Hindi script.

9. You could additionally link the webhook to a ‘Link Google Sheet’ node to record the translated text into a spreadsheet as shown in the flow below. 

![image8](https://user-images.githubusercontent.com/132430123/274801797-ee8ad5e9-d404-43da-b4dd-97f78ca7eef2.png)

10. The Google Sheet node is configured as shown below. The fourth variable being used is ‘@results.speech2text.asr_response_text’ which will capture the translated text in the fourth column.  
![image9](https://user-images.githubusercontent.com/132430123/274801864-9bfca302-ae0d-4f12-9745-b1859fd66ff4.png)	

11. The incoming audio notes in this flow will be captured in Google Sheets as shown below
![image5](https://user-images.githubusercontent.com/132430123/274801897-a79f05c6-9f48-4eeb-93b9-3437bf2e6792.png)

## Sample Flow Links
*Test some sample flows for yourself by importing these flows to your Glific instance.*

- [Maven ASR Bhashini](https://drive.google.com/file/d/1qXxDIaP4MMDl18NsgVuhF1H8cIetJNiM/view?usp=sharing)
- [Bhasini API](https://drive.google.com/file/d/1K-KcJ0NFDIcVN2w8E1sTnev36AEGdv5I/view?usp=sharing)

## Blogs
- [Getting started with Bhashini ASR](https://glific.org/getting-started-using-asr-with-bhashini-api/)
