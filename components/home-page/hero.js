import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An image showing profile image"
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <h1>Hi, I'm Himanshu</h1>
      <p>
        I blog about Web Development - especially frontend framework like react
        and angualr
      </p>
    </section>
  );
}

export default Hero;
