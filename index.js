const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const run = async () => {
  try {
    // const result = await prisma.product.findUnique({
    //   where: {
    //     id: 8
    //   }
    // });

    // const result = await prisma.product.findUnique({
    //   where: {
    //     id: 2000
    //   }
    // });

    // const result = await prisma.product.findUniqueOrThrow({
    //   where: {
    //     id: 2
    //   }
    // });

    // const result = await prisma.product.findUniqueOrThrow({
    //   where: {
    //     id: 2000
    //   }
    // });

    // const result = await prisma.product.findFirst({});
    // const result = await prisma.product.findFirstOrThrow({
    //   where: {
    //     price: {
    //       lt: 10000
    //     }
    //   }
    // });
    // const result = await prisma.product.findFirst({
    //   where: {
    //     price: {
    //       lt: 10000
    //     }
    //   }
    // });

    // const result = await prisma.product.findMany();
    // const result = await prisma.product.findMany({
    //   where: {
    //     id: 100
    //   }
    // });

    // const result = await prisma.brand.findMany({
    //   where: {
    //     id: {
    //       not: 4
    //     }
    //   }
    // });

    // const result = await prisma.user.findMany({
    //   where: {
    //     id: {
    //       in: [10, 11, 18, 22]
    //     }
    //   }
    // });

    // const result = await prisma.brand.findMany({
    //   where: {
    //     id: {
    //       notIn: [2, 4, 6]
    //     }
    //   }
    // });

    // const result = await prisma.user.findMany({
    //   where: {
    //     username: {
    //       contains: 'a'
    //     }
    //   }
    // });

    // const result = await prisma.product.findMany({
    //   where: {
    //     name: {
    //       startsWith: 'i'
    //     },
    //     price: {
    //       gt: 55000
    //     }
    //   }
    // });

    // const result = await prisma.product.findMany({
    //   where: {
    //     OR: [{ brandId: 2 }, { brandId: 3 }]
    //   }
    // });

    // const result = await prisma.product.findMany({
    //   where: {
    //     AND: [
    //       {
    //         price: {
    //           gt: 30000
    //         }
    //       },
    //       {
    //         price: {
    //           lt: 40000
    //         }
    //       }
    //     ]
    //   }
    // });

    // const result = await prisma.user.findMany({
    //   select: {
    //     username: true,
    //     id: true,
    //     role: true
    //   }
    // });

    // const result = await prisma.brand.findMany({
    //   where: {
    //     id: 6
    //   },
    //   include: {
    //     product: {
    //       select: {
    //         id: true,
    //         name: true,
    //         price: true
    //       }
    //     }
    //   }
    // });

    // const result = await prisma.user.findMany({
    //   where: {
    //     id: 2
    //   },
    //   include: {
    //     order: {
    //       include: {
    //         orderitem: {
    //           include: {
    //             product: {
    //               include: {
    //                 brand: true
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // });

    // const result = await prisma.brand.findMany({
    //   where: {
    //     id: 1
    //   },
    //   select: {
    //     id: true,
    //     name: true,
    //     product: {
    //       select: {
    //         id: true,
    //         name: true,
    //         price: true
    //       }
    //     }
    //   }
    //   // include: {
    //   //   product: true
    //   // }
    // });

    // const result = await prisma.brand.findFirst({
    //   where: { id: 1 },
    //   include: {
    //     product: {
    //       where: {
    //         price: {
    //           gt: 55000
    //         }
    //       }
    //     }
    //   }
    // });

    // const result = await prisma.product.findMany({
    //   orderBy: {
    //     price: 'desc'
    //   },
    //   take: 5, // limit
    //   skip: 10 // offset
    // });

    // const result = await prisma.user.aggregate({
    //   _count: {
    //     id: true
    //   },
    //   where: {
    //     role: {
    //       not: 'ADMIN'
    //     }
    //   }
    // });

    const result = await prisma.product.groupBy({
      by: 'brandId',
      _max: {
        price: true
      },
      having: {
        price: {
          _max: {
            gt: 40000
          }
        }
      }
    });

    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.log(err);
  }
};

run();
