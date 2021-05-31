import React from "react";
import styled from "styled-components";
import Girl from "../../assets/imgs/girl.jpg";
import Melo from "../../assets/imgs/melo.jpg";
import Knight from "../../assets/imgs/smile.jpg";

const data = [
  {
    articleName: "article",
    title: "Supercharged !",
    body: "The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on",
    author: "Jean Jacques",
    data: "20 mars 2029 - 6 min read ",
  },
];
function BlogPost() {
  return (
    <Container>
      <Card>
        <a href="#" className="w-full block h-full">
          <img
            alt="blog photo"
            src={Girl}
            className="max-h-40 w-full object-cover"
          />
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <p className="text-indigo-500 text-md font-medium">Article</p>
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              Supercharged !
            </p>
            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
              Some Text Goes here
            </p>
            <div className="flex items-center mt-4">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src={Melo}
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </a>
              <div className="flex flex-col justify-between ml-4 text-sm">
                <p className="text-gray-800 dark:text-white"> new Post Date</p>
                <p className="text-gray-400 dark:text-gray-300">Update Post</p>
              </div>
            </div>
          </div>
        </a>
      </Card>
      <Card>
        <a href="#" className="w-full block h-full">
          <img
            alt="blog photo"
            src={Girl}
            className="max-h-40 w-full object-cover"
          />
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <p className="text-indigo-500 text-md font-medium">Article</p>
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              Supercharged !
            </p>
            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
              Some Text Goes here
            </p>
            <div className="flex items-center mt-4">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src={Girl}
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </a>
              <div className="flex flex-col justify-between ml-4 text-sm">
                <p className="text-gray-800 dark:text-white"> new Post Date</p>
                <p className="text-gray-400 dark:text-gray-300">Update Post</p>
              </div>
            </div>
          </div>
        </a>
      </Card>
      <Card>
        <a href="#" className="w-full block h-full">
          <img
            alt="blog photo"
            src={Girl}
            className="max-h-40 w-full object-cover"
          />
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <p className="text-indigo-500 text-md font-medium">Article</p>
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              Supercharged !
            </p>
            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
              Some Text Goes here
            </p>
            <div className="flex items-center mt-4">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src={Knight}
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </a>
              <div className="flex flex-col justify-between ml-4 text-sm">
                <p className="text-gray-800 dark:text-white"> new Post Date</p>
                <p className="text-gray-400 dark:text-gray-300">Update Post</p>
              </div>
            </div>
          </div>
        </a>
      </Card>
    </Container>
  );
}

export default BlogPost;
const Container = styled.div`
  max-width: 1400px;
  margin: 30px auto;
  display: flex;
`;
const Card = styled.div.attrs({
  className:
    "overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto",
})``;
