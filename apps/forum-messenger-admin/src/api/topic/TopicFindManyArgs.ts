import { TopicWhereInput } from "./TopicWhereInput";
import { TopicOrderByInput } from "./TopicOrderByInput";

export type TopicFindManyArgs = {
  where?: TopicWhereInput;
  orderBy?: Array<TopicOrderByInput>;
  skip?: number;
  take?: number;
};
