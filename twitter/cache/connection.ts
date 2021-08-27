/* eslint-disable no-unused-vars */
import redis, { RedisClient } from 'redis';

const connection = ({
  url
}: {
  url: string
} = {
  url: 'redis://twitterCache:6379'
}): RedisClient => redis.createClient({
  url,
});

export default connection;
