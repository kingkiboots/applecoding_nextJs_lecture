export default function Home() {
  const park = "박지성";
  const url = "https://google.com";
  return (
    <div>
      <h4 className="title" style={{ color: "red", fontsize: "1.5rem" }}>
        킹기 후레시
      </h4>
      <p className="title-sub">by dev {park}</p>
      <a href={url}>링크</a>
    </div>
  );
}
