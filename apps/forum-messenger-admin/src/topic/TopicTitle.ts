import { Topic as TTopic } from "../api/topic/Topic";

export const TOPIC_TITLE_FIELD = "id";

export const TopicTitle = (record: TTopic): string => {
  return record.id?.toString() || String(record.id);
};
