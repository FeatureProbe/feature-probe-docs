---
sidebar_position: 2
---

# JavaScript SDK

## Try Out Demo Code

We provide a runnable demo code for you to understand how FeatureProbe SDK is used.

1. Start FeatureProbe Service with docker composer. [How to](https://github.com/FeatureProbe/FeatureProbe#1-starting-featureprobe-service-with-docker-compose)

2. Download this repo and run the demo program:

```bash
git clone https://github.com/FeatureProbe/client-sdk-js.git
cd client-sdk-js
// open example/index.html in browser
```

3. Find the Demo code in [example](https://github.com/FeatureProbe/client-sdk-js/tree/main/example),
do some change and run the program again.

```
// open example/index.html in browser
```

## Step-by-Step Guide

In this guide we explain how to use feature toggles in a JavaScript application using FeatureProbe.

### Step 1. Install the JavaScript SDK

First, install the FeatureProbe SDK as a dependency in your application.

```js
npm install featureprobe-client-sdk-js --save
```

Or via CDN:

```js
<script type="text/javascript" src="https://unpkg.com/featureprobe-client-sdk-js@latest/dist/featureprobe-client-sdk-js.min.js"></script>
```

### Step 2. Create a FeatureProbe instance

After you install and import the SDK, create a single, shared instance of the FeatureProbe sdk.

```js
const user = new featureProbe.FPUser("user");
user.with("key", "value");

const fp = new featureProbe.FeatureProbe({
    remoteUrl: "https://127.0.0.1:4007",
    clientSdkKey: '#YOUR-CLIENT-SDK-KEY#',
    user,
});
fp.start();
```

### Step 3. Use the instance to get your setting value

You can use sdk to check which value this user will receive for a given feature flag.

```js
fp.on('ready', function() {
    const result = fp.boolValue('ui_demo_toggle', false);
    if (result) {
        do_some_thing();
    } else {
        do_other_thing();
    }
    const reason = fp.boolDetail('ui_demo_toggle', false);
    console.log(reason);
})
```

### Step 4. Unit Testing (Optional)

```js
test("feature probe unit testing", (done) => {
  let fp = FeatureProbe.newForTest({ testToggle: true });
  fp.start();

  fp.on("ready", function () {
    let t = fp.boolValue("testToggle", false);
    expect(t).toBe(true);
    done();
  });
});
```

## Available options

This SDK takes the following options:

| option            | required       | default | description                                                                                                                                      |
|-------------------|----------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| remoteUrl         | depends | n/a     | The unified URL to get toggles and post events |
| togglesUrl        | no             | n/a     | The specific URL to get toggles, once set, remoteUrl will be ignored |
| eventsUrl         | no             | n/a     | The specific URL to post events, once set, remoteUrl will be ignored |
| clientSdkKey      | yes            | n/a     | The Client SDK Key is used to authentification   |
| user              | yes            | n/a     | The User with attributes like name, age is used when toggle evaluation |
| refreshInterval   | no            | 1000    | The SDK check for updated in millisecond   |

## Testing

We have unified integration tests for all our SDKs. Integration test cases are added as submodules for each SDK repo. So
be sure to pull submodules first to get the latest integration tests before running tests.

```js
npm run test
```
