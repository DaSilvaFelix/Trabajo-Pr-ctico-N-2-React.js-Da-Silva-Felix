import { Router, Request, Response } from "express";
import Hi from "../controller/index.controller";
const router = Router();

router.post("/:name", async (req: Request, res: Response) => await Hi.hi(req, res));

export default router;
