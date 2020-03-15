import { prisma } from "../../../generated/prisma-client";

export default {
  Post: {
    isLiked: (parent, _, { request }) => {
      const { user } = request;
      const { id } = parent;
      return prisma.$exists.like({
        AND: [{ user: { id: user.id } }, { post: { id } }]
      });
    },
    likeCount: parent =>
      prisma
        .likesConnection({
          where: { poast: { id: parent.id } }
        })
        .aggregate()
        .count()
  }
};
