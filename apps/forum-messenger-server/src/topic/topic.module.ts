import { Module } from "@nestjs/common";
import { TopicModuleBase } from "./base/topic.module.base";
import { TopicService } from "./topic.service";
import { TopicController } from "./topic.controller";
import { TopicResolver } from "./topic.resolver";

@Module({
  imports: [TopicModuleBase],
  controllers: [TopicController],
  providers: [TopicService, TopicResolver],
  exports: [TopicService],
})
export class TopicModule {}
