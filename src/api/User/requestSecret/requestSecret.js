import { generateSecret, sendSecretMail } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    requestSecret: async (_, args) => {
      console.log(request);
      const { email } = args;
      const loginSecret = generateSecret();
      try {
        await sendSecretMail(email, loginSecret);
        await prisma.updateUser({
          data: {
            loginSecret: loginSecret
          },
          where: {
            email: email
          }
        });
        return true;
      } catch (e) {
        return false;
      }
    }
  }
};