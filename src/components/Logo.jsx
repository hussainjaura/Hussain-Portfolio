// real logo if theres one, otherwise just the letters:
export default function Logo({ item, big }) {
  const cls = `logo-badge${big ? ' big' : ''}`
  // use the picture if i added one in public/logos:
  if (item.logoImg) {
    return <img className={`${cls} logo-img`} src={`${import.meta.env.BASE_URL}${item.logoImg}`} alt={`${item.company || item.school || item.issuer} logo`} />
  }
  return <div className={cls}>{item.logo}</div>
}
