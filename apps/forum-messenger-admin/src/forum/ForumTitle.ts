import { Forum as TForum } from "../api/forum/Forum";

export const FORUM_TITLE_FIELD = "id";

export const ForumTitle = (record: TForum): string => {
  return record.id?.toString() || String(record.id);
};
