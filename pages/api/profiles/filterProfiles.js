import prisma from "../../../prisma/client.js";
// example fetch request URL
// GET /api/filterProfiles?searchString=:searchString&mode=:mode

export default async function handle(req, res) {
  const { searchString, mode } = req.query;

  if (mode === "teach") {
    const result = await prisma.profiles.findMany({
      where: {
        teach_skills: {
          has: searchString,
        },
      },
    });
    res.json(result);
  }

  if (mode === "learn") {
    const result = await prisma.profiles.findMany({
      where: {
        learn_skills: {
          has: searchString,
        },
      },
    });
    res.json(result);
  }
}
