import React from "react";
import "./App.css";

import { useEffect, useState } from "react";
function App() {
  const [flag, setFlag] = useState("flag2");
  const [prank, setPrank] = useState("flag2reak");
  const [dim, setDim] = useState(false);
  const getData = async() => {
    const res = await API.yugotme();
    const res2 = await API.tryme();
    const res1 = await API.iamreal();
    setFlag(res1.data);
    setPrank(res2.data);
    setDim(res.data);
  }
  useEffect(() => {
    getData()
  }, []);
  if (1) {
    return <>
    <div  style={{display:"none"}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione accusantium pariatur, atque suscipit qui nisi fugit eius dolore id illo. Illum cumque sit sunt a? Quas voluptates repudiandae mollitia?
      Tempore optio amet ullam dignissimos, odit voluptate sunt fugiat nihil consequuntur veniam quam sit delectus id voluptatibus voluptatem magni. Eos et aliquam maxime voluptatum at magnam praesentium obcaecati totam unde.
      Laudantium sequi sit corporis saepe repellat doloribus maxime quod, repellendus eius tenetur. Animi, ad ab. Aut, sit aspernatur neque perspiciatis qui odio accusamus iure necessitatibus laborum perferendis debitis impedit omnis?
      Officiis rem enim quisquam recusandae tempora autem natus eius labore magnam eum. Culpa, voluptatum eos. Cumque blanditiis tempore fugit culpa error iusto ut odit, reiciendis, expedita aut perferendis, perspiciatis officia.
      Necessitatibus eius rerum aperiam excepturi accusamus obcaecati, quasi velit, aspernatur at iure fuga, molestiae ex quisquam voluptate dolorem repellat. Velit optio at maiores culpa expedita? Quod atque architecto ullam sequi!
      Eos voluptas molestiae laudantium non, deserunt vel aliquam numquam saepe similique, perspiciatis architecto corrupti veniam quae dicta dignissimos? In accusantium odio vero neque molestiae expedita aliquam aperiam deserunt doloremque et.
      Accusantium soluta reiciendis ex et a eaque cum fugit. Suscipit obcaecati amet, hic soluta debitis blanditiis voluptates molestiae voluptatum inventore assumenda modi officiis harum quaerat? Recusandae in at vero autem?
      Aut aperiam inventore quidem odit iusto? Maxime commodi natus deserunt repellendus sunt assumenda et recusandae facilis, minus, laboriosam rem officia? Neque ducimus veritatis optio numquam earum fugiat, explicabo tempore nisi.
      Suscipit eos enim nulla necessitatibus asperiores maiores iure omnis eveniet minima iusto dolorem consequuntur, natus commodi cum repellendus. Quam commodi id excepturi nobis quae vel repudiandae dignissimos, ad perferendis hic.
      Quam mollitia, consectetur, quos distinctio iste quae optio magnam consequatur quas odio dolores natus delectus sint corrupti? Sequi aperiam voluptatem, velit magni ducimus fugit consectetur error assumenda iure? Similique, sit?
    </div>
    {!dim && <div>{prank}</div>}
    <div  style={{display:"none"}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione accusantium pariatur, atque suscipit qui nisi fugit eius dolore id illo. Illum cumque sit sunt a? Quas voluptates repudiandae mollitia?
      Tempore optio amet ullam dignissimos, odit voluptate sunt fugiat nihil consequuntur veniam quam sit delectus id voluptatibus voluptatem magni. Eos et aliquam maxime voluptatum at magnam praesentium obcaecati totam unde.
      Laudantium sequi sit corporis saepe repellat doloribus maxime quod, repellendus eius tenetur. Animi, ad ab. Aut, sit aspernatur neque perspiciatis qui odio accusamus iure necessitatibus laborum perferendis debitis impedit omnis?
      Officiis rem enim quisquam recusandae tempora autem natus eius labore magnam eum. Culpa, voluptatum eos. Cumque blanditiis tempore fugit culpa error iusto ut odit, reiciendis, expedita aut perferendis, perspiciatis officia.
      Necessitatibus eius rerum aperiam excepturi accusamus obcaecati, quasi velit, aspernatur at iure fuga, molestiae ex quisquam voluptate dolorem repellat. Velit optio at maiores culpa expedita? Quod atque architecto ullam sequi!
      Eos voluptas molestiae laudantium non, deserunt vel aliquam numquam saepe similique, perspiciatis architecto corrupti veniam quae dicta dignissimos? In accusantium odio vero neque molestiae expedita aliquam aperiam deserunt doloremque et.
      Accusantium soluta reiciendis ex et a eaque cum fugit. Suscipit obcaecati amet, hic soluta debitis blanditiis voluptates molestiae voluptatum inventore assumenda modi officiis harum quaerat? Recusandae in at vero autem?
      Aut aperiam inventore quidem odit iusto? Maxime commodi natus deserunt repellendus sunt assumenda et recusandae facilis, minus, laboriosam rem officia? Neque ducimus veritatis optio numquam earum fugiat, explicabo tempore nisi.
      Suscipit eos enim nulla necessitatibus asperiores maiores iure omnis eveniet minima iusto dolorem consequuntur, natus commodi cum repellendus. Quam commodi id excepturi nobis quae vel repudiandae dignissimos, ad perferendis hic.
      Quam mollitia, consectetur, quos distinctio iste quae optio magnam consequatur quas odio dolores natus delectus sint corrupti? Sequi aperiam voluptatem, velit magni ducimus fugit consectetur error assumenda iure? Similique, sit?
    </div>
    {dim && <div>{flag}</div>}
    <div  style={{display:"none"}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione accusantium pariatur, atque suscipit qui nisi fugit eius dolore id illo. Illum cumque sit sunt a? Quas voluptates repudiandae mollitia?
      Tempore optio amet ullam dignissimos, odit voluptate sunt fugiat nihil consequuntur veniam quam sit delectus id voluptatibus voluptatem magni. Eos et aliquam maxime voluptatum at magnam praesentium obcaecati totam unde.
      Laudantium sequi sit corporis saepe repellat doloribus maxime quod, repellendus eius tenetur. Animi, ad ab. Aut, sit aspernatur neque perspiciatis qui odio accusamus iure necessitatibus laborum perferendis debitis impedit omnis?
      Officiis rem enim quisquam recusandae tempora autem natus eius labore magnam eum. Culpa, voluptatum eos. Cumque blanditiis tempore fugit culpa error iusto ut odit, reiciendis, expedita aut perferendis, perspiciatis officia.
      Necessitatibus eius rerum aperiam excepturi accusamus obcaecati, quasi velit, aspernatur at iure fuga, molestiae ex quisquam voluptate dolorem repellat. Velit optio at maiores culpa expedita? Quod atque architecto ullam sequi!
      Eos voluptas molestiae laudantium non, deserunt vel aliquam numquam saepe similique, perspiciatis architecto corrupti veniam quae dicta dignissimos? In accusantium odio vero neque molestiae expedita aliquam aperiam deserunt doloremque et.
      Accusantium soluta reiciendis ex et a eaque cum fugit. Suscipit obcaecati amet, hic soluta debitis blanditiis voluptates molestiae voluptatum inventore assumenda modi officiis harum quaerat? Recusandae in at vero autem?
      Aut aperiam inventore quidem odit iusto? Maxime commodi natus deserunt repellendus sunt assumenda et recusandae facilis, minus, laboriosam rem officia? Neque ducimus veritatis optio numquam earum fugiat, explicabo tempore nisi.
      Suscipit eos enim nulla necessitatibus asperiores maiores iure omnis eveniet minima iusto dolorem consequuntur, natus commodi cum repellendus. Quam commodi id excepturi nobis quae vel repudiandae dignissimos, ad perferendis hic.
      Quam mollitia, consectetur, quos distinctio iste quae optio magnam consequatur quas odio dolores natus delectus sint corrupti? Sequi aperiam voluptatem, velit magni ducimus fugit consectetur error assumenda iure? Similique, sit?
    </div>
    </>;
  } else {
      return (
        <div className="App" style={{display:"none"}}>
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex corporis perspiciatis a, natus ab libero hic pariatur dicta accusamus. Adipisci et, quisquam molestias quia eveniet numquam animi commodi est voluptates?
          Dicta quia eligendi, necessitatibus a error eaque consequuntur porro nobis voluptatum pariatur reprehenderit tenetur consequatur, impedit rem. Error, dignissimos fugit dolores, sunt libero officia adipisci sequi tempore, laboriosam maiores distinctio.
          Quaerat facilis reiciendis reprehenderit. Vero voluptatem amet placeat cum earum nisi ad neque repudiandae ullam libero corrupti doloremque porro, nemo aspernatur velit quas obcaecati debitis iusto. In adipisci officiis fugiat.
          Laboriosam porro iste veniam perferendis dolorum repellendus quibusdam nemo! A facilis illo, error deleniti facere accusantium eum maiores veritatis vitae obcaecati quia eos ullam distinctio autem nisi nostrum libero dolorem!
          Suscipit aliquam dolores quia provident dolor enim iusto eligendi praesentium? Ex repellat dignissimos officiis debitis optio nam impedit exercitationem quisquam sequi deleniti adipisci maxime nesciunt veniam, aut ipsa aperiam perferendis.
          Sequi quas magni itaque quia neque! Sequi veniam dolor ratione iste error eveniet accusamus, eum amet laudantium commodi recusandae ex incidunt, enim corrupti culpa accusantium. Consequatur omnis excepturi molestias totam.
          Accusantium excepturi cupiditate iure. Totam, accusantium ullam, impedit neque nihil vero quo facilis vitae est eaque nemo explicabo voluptatem esse eum aliquid possimus repellendus blanditiis. Placeat eius minus alias enim.
          Culpa, sit corporis at earum minus nostrum, modi neque iusto eligendi a possimus rem accusamus dolorem. Eos corporis impedit rerum sed? Excepturi eos incidunt nostrum odio sequi aut voluptatum ratione.
          Ratione vitae possimus eos dicta amet obcaecati mollitia expedita saepe laboriosam minima vel, quisquam quod veritatis animi! Dolores dolorum laudantium laborum enim totam dolore nam? Eum quod dolores debitis asperiores!
          Aliquid omnis, in, blanditiis odio delectus hic quisquam assumenda nam id ullam expedita, inventore nulla tempore accusantium ipsum quis soluta modi dolorem. Atque pariatur nostrum fuga est possimus minus libero!</h1>
        </div>
      );
  }
}
