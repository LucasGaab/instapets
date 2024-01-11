import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./styles.css";

function Create() {
  
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(!showOverlay);
  };

  const handleCloseBox = () => {
    setShowOverlay(false);
  };

  return (
    <div className={`container ${showOverlay ? "show-overlay" : ""}`}>
      <button className="createPostButton" onClick={handleClick}>
        Criar novo post +
      </button>
      <div className="overlay"></div>
      {showOverlay && <Box onClose={handleCloseBox}/>}
    </div>
  )
}
export default Create;

function Box({ onClose }: { onClose: () => void }) {
  
  const [showPost, setShowPost] = useState(false);

  const [legenda, setlegenda] = useState<string>("");
  const handleChangeLegenda = (e: ChangeEvent<HTMLInputElement>) => {
      setlegenda(e.target.value);
  };
  

  useEffect(() => {
    console.log(legenda);
  }, [legenda]);

  useEffect(() => {
    console.log("showPost:", showPost);
  }, [showPost]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();    
    console.log("Legenda:", legenda);
    setlegenda(legenda);  
    setShowPost(true);
  };

  return (
    <div className={`box-container ${showPost ? "hide" : ""}`}>
       <button className="closeButton" onClick={onClose}>
        x
      </button>
      <h2>Novo Post</h2>
      
      <form onSubmit={handleSubmit}>
        <input
              type="text"
              placeholder="Legenda"
              value={legenda}
              onChange={handleChangeLegenda}
              required
        />
        <button className="upload">Upload image</button>
        
        <div className="imagem-container">
          <img src="images/bunny.jpg" alt="Coelho" />
        </div>

        <input 
          className="publicar"
          type="submit"
          value = {"Publicar"}
        />

        {showPost && <Post legenda={legenda}/>}
              
      </form>
      

    </div>
  );

}

function Post({ legenda }: { legenda: string }){
  return (
    <><div className="post-container">
         <img className="post-image" src="images/bunny.jpg" alt="Coelho" />
       </div>
       <div className="legenda">
         <h3>{`@user.name ${legenda}`}</h3>
         <h6>1min</h6>
      </div>
     </>
   );
 }