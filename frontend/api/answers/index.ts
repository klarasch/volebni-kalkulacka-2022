import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Prisma } from '@prisma/client';
import { prisma } from '../../src/server/prisma';
import { respond405 } from '../../src/server/errors';

export default async function (req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const answers = req.body.answers as Prisma.JsonObject;
    const matches = req.body.matches as Prisma.JsonObject;
    const result = await prisma.answers.create({
      data: {
        answers: answers,
        matches: matches,
        source: req.body.source,
        embedName: req.body.embedName,
        electionId: req.body.electionId,
        districtId: req.body.districtId,
        calculatorId: req.body.calculatorId,
      },
    });
    return res.json(result);
  } else {
    respond405(res, req.method);
  }
}
