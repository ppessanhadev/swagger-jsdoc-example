import express from "express";
import swaggerJSDocs from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const app = express();
app.use(express.json());

// Swagger configs
const swaggerDocs = swaggerJSDocs({
  definition: {
    openapi: '3.0.0',
    info: {
      title: "Example Swagger automator API",
      version: "1.0.0",
    },
  },
  apis: ["./src/server.ts"],
});

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Routes

/**
 * @swagger
 * /:
 *  get:
 *    summary: get a message
 *    description: return a "ok" message
 *    tags:
 *      - Home
 *    responses:
 *      200:
 *        description: An example for what returns
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: ok
*/
app.get("/", (_req, res) => {
  return res.status(200).json({ message: "ok" });123
});

app.listen(3333);
