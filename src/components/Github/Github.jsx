// import { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/hiteshchoudhary')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <div className="flex items-center justify-center mt-4 ">
        <img src={data.avatar_url} alt="Git picture" className="w-[300px] rounded-full" />
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hamza11067");
  return response.json();
};
