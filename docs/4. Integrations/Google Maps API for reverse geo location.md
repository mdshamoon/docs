### **3 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Intermediate`**

## How to use reverse geo location
Use this integration to simplify getting the geographic information of users

### How it works
Users have to share the location pin. The location pin provides latitude and longitude information of the user. This can be used to get the following information from Google Maps API.
- Country
- State
- District or City or Village
- Ward name (if present) 
- Pincode
- Address

Once the information is returned from the api response, it can be added to the contact field of the user. 

### How to use in the flow 

0. Sample flow to try out the feature.
   <img width="735" alt="Screenshot 2024-08-29 at 3 40 10 PM" src="https://github.com/user-attachments/assets/dbf359a6-b163-4496-b801-afb0641f6f48"/>


2. Use the [location interactive message](https://glific.github.io/docs/docs/Product%20Features/Interactive%20Messages/#create-interactive-messages) to get the location of the user
   
3. In call a webhook node, select `function` and enter `geolocation`
<img width="550" alt="Screenshot 2024-08-29 at 3 39 50 PM" src="https://github.com/user-attachments/assets/346eaadf-9f19-4938-93d4-02fb081dcf1d"/>


    
4. Go to `Function body` and pass the following parameters 

`{
 "lat": "@results.result_1.latitude",
 "long": "@results.result_1.longitude"
}`
Here the `result_1` is the result storing the location pin shared by the user

<img width="1030" alt="Screenshot 2024-08-29 at 3 46 00 PM" src="https://github.com/user-attachments/assets/44c0e6ad-5282-486f-90ad-86fd6e073543"/>

5. Following parameters are the response 
`{
  "ward": "",
  "success": true,
  "state": "",
  "postal_code": "",
  "district": "",
  "country": "",
  "city": "",
  "address": ""
}`

6. Use the following @results format to access the response of the api
- to access country - @results.loc.country   
- to access state - @results.loc.state
- to access ward - @results.loc.ward
- to access district - @results.loc.district
- to access city/village/locality - @results.loc.city
- to access postal code - @results.loc.postal_code
- to access the address - @results.loc.address

Here `loc` is the variable name which is the storing the result of webhook call.

6. Any one or multiple of these parameters can be used to confirm the actual location of the user. The geographical information returned is as per the [Google Maps Reverse Geo Locate API](https://developers.google.com/maps/documentation/geocoding/requests-reverse-geocoding). The levels correspond to the the administrative_area_levels available in Google Maps. 

### Webhook response vs the google maps api  
- Country corresponds to address_components[“country”]
- State corresponds to address_components[“administrative_area_level_1”]
- District corresponds to address_components[“administrative_area_level_2”]
- City corresponds to address_components[“locality”]
- Ward corresponds to address_components[“administrative_area_level_3”]
- Postal_code corresponds to address_components[“postal_code”]
- Address corresponds to formatted_address


As subsequent steps, organization can get the user to confirm if the location picked up is correct
If the information is correct, the contact variables can be updated and/or users can be clubbed into geographical collections for targeting at a later point. 
