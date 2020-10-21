//import classWebSocket;

// class classWebSocket {
//   initialize() {
//     return console.log("initialize");
//   }
// }

const useWithWebSocket = (useState, initial, communicationChannel) => {
  const [visible, setVisible] = useState(initial);

  const ws = new classWebSocket();

  const initializes = () => ws.initialize();

  const addListener = (onAddListener) =>
    ws.initialize(communicationChannel, onAddListener);

  const sendMessage = (msg) => ws.initialize(communicationChannel, msg);

  return [visible, setVisible];
};
export default useWithWebSocket;
