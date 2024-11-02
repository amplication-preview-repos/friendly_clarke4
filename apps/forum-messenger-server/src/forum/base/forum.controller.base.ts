/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ForumService } from "../forum.service";
import { ForumCreateInput } from "./ForumCreateInput";
import { Forum } from "./Forum";
import { ForumFindManyArgs } from "./ForumFindManyArgs";
import { ForumWhereUniqueInput } from "./ForumWhereUniqueInput";
import { ForumUpdateInput } from "./ForumUpdateInput";

export class ForumControllerBase {
  constructor(protected readonly service: ForumService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Forum })
  async createForum(@common.Body() data: ForumCreateInput): Promise<Forum> {
    return await this.service.createForum({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Forum] })
  @ApiNestedQuery(ForumFindManyArgs)
  async forums(@common.Req() request: Request): Promise<Forum[]> {
    const args = plainToClass(ForumFindManyArgs, request.query);
    return this.service.forums({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Forum })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async forum(
    @common.Param() params: ForumWhereUniqueInput
  ): Promise<Forum | null> {
    const result = await this.service.forum({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Forum })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateForum(
    @common.Param() params: ForumWhereUniqueInput,
    @common.Body() data: ForumUpdateInput
  ): Promise<Forum | null> {
    try {
      return await this.service.updateForum({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Forum })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteForum(
    @common.Param() params: ForumWhereUniqueInput
  ): Promise<Forum | null> {
    try {
      return await this.service.deleteForum({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}