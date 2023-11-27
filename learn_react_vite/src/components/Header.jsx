/* eslint-disable react/prop-types */
export default function Header({ author }) {
    return(
      <>
      <h1>Hello World, {author ? author : "Muhammad Ruhiyat2"} 🚀🚀</h1>
   
      <p>Learn React</p>
      </>
    );
  }