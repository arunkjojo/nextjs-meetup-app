import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import React, { Fragment } from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'
export default function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>Meetup | {props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        key={props.meetupData.id}
        id={props.meetupData.id}
        title={props.meetupData.title}
        image={props.meetupData.image}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {

  const client = await MongoClient.connect(
    "mongodb+srv://DevAJoin:DevAJoin2786@cluster0.slfxf.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    }))
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://DevAJoin:DevAJoin2786@cluster0.slfxf.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  client.close();

  return {
    props: {
      meetupData: {
        id:selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description
      },
    },
  };
}