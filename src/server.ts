import express from "express";
import swaggerJSDocs from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const app = express();
app.use(express.json());

// Swagger configs
const swaggerDocs = swaggerJSDocs({
  swaggerDefinition: {
    info: {
      title: "Example Swagger automator API",
      version: "1.0.0",
    },
  },
  apis: ["server.ts"],
});

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Routes
app.get("/", (_req, res) => {
  return res.status(200).send({ message: "ok" });
});

app.listen(3333);
