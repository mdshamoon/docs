> ### **2 minutes read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`Intermediate`**

---

**Allows Glific to auto translate content in the default language of flow editor, and have the translations populated in in the other languages enabled in the Glific instance.**

_The feature is in beta version and can be enabled/ disabled for any given organization’s Glific instance upon request in the [discord](https://discord.gg/CAUgdQsZAd) channel or via writing to spoc from the Glific team._

**Overview**

1. Create flow in default language
2. Have translations auto populated for all the languages selected in your Glific instance
3. Have the flow exported as CSV (with or without translations) to be proofread and corrected by language experts
4. Import translations as CSV
5. The process (automatic translations -> export translations -> import translations) chain can be used as a whole or in parts depending on your needs

**How it works**

1. Find top bar, go to `More` and find `Translate` button is in the flow editor
   
<img width="1314" alt="Screenshot 2024-03-04 at 4 17 12 PM" src="https://github.com/glific/docs/assets/141305477/6a70ea75-d40c-4a9d-919a-a6d18fc0536f" />


2. There are 4 options to get Translations
  
<img width="436" alt="Screenshot 2024-03-04 at 4 17 59 PM" src="https://github.com/glific/docs/assets/141305477/558e2974-c280-40ad-9cfd-1e6b2a4449d6" />

- `Automatic translation`: takes the content in the default language flow and adds translations in all the langauges enabled within the the flow. This changes the flow, publishing the after this step will modify the flow to have translations done 

- `Export with auto translate`: takes the content in the default language flow, adds the translations in the languages enabled and exports the flow and content as a CSV, for further proof reading/ correction work to be done by language experts. The flow is not changed, and the CSV containing translated content has to be uploaded via `import translation` for the translations to reflect in the flow. 

- `Export translations`: Exports the content present into CSV format. This can be used to add translations manually, and then import the CSV with translated content in the flow directly. Or to just export the already available translations of the flow for further proofreading and corrections.

<img width="732" alt="Screenshot 2024-01-29 at 5 20 30 PM" src="https://github.com/mahajantejas/docs/assets/141305477/71d7bdc9-952f-4a43-866e-664ab30cdfce" />

- `Import translation`: This enables importing of the proofread and corrected content as a CSV and have the content in the given Glific flow updated.

**Things to watch out**

1. This is not instantaneous and will take some buffering time (5-7 mins) depending on the number of languages, the number of send message nodes and the amount of content in them
2. The default language flow has to be in English 
3. Only content present in `send contact a message` nodes from the flow are translated, which means at present - content in `“interactive messages”`, `wait for response` nodes, are not translated.
4. For flows with high number of nodes, the translations may not happen completely in the first shot, doing it a second time will translate the remaining nodes
5. Exported CSVs of the flows without translations, can be auto translated, proof read and imported
6. While importing translations
- Do not change the formatting of the exported CSV
- Do not edit anything in the fields action, UUID, language codes 
- Uploading CSV with Blank/ Empty cells where translations are expected to be erases the translations in the given nodes (if the translations are already present)
7. In case automatic translations fail, which may happen for flows that contain large text messages (more than 200 words in the same node). In such cases, `export without translations` and then create translations using `=googletranslate` formula then `import translation`

<img width="737" alt="Screenshot 2024-01-29 at 5 20 41 PM" src="https://github.com/mahajantejas/docs/assets/141305477/aa4b9057-3cbd-47ca-966c-d2fbf5549b06" />

**When it will not work**

1. Incase there is multilingual content flows in the default language 
2. Incase default flow is in a language other than English
3. Incase there are multiple `send contact a message` nodes with more than 200 words of text
4. Incase there are loads of active languages in the given flow
5. Incase of low connectivity
   
**Under the hood**

1. The translation is being done by GPT3.5 model. Glific is using this via Open AI API keys acquired and for the initial phase bearing the cost of token being exchanged. 
2. The system is designed in a way that in future, other translation engines ex- Google translate etc can be plugged in to replace the GPT3.5 model.
3. Requirement [docs](https://docs.google.com/document/d/1_bxakmNM3QQf--OxU3tRGmAsxy9MV56tsjrH3wLbPPo/edit#heading=h.719pbrrwuvy9) 
4. Showcase [ppt](https://docs.google.com/presentation/d/1gZDkBm9ybS2rZi2MX4vV6espf_3qMWRgM9YD5_JQ7Og/edit?usp=sharing)

