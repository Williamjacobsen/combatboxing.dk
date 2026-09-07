import "./aboutus.css";
import {
  FaInfoCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function AboutUs() {
  return (
    <section className="aboutus-container">
      <h2 className="aboutus-title">Om os</h2>
      <p className="aboutus-text">
        Combat Boxing er et tilbud til alle, der vil prøve kræfter med
        boksesporten - uanset niveau. Vores træning er tilpasset både begyndere
        og øvede, og vi vægter fællesskab, respekt og personlig udvikling højt.
      </p>
      <p className="aboutus-contact">
        Kontaktperson: Niels Vestergaard - Tlf. 41 11 90 69
      </p>
      <hr />
      <div className="aboutus-details">
        <p>
          <FaInfoCircle className="icon" />
          Amatørsportshold · Sport og fritid
        </p>

        <p>
          <FaMapMarkerAlt className="icon" /> Vestergade 15 (indgang fra
          P-plads, Jernbanegade 4)
        </p>
        <p>
          <FaPhoneAlt className="icon" /> Tlf. 41 11 90 69
        </p>
        <p>
          <FaEnvelope className="icon" /> lillebroendummureren@icloud.com
        </p>
      </div>

      {/* Google Maps Embed */}
      <div className="map-container">
        <iframe
          src="https://maps.google.com/maps?q=56.460639,10.029722&z=15&output=embed"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default AboutUs;
