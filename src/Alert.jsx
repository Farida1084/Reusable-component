const styles = {
  color: {
    primary: "bg-green-500 hover:bg-green-600",
    secondary: "bg-yellow-500 hover:bg-yellow-600",
  },
};

export default function Alert(props) {
  const { color, icon, onDismiss } = props;

  const colorClass = styles.color[color];

  return (
    <div
      onClick={onDismiss}
      //onClick={() => onClick(title)}
      className={`rounded-2xl   ${colorClass}`}
    >
      {icon}
    </div>
  );
}
