'use client';

import { useState } from 'react';

export default function Home() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);

  const story = [
    {
      title: "Loyalty Kya Hoti Hai? - वफ़ादारी क्या होती है?",
      content: `एक छोटे से गाँव में राजू नाम का एक लड़का रहता था। उसके पास एक कुत्ता था, जिसका नाम था मोती। मोती सिर्फ एक कुत्ता नहीं था, वो राजू का सबसे अच्छा दोस्त था।

हर सुबह राजू जब स्कूल जाता, मोती उसे गेट तक छोड़ने आता। और हर शाम, ठीक 4 बजे, मोती उसी जगह बैठकर राजू का इंतज़ार करता। बारिश हो, धूप हो या ठंड - मोती कभी नहीं भूलता।`
    },
    {
      title: "परीक्षा - The Test",
      content: `एक दिन राजू के पिताजी को दूसरे शहर में नौकरी मिल गई। पूरा परिवार शहर जाने की तैयारी करने लगा। लेकिन नये घर में पालतू जानवर रखने की इजाज़त नहीं थी।

राजू बहुत दुखी था। उसने मोती को गाँव में अपने चाचा के पास छोड़ने का फैसला किया। विदाई के दिन, राजू ने मोती को गले लगाया और कहा, "मैं वापस आऊंगा, मैं वादा करता हूँ।"

मोती की आँखों में आँसू थे, लेकिन उसने राजू की गाड़ी को जाते हुए देखा।`
    },
    {
      title: "इंतज़ार - The Wait",
      content: `महीने बीत गए। मोती हर शाम 4 बजे उसी जगह बैठ जाता जहाँ वो राजू का इंतज़ार करता था। चाचा ने उसे खाना दिया, प्यार किया, लेकिन मोती का दिल राजू के पास था।

बारिश में भी, गर्मी में भी, मोती रोज़ उसी जगह बैठता। गाँव के लोग कहते, "ये कुत्ता पागल हो गया है।" लेकिन मोती को पता था - उसका दोस्त लौटेगा।

साल बीत गया। मोती अब बूढ़ा हो चला था, लेकिन उसकी उम्मीद नहीं टूटी।`
    },
    {
      title: "मिलन - The Reunion",
      content: `फिर एक दिन... एक गाड़ी गाँव में आई। उसमें से राजू उतरा, अब वो बड़ा हो चुका था। उसने सबसे पहले उस जगह की तरफ देखा जहाँ मोती इंतज़ार करता था।

और वहाँ... बूढ़ा मोती बैठा था। उसकी आँखें कमज़ोर हो चुकी थीं, लेकिन जैसे ही उसने राजू की आवाज़ सुनी, वो उठा और दौड़ पड़ा।

दोनों दोस्त एक साल बाद मिले। मोती राजू के पैरों पर गिर गया, पूँछ हिलाते हुए, आँखों में खुशी के आँसू लेकर।

राजू रोते हुए बोला, "तुमने इंतज़ार किया... तुमने वफ़ादारी का मतलब सिखा दिया मोती।"`
    },
    {
      title: "सीख - The Lesson",
      content: `उस दिन के बाद, राजू ने फैसला किया कि वो गाँव में ही रहेगा। उसने अपनी पढ़ाई यहीं पूरी की, और मोती के साथ हर पल बिताया।

गाँव के बच्चों को राजू और मोती की कहानी सुनाई जाती। और हर कोई समझ गया कि...

**Loyalty का मतलब है:**
- जब सब छोड़ दें, तब भी साथ खड़े रहना
- वादों को निभाना, चाहे कितना भी वक्त लग जाये
- दिल से किसी की परवाह करना
- मुश्किल वक्त में साथ न छोड़ना
- विश्वास को बनाये रखना

वफ़ादारी सिर्फ शब्द नहीं, एक जज़्बा है। एक एहसास है। और मोती ने ये एहसास हमेशा के लिए राजू के दिल में बसा दिया।`
    }
  ];

  const meaning = {
    title: "Loyalty - वफ़ादारी",
    points: [
      "हिंदी: वफ़ादारी - किसी के प्रति सच्ची निष्ठा",
      "उर्दू: وفاداری - दिल से किसी का साथ निभाना",
      "अंग्रेज़ी: Loyalty - Being faithful and devoted",
      "",
      "असली मायने:",
      "✦ समय पर याद रखना",
      "✦ मुश्किल में साथ देना",
      "✦ वादे निभाना",
      "✦ विश्वासघात न करना",
      "✦ सच्चे दिल से प्यार करना"
    ]
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        animation: 'fadeIn 0.5s ease-in'
      }}>
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <h1 style={{
          textAlign: 'center',
          color: '#667eea',
          fontSize: '2.5rem',
          marginBottom: '10px',
          fontWeight: 'bold'
        }}>
          {story[currentChapter].title}
        </h1>

        <div style={{
          textAlign: 'center',
          color: '#666',
          marginBottom: '30px',
          fontSize: '0.9rem'
        }}>
          अध्याय {currentChapter + 1} / {story.length}
        </div>

        <div style={{
          fontSize: '1.2rem',
          lineHeight: '2',
          color: '#333',
          marginBottom: '40px',
          whiteSpace: 'pre-line',
          textAlign: 'justify'
        }}>
          {story[currentChapter].content}
        </div>

        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {currentChapter > 0 && (
            <button
              onClick={() => setCurrentChapter(currentChapter - 1)}
              style={{
                padding: '15px 30px',
                fontSize: '1rem',
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              ← पिछला
            </button>
          )}

          {currentChapter < story.length - 1 && (
            <button
              onClick={() => setCurrentChapter(currentChapter + 1)}
              style={{
                padding: '15px 30px',
                fontSize: '1rem',
                background: '#764ba2',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              अगला →
            </button>
          )}

          <button
            onClick={() => setShowMeaning(!showMeaning)}
            style={{
              padding: '15px 30px',
              fontSize: '1rem',
              background: showMeaning ? '#f59e0b' : '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            {showMeaning ? 'कहानी पढ़ें' : 'Loyalty का मतलब'}
          </button>
        </div>

        {showMeaning && (
          <div style={{
            marginTop: '30px',
            padding: '30px',
            background: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)',
            borderRadius: '15px',
            animation: 'fadeIn 0.5s ease-in'
          }}>
            <h2 style={{
              color: '#d63031',
              marginBottom: '20px',
              textAlign: 'center',
              fontSize: '2rem'
            }}>
              {meaning.title}
            </h2>
            {meaning.points.map((point, idx) => (
              <p key={idx} style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#2d3436',
                margin: '10px 0'
              }}>
                {point}
              </p>
            ))}
          </div>
        )}

        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          color: '#999',
          fontSize: '0.9rem',
          fontStyle: 'italic'
        }}>
          "सच्ची वफ़ादारी वक्त के साथ और मजबूत होती है"
        </div>
      </div>
    </div>
  );
}
