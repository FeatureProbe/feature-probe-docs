---
sidebar_position: 2
---

## Using Feature toggles

The FeatureProbe platform provides a powerful feature switch management module. Feature switches are used for feature placement by selecting target traffic and gradually releasing data through continuous observation until full volume is deployed.
### Switch Dashboard

![toggles screenshot](../../pictures/en-toggles.png)

1. default display of My First Project's online environment switch list information
2. the left navigation bar provides a quick entry to switch environments (click the drop-down icon to the right of the environment)
3. filter conditions allow us to quickly filter the switches by "evaluated", "enabled/disabled", "tags", "name/key/description"

### Adding switch templates
Switch "template information" (when the switch is created successfully, it will be synchronized with the initialization information of the existing environment)

![create toggle screenshot](../../pictures/en-create_toggle.png)

1. fill in the switch name
2. fill in the key of the switch (a unique identifier for the switch, unique under the same project, not editable once created)
3. fill in the description information
4. select the label (no initial value, you can create it yourself)
5. select the sdk type
6. select the return type of the switch (4 types: Boolean, String, Number, JSON), which cannot be edited once created
7. Fill in the Variations
    - Default two variations, value is empty (at least 2, can be increased or decreased) [value can be changed, name can be changed, description can be changed].

8. fill in the disabled return value (the return value when the switch is disabled), the default synchronization variation1 data, can be changed
9. Click the Create button to complete the creation of the switch

### Edit the switch template
The "template information" of the switch (after successful editing, it will not affect the switch configuration information in the existing environment, but only synchronize the initialization information to the new environment in the future)

Translated with www.DeepL.com/Translator (free version)
