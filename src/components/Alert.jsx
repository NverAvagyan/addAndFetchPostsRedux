export default function Alert({ text }) {
  return (
    <div className="alert alert-danger mt-2" role="alert">
      {text}
    </div>
  );
}
