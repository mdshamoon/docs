> ### **4 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Advanced`**

## Clear Flows
### Summary
Flows used to clear or reset the values updated in contact variables. This is a useful tool for testing purposes. By implementing this logic, testers can simulate conditions like onboarding the contact for the first time, and any other logic that is implemented with the use of different contact variables and “split by” conditions in the flow 

### Premise 
There are flows created which use contact variables as flags or counters, and a contact going through the flows experiences the conversation based on the state of the contact variables. 

### Example Use Case 
Clearing the status of registration, in order to test the onboarding flow which implements the logic that prevents the pre-registered contacts from going through the flow. 

<img width="765" alt="Screenshot 2025-03-07 at 3 25 22 PM" src="https://github.com/user-attachments/assets/725dc6c2-c136-41c4-a69f-dac39a5bdfba" />

The screenshot shows implementation of the “spliy by a contact field” condition, which checks if the contact variable called “registered” has a value of “y”. And if this condition is met then the contact can bypass the flow. 

For this logic to work, for the contacts who do not meet this condition, the contact variable called “registered” is updated using “update the contact” node. And the value of the contact variable is set to “y”

<img width="378" alt="Screenshot 2025-03-07 at 3 26 07 PM" src="https://github.com/user-attachments/assets/9371d5f7-f50f-45ff-b00d-6f2790a270a3" />

This ensures that any contact who has gone through this part of the flow will not have to repeat the flow again. 

This makes it so that any testers who have tested the flow once, cannot then test the flow again, after having made some changes. This is where a “Clear” flow can come in handy.

### Creating a clear flow
1. This is a simple flow, which serves to clear/ reset the value of any contact variable. 
2. This flow need not have any “send message” or “wait for response” nodes. 
3. It should contact “update the contact” nodes, with the required contact variables selected and the field for value to be updated can be kept empty. 
4. Conversely the value field in the “update the contact” node can contain any other static value needed for testing purposes.

<img width="1036" alt="Screenshot 2025-03-07 at 3 26 50 PM" src="https://github.com/user-attachments/assets/1fd2a58d-cd44-4f0b-ba11-3302beb2ce9b" />


### How to run this flow
1. As a tester, one can either self initiate the flow by entering the keyword 
2. One can other wise start the flow, by navigating to `chats`, finding the `contact` among the chats, and manually `starting the flow` by accessing the actions from the the drop down next to the name of the contact. 
<img width="1028" alt="Screenshot 2025-03-07 at 3 27 22 PM" src="https://github.com/user-attachments/assets/5201900c-b772-4660-8eaf-2a282d221c21" />

### To check if the flow has worked properly
1. Go to the drop down menu next to the name 
2. Go to the `View contact profile` 
3. Go to `Details`. This section lists all the contact variables and their present state for the given contact. 
4. To check if the clear flow has worked, navigate to find the contact variables the flow was designed to reset. And see that the value of the contact variable is updated as per the clear flow. 

<img width="1002" alt="Screenshot 2025-03-07 at 3 28 02 PM" src="https://github.com/user-attachments/assets/ac0fb649-bd00-4888-abbe-9adb23d12d7f" />

### Where else can these be used
This principle can be used to manually reset or hard code certain values to the contact variables or any other variables being used in the flows as logic gates or as way to control the user experience. 
