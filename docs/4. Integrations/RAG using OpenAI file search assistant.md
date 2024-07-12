###**3 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Advanced`**

## Question answer (in text) over custom knowledge base using OpenAI's assistant APIs

_**Provide your documents, and system prompt, get GPT model to answer questions of your users over WhatsApp from the provided documents, with the ability to handle the follow up questions asked by the users**_

_This is the implementation of RAG system provided by OpenAI in Glific_

## How to get started 

In this implementation, NGOs must provide the following to Glific team 

1. The files being used as knowledge base
2. A system prompt (Glific team can help in this based on use case)
3. Glific team will create the assistant in Glific's OpenAI account
4. Glific team will provide the `assistant_id` to reference in the webhook calls

As per the publication of this document, the organization does not need to have a OpenAI API account. Glific's account will be used. 

<img width="485" alt="Screenshot 2024-06-05 at 12 48 03 PM" src="https://github.com/glific/docs/assets/141305477/bba000f8-4066-4eaf-b865-c47413e024e8"/>

_Above is the representative image of the assistant which will be created in OpenAI's playground by Glific team on NGO's behalf_

## Pricing
NGOs can use this feature for free by following this document 

## How it will work 

1. Once the flow is initiated, the user is prompted to ask their question
2. Webhook nodes have to be used with relevant parameters to generate get the responses

## Using the webhook for OpenAI Assistants call in a Glific flow

<img width="867" alt="Screenshot 2024-06-05 at 12 22 00 PM" src="https://github.com/glific/docs/assets/141305477/5021fa87-80ee-4e54-9d23-e9f17ba17358"/>

0. Get the sample flow here [Sample flow
](https://drive.google.com/file/d/1PBcaLT3paJ8gKAeJEdLUuSPf-nxpHYKe/view?usp=sharing)
1. Get the user question
2. In call a webhook node, select function and paste function name as `filesearch-gpt`
<img width="541" alt="Screenshot 2024-06-05 at 12 25 17 PM" src="https://github.com/glific/docs/assets/141305477/93b24d77-84c4-4981-8ae7-15f07f0dde02" />

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

<img width="620" alt="Screenshot 2024-07-11 at 5 07 58 PM" src="https://github.com/glific/docs/assets/141305477/40de9e15-07ec-41de-8294-64eb08d3c71e" />


_this is the function body passed in the subsequent webhooks to answer follow up questions_

## Limitations
1. The changes in the knowledge base, or the prompt have to be routed through the glific team

## Video of showcase
<iframe width="560" height="315" src="https://www.youtube.com/embed/J_sFgOUFFOA?si=KfDAPkoUreBudM8Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

_Watch from 12 minute mark to know the exact steps to follow_
