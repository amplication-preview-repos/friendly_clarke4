import * as graphql from "@nestjs/graphql";
import { ForumResolverBase } from "./base/forum.resolver.base";
import { Forum } from "./base/Forum";
import { ForumService } from "./forum.service";

@graphql.Resolver(() => Forum)
export class ForumResolver extends ForumResolverBase {
  constructor(protected readonly service: ForumService) {
    super(service);
  }
}
