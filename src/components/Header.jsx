export const Header = () => {

    const title = "myplan"

    return (
        <section className="hero is-info Header">
            <div className="hero-body">
                <p className="title">
                    {title.toUpperCase()}
                </p>
            </div>
        </section>
    );
}