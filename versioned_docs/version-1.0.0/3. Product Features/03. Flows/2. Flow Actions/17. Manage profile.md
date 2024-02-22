> ### **3 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Advanced`**
___

**Glific introduces multiple profiles, enabling efficient and personalized engagement with beneficiaries where a single phone number is used by multiple end users.  In this way, by segregating a single contact at the profile level, NGOs can significantly increase the impact of their work.**

___
## Sample Use Case

To achieve the multiple profiles feature, We added a new node called` Manage profile` with two choices at the flow level.

1. `Create Profile` creates a new profile for contact.
1. `Switch Profile` allows you to change between profiles.


# Create Profile
1.  Here's a sample flow with minimal configuration for creating a profile in Glific

![8](https://github.com/glific/docs/assets/90472056/e9d125d5-73fd-4c94-8ed8-00362ba9e1e7)

2. The initial node is the `Send Message` node, where the contact is prompted to provide their details such as name, role, or age to create the profile

![2](https://github.com/glific/docs/assets/90472056/5cb5141a-8452-4966-a57b-f788e4617973)

3. The second node is the `Wait for Response` node with the result name `demo_username`. The response from the contact will be saved in this result and can be referenced as `@results.demo_username`.

![3](https://github.com/glific/docs/assets/90472056/ae24afad-bf49-4066-a2aa-c977d54b2f88)

4. The third node is the `Interactive Message`, the user is presented with options to select their role, in the below sample case we have given the option to choose the role as student or teacher.
![4](https://github.com/glific/docs/assets/90472056/7eb71142-f078-4712-a555-303811b46b00)

5. Using the user information provided, the `Manage profile` node will create a user profile, and the relevant data will be saved in the result variables, accessible as `@results.demo_username` and `@results.demo_role` for future reference.

![5](https://github.com/glific/docs/assets/90472056/50632c81-d701-4e3f-8462-de5e8135d539)

6. Finally, the `Update Contact` node will update the contact with the relevant contact variables.

![6](https://github.com/glific/docs/assets/90472056/3352a26c-d473-4411-baff-c02273bd3bf8)

7. Upon profile creation, a message will be sent using the `Send Message` node, notifying the contact that "your user profile has been successfully created!"

![7](https://github.com/glific/docs/assets/90472056/f8df2640-bd4d-462d-8989-da706060669d)

___

# Switch Profile

1.  Here's a sample flow with minimal configuration for the switch Profile profile in Glific

![A](https://github.com/glific/docs/assets/90472056/a28c9453-948e-4399-a205-8414e7bb84ee)

2. The first node is the `Send Message` facilitates users in switching between different profiles by using the `@contact.list_profiles` to display all available user profiles.

![B](https://github.com/glific/docs/assets/90472056/858acf8d-a009-4a2e-9a31-9ac253337cb4)

Here's how the contacts will look like:

![photo](https://github.com/glific/docs/assets/90472056/8aa0ac0a-b002-4d42-a29b-353ef53a2e1d)

3.  The second node is the `Wait for Response` node where each profile will be numbered based on when they were created, first, second, third, and so on. The response from the contact will be saved in the result and can be referenced as `@results.profile_index`

![c](https://github.com/glific/docs/assets/90472056/ecac5c43-188b-4fa1-bab9-fa17b1aaf444)

4. We'll use the `Manage Profile` node to switch the user profile based on their response, using the `@results.profile_index`.

![photo](https://github.com/glific/docs/assets/90472056/67a91eff-ee57-4965-94c4-ab9d25b20ef4)

5. Once the switch is completed successfully, a message will be sent to the contacts using the `Send Message` node, notifying them that their profile has been successfully switched to` @contact.fields.demo_username`.

![e](https://github.com/glific/docs/assets/90472056/505e664a-282b-450b-a654-daf6241bc512)

___


**Tags**

Multiple profiles, create profile, switch profile, manage profile, update contact, Interactive Message