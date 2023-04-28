import React from "react";
import "./App.css";

import { useEffect, useState } from "react";
function Try(prop) {
  const [flag, setFlag] = useState("flag3");
  const [prank, setPrank] = useState("PRANK3");
  const getData = async() => {
    const res = await API.yugotme();
    const res2 = await API.tryme();
    const res1 = await API.iamreal();
    setFlag(res.data);
    prop.setFlag(res.data);
    setPrank(res2.data);
    setDim(res1.data);
  }
  useEffect(() => {
    getData()
  }, []);
  return (
    <>
      <div className="App">
        <h1 style={{display:"none"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, iure molestiae voluptate dolore sed atque praesentium libero laboriosam repellat itaque ratione ex hic quibusdam reiciendis omnis totam expedita ut ullam.
        Totam suscipit eligendi aut tempora id maxime autem asperiores aliquam veniam quisquam corporis, aspernatur quasi amet voluptate fugiat praesentium quibusdam consequuntur eos assumenda dignissimos. Harum dolor ipsam inventore est voluptatibus.
        Numquam nemo itaque quod esse voluptatem, minus delectus consequatur commodi quam error, aspernatur, illo quaerat blanditiis. Magnam fugiat quis, eaque quisquam fugit pariatur maiores corrupti quidem nemo, quam libero debitis?
        Minus cum quos magni qui dicta reiciendis ea odit unde voluptate error officiis voluptatem, libero dignissimos tempora deserunt iure praesentium accusantium natus sed fuga. Explicabo voluptatem voluptas qui excepturi incidunt!
        Placeat officia cum eius repellat autem ipsa hic consectetur tempora incidunt non sit asperiores aliquid voluptates doloribus accusamus sunt pariatur, sequi vitae amet rerum nobis obcaecati iste dolorum. At, modi.
        Quis alias quidem, maiores neque sed sapiente, odio consequuntur, eius consequatur fugiat sit harum impedit! Dolore corporis aperiam amet doloremque soluta recusandae mollitia libero odit aut, accusamus iusto eum nam!
        Magnam minima quasi, obcaecati autem dicta atque laboriosam, nam ipsum quibusdam officia, maxime possimus. Excepturi, quae rerum unde molestias delectus dolorem culpa perspiciatis libero voluptatum aut! Libero molestias nesciunt impedit!
        Eligendi, sed modi. Odit quis, asperiores ducimus tempora quos, omnis ea dicta dolores suscipit eos optio, illum impedit atque consequuntur rerum? Blanditiis soluta ea dolorem molestiae atque, praesentium animi numquam.
        Impedit totam at non provident officiis eius repellendus et nihil, voluptate velit aperiam magni deleniti repellat temporibus odio quaerat error suscipit mollitia sit voluptatum distinctio eveniet? Veniam minima deserunt laboriosam?
        Officiis, rem? Qui libero ad error, doloribus in explicabo aliquid provident? Saepe consequuntur odio neque tempora, rem unde sunt voluptatibus sit totam hic non distinctio, animi dolorem, cum aperiam quia?</h1>
        {setFlag("2")}
        <h1 style={{display:"none"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, iure molestiae voluptate dolore sed atque praesentium libero laboriosam repellat itaque ratione ex hic quibusdam reiciendis omnis totam expedita ut ullam.
        Totam suscipit eligendi aut tempora id maxime autem asperiores aliquam veniam quisquam corporis, aspernatur quasi amet voluptate fugiat praesentium quibusdam consequuntur eos assumenda dignissimos. Harum dolor ipsam inventore est voluptatibus.
        Numquam nemo itaque quod esse voluptatem, minus delectus consequatur commodi quam error, aspernatur, illo quaerat blanditiis. Magnam fugiat quis, eaque quisquam fugit pariatur maiores corrupti quidem nemo, quam libero debitis?
        Minus cum quos magni qui dicta reiciendis ea odit unde voluptate error officiis voluptatem, libero dignissimos tempora deserunt iure praesentium accusantium natus sed fuga. Explicabo voluptatem voluptas qui excepturi incidunt!
        Placeat officia cum eius repellat autem ipsa hic consectetur tempora incidunt non sit asperiores aliquid voluptates doloribus accusamus sunt pariatur, sequi vitae amet rerum nobis obcaecati iste dolorum. At, modi.
        Quis alias quidem, maiores neque sed sapiente, odio consequuntur, eius consequatur fugiat sit harum impedit! Dolore corporis aperiam amet doloremque soluta recusandae mollitia libero odit aut, accusamus iusto eum nam!
        Magnam minima quasi, obcaecati autem dicta atque laboriosam, nam ipsum quibusdam officia, maxime possimus. Excepturi, quae rerum unde molestias delectus dolorem culpa perspiciatis libero voluptatum aut! Libero molestias nesciunt impedit!
        Eligendi, sed modi. Odit quis, asperiores ducimus tempora quos, omnis ea dicta dolores suscipit eos optio, illum impedit atque consequuntur rerum? Blanditiis soluta ea dolorem molestiae atque, praesentium animi numquam.
        Impedit totam at non provident officiis eius repellendus et nihil, voluptate velit aperiam magni deleniti repellat temporibus odio quaerat error suscipit mollitia sit voluptatum distinctio eveniet? Veniam minima deserunt laboriosam?
        Officiis, rem? Qui libero ad error, doloribus in explicabo aliquid provident? Saepe consequuntur odio neque tempora, rem unde sunt voluptatibus sit totam hic non distinctio, animi dolorem, cum aperiam quia?</h1>
        {setPrank("2")}
        <h1 style={{display:"none"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, iure molestiae voluptate dolore sed atque praesentium libero laboriosam repellat itaque ratione ex hic quibusdam reiciendis omnis totam expedita ut ullam.
        Totam suscipit eligendi aut tempora id maxime autem asperiores aliquam veniam quisquam corporis, aspernatur quasi amet voluptate fugiat praesentium quibusdam consequuntur eos assumenda dignissimos. Harum dolor ipsam inventore est voluptatibus.
        Numquam nemo itaque quod esse voluptatem, minus delectus consequatur commodi quam error, aspernatur, illo quaerat blanditiis. Magnam fugiat quis, eaque quisquam fugit pariatur maiores corrupti quidem nemo, quam libero debitis?
        Minus cum quos magni qui dicta reiciendis ea odit unde voluptate error officiis voluptatem, libero dignissimos tempora deserunt iure praesentium accusantium natus sed fuga. Explicabo voluptatem voluptas qui excepturi incidunt!
        Placeat officia cum eius repellat autem ipsa hic consectetur tempora incidunt non sit asperiores aliquid voluptates doloribus accusamus sunt pariatur, sequi vitae amet rerum nobis obcaecati iste dolorum. At, modi.
        Quis alias quidem, maiores neque sed sapiente, odio consequuntur, eius consequatur fugiat sit harum impedit! Dolore corporis aperiam amet doloremque soluta recusandae mollitia libero odit aut, accusamus iusto eum nam!
        Magnam minima quasi, obcaecati autem dicta atque laboriosam, nam ipsum quibusdam officia, maxime possimus. Excepturi, quae rerum unde molestias delectus dolorem culpa perspiciatis libero voluptatum aut! Libero molestias nesciunt impedit!
        Eligendi, sed modi. Odit quis, asperiores ducimus tempora quos, omnis ea dicta dolores suscipit eos optio, illum impedit atque consequuntur rerum? Blanditiis soluta ea dolorem molestiae atque, praesentium animi numquam.
        Impedit totam at non provident officiis eius repellendus et nihil, voluptate velit aperiam magni deleniti repellat temporibus odio quaerat error suscipit mollitia sit voluptatum distinctio eveniet? Veniam minima deserunt laboriosam?
        Officiis, rem? Qui libero ad error, doloribus in explicabo aliquid provident? Saepe consequuntur odio neque tempora, rem unde sunt voluptatibus sit totam hic non distinctio, animi dolorem, cum aperiam quia?</h1>
        
        <h1>{flag}</h1>
      </div>
    </>
  );
}

export default Try;
