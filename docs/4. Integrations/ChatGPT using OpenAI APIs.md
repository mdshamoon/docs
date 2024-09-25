> ###**3 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Advanced`**

## Using ChatGPT within Glific using the OpenAI APIs

_**Leverage the capabilities of GPT models developed by OpenAI by using OpenAI APIs.**_


## How it will work 

1. Question is asked by the user after the flow is initiated
2. OpenAI API call is made using webhooks within the flow
3. Question, prompt to the model, and the type of model being called to answer the question or perform the task is provided inside the webhook params
4. The response is returned from the GPT models which can be sent to the user directly or used as desired in the flow.
   

## Using the webhook for OpenAI API call in a Glific flow

<img width="930" alt="Screenshot 2024-09-25 at 11 10 13 AM" src="https://github.com/user-attachments/assets/3307ead2-1dc1-4459-a31b-ec11579b475d"/>

_Representative image to explain the steps in OpenAI API calls in a simple flow_

[Sample flow](https://drive.google.com/file/d/1r2dKE1i95lKrz6V1BiEyvZTXgxXgX87N/view?usp=sharing)

1. Get the user question 
2. In `call a webhook` node, select `function` and paste function name as `parse_via_chat_gpt`
   
  <img width="684" alt="Screenshot 2024-02-07 at 10 52 49 AM" src="https://github.com/glific/docs/assets/141305477/f1165b6b-483c-43b4-9e8d-7bb6044d6e24" />

3. Share the following function body 
 ` {
  "question_text": "@results.question",
   "gpt_model":"gpt-4o",
   "prompt":"Provide an additional prompt for the model"
  }`

here `question_text` is the parameter name corresponding to user question. 

`gpt_model` is the parameter to help you select the best model for performing the given task. The model name must correspond to the text models given in the OpenAI API documentation here [here](https://platform.openai.com/docs/models) 

<img width="671" alt="Screenshot 2024-05-22 at 3 52 18 PM" src="https://github.com/glific/docs/assets/141305477/09211b9a-132b-4964-9388-a1aa00ed28bc" />


4. The response from GPT is shown as `@results.webhookresultname.parsed_msg`, in the given example `gpt_response` is the webhook result name. (see the first image)

_Reach out to the Glific team to flag any further customizations within this functionality_
