import { Server } from "socket.io";
import httpServer from "./app";

import { corsOptions } from "./constants";

export const connected_sockets = [];

const io = new Server(httpServer, {
  cors: { ...corsOptions, methods: ["GET", "POST"], credentials: true },
});

export default io;
