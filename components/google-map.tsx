export function GoogleMap() {
  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.475686662394!2d139.7609214!3d35.665287500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bc29e9e4f8b%3A0xecde405e52f43349!2sFish%20Bank%20TOKYO!5e0!3m2!1sja!2sjp!4v1743343785670!5m2!1sja!2sjp"

  return (
    <div className="w-full h-full rounded-md overflow-hidden">
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="FISH BANK TOKYO Google Map"
        className="w-full h-full"
      ></iframe>
    </div>
  )
}

