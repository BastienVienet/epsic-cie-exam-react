import { Menu } from "./Menu";

export const Header = ({ userInfos }) => {
  const title = "myplan";

  return (
    <section className="hero is-info header">
      <div className="hero-body">
        <div className="title-container">
          <p className="title m-0">{title.toUpperCase()}</p>
        </div>
        {userInfos ? <Menu /> : null}
      </div>
    </section>
  );
};
