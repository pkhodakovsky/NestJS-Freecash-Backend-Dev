# NestJS-Freecash-Backend-Dev

Our application has an offer service that fetches offers by HTTP requests from different offer networks (providers). The response payload is different for each provider, but we transform and store all offers into one database table. Please provide an approach to validate and transform all response payloads into the same type of object by using NestJS DTOs, and decorators.

In the link below is our offers entity class and a couple of response payloads.

You can use the *.payload.ts files data as constant variables to not waste time on making requests. 

The main goal is to convert different types of payloads into one entity.

https://gitlab.com/-/snippets/2385560
