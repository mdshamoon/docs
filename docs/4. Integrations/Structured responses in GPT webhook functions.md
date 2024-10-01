> ### **5 minutes read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Advanced`**



Reliably get json responses from parse_via_chat_gpt and parse_via_gpt_vision webhook functions


## Introduction

If the webhook call type is POST/GET then we expect the response from external apis to be json. 
But we are not doing this for the webhook type `FUNCTION`, since the response from the functions (especially LLMs) is not reliable such that they return json everytime correctly. 
Due to this we store the response of the function as a string. Due to this even if they are returning proper json we store it as a string, and we don't try to parse it.

Recently openAI added a new feature called [structured responses](https://openai.com/index/introducing-structured-outputs-in-the-api/) in which we can give the expected response schema in the request itself, thus we can have responses in reliable json formats. 
We are leveraging this and parsing the response, if its json then add the key-value pairs to the results variable.


### Using structured responses in webhook

We have to add an optional param called `response_format` in the existing `parse_via_gpt_vision/parse_via_chat_gpt` webhook body.
 
The value of `response_format` will be the same as what openAI needs in their apis, you can read it [here](https://platform.openai.com/docs/api-reference/chat/create#chat-create-response_format).

In short, if the value is `{"type": "json_object"}`, and the prompt has a `json` keyword, then the response will always be a json. Or if the value is `{"type": "json_schema"}`, then we have to pass the schema as mentioned in the [openAI docs](https://platform.openai.com/docs/api-reference/chat/create#chat-create-response_format).

For both we will get a valid json from the openAI, and those will be merged into the results variable.

## Examples

### json_object

<img width="564" alt="image" src="https://github.com/user-attachments/assets/da1bbf22-2ee4-4419-a882-d9313073b726"/>

And the corresponding webhook response we get will be

<img width="559" alt="image" src="https://github.com/user-attachments/assets/7785090b-6280-42ef-8c8a-08006b4e1439"/>

<img width="570" alt="image" src="https://github.com/user-attachments/assets/bbca9013-fa3d-4c16-88e9-cbd4a171d7fe"/>

`WARNING:` If we are using `json_object` as `response_format`, then the response will be always json but there’s no reliability that the keys will be same always. For ex in the next run the key “Volunteer ID” can be “VolunteerID” unless states explicitly in the prompt.

 ### json_schema

For the same prompt above the `response_format` would be something like

<img width="560" alt="image" src="https://github.com/user-attachments/assets/12d65963-8895-46eb-b85b-90ad23ebc0f2"/>


<img width="564" alt="image" src="https://github.com/user-attachments/assets/dd0e31af-f28f-47cd-8441-b0499bf51619"/>

The Pros of `json_schema` wrto `json_object` is that, the json keys will be always deterministic as specified in the schema.


## Resources
https://openai.com/index/introducing-structured-outputs-in-the-api/
https://platform.openai.com/docs/api-reference/chat/create#chat-create-response_format


