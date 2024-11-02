import * as graphql from "@nestjs/graphql";
import { TopicResolverBase } from "./base/topic.resolver.base";
import { Topic } from "./base/Topic";
import { TopicService } from "./topic.service";

@graphql.Resolver(() => Topic)
export class TopicResolver extends TopicResolverBase {
  constructor(protected readonly service: TopicService) {
    super(service);
  }
}
