import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimationLayout from "../components/layout/AnimationLayout";
import Card from "../components/resuable/Card";
import classes from "./styles/style.module.css";

// Data elementlərinin növünü təyin edirik
interface ContactData {
  id: number;
  img: string;
  img_text: string;
  name: string;
  links: string[];
}

const Contact = () => {
  // selectedData üçün növü ContactData və ya null olaraq təyin edirik
  const [selectedData, setSelectedData] = useState<ContactData | null>(null);

  const data: ContactData[] = [
    {
      id: 1,
      img: "../../public/wp_icon.png",
      img_text: "../../public/wp_text.png",
      name: "Whatsapp",
      links: [
        "https://wa.me/79818088899", // Düzgün link formatı
        "https://wa.me/380733215599"  // Düzgün link formatı
      ]
    },
    {
      id: 2,
      img: "../../public/tg_icon.png",
      img_text: "../../public/tg.png",
      name: "Telegram",
      links: [
        "https://t.me/Championcasinoo"
      ]
    },
    {
      id: 3,
      img: "../../public/insta_icon.png",
      img_text: "../../public/ins.png",
      name: "Instagram",
      links: [
        "https://www.instagram.com/livespinzone.com_?igsh=MXNkcW55M2p5d3p2Mw==",
        "https://www.instagram.com/black_casinoo?igsh=MXdheGVsd3F4ZXdscg==",
        "https://www.instagram.com/live.casino_n1?igsh=MW5pOGdpbHBpdDh6aA=="
      ]
    }
  ];

  // handleCardClick funksiyasının parametr növünü ContactData olaraq təyin edirik
  const handleCardClick = (data: ContactData) => {
    setSelectedData(data);
  };

  const closeModal = () => {
    setSelectedData(null);
  };

  return (
    <AnimationLayout>
      <div className={classes.contact_container}>
        <div className={classes.contact_header}>
          <h2>Bizimlə necə Əlaqəyə keçə bilərsiz ?</h2>
        </div>
        <div className={classes.contact_details}>
          {data.map((item) => (
            <Card key={item.id} data={item} onClick={() => handleCardClick(item)} />
          ))}
        </div>

        {selectedData && (
          <div className={classes.modal}>
            <div className={classes.modal_content}>
              <h3>{selectedData.name} Linkləri</h3>
              <ul>
                {selectedData.links.map((link: string, index: number) => (
                  <li key={index}>
                    <Link to={link } target="_blank" rel="noopener noreferrer">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
              <button onClick={closeModal}>Bağla</button>
            </div>
          </div>
        )}
      </div>
    </AnimationLayout>
  );
};

export default Contact;
