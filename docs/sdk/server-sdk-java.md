---
sidebar_position: 6
---

# Server SDK Java

## Try Out Demo Code

We provide a runnable demo code for you to understand how FeatureProbe SDK is used.

1. Start FeatureProbe Service with docker composer. [How to](https://github.com/FeatureProbe/FeatureProbe#1-starting-featureprobe-service-with-docker-compose)
2. Download this repo and run the demo program:
```bash
git clone https://github.com/FeatureProbe/server-sdk-java.git
cd server-sdk-java
mvn package
java -jar ./target/server-sdk-java-1.2.1.jar
```
3. Find the Demo code in [example](https://github.com/FeatureProbe/server-sdk-java/blob/main/src/main/java/com/featureprobe/sdk/example/FeatureProbeDemo.java), 
do some change and run the program again.
```bash
mvn package
java -jar ./target/server-sdk-java-1.2.1.jar
```

## Step-by-Step Guide

In this guide we explain how to use feature toggles in your own Java application using FeatureProbe.

### Step 1. Install the Java SDK

First, install the FeatureProbe SDK as a dependency in your application.

#### Apache Maven

```xml
<dependency>
    <groupId>com.featureprobe</groupId>
    <artifactId>server-sdk-java</artifactId>
    <version>1.2.0</version>
</dependency>
```

#### Gradle Groovy DSL

```text
implementation 'com.featureprobe:server-sdk-java:1.2.0'
```

### Step 2. Create a FeatureProbe instance

After you install and import the SDK, create a single, shared instance of the FeatureProbe sdk.

```java
public class Demo {
    private static final FPConfig config = FPConfig.builder()
            .remoteUri("http://127.0.0.1:4007")
            .pollingMode(Duration.ofSeconds(3))
            .useMemoryRepository()
            .build();

    private static final FeatureProbe fpClient = new FeatureProbe("server-8ed48815ef044428826787e9a238b9c6a479f98c",
            config);
}
```

### Step 3. Use the feature toggle

You can use sdk to check which variation a particular user will receive for a given feature flag.

```java
public class Demo {
    private static final FPConfig config = FPConfig.builder()
            .remoteUri("http://127.0.0.1:4007")
            .pollingMode(Duration.ofSeconds(3))
            .useMemoryRepository()
            .build();

    private static final FeatureProbe fpClient = new FeatureProbe("server-8ed48815ef044428826787e9a238b9c6a479f98c",
            config);

    public void test() {
        FPUser user = new FPUser("user_unique_id");
        user.with("userId", "9876");
        user.with("tel", "12345678998");
        boolean boolValue = fpClient.boolValue("bool_toggle_key", user, false);
        if (boolValue) {
            // application code to show the feature
        } else {
            // the code to run if the feature is off
        }
    }
}
```

## Testing

We have unified integration tests for all our SDKs. Integration test cases are added as submodules for each SDK repo. So
be sure to pull submodules first to get the latest integration tests before running tests.

```shell
git pull --recurse-submodules
mvn test
```