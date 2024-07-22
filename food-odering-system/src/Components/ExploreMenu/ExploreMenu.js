import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  console.log(category);
  return (
    <div>
      <div className="Explore-menu" id="explore-menu">
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">
          Choose for a divers menu featuring a delecatable array of dishes
          crafted with the finest ingredient and culinary experties .Our mission
          is to satisfy your cravings and elevate your dining expereince, one
          delecious meal at a time
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setCategory((pre) =>
                    pre === item.menu_name ? "All" : item.menu_name
                  );
                }}
                className="explore-menu-list-item"
              >
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_image}
                  alt=""
                />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ExploreMenu;
