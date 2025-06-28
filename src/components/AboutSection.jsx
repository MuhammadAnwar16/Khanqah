import React from "react";
import { useLanguage } from "../context/LanguageContext";

const AboutSection = () => {
  const { language } = useLanguage();

  return (
    <section
      id="about"
      className="bg-midnight text-ivory py-24 px-6 md:px-24 font-body"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-heading text-gold mb-10 border-b-4 border-gold inline-block pb-2">
          {language === "urdu" ? "خانقاہ کا تعارف" : "About the Khanqah"}
        </h2>

        <div className="mt-8 text-lg md:text-xl leading-relaxed space-y-6 text-ivory text-justify max-w-4xl mx-auto">
          {language === "urdu" ? (
            <>
              <p>
                خانقاہ یاسین زئی ایک روحانی مرکز ہے جو صدیوں پرانی صوفی روایت کے مطابق لوگوں کی تربیت، اصلاح اور ذکر و فکر کا مرکز ہے۔
              </p>
              <p>
                اس خانقاہ کی بنیاد حضرت پیر صاحب یاسین زئی نے رکھی، جنہوں نے اپنی زندگی دین اسلام کی خدمت، روحانی تربیت، اور محبت کے پیغام کو عام کرنے میں وقف کی۔
              </p>
              <p>
                آج بھی یہ خانقاہ ذکر و اذکار، دینی تعلیمات، اور محافلِ روحانیت کا گہوارہ بنی ہوئی ہے۔
              </p>
            </>
          ) : (
            <>
              <p>
                Khanqah Yaseen Zai is a spiritual sanctuary rooted in the centuries-old Sufi tradition — a place of reflection, reform, and remembrance.
              </p>
              <p>
                Founded by Hazrat Peer Sahib Yaseen Zai, the Khanqah is dedicated to the service of Islam, spiritual training, and spreading the message of divine love.
              </p>
              <p>
                Even today, it remains a sacred space for zikr, Islamic teachings, and spiritual gatherings that heal and illuminate hearts.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
