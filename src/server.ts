import "./utils/extensions";

import httpServer from "./app";
import { Config } from "./config";
import logger from "./config/logger";

const startServer = () => {
  const PORT = Config.PORT;

  try {
    httpServer.listen(PORT, () =>
      logger.info(`Server Listening on http://localhost:${PORT}`),
    );
  } catch (err) {
    if (err instanceof Error) {
      logger.error(err.message);
      setTimeout(() => {
        process.exit(1);
      }, 1000);
    }
  }
};

startServer();
