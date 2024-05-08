# Integration with llm4dev 

- Webhooks to facilitate retrieval augmented generation (GPT generated answers from custom knowledge bases), 
- chatbot flows with conversational memory (previous conversations) 
- scaled deployment 

## Steps to get started. 

1. Go to `Settings` and find `LLM4Dev` Update the `API url` and `API key`
2. For API url provide the following input ‘https://openllm.projecttech4dev.org’
3. For API key, reach out to Glific team on discord [here](https://discord.gg/YWgGxWJsMh)
4. Mark it `Active`
   
<img width="988" alt="Screenshot 2024-05-02 at 2 14 23 PM" src="https://github.com/glific/docs/assets/141305477/d82a4dc9-01e4-4ca9-9606-1029c5c907dc" />

## Uploading a knowledge base

1. Go to `Manage`
2. Find the `Knowledge bases`
3. Upload documents
<img width="1304" alt="Screenshot 2024-05-02 at 2 18 03 PM" src="https://github.com/glific/docs/assets/141305477/cbbe762d-92fa-436e-99fc-62ceb305f0b1"/>

5. Give it a category name
6. Documents are clubbed under a `category id` based on the category name
7. This is done so as to be able to reference different knowledge bases for different programs or different tasks.
<img width="586" alt="Screenshot 2024-05-02 at 2 19 47 PM" src="https://github.com/glific/docs/assets/141305477/0578a348-d729-46f9-976b-2b1d0df2039f"/>

**Present limitations**
1. The documents have to be in "pdf" format.

The above limitations will be resolved in the next iteration of the build (in a month or so)

## Using in a flow

1. The functionality can be accessed by calling a webhook. 
2. Follow the below specifications in the webhook node.
3. Make sure you give an appropriate webhook result name. (in the example shown below the webhook result name is `llm4dev_webhook`
5. choose the webhook type to be `Function`
6. The function name has to be ‘llm4dev’
<img width="682" alt="Screenshot 2024-05-02 at 4 48 51 PM" src="https://github.com/glific/docs/assets/141305477/70c16dc5-840b-4e4a-8c13-d70f069dd876" />


8. Go to function body.
9. The following webhook params can be created. 
<img width="662" alt="Screenshot 2024-05-02 at 4 52 01 PM" src="https://github.com/glific/docs/assets/141305477/5059f824-e934-4091-a598-e84033d3fde2" />

`“question”:””,`
- This should contant the result from the flow containing the question of the user. 

`“category_id”:””`
- This is the numeric value referencing the knowledge base uploaded. 

`“system_prompt”:””,`
- This is an optional parameter.
- This parameter to provide a prompt for the LLM to generate responses at the nodel level. 
- Not providing this parameter will make the system fall back on a mandatory system prompt that the org can set up when creating acquiring the llm4dev API keys from the Glific team.

`“gpt_model”:””, `
- This is an optional param, by default a model selection is done in the backend if no specific model is called out here.
- This can be a list of models, the proper naming of which can be obtained form [OpenAI API documentation]([url](https://platform.openai.com/docs/models/overview)) 


9. The response of the above webhook has to be `@result.webhookresultname.answer`

<img width="572" alt="Screenshot 2024-05-02 at 4 52 32 PM" src="https://github.com/glific/docs/assets/141305477/9a5f72e9-8e0b-4f88-8e76-b8e71274936b" />

To leverage the conversational memory, in the subsequent webhook call, following additional parameter needs to be added.

<img width="709" alt="Screenshot 2024-05-02 at 4 53 22 PM" src="https://github.com/glific/docs/assets/141305477/3a7f22c2-0d3b-41a1-b137-a833406619c5"/>


`“session_id”:”” `

- The value of the ‘session_id’ is to be passed as above. 
- As the `session_id` is the variable in the response to the API call, which is referencing the conversation that has taken place previously.


<img width="445" alt="Screenshot 2024-05-02 at 2 47 24 PM" src="https://github.com/glific/docs/assets/141305477/3492740b-e668-4999-92cb-c05e32fe3faa"/>


Demo flow: https://drive.google.com/file/d/1B6gCZ7NFg3lQqAvTsIkn8rqxHCAFRlgu/view?usp=sharing



