import { Cursor } from "mongodb/lib/core";

function Home(){
  return (
    <div className="Home">
    <Card
      txtcolor="black"
      header=" Bank Of Swiss"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank 2.png" alt="cur" class="center"
      height={350}
      width={700}
      />)}
    />
    </div>
  );  
}
export default Cur;
