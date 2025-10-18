export default function Card({ children }) {
  return (
    <div
      style = {{
        border: '1px solid green',
        padding: 10,
        margin: 5
      }}
    >
      { children }
    </div>
  );
}
