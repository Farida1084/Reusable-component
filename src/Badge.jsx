const styles = {
  color: {
    primary: "bg-green-500 hover:bg-green-600",
    secondary: "bg-yellow-500 hover:bg-yellow-600",
  },

  size: {
    small: "text-sm px-4 py-2",
    medium: "text-md px-6 py-3",
    large: "text-lg px-6 py-4",
    extra: "text-xl px-8 py-6",
  },
};

export default function Button(props) {
  const { color, size, icon } = props;

  const colorClass = styles.color[color];
  const sizeClass = styles.size[size];

  return (
    <div
      //onClick={() => onClick(title)}
      className={`rounded-2xl ${colorClass} ${sizeClass}`}
    >
      {icon}
    </div>
  );
}
