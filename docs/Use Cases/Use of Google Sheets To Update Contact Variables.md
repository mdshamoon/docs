### **4 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Advanced`**

## Summary 
The blog details solutions implemented for Saturday Art Class using a combination of AI assistants, Google Sheets integration and a use of contact variables as flags and counters to route the teachers accessing the chatbot of Saturday Art Class. The main purpose of using the chatbot is to enable teachers to access art class plans which can be conducted for the grades she is teaching, and enable submission of pictures of art class conducted by the teachers in the simplest manner. 

## Overview 
Problem statements that needed be solved 
1. **Make the flows less complicated**: Specifically, reduce the steps and complexity involved to onboard new organization to start with the Art Programs, as well as make the flows customizable such that new partnerships can be done to serve a diverse set of requirements like reduce or increase the number of grades, or art class plans for grade or bypass submission of images for the teachers and so on.
2. **To solve the challenges faced in data analysis**: SArC team unable to find out how many art class are accessed by a particular teacher, which art class is the teacher doing at any given point in time and overall submission rates. Owing to the way 
3. **Implement structured folders in Google Cloud Bucket**:  for storing the media shared by the teachers, such that all the media (pictures) from a partner org is stored in respective folders, and can be retrieved on a grade and art class number basis. 

## Google Sheets Integrations FTW 

### Use case 1: Keywords and Meta Data with Google Sheets 

Each partner org associated with the SArC, conducting SArC programs with their respective teachers is given a keyword. This keyword is used by the teacher throughout the journey of interacting with the chatbot over the course of the program. To come back week after week, access the art class plans, submit activities and get other support and resources. 
<img width="633" alt="Screenshot 2025-04-10 at 4 21 07 PM" src="https://github.com/user-attachments/assets/1ab0bad0-1388-447b-bf51-297110049e6e" />



### Use case 2: Providing art class plans from a repository of PDFs. 
With the following key considerations
1. Provide a art class plan (PDF file) in the preferred language as well as a description of the art class plan being provided to the teacher. 
2. The teachers could be from Nursery to 8th grade, and could choose whichever grade she wants to teach in that week
3. Each grade has different art class plans. 
4. The art class plans should be shared to the teacher in sequential order, that is the teacher should not have to make decision on which plan number she has to get this week for any given class.
5. A teacher should be able to access art class plans for more than one grade, but not multiple art class plans from the same grade. Owing to the fact that in a week  a teacher can go to multiple grades. 


<img width="632" alt="Screenshot 2025-04-10 at 4 21 31 PM" src="https://github.com/user-attachments/assets/ea2ed24d-fa2d-4503-8ebb-928f31d47ae9" />


<img width="632" alt="Screenshot 2025-04-10 at 4 21 50 PM" src="https://github.com/user-attachments/assets/9ed6b381-8e4d-4e68-8033-7f80b67c550d" />


This required use of multiple contact variables as 
1. Counters of art class plan for each grade, so as to serve the next art class plan for that given grade whenever the teacher selects that particular grade. A counter for each grade starting from nursery to grade 8 was created to store this info and increment it logically so as to deliver the plans in a sequential manner. 

2. Flags for art class plans for each grade, to ensure that a teacher is able to access only one art class plan at a time, and is redirected to submission of activity completion pictures if the same grade is chosen again. A flag variable for each grade starting from nursery to grade 8 was created to help direct the teacher into either delivery of art class plan or submission of art class plan based on journey of the teacher. 

3. Contact variables to store the information of the grade and art class plan number being queried by the teacher at any given moment. This contact variable was created to deliver the art class plan after being pulled form the google sheet. 

4. Contact variable to store the information of grade and art class plan number being submitted in order to record the completion. This contact holds the information of the previous art class plan that the teacher needs to submit for any given grade. 



### Use case 3: Fuzzy keyword matching to identify the closed actual keyword
It happens that the teacher sometimes makes typos in entering the keyword ex: the expected keyword is cae, and the teacher by mistake enters cse or caw or something similar. 

A prototype solution to this problem is done with the help of AI assistants. The AI assistant is provided with the json file of all the possible keywords and which org do they represent as its knowledge base. The AI assistant is then prompted to find the nearest keyword considering the typo made by the teacher, and suggest the alternative keyword to try. 
<img width="626" alt="Screenshot 2025-04-10 at 4 22 07 PM" src="https://github.com/user-attachments/assets/28604c49-fda4-431c-b59f-b063f31b686d" />

This AI flow is then made as a default flow. Default flows are triggered when a contact is not part of any flow, and sends keyword which is not linked to any active flow. 



### Use case 4: Storing the media submitted by teachers in structured folders in the google cloud storage bucket. 
As SArC engages a numerous teachers, across numerous grades and has multiple partners (30+). It becomes important to be able to store the media such as pictures of art classes being completed by the teachers in a way that can be shared back to the partners and can be used in other communication material. And at another level this also helps to triangulate the progress made by the teachers from any particular org, in terms on actual engagement and completion of the program objectives. 

The requirement for incorporating such a structure is drafted here. In a gist, the media coming from a particular submission will be sorted into folders based on the values present in the contact variables as opposed to being dumped into the “uploads” folder of the google drive. 

An example folder structure. "Uploads -> TFI Mumbai -> Grade 1 ACP 1 -> http://…..teacher-name.jpg"

<img width="632" alt="Screenshot 2025-04-10 at 4 22 24 PM" src="https://github.com/user-attachments/assets/3fd684bc-53c5-4b7f-9568-321d3e4ecaeb" />

Similarly based on the contact variables of org names and present_grade_acp, the media being submitted by a teacher will be sorted from the get go into this folder structure. 


## Credits 
Shoutout to Rukhmini Bhatia, Tanushree Patel and Surabhi Shinde from the Saturday Art Class team on holding their program deliverables and user experience to be created in the highest regard and pushing the Glific team to create the said experience with them. To Guatam Prakash, who laid a solid foundation through the previous iteration of implementing this program which ran successfully over the chatbot for a whole academic year. 

## Conclusion 
This project involved implement a fairly complex logic that informs the user experience of the teachers participating in the SArC programs. And simplifying the experience of adding new partner orgs and customizing the experience for them by the SArC team through replicating the logic in a few steps instead of having to rewire the flows or create new flows from scratch. 

To understand more on the custom expressions used to make your chatbot flows more logic driven, refer this documentation. 

Reach out to tejas@glific.org to chat further on any details shared here. 

