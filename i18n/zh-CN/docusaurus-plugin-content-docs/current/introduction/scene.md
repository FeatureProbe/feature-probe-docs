---
sidebar_position: 2
---

# 适用场景

### 常见的使用场景
1. 功能发版（增加新功能或整体版本升级，在不确定影响的情况下，可以只开放给少量用户进行快速试错，反馈良好的情况下再逐步放量，直到全量放开。
2. 运营活动（不同时期的线上运营活动，模式基本固定，每次只需要修改几个变量）
 - 例：运营人员想在"My First Project"项目下推出商品秒杀活动，需要根据不同城市设置不同的商品价格，以往都是需要通过开发在代码中写好，一旦价格需要变动，开发人员要在代码中修改线上商品价格，在经过审核部署发布等一些列操作，才能生效，使用FeatureProbe的功能开关，只需要运营人员修改一下“价格”，便可一秒发布生效。

   + 流程说明
     * 运营人员在FeatureProbe上新增项目"My First Project"，并在项目的"online"环境下创建一个名叫"Promotional Campaign"的开关，开关配置如下图所示:
     ![commodity spike activity screenshot](../../../../../pictures/en-Commodity_spike_activity.png)
     * 开发人员在代码中引用FeatureProbe的sdk，配置"online"的密钥，并关联开关的key（promotion_activity），设置number类型的variations（用户价格分层）对应好定义的参数city
  
    ```java
   FPUser user = new FPUser(user_id);
   user.with("city", city_name);
   double discount = fpClient.numberValue("promotion_activity", user, 1.0);
   discountSetTo(discount);
    ```
 
     * 在一切准备就绪后，运营人员直接把"Promotional Campaign"开关"启用"，配置内容便即刻生效了
     * 价格需要变动的情况下，运营人员只需要直接修改variations中的价格，并分发给对应的人群即可

3. 服务降级预案（如依赖的后端服务访问失败可以切服务切换为从缓存服务中获取历史数据版本）
 - 例：一般依赖的商品库存服务发现故障时，需要开发人员通过修改代码的方式进行降级，于是使用FeatureProbe，一旦依赖的商品库存服务发现故障时，可以快速降级从缓存中获取相当的商品库存数据。
   + 流程说明
     * 开发人员在项目My First Project"的"online"环境下创建一个名叫"Service Degrade"的开关，开关配置如下图所示:
     ![storage service fallback screenshot](../../../../../pictures/en-Store_service_fallback.png)
     * 开发人员在代码中关联开关的key（service_degrade），设置boolean类型的variations（是否打开降级）
  
    ```java
   FPUser user = new FPUser(user_id);
    boolean fallback = fpClient.boolValue("service_degrade", user, false);
    if (fallback) {
    	// Do something.
    } else {
    	// Do normal process.
    }
    ```
 
     * 当依赖的库存服务发生故障后，为避免对用户造成影响，可以快速将库存服务进行降级，使用缓存非实时库存数据。

4. A/B实验（针对同一个板块，设计了几套不同的方案，想看一下哪种方案比较受欢迎）
 - 例1：某平台的支付按钮的颜色想由红色改为了绿色，产品小王不缺定哪个颜色效果更好，于是想使用FeatureProbe的功能开关，针对这两种颜色对巴黎的用户做个实验，看到底哪个颜色购买率更高

   + 流程说明
     * 运营人员在项目My First Project"的"online"环境下创建一个名叫"Button Color AB Test"的开关，开关配置如下图所示:
     ![AB test screenshot](../../../../../pictures/en-Color_ab_test.png)
     * 开发人员在代码中关联开关的key（color_ab_test），设置string类型的variations（颜色分类）对应好定义的参数city
  
    ```java
   FPUser user = new FPUser(user_id);
    user.with("city", city_name);
    String color = fpClient.stringValue("color_ab_test", user, "red");
    setButtonColor(color);
    ```
 
     * 在一切准备就绪后，运营人员直接把"Button Color AB Test"开关"启用"，配置内容便即刻生效了
     * 产品小王通过查看实验数据得出，支付按钮为绿色购买率会更高，于是全量用户开放为绿色
