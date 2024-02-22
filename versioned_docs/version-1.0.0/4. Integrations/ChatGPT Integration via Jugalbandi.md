> ### **3 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Advanced`**

**Leverage the capabilities of GPT models developed by OpenAI by using Jugalbandi APIs. Jugalbandi APIs is enhancing Glific by providing Retreival Augemented Generation or in simple words, enabling NGOs to use custom knowledge base for GPT models to answer from.**

## Video Tutorial


<iframe width="800" height="500" src="https://www.youtube.com/embed/cE84OP0Uz8E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Using ChatGPT within Glific via Jugalbandi API

**Step 1:** Import the below sample flow from the Flow screen and click on the `setting` icon to configure it.

**Sample Flow**

[GPTintegration.json](https://storage.googleapis.com/cc-tides/GPTintegration%20(2).json)

**Step 2:** Click on `Flows` from the left panel and click on the setting icon to configure the imported flow. Here's how the imported flow would look like

![image](https://github.com/glific/docs/assets/40158831/3b73c25e-3bb3-44f4-9b8b-2fce8760a7cf)

**Step 3:** The first node is the `Send Message` node, which prompts the contact to ask question which will then be sent to ChatGPT using `Call Webhook` in `Step 6`

**Step 4:** The second node is the `Wait for Response` node with the result name `gpt_query`. The response from the contact will be saved in this result and can be referenced as `@results.gpt_query`.

![image](https://github.com/glific/docs/assets/40158831/a91c2a31-55b7-4fea-a8f5-ffd8a914f942)

**Step 5:** The third node is the `Send Message` which we are sending to contact while we are sending user query to ChatGPT and waiting for the response.

![image](https://github.com/glific/docs/assets/40158831/0da1319e-6a62-4dc1-a523-63fcd63304fe)

**Step 6:** Next in the `Call Webhook` node we are calling [Jugalbandi](https://www.jugalbandi.ai/) APIs by choosing `FUNCTION` in the node and adding value as `jugalbandi`

![image](https://github.com/glific/docs/assets/40158831/6dd12db6-3e08-4569-854b-1ae6acf22c2f)

When invoking a webhook, the initial step is to select a suitable HTTP method, such as `POST`, `GET`, or `PATCH`, to perform the desired function in the interaction between the caller and the Jugalbandi API.

The function is then called with three key-value pairs as the function body

![image](https://github.com/glific/docs/assets/40158831/7f509016-f7fd-43c8-83c1-b133dd95a7dc)

`url:` URL is referencing a given end point from the [Jugalbandi APIs](https://api.jugalbandi.ai/docs) some examples are given below

_below is picture showing the list of end points_

<img width="1453" alt="Screenshot 2024-02-13 at 8 05 22 PM" src="https://github.com/glific/docs/assets/141305477/972af81e-647b-429f-90ab-8ce2f5f8e635"/>

following shows how to use these end points in the webhook call parameter: 

1. to use GPT3.5: `https://api.jugalbandi.ai/query-with-langchain-gpt3-5`
1. to use GPT4: `https://api.jugalbandi.ai/query-with-langchain-gpt4`
2. to use GPT4 using custom prompt: `https://api.jugalbandi.ai/query-with-langchain-gpt4-custom-prompt`

`uuid_number:` The "uuid_number" is a special code assigned to a file when it is uploaded through the  [jugalbandi API](https://api.jugalbandi.ai/docs#/Document%20Store/upload_files_upload_files_post)  then this `UUID` is used to find the relevant information from the knowledge base and gives it back to you.

`query_string:` user query asked in flow

additionally, an extra parameter can be passed called `prompt:` in the API end points which end with `custom-prompt`. This is a system prompt that can be passed to the model. This enables NGOs to experiment with prompt engineering. Generally it can be used to provide guidelines or steps or explicit instructions for the LLM to process the 'query_string' being passed, like
-  to limit the length of response generated,
-  decline to answer if the question asked is outside the scope of the documents uploaded (this prevents what is termed as hallucination by the LLMs)
-  generate in a specific tone, ex catering to a student below the age of 15 etc.
-  anything else under the ambit of prompt engineering which allows one to get creative in eliciting responses from LLMs


Additionally, you can use [Google sheet](https://glific.github.io/docs/docs/Product%20Features/Flows/Flow%20Actions/Link%20Google%20Sheets/) feature to store response into google sheet as this data can later be analyzed to evaluate each model's accuracy and effectiveness and help you make a decision.

Using the [webhook logs](https://glific.github.io/docs/docs/Product%20Features/Flows/Flow%20Actions/Call%20a%20webhook/#checking-webhook-logs), you can view the logs of questions asked and responses received by ChatGPT.

**Step 7:** In the last step, the user is provided with their answer using the variable `@results.jugalbandi.answer`. This variable contains the response generated by the ChatGPT from custom knowledgebase, leveraging Jugalbandi APIs

## Pricing 
**Via Jugalbandi**

- No cost is involved for using jugalbandi integration in Glific. 
- Jugalbandi has it rate limited so an increased usage might lead to responses not getting generated. 
- To overcome rate limitation, orgs can acquire Open AI API access, and Jugalbandi team can create a separate instance and for the org and the cost will be as per usage of Open AI APIs. 
- Jugalbandi intends to keep the usage of the platform free of cost for the foreseeable future. 

**Cost involved in Open AI APIs**
- The cost involved in getting responses using Open AI’s APIs depends on 
      1. The type of model being used 
      2. The total number of token being processed (input + output) 
- https://openai.com/pricing contains the prices involved for each model along with details on the model
- Tokens roughly correspond to the number of words used
      - For the English language, 75 words roughly comes up to 100 tokens.
      - For Indic language, tokens usually are higher than English langauge
- To get an estimate of the tokens involved in a question + answer pair go here: https://platform.openai.com/tokenizer
- Paste the string of question, prompt and answer pair in the tokenizer to get an idea

For more details on pricing refer here: https://docs.google.com/document/d/1EBNwezbZFxhz8KyNyqqiUcebyjTFWejm6OKyxGrxhBA/edit

## Advanced Feature Webinar

<iframe width="800" height="500" src="https://www.youtube.com/embed/9fWOfnOFB9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
