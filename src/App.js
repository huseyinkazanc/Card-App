import {Stack,Container,Grid, Button, Input, Textarea } from "@mantine/core";
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

 
  const [title,setTitle] = useState("");
  const [paragraf,SetParagraf] = useState("");
  const [list , setList] = useState(arr)
  const [val, setVal] = useState(11);
  const click = () => {
    setTitle("");
    SetParagraf("");
    setList([...list,{
      id: 5,
      title,
      par: paragraf,
    }]);
  }
  return (
    <Container>
    
      <h1>Kart Oluşturma Programı</h1>
      <Stack>
      <Input.Wrapper label="Başlık">
        <Input label="Başlık" placeholder="Başlık yazınız..."  value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </Input.Wrapper>

      <Textarea
        placeholder="Paragraf yazınız..."
        label="Paragraf"
        value={paragraf} onChange={(e)=>SetParagraf(e.target.value)}  
      />
      <Button variant="outline"  onClick={click} >Kart Oluştur</Button>
      </Stack>
      <h2>Kartlar:</h2>
      <Grid>
        {list.map(({ id, title, par }, i) => (
          <Grid.Col span={4} key={`index ${i}`}>
             <CardComponent
            title={title}
            par={par}
            index={i}
            click={()=>{
              let copyList = [...list];
              copyList.splice(i,1);
              setList(copyList);
            }}
          />
          </Grid.Col>
         
        ))}
      </Grid>
    </Container>
  );
};

export default App;
