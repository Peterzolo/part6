const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="success">{message}</div>;
};

export default Notification;

import { useSelector } from "react-redux";

const Notification = () => {
  const success = useSelector((state) => state.success.success);
  const error = useSelector((state) => state.error.error);
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return (
    <div style={style}>
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};
