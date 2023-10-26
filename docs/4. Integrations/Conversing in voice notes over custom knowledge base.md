<img width="799" alt="image4" src="https://user-images.githubusercontent.com/143380171/278219613-2255e5d6-516b-4706-ac0a-482a771b147f.png"/>

1. In the flow- by calling the “jugalbandi-voice” function and the above inputs in the webhook from the glific interface we can get a text response in desired language as well as a voice note. Send voice notes and get voice notes in return using the Jugalbandi API. 

- Prerequisites: knowledge base will have to uploaded in jugalbandi platform. [Read More](https://glific.github.io/docs/docs/Integrations/ChatGPT%20Integration/) 
- [Example flow](https://drive.google.com/file/d/1xLnLGWg_95Zhi5v0QIQpaRz_cLA9d0Er/view) (json format) which you can upload and re-use as a starting point


Elements involved 
2. [Jugalbandi Platform](https://api.jugalbandi.ai/docs#/)  
Using Jugalbandi platform for generating voice response.
 
![image2](https://user-images.githubusercontent.com/143380171/278219829-1ef5b7f4-cfed-49bc-b114-5a45c58fd897.png)


3. Call the Glific webhook 

Function to use - “jugalbandi-voice” 

<img width="754" alt="image6" src="https://user-images.githubusercontent.com/143380171/278220013-ce637f7f-8106-444e-a52b-b25c160ea45e.png"/>

## Function Body

<img width="843" alt="image5" src="https://user-images.githubusercontent.com/143380171/278220103-a95c78bb-2ad0-49f6-a7a8-9f740cb2468e.png"/>


“Input_language” : <<specify as per the jugalbandi platform>> or you can use the @contact.language 
“output_format” : <<text or voice>> 
“query_text” : <<if the input is in text format” 
“audio_url” : <<send the flow variable of the voice note received>>
“prompt” : <<any contextual or system prompt>> 
“uuid_number” : <<custom knowledge base which has been uploaded in the jugalbandi platform>>

## How to get the response back and get the voice note
- The first node in the “success” pathway is pulling the responses 

![image1](https://user-images.githubusercontent.com/143380171/278220211-5ef97299-341f-4d2d-811b-0b33abefbc53.png)



- The second node (screenshot below) is sending the computer generated voice note of the response. 

![image3](https://user-images.githubusercontent.com/143380171/278220336-961e73b6-331b-4c74-b93f-61b158f5c91a.png)




