export default function AppTitle({
  title = `Box Office`,
  subTitle = `Are you looking for a Movie or an Actor?`,
}) {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </>
  );
}
