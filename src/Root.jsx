import { useQuery } from "react-query"

import "./App.css";
import { getContactInfo } from "./services/Api.js";

function Root() {
  const contactInfoQuery = useQuery(["contactInfo"], getContactInfo, { staleTime: 60000 });
const contactInfo = contactInfoQuery.data;

  if(!contactInfo ) {
    return <h2>
      Loading...
    </h2>
  } 
  return (
    <>
      <h1>{contactInfo?.firstName}</h1>
    </>
  );
}

export default Root;
