import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TopicService } from "./topic.service";
import { TopicControllerBase } from "./base/topic.controller.base";

@swagger.ApiTags("topics")
@common.Controller("topics")
export class TopicController extends TopicControllerBase {
  constructor(protected readonly service: TopicService) {
    super(service);
  }
}
