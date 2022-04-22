import React from "react";

export default function place(props) {
  console.log(props);
  return <div>OK</div>;
}

export async function getStaticProps(context) {
  const id = context.params.place;
  const response = await fetch(`http://localhost:5000/api/places/${id}`);
  const place = await response.json();
  return {
    props: {
      place,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch("http://localhost:5000/api/places");
  const places = await response.json();

  // GOOD PATH
  const paths = places.places.map((item) => ({
    params: { place: item.id },
  }));
  return {
    paths,
    fallback: false,
  };
}
