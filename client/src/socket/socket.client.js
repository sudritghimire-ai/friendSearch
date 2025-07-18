import io from "socket.io-client";

const SOCKET_URL = "http://localhost:5000/";  // correct backend with socket

let socket = null;

export const initializeSocket = (userId) => {
  if (socket) {
    socket.disconnect();
  }

  socket = io(SOCKET_URL, {
    auth: { userId },
  });
};

export const getSocket = () => {
  if (!socket) {
    throw new Error("Socket not initialized");
  }
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
