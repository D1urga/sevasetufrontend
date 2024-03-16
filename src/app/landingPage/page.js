"use client";
import React, { useState } from "react";
import styles from "./landingPage.module.css";
import coverimage from "../images/coverImage.jpg";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const [activelang, setActiverLang] = useState(0);
  const langs = [
    ` Frustrated by complex government paperwork? SevaSetu is here to help!
          Our platform empowers Indian citizens to obtain government documents
          with ease. We simplify procedures, promote transparency, and ensure
          accessibility, all in a user-friendly online space. Join SevaSetu and
          bridge the gap between you and bureaucracy!`,
    `సంక్లిష్టమైన ప్రభుత్వ పత్రాల వల్ల విసుగు చెందారా? సహాయం చేయడానికి సేవాసేతు ఇక్కడ ఉం

    ది! మా ప్లాట్‌ఫారమ్ భారతీయ పౌరులకు ప్రభుత్వ పత్రాలను సులభంగా పొందేందుకు అధికారం ఇస్తుం
    ది. మేము విధానాలను సులభతరం చేస్తాము, పారదర్శకతను ప్రోత్సహిస్తాము మరియు ప్రాప్యతను నిర్ధారిస్తా
    ము, ఇవన్నీ వినియోగదారు-స్నేహపూర్వక ఆన్‌లైన్ స్థలంలో. సేవాసేతులో చేరండి మరియు మీకు మరియు
     బ్యూరోక్రసీకి మధ్య ఉన్న అంతరాన్ని తగ్గించండి!`,
    `जटिल सरकारी कागजी कार्रवाई से निराश? सेवासेतु मदद के लिए यहाँ है! हमारा प्लेटफ़ॉर्म भारतीय 
    नागरिकों को आसानी से सरकारी दस्तावेज़ प्राप्त करने का अधिकार देता है। हम प्रक्रियाओं को सरल बनाते हैं, 
    पारदर्शिता को बढ़ावा देते हैं और उपयो
    गकर्ता के अनुकूल ऑनलाइन स्थान पर पहुंच सुनिश्चित करते हैं। सेवासेतु से जुड़ें और अपने
     और नौकरशाही के बीच की दूरी को पाटें!`,
    `சிக்கலான அரசாங்க ஆவணங்களால் விரக்தியா?
     சேவாசேது உதவ இங்கே இருக்கிறார்! எங்கள் தளம் இந்திய குடிமக்களுக்கு அரசாங்க
      ஆவணங்களை எளிதாகப் பெற அதிகாரம் அளிக்கிறது. நாங்கள் நடைமுறைகளை 
      எளிதாக்குகிறோம், வெளிப்படைத்தன்மையை மேம்படுத்துகிறோம் மற்றும் அணுகலை
       உறுதிசெய்கிறோம், இவை அனைத்தும் பயனர் நட்பு ஆன்லைன் இடத்தில். சேவாசேதுவில் இணைந்து,
     உங்களுக்கும் அதிகாரத்துவத்திற்கும் இடையே உள்ள இடைவெளியைக் குறைக்கவும்!`,
    `ಸಂಕೀರ್ಣ ಸರ್ಕಾರಿ ದಾಖಲೆಗಳಿಂದ ನಿರಾಶೆಗೊಂಡಿದ್ದೀರಾ? ಸಹಾಯ ಮಾಡಲು ಸೇವಾಸೇತು ಇಲ್ಲಿದೆ! ನಮ್ಮ
     ವೇದಿಕೆಯು ಭಾರತೀಯ ನಾಗರಿಕರಿಗೆ ಸರ್ಕಾರಿ ದಾಖಲೆಗಳನ್ನು ಸುಲಭವಾಗಿ ಪಡೆಯಲು ಅಧಿಕಾರ ನೀಡುತ್ತದೆ. 
     ನಾವು ಕಾರ್ಯವಿಧಾನಗಳನ್ನು ಸರಳಗೊಳಿಸುತ್ತೇವೆ, ಪಾರದರ್ಶಕತೆಯನ್ನು ಉತ್ತೇಜಿಸುತ್ತೇವೆ ಮತ್ತು ಪ್ರವೇಶಿಸುವಿಕೆಯನ್ನು 
     ಖಚಿತಪಡಿಸುತ್ತೇವೆ,
     ಎಲ್ಲವೂ ಬಳಕೆದಾರ ಸ್ನೇಹಿ ಆನ್‌ಲೈನ್ ಜಾಗದಲ್ಲಿ. ಸೇವಾಸೇತು ಸೇರಿ ಮತ್ತು ನಿಮ್ಮ ಮತ್ತು ಅಧಿಕಾರಶಾಹಿಯ
      ನಡುವಿನ ಅಂತರವನ್ನು ಕಡಿಮೆ ಮಾಡಿ!`,
  ];
  const mission = [
    `Our Mission`,
    `మా మిషన్`,
    `हमारा विशेष कार्य`,
    `எங்கள் நோக்கம்`,
    `ನಮ್ಮ ಮಿಷನ್`,
  ];

  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.landingImage_div}>
          <Image
            src={coverimage}
            className={styles.landingImage}
            quality={100}
          ></Image>
        </div>
        <p className={styles.p1}>{mission[activelang]}</p>
        <p className={styles.p2}>{langs[activelang]}</p>
      </div>
      <div className={styles.lang}>
        <div style={{ display: "flex" }}>
          {" "}
          <p
            onClick={() => {
              setActiverLang(0);
            }}
          >
            English
          </p>
          <p
            onClick={() => {
              setActiverLang(2);
            }}
          >
            हिंदी
          </p>
          <p
            onClick={() => {
              setActiverLang(1);
            }}
          >
            తెలుగు
          </p>
          <p
            onClick={() => {
              setActiverLang(3);
            }}
          >
            தமிழ்
          </p>
          <p
            onClick={() => {
              setActiverLang(4);
            }}
          >
            ಕನ್ನಡ
          </p>
        </div>
        <div>
          <Link href="/womenEmp" className={styles.links}>
            women-empowerment
          </Link>
          <Link href="/insurance" className={styles.links}>
            insurance
          </Link>
        </div>
      </div>
    </div>
  );
}
