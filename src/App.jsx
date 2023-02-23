import { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { CiWarning } from "react-icons/ci";

import Button from "./Button";
import Alert from "./Alert";
import Badge from "./Badge";
import Card from "./Card";
import lion from "./lion-g805a89ccb_640.jpg";
import Modal from "./Modal";

function App() {
  const [button, setButton] = useState("");
  //const [alert, setAlert] = useState("");
  const [showModal, setShowModal] = useState(false);

  function disabled(e) {
    setButton(e.target.value);
  }

  function onDismiss() {
    alert("dismiss");
  }

  function onClose() {
    setShowModal(false);
  }

  function open() {
    setShowModal(true);
  }

  return (
    <div className=" flex flex-col gap-2 bg-slate-300 max-w-md mx-auto ">
      <div className=" space-x-4 flex justify-center">
        <Button
          title="Default"
          color="primary"
          size="small"
          onclick={disabled}
          //onClick={() => onClick(text)}
        ></Button>

        <Button
          title="yellow"
          color="secondary"
          size="medium"
          onclick={disabled}
        ></Button>

        <Button
          title="green"
          color="primary"
          size="large"
          onclick={disabled}
          //onClick={() => onClick(text)}
        ></Button>
        <Button
          title="yellow"
          color="secondary"
          size="extra"
          onclick={disabled}
        ></Button>
      </div>

      <div className="flex justify-center text-2xl mb-4 mt-4 ">
        <Alert
          color="secondary"
          icon={<HiInformationCircle />}
          onDismiss={onDismiss}
        ></Alert>
      </div>
      <div className="flex justify-center text-2xl ">
        <Badge color="primary" size="medium" icon={<CiWarning />}></Badge>
      </div>

      <div className="flex justify-center">
        <Card
          href="http://localhost:5173/"
          imgSrc={lion}
          imgAlt="lion-g805a89ccb_640.jpg"
        ></Card>
      </div>
      <div className="flex justify-center">
        <button
          className=" bg-slate-800 text-white rounded-xl w-36 h-8 mt-4"
          onClick={open}
        >
          Open modal
        </button>
        <Modal show={showModal} onClick={onClose}>
          <Modal.Header></Modal.Header>
          <Modal.Body>
            <div className="text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"></h3>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              title="Decline"
              color="primary"
              size="large"
              onClick={onClose}
            ></Button>{" "}
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default App;
