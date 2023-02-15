Login to your Google account https://console.cloud.google.com/
Click on Big Query Tab 
Click on small trangle next to your project ID
Click on small trangle next to the your BOT number
Click on any of the table.
In the right pane clikc on Query Tab in the Split tab
Write the below query to get the results of a single flow
SELECT * FROM `your_dataset.messages` where flow_name = `flow_name` order by inserted_at DESC
