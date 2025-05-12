import type { Application, Request, Response } from "express";

class Hi {
  private names: string[];

  constructor() {
    this.names = ["Lautaro", "Felix", "Juan", "Bruno"];
  }

  async hi(req: Request, res: Response): Promise<void> {
    try {
      const name: string = req.params.name;

      if (!this.names.includes(name)) res.status(404).json({ msg: "Usuario no tiene una instancia" });

      res.status(200).json({ name });
    } catch (error) {
      error instanceof Error ? console.log(error.message) : res.status(500).json({ msg: "error interno inesperado" });
    }
  }
}

export default new Hi();
