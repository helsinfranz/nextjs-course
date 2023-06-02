import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from '../lib/posts-util'
import Head from "next/head";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Himanshu's Blog</title>
        <meta name="description" content="I post about programming ad web developing" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts()
  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage;



// const DUMMY_POSTS = [
//   {
//     slug: "getting-started-with-nextjs",
//     title: "Getting Started With Nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt: "Nextjs is a react framework for production ready apps",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs2",
//     title: "Getting Started With Nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt: "Nextjs is a react framework for production ready apps",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs3",
//     title: "Getting Started With Nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt: "Nextjs is a react framework for production ready apps",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs4",
//     title: "Getting Started With Nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt: "Nextjs is a react framework for production ready apps",
//     date: "2022-02-10",
//   },
// ];