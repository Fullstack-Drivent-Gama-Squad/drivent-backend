import { prisma } from '@/config';
import { PostEvent } from '@/protocols';
import dayjs from 'dayjs';

async function findFirst() {
  return prisma.event.findFirst();
}

async function postEvent(eventPost: PostEvent) {
  return prisma.event.create({
    data: {
      title: eventPost.title,
      backgroundImageUrl: eventPost.backgroundImageUrl,
      logoImageUrl: eventPost.logoImageUrl,
      startsAt: '2022-01-01 09:00:35',
      endsAt: '2022-01-01 09:45:35',
    },
  });
}

const eventRepository = {
  findFirst,
  postEvent,
};

export default eventRepository;
