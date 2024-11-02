import { Module } from "@nestjs/common";
import { ForumModuleBase } from "./base/forum.module.base";
import { ForumService } from "./forum.service";
import { ForumController } from "./forum.controller";
import { ForumResolver } from "./forum.resolver";

@Module({
  imports: [ForumModuleBase],
  controllers: [ForumController],
  providers: [ForumService, ForumResolver],
  exports: [ForumService],
})
export class ForumModule {}
