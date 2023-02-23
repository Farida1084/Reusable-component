import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function Modal(props) {
  const { children, onClose, show } = props;
  if (!show) {
    return null;
  }
  return (
    <div className="flex gap-2">
      {" "}
      <div>
        <button onClick={onClose}></button>
      </div>
      {children}
    </div>
  );
}

function Header(props) {
  const { children } = props;

  return <div className="p-2">{children}</div>;
}

function Body(props) {
  const { children } = props;

  return <div className="p-2">{children}</div>;
}

function Footer(props) {
  const { children } = props;

  return <div className="p-2">{children}</div>;
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
