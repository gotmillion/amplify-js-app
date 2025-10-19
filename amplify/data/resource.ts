import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { EVENTBUS_POLICY_SID_REQUIRED } from 'aws-cdk-lib/cx-api';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});


// attempt to create Grantor model

const grantorSchema = a.schema({
  Grantor: a
    .model({
      event_id: a.string(),
      sym_id: a.string(),
      first_name: a.string(),
      last_name: a.string(),
      email: a.string(),
      grantee_id: a.string(),
      grantee_email: a.string(),
      grantee_first_name: a.string(),
      grantee_last_name: a.string(),
    })
    .authorization((allow) => [allow.guest()]),
});

export type GrantorSchema = ClientSchema<typeof grantorSchema>;

export const grantorData = defineData({
  schema: grantorSchema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});



/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
