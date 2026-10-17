// the big title on top of every section:
export default function Heading({ children, sub }) {
  return (
    <div className="heading reveal">
      <h2>{children}</h2>
      {sub && <p>{sub}</p>}
    </div>
  )
}
