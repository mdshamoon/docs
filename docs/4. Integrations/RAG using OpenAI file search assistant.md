###**3 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Advanced`**

_**Provide your documents, and system prompt, get GPT model to answer questions of your users over WhatsApp from the provided documents, with the ability to handle the follow up questions asked by the users**_

_This is the implementation of RAG system provided by OpenAI in Glific_

## How to create an OpenAI Assistant from Glific UI

1. Go to the `Assistants` page from the left panel.

<img width="1409" alt="Screenshot 2024-11-18 at 2 54 10 PM" src="https://github.com/user-attachments/assets/1aa8bcaa-b718-4c95-bca9-5b34059b077e" />

4. Click on `Create`. This creates an blank assistant.
 
<img width="1200" alt="Screenshot 2024-11-18 at 2 55 05 PM" src="https://github.com/user-attachments/assets/1597c038-f87f-4ad0-ab81-9948368adfc5" />

6. Define the parameters for your assistant by
   - Choosing the most relevant model from the first drop down.
   - Provide a name to the assistant.
   - Provide a system prompt in the "Instructions" field. Read more on prompt engineering [here](https://glific.org/a-simple-guide-to-using-large-language-models/).
   - Set the temperature. (Temperature can be set between 0 to 2. Keeping a higher value for temperature setting increases the creativity or randomness with which the LLM generates a response. It is recommended to keep temperature at 0)
  
7. Add the files or knowledge base for the assistant to generate an answer from by uploading the files. Check here for the supported file formats by the OpenAI APIs. Click on add to complete the setup of the assistant.
   
  <img width="698" alt="Screenshot 2024-11-18 at 2 59 41 PM" src="https://github.com/user-attachments/assets/e45b7938-ce60-4040-90e9-685c52e75800" />

9. The `assistant id` provided below the assistant name is the id that needs to be copied from this page. This id will be used in the webhook nodes in the flow editor.

<img width="523" alt="Screenshot 2024-11-18 at 3 15 05 PM" src="https://github.com/user-attachments/assets/02c62482-0fd8-4948-96cc-847f8e7345be" />

## Using the OpenAI assistant in floweditor 
Following sections details how to use assistant to answer questions from the user or create conversations. 

### Handling text inputs and outputs
Following section shows how to use `filesearch-gpt` webhook function in Glific flows to take users' text responses as inputs and provide a text and response. 



<img width="867" alt="Screenshot 2024-06-05 at 12 22 00 PM" src="https://github.com/glific/docs/assets/141305477/5021fa87-80ee-4e54-9d23-e9f17ba17358"/>

0. Get the sample flow here [Sample flow
](https://drive.google.com/file/d/1PBcaLT3paJ8gKAeJEdLUuSPf-nxpHYKe/view?usp=sharing)

1. Get the user question
2. In call a webhook node, select function and paste function name as `filesearch-gpt`
<img width="541" alt="Screenshot 2024-06-05 at 12 25 17 PM" src="https://github.com/glific/docs/assets/141305477/93b24d77-84c4-4981-8ae7-15f07f0dde02"/>

3. Go to `function body` and pass the following parameter
`{
  "question": "@results.flowresult",
  "assistant_id": "asst_xxxxx",
  "remove_citation":true
}`

- in `question` parameter pass the flow variable containing the question asked by the user
- in `assistant_id` pass the assistant id obtained from Glific team in step 4 of "how to get started"
- in `remove_citation` pass `true` to prevent cryptic citation marks from showing up in the response.

<img width="624" alt="Screenshot 2024-07-11 at 5 06 50 PM" src="https://github.com/glific/docs/assets/141305477/8ce8eb0e-5cb9-492e-a3e7-fc52260fe24b"/>


4. The response generated will be printed as @results.webhookresultname.message, in the given example filesearch is the webhook result name. (see the first image)

5. To answer the subsequent questions based on the context of the previous conversation, the subsequent webhook pass the additional parameter called `thread_id`. This parameter has to have the value of `@results.previouswebhookname.thread_id`. In the example shown, the previous webhook result name is "filesearch"

<img width="620" alt="Screenshot 2024-07-11 at 5 07 58 PM" src="https://github.com/glific/docs/assets/141305477/40de9e15-07ec-41de-8294-64eb08d3c71e"/>


_this is the function body passed in the subsequent webhooks to answer follow up questions_

### Handling voice inputs and outputs responses 

Following section shows how to use `voice-filesearch-gpt` webhook function to take users' voice notes as inputs and provide a text and voice note output response in the desired langauge

<img width="845" alt="Screenshot 2024-08-21 at 12 05 00 PM" src="https://github.com/user-attachments/assets/ce0c771a-c15b-4017-8e7f-10675e5f367c"/>

0. Get the sample flow here [Sample flow
](https://drive.google.com/file/d/1nOch0H5JTLSasSddeGvggP44vH9IV8Vk/view?usp=sharing)

1. In call a webhook node, select function and paste function name as `voice-filesearch-gpt` as shown below
<img width="577" alt="Screenshot 2024-08-21 at 12 05 17 PM" src="https://github.com/user-attachments/assets/320d056e-4456-4ff2-be98-895fa4b5c926"/>

2. Go to `function body` and pass the following parameter
`{
  "contact": "@contact",
  "speech": "@results.audio_query.input",
 "assistant_id": "asst_OvmKO60CQOnHlwmnpPqqzTel",
 "remove_citation": true,
 "source_language": "@contact.language",
 "target_language": "hindi" }`

<img width="548" alt="Screenshot 2024-08-21 at 12 21 57 PM" src="https://github.com/user-attachments/assets/d52c6ad5-7183-4bad-8572-a4b547add115"/>


- `speech` is the result name which is storing the voice note sent by the user
- `assistant_id` is the assistant id created in OpenAI playground
- `source_langauge` is the expected language of the user
- `target_language` is the language that the response voice note needs to be in
- `remove_citation` pass as true to avoid citation marks to be part of the response voice note

4. The text response generated will be printed as @results.webhookresultname.translated_text, in the given example `gpt_voice` is the webhook result name. 
 <img width="574" alt="Screenshot 2024-08-21 at 12 13 49 PM" src="https://github.com/user-attachments/assets/86d81c30-f9fc-4ad5-8d32-b2248491c315"/>

6. The voice note response will have to be added as an expression attachment in another send message node as @results.webhookresultname.media_url
<img width="568" alt="Screenshot 2024-08-21 at 12 13 39 PM" src="https://github.com/user-attachments/assets/6aa18420-a158-43ff-b631-ad9f288c2135"/>

### Pricing
NGOs can use AI featuresin Glific without any extra associated cost of inferencing. Glific is supported by OpenAI to in turn enable more NGOs to experiment, pilot and run programs using LLMs in order to further the impact without being constrained by cost. 

## Limitations
2. To get the voice notes as a response, the Glific account must have google cloud platform linked.
   

## Video of showcase
<iframe width="560" height="315" src="https://www.youtube.com/embed/J_sFgOUFFOA?si=KfDAPkoUreBudM8Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

_Watch from 12 minute mark to know the exact steps to follow_
