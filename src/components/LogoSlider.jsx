import './LogoSlider.css';

const LogoSlider = () => {
  const logos = [
    'audi.png',
    'bmw.png',
    'cupra.png',
    'ford.png',
    'hunday.png',
    'jag.png',
    'land.png',
    'mazda.png',
    'seat.png',
    'skoda.png',
    'wols.png',
  ];

  return (
    <div className="logo-slider">
      <div className="logo-track">
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={`/asapautohoulto/logos/${logo}`} alt={logo} />
          </div>
        ))}
        {/* Duplicate logos for seamless loop */}
        {logos.map((logo, index) => (
          <div key={`duplicate-${index}`} className="logo-item">
            <img src={`/asapautohoulto/logos/${logo}`} alt={logo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
