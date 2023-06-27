import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const anime =
    "http://4.bp.blogspot.com/-109nJ97ZusE/V3Eh2HmwONI/AAAAAAAAGBI/XoRzDOF6Mo0HV0P8dGJYJgPVHQF8weDTACK4B/s1600/maxresdefault.jpg";
  const anime3 =
    "http://3.bp.blogspot.com/-EUMdYyvRAf4/V3HHPQlCRcI/AAAAAAAAAEI/pTVDjU1kQ1k-nBc4N7qQh6awyktoWVUawCK4B/s1600/1449792189-c75a172c1134fc8c5e2737bcebdacd3c.jpeg";
  const anime2 =
    "http://2.bp.blogspot.com/-ho-PWLNjCVU/V3Eip4kTuLI/AAAAAAAAGBo/5n1w1EFEPLMYt-oPK8U-hjUGHs-fudp6wCK4B/s1600/1450224316-0f5a6b53bec01fc26bb4fbdc2c2094ca.jpeg";
  const anime4 =
    "http://4.bp.blogspot.com/-HFhvh-wgPe4/V3HHXe-n_JI/AAAAAAAAAEQ/knjs8iuE6bglZX3LKZA7HgT4H167TK8rQCK4B/s1600/tumblr_msm1ujtHAd1spt5w3o1_500.gif";
  const anime5 =
    "http://4.bp.blogspot.com/-qt8B0Tgw_Po/V3HCwZtDXgI/AAAAAAAAAB0/KDbwUZ1MXckya7jpS2i1uo2YOSW8CWOKwCK4B/s1600/1449789540-2941a6a1a0e32a4ce953106532ea0044-1.jpeg";
  const anime6 =
    "https://www.imfdb.org/images/thumb/7/76/CB.MP5K.S01E02.Left.JPG/400px-CB.MP5K.S01E02.Left.JPG";

  return (
    <>
      <h1>HOLA MUNDO</h1>
      <button>
        <a href="https://www.youtube.com" target="_blank">
          GO!
        </a>
      </button>
      <img src={anime} alt="girl"></img>
      <br></br>
      <img src={anime2} alt="girl2"></img>
      <br></br>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-rDLgAucAqE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <br></br>
      <img src={anime3} alt="girl3"></img>
      <br></br>
      <img src={anime4} alt="girl4"></img>
      <br></br>
      <img src={anime5} alt="girl5"></img>
      <br></br>
      <img src={anime6} alt="girl6"></img>
    </>
  );
}

export default App;
