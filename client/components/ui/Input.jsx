export default function Input({ label, id, ...props }) {
  return (
    <label className="input-block" htmlFor={id}>
      <span className="input-label">{label}</span>
      <input id={id} className="input" {...props} />
    </label>
  );
}