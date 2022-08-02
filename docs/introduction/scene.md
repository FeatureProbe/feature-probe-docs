---
sidebar_position: 2
---

# General Scenes

### Common usage scenarios
1. feature release (add new features or overall version upgrade, in the case of uncertain impact, can be opened to only a small number of users for a quick trial and error, and then gradually released in the case of good feedback, until the full amount of release.
2. operation activities (online operation activities in different periods, the pattern is basically fixed, and only a few variables need to be modified each time)
 - Example: Operators want to launch the "My First Project" project under the commodity spike activities, need to set different commodity prices according to different cities, in the past, it is necessary to write in the code through the development, once the price needs to change, the developers have to modify the online commodity prices in the code, after the audit deployment release and other operations, in order to take effect, use With FeatureProbe's feature switch, you only need to modify the "price" by the operation staff, and then it can be released in one second.

   + Process Description
     * The operator adds a new project "My First Project" on FeatureProbe and creates a switch named "Promotional Campaign" in the "online" environment of the project:
     ![commodity spike activity screenshot](../../../../../pictures/en-Commodity_spike_activity.png)
     * The developer references the FeatureProbe sdk in the code, configures the "online" key, associates the key of the switch (promotion_activity), and sets the number type variations (user price hierarchy) corresponding to the defined parameter city
  
    ```java
   FPUser user = new FPUser(user_id);
   user.with("city", city_name);
   double discount = fpClient.numberValue("promotion_activity", user, 1.0);
   discountSetTo(discount);
    ```
 
     * When everything is ready, the operator directly "enables" the "Promotional Campaign" switch and the configuration takes effect immediately
     * If the price needs to be changed, the operator just needs to change the price in the variations and distribute it to the corresponding people.

3. service degradation plan (such as dependent back-end service access failure can cut the service switch to get the historical data version from the cache service)
 - Example: Generally when the dependent commodity inventory service finds a failure, the developer is required to downgrade by modifying the code, so using FeatureProbe, once the dependent commodity inventory service finds a failure, it can quickly downgrade to get the equivalent commodity inventory data from the cache.
   + Process Description
     * The developer creates a switch called "Service Degrade" in the "online" environment of the project "My First Project", and the switch is configured as shown in the following figure:
     ![storage service fallback screenshot](../../../../../pictures/en-Store_service_fallback.png)
     * The developer associates the key of the switch (service_degrade) in the code to set the boolean type variations (whether to turn on degrade)
  
    ```java
   FPUser user = new FPUser(user_id);
    boolean fallback = fpClient.boolValue("service_degrade", user, false);
    if (fallback) {
    	// Do something.
    } else {
    	// Do normal process.
    }
    ```
 
     * When the dependent inventory service fails, the inventory service can be quickly downgraded to use cached non-real-time inventory data to avoid impact on users.

4. A/B experiments (for the same board, several different solutions were designed to see which one is more popular)
 - Example 1: The color of a platform's payment button wanted to change from red to green, and the product king did not lack to determine which color worked better, so he wanted to use FeatureProbe's feature switch to do an experiment for the two colors on the users in Paris to see which color had a higher purchase rate in the end

   + Process Description
     * The operator created a switch called "Button Color AB Test" in the "online" environment of the project "My First Project", and the switch configuration is shown below:
     ![AB test screenshot](../../../../../pictures/en-Color_ab_test.png)
     * The developer associates the key of the switch (color_ab_test) in the code and sets the variations of the string type (color classification) corresponding to the well-defined parameter city
  
    ```java
   FPUser user = new FPUser(user_id);
    user.with("city", city_name);
    String color = fpClient.stringValue("color_ab_test", user, "red");
    setButtonColor(color);
    ```
 
     * After everything is ready, the operator directly "enables" the "Button Color AB Test" switch, and the configuration content takes effect immediately
     * By looking at the experimental data, the product king concluded that the purchase rate would be higher if the payment button was green, so the full amount of users opened to green
