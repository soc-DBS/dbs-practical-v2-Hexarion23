const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.create = function create(modCode, modName, creditUnit) {
  return prisma.module
    .create({
      data: {
        modCode: modCode,
        modName: modName,
        creditUnit: parseInt(creditUnit),
      },
    })
    .then(function (module) {
      // Return the newly created module
      return module;
    })
    .catch(function (error) {
      // Handle Prisma unique constraint error (module already exists)
      if (error.code === "P2002") {
        throw new Error("Module already exists");
      }
      // Re-throw any other errors
      throw error;
    });
};

module.exports.updateByCode = function updateByCode(code, credit) {
  return prisma.module
    .update({
      data: {
        creditUnit: parseInt(credit),
      },
      where: {
        modCode: code
      }
      //TODO: Add where and data
    })
    .then(function (module) {
      // Leave blank
    })
    .catch(function (error) {
      if (error.code === "P2025") {
        throw new Error("Module does not exist");
      }
      throw error;
      // Prisma error codes: https://www.prisma.io/docs/orm/reference/errorreference#p2025
      // TODO: Handle Prisma Error, throw a new error if module is not found;
    });
};

module.exports.deleteByCode = function deleteByCode(code) {
  return prisma.module
    .delete({

      where: {
        modCode: code,
      },
      //TODO: Add where
    })
    .then(function (module) {
      // Leave blank
    })
    .catch(function (error) {
      if (error.code === "P2025") {
        throw new Error("Module does not exist");
      }
      throw error;
      // Prisma error codes: https://www.prisma.io/docs/orm/reference/errorreference#p2025
      // TODO: Handle Prisma Error, throw a new error if module is not found;
    });
};

module.exports.retrieveAll = function retrieveAll() {
  return prisma.module
    .findMany()
    .then(function (modules) {
      return modules;
    })
    .catch(function (error) {
      throw error;
    });
  // TODO: Return all modules
};

module.exports.retrieveByCode = function retrieveByCode(code) {
  // TODO: complete the entire function
  return prisma.module
    .findUnique({
        where: {
            modCode: code
        }
    }
    )
    .then(function (module) {
      if (!module) {
        throw new Error("Module does not exist");
      }
      return module;
    })
    .catch(function (error) {
      throw error;
    });
  // Prisma error codes: https://www.prisma.io/docs/orm/reference/errorreference#p2025
  // TODO reminder: Handle Prisma Error, throw a new error if module is not found
  // TODO reminder: Return module at the end
};
