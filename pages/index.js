import { MongoClient } from "mongodb";
import { Fragment } from "react";
import Head from 'next/head';
import MeetupList from "../components/meetups/MeetupList";
// const DUMMY_MEETUP = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address:
//       "Old Town of Munich (Germany): on the left the Frauenkirche and on the right the New Town Hall",
//     description: "A first Meetup",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address:
//       "Old Town of Munich (Germany): on the left the Frauenkirche and on the right the New Town Hall",
//     description: "A Second Meetup",
//   },
//   {
//     id: "m3",
//     title: "A Third Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address:
//       "Old Town of Munich (Germany): on the left the Frauenkirche and on the right the New Town Hall",
//     description: "A Third Meetup",
//   },
//   {
//     id: "m4",
//     title: "A Fourth Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address:
//       "Old Town of Munich (Germany): on the left the Frauenkirche and on the right the New Town Hall",
//     description: "A Fourth Meetup",
//   },
//   {
//     id: "m5",
//     title: "A Fifth Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address:
//       "Old Town of Munich (Germany): on the left the Frauenkirche and on the right the New Town Hall",
//     description: "A Fifth Meetup",
//   },
//   {
//     id: "m6",
//     title: "A Sixth Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address:
//       "Old Town of Munich (Germany): on the left the Frauenkirche and on the right the New Town Hall",
//     description: "A Sixth Meetup",
//   },
// ];

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups | NextJS</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetup using NextJS"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://DevAJoin:DevAJoin2786@cluster0.slfxf.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description
      })),
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUP
//     }
//   }
// }

export default HomePage;