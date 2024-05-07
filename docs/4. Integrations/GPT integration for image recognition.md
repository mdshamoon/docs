# GPT integration for image recognition
Recognize the contents in an image being sent by your users. Some example usecases can be to grade worksheets, digitse the inputs written on pages on the go, perform analysis of condition of skin, water quality, wounds, environment etc.

## How to use in a flow 

1. Get the image input from the user 
2. Go to call a webhoook node
3. In the type of webhook call select `function`
4. Give the webhoook an appropriate result name. In the exmaple shown the webhook result name is `gptvision`
5. Enter `parse_via_gpt_vision`

<img width="527" alt="Screenshot 2024-05-07 at 6 20 20 PM" src="https://github.com/glific/docs/assets/141305477/0741e6a0-1e8e-4b30-a246-e6ff454d90c6"/>

  
7. provide the following params in the function body

  `"url":"",` in this field pass the flow variable accepting the image response from the user 
  
  `"prompt":""`in this field pass the prompt, or instructions you wish to convey to the AI model towards processing the image input
  
  <img width="529" alt="Screenshot 2024-05-07 at 6 17 37 PM" src="https://github.com/glific/docs/assets/141305477/5d5e202c-dd9c-4569-94da-ab53d535d749"/>

7. Use the variable `@results.webhookname.response` to print the response from the AI model. In the above example the response will be printed by calling `@results.gptvision.response`

<img width="949" alt="Screenshot 2024-05-07 at 6 25 14 PM" src="https://github.com/glific/docs/assets/141305477/d5bca9f1-06be-4374-ba96-b5371fc36581" />

Here is an exmaple flow for you to import and try it out: https://drive.google.com/file/d/1p-L5bPnXtsZZKBA3_pJr5wsdeQm3taVD/view?usp=sharing
