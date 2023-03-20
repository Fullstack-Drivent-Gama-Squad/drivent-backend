import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
const prisma = new PrismaClient();

async function main() {
  let event = await prisma.event.findFirst();
  if (!event) {
    event = await prisma.event.create({
      data: {
        title: "Driven.t",
        logoImageUrl: "https://files.driveneducation.com.br/images/logo-rounded.png",
        backgroundImageUrl: "linear-gradient(to right, #FA4098, #FFD77F)",
        startsAt: dayjs().toDate(),
        endsAt: dayjs().add(90, "days").toDate(),
      },
    });
  }

  /*let hotel = await prisma.hotel.findFirst();
  if(!hotel){
    await prisma.hotel.createMany({
      data:[
        {
          name: "Vegas",
          image: "https://media-cdn.tripadvisor.com/media/photo-s/1c/8a/e0/b9/bellagio-las-vegas.jpg",
          updatedAt: "2022-05-17 06:00:22.002"
        },
        {
          name: "Tokyo",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNG0UcBxKcpPvATF375qA4tq3_WVw4Z9aohQ&usqp=CAU",
          updatedAt: "2022-05-17 06:00:22.002"
        },
        {
          name: "London",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Langham_london.jpg/1200px-Langham_london.jpg",
          updatedAt: "2022-05-17 06:00:22.002"
        }
      ]
    })
  }*/

  console.log({ event });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
