import { useQuery } from 'react-query';

import './App.css';
import { getContactInfo } from './services/Api.js';

function Root() {
  const contactInfoQuery = useQuery(['contactInfo'], getContactInfo, {
    staleTime: 60000,
  });

  let contactInfo = contactInfoQuery.data;

  if (!contactInfo) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>
        {contactInfo?.firstName} {contactInfo?.lastName}
      </h1>
      <h2>Bilar</h2>
      {/* <ul>
        <li>
          {contactInfo?.cars[0]?.carName} {contactInfo?.cars[0]?.carModel}
        </li>
        <li>
          {contactInfo?.cars[1]?.carName} {contactInfo?.cars[1]?.carModel}
        </li>
      </ul> */}
    </>
  );
}

export default Root;
