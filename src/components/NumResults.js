export default function NumResults({ moviesLength }) {
  return (
    <p className="num-results">
      Found <strong>{moviesLength}</strong> results
    </p>
  );
}
