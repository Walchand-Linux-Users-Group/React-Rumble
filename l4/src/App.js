import React from "react";
import "./App.css";
import { useEffect, useState } from "react";


function App() {
  const [flag, setFlag] = useState("flag3");
  const [prank, setPrank] = useState("fla3");
  const [real, setReal] = useState("reakl");
  const getData = async() => {
    const res = await API.yugotme();
    const res2 = await API.tryme();
    const res1 = await API.iamreal();
    setFlag(res.data);
    setPrank(res2.data);
    setDim(res1.data);
  }
  useEffect(() => {
    getData()
  }, []);
  return (
    <div className="App">
      <h1 style={{display:"none"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptates recusandae ullam tempora doloremque vitae voluptas, minima praesentium! Mollitia qui atque quidem voluptas officiis eaque aspernatur fuga repudiandae laboriosam vitae!
      Culpa quia aperiam nesciunt odit facilis obcaecati vero sed aliquid alias, ipsa doloribus, rem laudantium quaerat iste maiores, tenetur amet explicabo eum consequuntur repudiandae consectetur cupiditate ut a. Quia, quasi.
      Nobis necessitatibus vitae eligendi cumque pariatur, tempore rerum mollitia beatae sunt voluptatum qui sint doloremque officia cum id. Sint voluptate doloribus illum et corrupti. Nemo delectus harum provident numquam qui.
      Possimus vero sapiente facilis deserunt pariatur, commodi aut, voluptatem dolorem tempore laboriosam molestiae temporibus quibusdam illo aliquid. Mollitia libero ut cupiditate, accusamus dolores, quas suscipit eaque amet ipsum dolorem atque!
      Repudiandae fuga cupiditate animi nemo obcaecati debitis, perferendis cumque harum laboriosam vel repellat error ut architecto tenetur aut quos ad, eligendi iure alias! Sed suscipit vitae, at perspiciatis velit tenetur.
      Asperiores, obcaecati ab. Repellendus quam aperiam distinctio qui voluptas, fuga nisi ea facilis nihil architecto harum, suscipit officiis eaque, amet asperiores! Recusandae ipsa eum expedita quia blanditiis et fuga cupiditate.
      Fugit, fugiat quae beatae consectetur quidem iusto unde assumenda minus vel illo magni. Rem, similique debitis eum reprehenderit dignissimos dolorem tenetur eos, harum laboriosam deleniti ipsam molestiae, officia nam officiis?
      Ipsum suscipit deserunt, ex, dolor debitis quibusdam libero nesciunt eos sequi fuga incidunt minus numquam magni earum animi? Fuga maxime eligendi expedita consequatur? Quidem fugiat non, ducimus nihil recusandae veniam.
      Dolore, molestias. Aspernatur quis quos illo harum at, officia mollitia ab, asperiores in voluptas, accusamus vero iste vitae aut molestias unde alias suscipit. Voluptate aliquid obcaecati culpa, blanditiis harum vel!
      Mollitia corrupti facere nobis? At est optio tempore earum cupiditate? Error ad architecto vitae, nulla beatae inventore velit exercitationem sequi odit voluptates, repellendus fugit sed. Ipsum excepturi dolore at. Veniam!
      Obcaecati nobis aut incidunt, quisquam quod impedit rerum natus, corporis doloribus laboriosam, expli{console.log(prank)}cabo voluptatum ea iure assumenda! Quisquam provident ea, dolorem fuga, laboriosam ratione, aperiam quidem quae molestiae officiis similique.
      Ex totam impedit consequuntur iure consequatur deleniti quaerat eveniet quasi enim esse praesentium dignissimos aut porro hic asperiores quas dolorem quo autem, magni expedita sint! Est deserunt itaque minima quo.
      Eligendi saepe at unde impedit hic minima architecto suscipit assumenda, omnis recusandae sequi pariatur rerum commodi quasi rem ipsum in quod quidem, non inventore tenetur esse? Repudiandae iste impedit pariatur?
      Eos iste quibusdam debitis totam, veritatis tempore. Numquam fugiat architecto, magni quos facere sint! Hic perferendis laudantium dignissimos, ea quisquam magni libero reiciendis qui, deserunt laboriosam adipisci ullam, quidem aut.
      Eveniet, nesciunt! Aperiam obcaecati hic non? Soluta, sequi? Impedit omnis laborum, ipsum architecto rem sunt distinctio commodi inventore, a possimus quasi excepturi veritatis asperiores sequi quaerat quo laudantium nemo aliquam.
      Reiciendis reprehenderit molestiae ratione eum dolores ducimus saepe et voluptatibus? Vero expedita, impedit ipsum voluptatibus quae est, veritatis sequi ratione quos itaque incidunt odio? Soluta laborum quas quis repudiandae molestiae.
      Officia in eveniet, consequuntur cupiditate nulla commodi illo quis atque enim error nobis corporis eaque et natus a dicta id iusto. Magni, libero qui. Ab mollitia cum provident consequatur et.
      Et qui, nam expedita corrupti totam, voluptates dolor voluptate quam possimus quis repellendus deserunt adipisci! Maxime minima laudantium, fuga esse perspiciatis dignissimos optio. Repellendus iste error earum cum expedita! Aperiam.
      Obcaecati vero hic, consectetur blanditiis ut illo. Dolorum dolore iste sed ratione odio eius, iusto necessitatibus placeat exercitationem saepe fugiat consectetur id, eaque quis? Dolorum assumenda aut at eius fuga.
      A, aut. Eos accusantium eum assumenda suscipit eaque tenetur voluptatibus voluptatum deserunt at quisquam. Officia tenetur illo adipisci, praesentium libero iure molestiae maxime doloremque eos necessitatibus illum nulla hic voluptatum!</h1>
      {console.log(flag)}
      <h1  style={{display:"none"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptates recusandae ullam tempora doloremque vitae voluptas, minima praesentium! Mollitia qui atque quidem voluptas officiis eaque aspernatur fuga repudiandae laboriosam vitae!
      Culpa quia aperiam nesciunt odit facilis obcaecati vero sed aliquid alias, ipsa doloribus, rem laudantium quaerat iste maiores, tenetur amet explicabo eum consequuntur repudiandae consectetur cupiditate ut a. Quia, quasi.
      Nobis necessitatibus vitae eligendi cumque pariatur, tempore rerum mollitia beatae sunt voluptatum qui sint doloremque officia cum id. Sint voluptate doloribus illum et corrupti. Nemo delectus harum provident numquam qui.
      Possimus vero sapiente facilis deserunt pariatur, commodi aut, voluptatem dolorem tempore laboriosam molestiae temporibus quibusdam illo aliquid. Mollitia libero ut cupiditate, accusamus dolores, quas suscipit eaque amet ipsum dolorem atque!
      Repudiandae fuga cupiditate animi nemo obcaecati debitis, perferendis cumque harum laboriosam vel repellat error ut architecto tenetur aut quos ad, eligendi iure alias! Sed suscipit vitae, at perspiciatis velit tenetur.
      Asperiores, obcaecati ab. Repellendus quam aperiam distinctio qui voluptas, fuga nisi ea facilis nihil architecto harum, suscipit officiis eaque, amet asperiores! Recusandae ipsa eum expedita quia blanditiis et fuga cupiditate.
      Fugit, fugiat quae beatae consectetur quidem iusto unde assumenda minus vel illo magni. Rem, similique debitis eum reprehenderit dignissimos dolorem tenetur eos, harum laboriosam deleniti ipsam molestiae, officia nam officiis?
      Ipsum suscipit deserunt, ex, dolor debitis quibusdam libero nesciunt eos sequi fuga incidunt minus numquam magni earum animi? Fuga maxime eligendi expedita consequatur? Quidem fugiat non, ducimus nihil recusandae veniam.
      Dolore, molestias. Aspernatur quis quos illo harum at, officia mollitia ab, asperiores in voluptas, accusamus vero iste vitae aut molestias unde alias suscipit. Voluptate aliquid obcaecati culpa, blanditiis harum vel!
      Mollitia corrupti facere nobis? At est optio tempore earum cupiditate? Error ad architecto vitae, nulla beatae inventore velit exercitationem sequi odit voluptates, repellendus fugit sed. Ipsum excepturi dolore at. Veniam!
      Obcaecati nobis aut incidunt, quisquam quod impedit rerum natus, corporis doloribus laboriosam, explicabo voluptatum ea iure assumenda! Quisquam provident ea, dolorem fuga, laboriosam ratione, aperiam quidem quae molestiae officiis similique.
      Ex totam impedit consequuntur iure consequatur deleniti quaerat eveniet quasi enim esse praesentium dignissimos aut porro hic asperiores quas dolorem quo autem, magni expedita sint! Est deserunt itaque minima quo.
      Eligendi saepe at unde impedit hic minima architecto suscipit assumenda{console.log(real)}, omnis recusandae sequi pariatur rerum commodi quasi rem ipsum in quod quidem, non inventore tenetur esse? Repudiandae iste impedit pariatur?
      Eos iste quibusdam debitis totam, veritatis tempore. Numquam fugiat architecto, magni quos facere sint! Hic perferendis laudantium dignissimos, ea quisquam magni libero reiciendis qui, deserunt laboriosam adipisci ullam, quidem aut.
      Eveniet, nesciunt! Aperiam obcaecati hic non? Soluta, sequi? Impedit omnis laborum, ipsum architecto rem sunt distinctio commodi inventore, a possimus quasi excepturi veritatis asperiores sequi quaerat quo laudantium nemo aliquam.
      Reiciendis reprehenderit molestiae ratione eum dolores ducimus saepe et voluptatibus? Vero expedita, impedit ipsum voluptatibus quae est, veritatis sequi ratione quos itaque incidunt odio? Soluta laborum quas quis repudiandae molestiae.
      Officia in eveniet, consequuntur cupiditate nulla commodi illo quis atque enim error nobis corporis eaque et natus a dicta id iusto. Magni, libero qui. Ab mollitia cum provident consequatur et.
      Et qui, nam expedita corrupti totam, voluptates dolor voluptate quam possimus quis repellendus deserunt adipisci! Maxime minima laudantium, fuga esse perspiciatis dignissimos optio. Repellendus iste error earum cum expedita! Aperiam.
      Obcaecati vero hic, consectetur blanditiis ut illo. Dolorum dolore iste sed ratione odio eius, iusto necessitatibus placeat exercitationem saepe fugiat consectetur id, eaque quis? Dolorum assumenda aut at eius fuga.
      A, aut. Eos accusantium eum assumenda suscipit eaque tenetur voluptatibus voluptatum deserunt at quisquam. Officia tenetur illo adipisci, praesentium libero iure molestiae maxime doloremque eos necessitatibus illum nulla hic voluptatum!</h1>
    </div>
  );
}

export default App;
