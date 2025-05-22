### **4 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Advanced`**


### Problem: How to find the number of contacts who did not get the business initiated message due to frequency capping regulations imposed by Meta on Marketing HSMs.

Context: Meta recently introduced something called as Frequency capping. Explaining in a simple manner, it noticed that users get a lot of Marketing messages from businesses, and to limit SPAM daily, it restricts how many Marketing messages a user can get during a rolling period of X days.

To prevent misuse and gaming the system, they haven’t told us how many messages are allowed in how many days. You can read more about this in their own words [here.](https://www.gupshup.io/resources/blog/all-you-need-to-know-about-whatsapp-business-api-frequency-capping)

### Solution: To understand contacts, templates, and campaigns affected (based on dates the broadcast was initaited) by having information of errors that were encountered visialized on a lookerstudio dashboard. This will reduce the effort in repeteadly quering this infomration from the database for every braodcast made, and to make this information easily accessible to the program / operations team to work with.

```
SELECT
JSON_EXTRACT_SCALAR(m.errors, '$.app') AS app,
JSON_EXTRACT_SCALAR(m.errors, '$.payload.destination') AS destination,
STRING_AGG(cc.group_name, ', ') AS group_names,
JSON_EXTRACT_SCALAR(m.errors, '$.payload.type') AS type,
JSON_EXTRACT_SCALAR(m.errors, '$.payload.payload.reason') AS reason,
DATE(m.sent_at) AS sent_on,
m.flow_name AS flow_name,
m.template_uuid AS template_id,
m.body AS message,
m.media_url,
m.is_hsm,
m.contact_name,
m.contact_phone
FROM `project-name.bot-number.messages` AS m
JOIN `project-name.bot-number.contact_collection` AS cc
ON JSON_EXTRACT_SCALAR(m.errors, '$.payload.destination') = cc.phone
WHERE m.bsp_status = "error"
GROUP BY
app, destination, type, reason, sent_on, flow_name, template_id, message, m.media_url, m.is_hsm, m.contact_name, m.contact_phone;

```
- In the above query two tables are being merged - `contact_collection` and `messages`. 
- For this query to work for your organization, reaplce the 'projet-name' with the name of your Google Cloud project within which the Big Qusery instance is set up.
- Replace the 'bot-number' with the chatbot number being used, pre-fixed with the country code. 

<img width="528" alt="Screenshot 2025-05-12 at 2 36 12 PM" src="https://github.com/user-attachments/assets/66b43618-f49e-4b41-a10f-d69f297fa048" />


## How to set this up  

### 1. Sign into Bigquery using the appropriate email account and select the options to run a query.  
- Navigate to bigquery. Expand the phone number (aka dataset) and select `Contacts` table

<img width="304" alt="Screenshot 2025-05-12 at 2 40 53 PM" src="https://github.com/user-attachments/assets/429557a7-a146-4841-a337-266fb2c13984" />

- Click on the “Query’ button to create an empty query

<img width="328" alt="Screenshot 2025-05-12 at 2 41 14 PM" src="https://github.com/user-attachments/assets/09e72227-7efd-4f1a-a904-14d1c01d2b05" />

- You will get an empty query which looks like this
<img width="504" alt="Screenshot 2025-05-12 at 2 41 33 PM" src="https://github.com/user-attachments/assets/bfc7b172-d7c5-487b-8b1b-fa1dd8b542f9" />

- Copy paste the query above into the query window. Replace the phrase “dataset” with the values from the empty query. Copy everything (projectname.dataset) from the ‘ symbol till the .(dot) before contacts and paste it in the 2 places it says “dataset”. Delete the empty query so that only what you pasted is visible on the screen.
  
- Hit the ‘Run’ button. You will see Query Results coming once the query has run

<img width="528" alt="Screenshot 2025-05-12 at 2 42 16 PM" src="https://github.com/user-attachments/assets/27baafcd-9273-4164-bfb7-2b43ca5983f1" />

- Click on Save and select “Save View”

<img width="583" alt="Screenshot 2025-05-12 at 2 42 42 PM" src="https://github.com/user-attachments/assets/2ac8f85b-e601-4f51-8aca-f109e177d33f" />

- In the popup you see, select the correct values. Name the table “error_hsm_and_media”

<img width="1139" alt="Screenshot 2025-05-12 at 2 43 05 PM" src="https://github.com/user-attachments/assets/5794adcd-27e4-4b8d-ab03-be96fdedfbc8" />

- You will now see a new table/view popping up in the list of tables in the left of the screen 
<img width="282" alt="Screenshot 2025-05-12 at 2 44 10 PM" src="https://github.com/user-attachments/assets/57245fbc-bf71-44bb-87fb-b4ff3bb6fe62" />

Now that the data is formatted as you need it, 
lets move to Part 2 

### 2. Setting up the visualization.

- Sign in to your Look Studio space using your work google account associated with BigQuery

- Open this link - https://lookerstudio.google.com/u/0/reporting/bcf8f57f-fe0d-4e7a-a2d1-79858507a9d3/page/oBhGF/preview in your browser
- In the top right corner, you will see 2 buttons next to your user profile icon
<img width="739" alt="Screenshot 2025-05-12 at 3 09 14 PM" src="https://github.com/user-attachments/assets/aa6221f3-74a2-4cd5-bba2-65845b9ac64e" />

- Click on Use my own data

- Navigate the options, to select your project. Then the data set, and then finally the view we just created. Your dashboard is ready!

 <img width="997" alt="Screenshot 2025-05-12 at 3 09 46 PM" src="https://github.com/user-attachments/assets/93fe93ef-3cff-4b94-b060-10d6ccaebf11" />

- Finish off the steps by clicking "Edit and Share"
 
- This will lead you to the same preview link as shared above.
- Navigate to the lookerstudio homepage by clicking the top left "Lookerstudio" icon, next to the "HSM and Media Errors" name of the dashboard
<img width="1014" alt="Screenshot 2025-05-22 at 2 02 40 PM" src="https://github.com/user-attachments/assets/e95c7e2f-c9ae-4492-8e27-24674e765cb2" />

- See that a new copy of the dashboard has been created.
<img width="540" alt="Screenshot 2025-05-22 at 2 03 20 PM" src="https://github.com/user-attachments/assets/2b44cfe7-67ca-48b6-8247-3577a8a9cb5d" />

- Go to this copy of the dashboard, go to edit and change the name to include your org's name for future reference.
<img width="1398" alt="Screenshot 2025-05-22 at 2 03 48 PM" src="https://github.com/user-attachments/assets/b5a90a42-eb80-478f-9898-921a313c9372" />

#### Editing and modifying further
- To see a list of users and numbers or any other such details, select Edit. 
- Then Select Add a chart. Select a table.
- Drag and drop the fields contact_name and contact_phone under “Dimension”.
- You can now extract all the affected users when apply the relevant filters by Hovering on the top right corner of the chart,
- clicking on “more”, then Export and selecting the format you prefer!
