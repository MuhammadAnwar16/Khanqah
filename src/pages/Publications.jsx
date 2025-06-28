import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar"; 

const publications = [
  {
    title: "رسالہ تصوف",
    file: "/publications/risala-tasawwuf.pdf",
    description: "تصوف پر ایک علمی و روحانی رسالہ",
  },
  {
    title: "Lecture on Sufism",
    file: "/publications/sufism-lecture.pdf",
    description: "An English discourse on Sufi teachings",
  },
  // Add more as needed
];

const Publications = () => {
  const { language } = useLanguage();

  return (
    <section
      id="publications"
      className="bg-midnight text-ivory py-24 px-6 md:px-24 font-body border-t border-sandstone"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-heading text-gold mb-12 border-b-4 border-gold inline-block pb-2">
          {language === "urdu" ? "طباعت شدہ کتب و رسائل" : "Publications"}
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-sandstone text-midnight rounded-2xl p-6 shadow-xl border border-gold hover:shadow-2xl transition"
            >
              <h2 className="text-2xl font-heading text-gold mb-2">
                {pub.title}
              </h2>
              <p className="text-base text-olive mb-4">
                {pub.description}
              </p>
              <a
                href={pub.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-midnight font-semibold px-5 py-2 rounded-lg hover:bg-yellow-500 transition"
              >
                {language === "urdu" ? "ڈاؤن لوڈ کریں" : "Download"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;