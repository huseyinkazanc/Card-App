import {Stack,Container, Button, Input, Textarea } from "@mantine/core";
import "./App.css";
import CardComponent from "./components/card/İndex";
import { useState } from "react";

let arr = [
  {
    id: 1,
    title: "Dağ 1",
    par: "Explanation 1",
  },
  {
    id: 2,
    title: "Dağ 2",
    par: "Explanation 2",
  },
  {
    id: 3,
    title: "Dağ 3",
    par: "Explanation 3",
  },
  {
    id: 4,
    title: "Dağ 4",
    par: "Explanation 4",
  },
];

//const kare = (sayi) => sayi * sayi;

const App = () => {
  const [val, setVal] = useState(11);
  return (
    <Container>
    
      <h1>Kart Oluşturma Programı</h1>
      <Stack>
      <Input.Wrapper label="Başlık">
        <Input label="Başlık" placeholder="Başlık yazınız..." />
      </Input.Wrapper>

      <Textarea
        placeholder="Paragraf yazınız..."
        label="Paragraf"
      />
      <Button variant="outline" >Kart Oluştur</Button>
      </Stack>
      <h2>Kartlar:</h2>
      <div className="Cards">
        {arr.map(({ id, title, par }, i) => (
          <CardComponent
            key={`index ${i}`}
            title={title}
            par={par}
            lesson={val}
            index={i}
          />
        ))}
      </div>
    </Container>
  );
};

export default App;
