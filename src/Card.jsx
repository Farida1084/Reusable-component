export default function Card(props) {
  const { href, imgAlt, imgSrc } = props;

  return (
    <div className="max-w-sm mt-4">
      <a href={href} target="_blank">
        <img src={imgSrc} alt={imgAlt} />
      </a>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        Lion king!
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        One of the best hand drawings i have ever seen.
      </p>
    </div>
  );
}
