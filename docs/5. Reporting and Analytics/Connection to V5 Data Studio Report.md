Before you start, ensure that you have [set up and connected your BigQuery Account](https://glific.github.io/docs/docs/Integrations/BigQuery%20Setup%20and%20link%20with%20Glific)
___

# **Overview**

A . Make a copy of [Glific report template v5.0](https://lookerstudio.google.com/reporting/ec4a362e-ec46-4050-9ba6-c4a5b0992caf)

B . Connect 10 data sources to your BigQuery Account

1. Connect `contacts`, `messages`, and `message conversations` through 'My Projects'
2. Connect `flat fields`, `monthly active users`, `Contact collections`, `success messages` and `flow context` by replacing your Dataset ID into the preset 'Custom Query'.
3. Connect `flow Results` and `Contact Collection` by running a query in BigQuery before connecting the data sources.

3 . Your reports will be ready.

Implementation Time: 60 minutes

**Below are the detailed steps with screenshots to integrate Data studio.**
___
**_Note:_** _The screenshots may be different, as google may update the screens with their updates. [Message us on Discord](https://discord.com/channels/717975833226248303/717975833679233077) to let us know_ 
___

# Detailed Steps:
## Make a copy of Glific report template v5.0
___

1 . Click on the link of the reports template (shared publicly with view access). Use the latest **version 5.0** for your reports.

- Template v5.0: [https://lookerstudio.google.com/reporting/ec4a362e-ec46-4050-9ba6-c4a5b0992caf](https://lookerstudio.google.com/reporting/ec4a362e-ec46-4050-9ba6-c4a5b0992caf)

2 . Hover your cursor near the top of the report, then click on the 3 dots in the top right corner, then click on the `Make a copy` icon. Refer to the image below:

![image](https://user-images.githubusercontent.com/32592458/212663584-0780edee-bff6-4714-b088-a8f4a60e5b63.png)
**Insert New Image1**
___
**_Note_**_: If you have never used Data Studio before then you will be prompted to provide some basic information and agree to their terms and conditins. Do so and then repeat step 2._
___

4 . Click on `Copy Report`. Refer to the image below:

![image](https://user-images.githubusercontent.com/32592458/212663623-13a99b24-1848-4c2e-af9f-22986e1b2435.png)
**Insert New Image2**
___
**_Note_**_: Do not click on any of the drop downs for **New Data Source**. Directly click on_ 'Copy Report'
___
## Connect data sources to your BigQuery Account
---

5 . A new tab will open with the copy of the report and some visuals not functioning, select  `Manage added data sources`from the Resources Menu. Refer to the image below:

![image](https://user-images.githubusercontent.com/32592458/212663662-6e5145a3-44ad-4228-b342-35c9336c8029.png)
**Insert New Image3**
___
### Connect `contacts`, `messages`, and `message conversations` through 'My Projects'
___

6 . Click on `edit` one by one for each data source. Start with **contacts**

![image](https://user-images.githubusercontent.com/32592458/212663748-52bb6637-8dc2-4186-8847-1bdcdd87cb67.png)

7 . Connect to the BigQuery data source:

a. Select `MY PROJECTS` from the menu on the far left.

b. Select the `Project` (_If the project is not listed you might need to enter the_ **_project ID_** _manually_. _Refer to the note after step 8_)

c. Select the `Dataset`, this is your WA bot number

d. Select the `Table` with the matching name. Click on the blue `Reconnect` button at the top right corner.

![image](https://user-images.githubusercontent.com/32592458/212663799-cd8bb1bd-975c-4002-af79-f1840d55a7cd.png)

e . You might get a warning &quot;`Configuration has changed. Do you want to apply the changes?`”.  That’s okay, click on `APPLY`

![image](https://user-images.githubusercontent.com/32592458/212663828-8000aace-580e-4c42-9248-d3a1c4baab5a.png)

f . The fields listing page will open up. Verify that the fields are set to the correct type. Most will be correct by default.

**What to check for:** 
1. All fields with 'id' in their name should be of the type 'text'
2. 'phone' should be of the type 'text'
3. 'language' should be of the type 'text'
3. All fields with 'at'/'time' in their name should be of the type 'Date and Time'
4. Latitude/Longitude should be of the type latitude, longitude.

g. Click on `DONE` in fields listing page

![image](https://user-images.githubusercontent.com/32592458/212663847-338d5a56-2374-46b6-860f-b7bac3f6a3b3.png)


8 . **_Repeat steps 6 and 7 for the following data sources; Messages, Message Conversations_**

___

**_Note: To get the project ID click on the phone number on BigQuery._**

![image](https://user-images.githubusercontent.com/32592458/212663868-0de922cd-7b17-47fc-ad1a-d4c00bc128b8.png)

___

### Connect `flat fields`, `monthly active users`, `Contact collections`, `success messages` and `flow context` by replacing your Dataset ID into the preset 'Custom Query'.
___

9 .  For the Flat Fields data source, select Edit and then update the custom query with **Dataset ID** (from the Glific settings interface for big query as shown in the note above). Replace `tides-saas-309509.917302307943` with your **Dataset ID** (Refer to the image below)

![image](https://user-images.githubusercontent.com/32592458/212663893-3fd0358b-066f-4bcf-a3ea-34647d1aa725.png)

10 . Click on `Reconnect` to update.

![image](https://user-images.githubusercontent.com/32592458/212663917-aa382287-5c61-4826-8fb8-df22c764480c.png)

11 . Verify the field types. (Refer Step 7.f.) And then click `Done`

12 . Follow steps 9 to 11 as above for; `Monthly active users`, `Contact Collections` and `Success Messages`,  Replace the **Dataset ID** as per your setup.

13 . For Flow context data source update the custom query with **Dataset ID** (from the Glific settings interface for big query). There will be four places where you need to update the **Dataset ID**

![image](https://user-images.githubusercontent.com/32592458/212663940-cb623c04-38a4-47ce-9a9c-37803e252315.png)

___
### Connect `flow Results` and `Contact Collection` by running a query in BigQuery before connecting the data sources.
___

14 . For Flow results. First go to your BigQuery account. Open a new tab and run below query. Replace `tides-saas-309509.917302307943` with your **Dataset ID**

![image](https://user-images.githubusercontent.com/32592458/212663971-569e3848-7a8a-44ff-813a-f044962c3397.png)



```
CREATE OR REPLACE FUNCTION `tides-saas-309509.917302307943.jsonObjectKeys`(input STRING) RETURNS ARRAY<STRING> LANGUAGE js AS R"""
const inputJson=JSON.parse(input)
 return Object.keys(inputJson).map((key) => {
 return (JSON.stringify([key, inputJson[key].input]));
});
""";
```





15 .  Click on the `Run` button. After successful execution a new Routine will be created with name `JsonObjectKeys` (refer image below)

![image](https://user-images.githubusercontent.com/32592458/212664014-f6f114ce-6677-4b86-a360-bf801280985d.png)



16 . Go back to DataStudio and follow the same steps as we did for Flat fields (9 to 11) above for `Flow Results`  data source. (Replace the tides **Dataset ID** as per your setup in 2 lines.)

17 . For Contact Collection. Again go to your BigQuery account. Open a new tab and run below query. Replace `tides-saas-309509.917302307943` with your **Dataset ID**

![image](https://user-images.githubusercontent.com/32592458/212663971-569e3848-7a8a-44ff-813a-f044962c3397.png)


```
BEGIN
CREATE OR REPLACE VIEW
  `tides-saas-309509.917302307943.contact_collection` AS (
  SELECT
    name,
    phone,
    group_name
  FROM
    `tides-saas-309509.917302307943.contacts`,
    UNNEST(SPLIT(group_labels, ',')) group_name);
END
```





18 .  Click on the `Run` button. After successful execution a new Routine will be created with name `contact_collection` (refer image below)

![image](https://user-images.githubusercontent.com/32592458/212664014-f6f114ce-6677-4b86-a360-bf801280985d.png)
**Update image**


19 . Go back to DataStudio and follow the same steps as we did for `contacts` (6 and 7) above to connect the `Contact Collection` data source.


20 .  Click  `CLOSE` on the top right, and your reports will be ready

![image](https://user-images.githubusercontent.com/32592458/212664047-85461e8b-65ca-4790-87cc-47724f9506fe.png)
**Replace image**


21 .  Your reports are ready for use.

![image](https://user-images.githubusercontent.com/32592458/212664089-c796e0c7-24d1-4599-a476-e3a11767bfd3.png)
**Replace Image**

___
**_Note: To create your own custom reports follow the steps in the below document ._**

[https://support.google.com/datastudio/answer/6292570?hl=en](https://support.google.com/datastudio/answer/6292570?hl=en)
___