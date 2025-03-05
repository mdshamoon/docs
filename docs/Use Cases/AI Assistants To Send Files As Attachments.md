> ### **4 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Advanced`**

## AI assistants to send files as attachment.

### Summary 
The blog captures steps to enable AI assistants in Glific to send links to the files along with the text which captures the answer/ response to a question by a contact. The trick lies in providing the files search assistant with: (a) appropriately structured knowledge base, (b) an simple and structured prompt with examples output expected. 

### Premise
Before you proceed ahead, read here to get the basic understanding of how to use filesearch assistants in Glific. 

### The Use Case
For orgs that have PDFs or any other files containing specific information, who want to accomplish the following: 
Deliver the answer from the information: This is a simple file search implementation, where all the files are added as the knowledge base in text/pdf form for an assistant to then generate answers from. 
But also, deliver the files where the information retrieved by LLM resides: this is a filesearch implementation where a separate assistant can be created which has been given only the links to the files along with some description on what the file contains. 

The blog details how to accomplish point 2 explained above. 

This can be done in two ways. 
1. Delivering the file as a link in the message 
2. Delivering the file as an attachment (a file sent over whatsapp) 

### Example Use Case 
Leadership for Equity has a large repository of compartmentalized lesson plans in form of PDF files. Based on the subject, grade and lesson plan number as selected or determined earlier in the conversation, a teacher needs to be supported either by answering questions about the lesson plan and/or providing the lesson plan PDF itself.


## Delivering files as a link in the message: 


<img width="467" alt="Screenshot 2025-03-05 at 5 17 03 PM" src="https://github.com/user-attachments/assets/0cda9835-1364-4513-8aad-842f206de5f9" />

Screenshot of an response which shares the link to the file in the message itself.


**Steps**: 

1. Curate the knowledge base in such a way that link to the files are part of the knowledge base document and also which there is a brief description provided as to what kind of information the file actually contains. 

<img width="393" alt="Screenshot 2025-03-05 at 5 18 33 PM" src="https://github.com/user-attachments/assets/39e87206-dd79-4f06-a231-61f7f1289c2e" />

Screenshot from the knowledge base file, showing the title and the link to the file for the LLM. 

2. Ensure the files added in the knowledge base are universally accessible.
3. Write the prompt and include a few examples of how the answer should be generated and structured.

PROMPT (curtsey Leadership for Eqquity)
```
You're a chatbot who is an empathetic responder to queries of teachers, teacher mentors and officials engaged with NGO called Leadership for Equity. Teachers may ask questions regarding their technical queries or if they are stuck while navigating the Learning Management System (LMS) which is called "Firki". The teachers who ask you questions will need responses in the simplest language possible and in maximum 5-7lines

Instructions for you to respond to a question

1. DO NOT SHARE anything that is not there in the knowledge base. If you cannot find the answer in the given text, politely respond by saying “I do not have enough information to answer your question” 

2. Generate the answer in the language that matches the language & style of the question. For example, if they asked question in Hindi typed in English, answer back in Hindi typed in English only

3. If you get emojis/ generic greeting/ acknowledgment messages in any language(like yes, thank you, ok, ji, G, hi, bye, theek hai), respond according to their message.

4. Give responses in bullet points.

5.The document also contains links to the videos from where the transcription is being done. Please provide the most relevant youtube video link along with the generated response. 

6. DO NOT HALLUCINATE the video link. Share only the links that are present in the document.
```

This is the simplest and the fastest way to deliver files, if there is a large number of files involved, and they are already stored in a shared drive. The only con being that clicking the link will take the user outside of WhatsApp.

## Delivering the file as an attachment (a file sent over whatsapp)
<img width="679" alt="Screenshot 2025-03-05 at 5 19 53 PM" src="https://github.com/user-attachments/assets/07e851e3-8ab1-4a66-953e-c37731aecd5d" />

 Screenshot showing the file delivered as an attachment. 

**Steps:** 

1. Curate the knowledge base which has the required headings, structure as well as links to all the Google Cloud Storage URLs
2. The main point here is to have the description of content in the given file. 
3. A simple google sheet format can be done to first collate all the file urls and information of what is contained with in the files, or a simple doc with the relevant details in a structured way. 
4. This can be provided to chatGPT to convert into a JSON format. 
5. This JSON output which contains the GCS urls should be downloaded or can be saved in a doc.
6. Use this as the knolwedge base. 
<img width="514" alt="Screenshot 2025-03-05 at 5 20 27 PM" src="https://github.com/user-attachments/assets/c633fed5-5929-46dc-a2fe-aeb1c3e801bf" />

Screenshot of how the GCS urls can be structured as a knowledge base. 

7. Provide the context in a well structured prompt which instructs the assistant to only generate file urls as the response. Give it a few examples. (an example prompt shown below) 
8. In the flow, add a validation to check of the response from the assistant is a file by using split by result like shown in the flow. 
<img width="655" alt="Screenshot 2025-03-05 at 5 20 58 PM" src="https://github.com/user-attachments/assets/074bb485-2661-4904-8fa3-b6c5a4815da3" />

Screenshot explaining how a Glific flow can be structured to ensure that the file generated are validated before being sent as attachments. 

Screenshot of how flow or contact variables like subject, grade, week, day can be passed as an additional parameters to the assistant

Send it as an attachment by using the “expression” option in the attachments section.

Screenshot showing how to use webhook response to send the file as an attachment. 

PROMPT: 
```
You are an AI assistant with access to a structured knowledge base of lesson plan links for different grades and weeks and days. Your task is to retrieve the correct lesson plan link when provided with a grade, week number and day.

Use the JSON/ tabular data as your sole source of truth and do not generate or guess links that are not explicitly available in the knowledge base.

Instructions:
1. Search the JSON/ tabular knowledge base for a match based on the given subject, grade, week number and day.
2. If a matching entry exists and contains a valid link, return only the link.
3. If the entry exists but the link is missing (null or empty), respond with:
"Lesson plan link not available for the given grade and week."
4. If no matching entry is found, respond with:
"No lesson plan found for the given grade and week."
5. Do not attempt to create or fabricate links under any circumstances.

Example Inputs & Outputs:
Input: Subject: Literacy, Grade: 1, Week: 9, Day: 1 
Output: https://storage.googleapis.com/glific_lfe_bucket/UPLessonPlans/Grade1/Literacy/Literacy%20-%20Grade%201%20-%20Week%209%20-%20Day%201.pdf

Input:  Subject: Math, Grade: 2, Week: 3, Day: 2
Output: "Lesson plan link not available for the given grade and week."

Input:  Subject: Math, Grade: 2, Week: 3, Day: 2 (Assume this link does not exist in the knowledge base)
Output: "No lesson plan found for the given grade and week."

Return only the valid link or the specified error message—no additional text or assumptions
```

## Credits
The above flows and screenshots taken from chatbot developed in collaboration with Leadership for Equity. 
 
