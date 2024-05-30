> ###**3 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Advanced`**

## Using ChatGPT within Glific using the OpenAI APIs

_**Leverage the capabilities of GPT models developed by OpenAI by using OpenAI APIs.**_

## Pre-requisites 
1. Create an account in OpenAI platform [platform](https://openai.com/product) 
2. Create new API keys
3. Make sure there is enough credit in OpenAI account to allow usage.
4. Pricing for API calls is as per OpenAI platform [pricing](https://openai.com/pricing)
   
<img width="1060" alt="Screenshot 2024-02-07 at 10 50 58 AM" src="https://github.com/glific/docs/assets/141305477/d3c22780-a4ae-4aaa-b196-1d079fce7eb5" />

_Above is a representative image from the OpenAI platform account_

## How it will work 

1. Question is asked by the user after the flow is initiated
2. OpenAI API call is made using webhooks within the flow
3. Model being called to generate responses is `gpt-3.5-turbo-16k`
4. The response to the question is then sent to the user

## Steps to follow to set up OpenAI API in Glific platform
1. Go to `Settings`, find `OpenAI (ChatGPT) (Beta)`
2. Click on `is active` and paste the OpenAI API key from your OpenAI platform account

<img width="591" alt="Screenshot 2024-02-07 at 10 48 51 AM" src="https://github.com/glific/docs/assets/141305477/87adef8e-1858-4aa6-8b46-7f976cfbb9fb" />

## Using the webhook for OpenAI API call in a Glific flow

<img width="1069" alt="Screenshot 2024-02-07 at 9 59 24 AM" src="https://github.com/glific/docs/assets/141305477/babb9e27-fce5-4b2b-81d9-58017fd1a079" />

_Representative image to explain the steps in OpenAI API calls in a simple flow_

[Sample flow](https://drive.google.com/file/d/1jl0NWn73YlK1qMRedaPnGCQwDKHfG_7j/view?usp=drive_link)


1. Get the user question 
2. In `call a webhook` node, select `function` and paste function name as `parse_via_chat_gpt`
   
  <img width="684" alt="Screenshot 2024-02-07 at 10 52 49 AM" src="https://github.com/glific/docs/assets/141305477/f1165b6b-483c-43b4-9e8d-7bb6044d6e24" />

3. Share the following function body 
 ` {
  "contact": "@contact",
  "results": "@results",
  "question_text": "@results.question",
   "gpt_model":"gpt-4o",
   "prompt":"Provide an additional prompt for the model"
  }`

here `question_text` is the parameter name corresponding to user question. 

`gpt_model` is the parameter to help you select the best model for performing the given task. The model name must correspond to the text models given in the OpenAI API documentation here [here](https://platform.openai.com/docs/models) 

<img width="671" alt="Screenshot 2024-05-22 at 3 52 18 PM" src="https://github.com/glific/docs/assets/141305477/09211b9a-132b-4964-9388-a1aa00ed28bc" />



4. The response from GPT is shown as `@results.webhookresultname.parsed_msg`, in the given example `gpt_response` is the webhook result name. (see the first image)


## Limitations 
1. Text to speech and speech to text models cannot be used via this webhook call.

_Reach out to the Glific team to flag any further customizations within this functionality_
