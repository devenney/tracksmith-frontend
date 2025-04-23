export default function Toggle({ id, label, description, checked, onChange }) {
  return (
    <label htmlFor={id} className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="mt-1 h-4 w-4 accent-pink-600 border-gray-300 rounded focus:ring-pink-500 focus:ring-2"
      />
      <span className="text-sm leading-5">
        <span className="font-medium text-gray-900">{label}</span>{" "}
        {description && <span className="text-gray-500">{description}</span>}
      </span>
    </label>
  );
}
