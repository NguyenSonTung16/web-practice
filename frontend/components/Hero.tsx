type HeroProps = {
  helloMessage: string;
};

export default function Hero({ helloMessage }: HeroProps) {
  return (
    <section>
      <div className="title-image" />
      <div className="content section-container">
        <p className="content-text content-text-primary">HTML & CSS for Beginners</p>
        <p className="content-text">Hoc cach xay dung website</p>
      </div>
      <p className="service-message section-container">Service says: {helloMessage}</p>
    </section>
  );
}
