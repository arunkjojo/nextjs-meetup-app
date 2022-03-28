import React, { Fragment } from 'react'
import Head from 'next/head'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router'
function NewMeetupPage() {
    const router = useRouter();
    async function addMeetupHandler(enterdMeetupData) {
        // console.log("enterdMeetupData", JSON.stringify(enterdMeetupData));
        const response = await fetch('/api/new-meetup', {
            method: "POST",
            body: JSON.stringify(enterdMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);

        router.push('/');
    }

    return (
        <Fragment>
            <Head>
                <title>Add a New Meetup</title>
                <meta
                    name="description"
                    content="Add your own meetups and create amaizing networking opportunities."
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Fragment>
    );
}

export default NewMeetupPage