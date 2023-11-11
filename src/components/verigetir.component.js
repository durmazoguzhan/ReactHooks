import { useState, useEffect } from "react";

function VeriGetir() {
  const [usersArray, setData] = useState([]);

  useEffect(() => {
    const getirecekFonksiyon = async () => {
      const gelenData = await fetch("http://85.159.71.66:8080/api/tutorials");
      if (gelenData.ok) {
        console.log(gelenData);
        const gelenJson = await gelenData.json();
        console.log(gelenJson);
        setData(gelenJson);
      }
    };
    getirecekFonksiyon();
  }, []);

  return (
    <div>
      <ul class="list-group">
        {usersArray.map((item) => (
          <li class="list-group-item list-group-item-action" key={item.id}>{item.title} | {item.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default VeriGetir;
