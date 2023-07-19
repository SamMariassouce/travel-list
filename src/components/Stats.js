export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>start adding items to your packing list ✈️</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you've got everything packed. You are good to go 🚀"
          : ` 🧳 You have {numItems} items on your list and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
