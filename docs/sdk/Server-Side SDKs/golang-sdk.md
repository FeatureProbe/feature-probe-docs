---
sidebar_position: 2
---

# Server SDK Golang

## Try Out Demo Code

We provide a runnable demo code for you to understand how FeatureProbe SDK is used.

1. Start FeatureProbe Service with docker composer. [How to](https://github.com/FeatureProbe/FeatureProbe#1-starting-featureprobe-service-with-docker-compose)
2. Download this repo and run the demo program:
```bash
git clone https://github.com/FeatureProbe/server-sdk-go.git
cd server-sdk-go
go run example/main.go
```
3. Find the Demo code in [example](https://github.com/FeatureProbe/server-sdk-go/tree/main/example), 
do some change and run the program again.
```bash
go run main.go
```

## Step-by-Step Guide

In this guide we explain how to use feature toggles in a Golang application using FeatureProbe.

### Step 1. Install the Golang SDK

Fisrt import the FeatureProbe SDK in your application code:

```go
import "github.com/featureprobe/server-sdk-go"
```

Fetch the FeatureProbe SDK as a dependency in `go.mod`.

```shell
go get github.com/featureprobe/server-sdk-go
```

### Step 2. Create a FeatureProbe instance

After you install and import the SDK, create a single, shared instance of the FeatureProbe sdk.

```go

config := featureprobe.FPConfig{
    RemoteUrl:       "https://127.0.0.1:4007",
    ServerSdkKey:    "serverSdkKey",
    RefreshInterval: 1000,
}

fp, err := featureprobe.NewFeatureProbe(config)
```

### Step 3. Use the feature toggle

You can use sdk to check which variation a particular user will receive for a given feature flag.

```go
user := featureprobe.NewUser("user")
val := fp.BoolValue("bool_toggle", user, true)
```

### Step 4. Unit Testing (Optional)

```go
toggles := map[string]interface{}{}
toggles["bool_toggle"] = true

fp := featureprobe.NewFeatureProbeForTest(toggles)
user := featureprobe.NewUser("user")

assert.Equal(t, fp.BoolValue("bool_toggle", user, false), true)
```

## Testing SDK

We have unified integration tests for all our SDKs. Integration test cases are added as submodules for each SDK repo. So
be sure to pull submodules first to get the latest integration tests before running tests.

```shell
git pull --recurse-submodules
go test
```