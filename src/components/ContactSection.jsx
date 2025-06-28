import React from "react";
import { useLanguage } from "../context/LanguageContext";
import whatsappIcon from "../assets/whatsapp-icon.png";

const ContactSection = () => {
  const { language } = useLanguage();

  return (
    <section id="contact" className="bg-[#1A1A1A] text-[#F5F3EF] py-24 px-6 md:px-24 font-body relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-heading text-[#D4AF37] mb-8 border-b-4 border-[#D4AF37] inline-block pb-2">
          {language === "urdu" ? "رابطہ کریں" : "Contact Us"}
        </h2>

        {/* Intro Text */}
        <p className="text-lg text-[#948C71] mb-12">
          {language === "urdu"
            ? "زیارت یا روحانی رہنمائی کے لیے رابطہ کریں۔"
            : "Reach out for ziyarat or spiritual guidance."}
        </p>

        {/* Grid: Contact Info + Map */}
        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Contact Info */}
          <div className="space-y-5 text-lg">
            <p>📞 <strong>{language === "urdu" ? "فون:" : "Phone:"}</strong> +92 300 1234567</p>
            <p>
              📱 <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noreferrer"
                className="text-[#D4AF37] hover:underline"
              >
                +92 300 1234567
              </a>
            </p>
            <p>
              📍 <strong>{language === "urdu" ? "پتہ:" : "Address:"}</strong>{" "}
              {language === "urdu"
                ? "خانقاہ یاسین زئی، پنیالہ، ڈیرہ اسماعیل خان"
                : "Khanqah Yaseen Zai, Panyala, D.I. Khan"}
            </p>
            <p>
              📬 <strong>{language === "urdu" ? "پوسٹ کوڈ:" : "Postal Code:"}</strong> 29110
            </p>
          </div>

          {/* Google Map */}
          <div>
            <iframe
              title="Khanqah Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.0539300182913!2d70.88149371075285!3d32.25663117377645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39264b34e519578f%3A0xe839d1ce64b684b9!2sKhanqah%20Yaseen%20Zai%20(Topi%20Sahiban)!5e0!3m2!1sen!2s!4v1750505265181!5m2!1sen!2s"
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-2xl border border-[#5A5A43]"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
  href="https://wa.me/923001234567"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-28 right-6 z-50 md:bottom-24 md:right-8"
>
  <img
    src={whatsappIcon}
    alt="Chat on WhatsApp"
    className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition transform animate-pulse"
  />
</a>

    </section>
  );
};

export default ContactSection;
