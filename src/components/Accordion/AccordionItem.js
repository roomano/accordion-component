export default function AccordionItem({
  num,
  title,
  text,
  curOpen,
  onOpen,
  children,
}) {
  const isOpen = num === curOpen;
  function handleToogle() {
    // setIsOpen((a) => !a);
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToogle}>
      <p className="number">{num < 0 ? `0${num + 1}` : num + 1}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
