import { Navigate, Route, Routes } from 'react-router-dom';
import { Attendees } from '../components/attendees/Attendees';
import { RegisterUserPage } from '../pages/register/RegisterUserPage';
import { IdentifyAttendeeRoutes } from './IdentifyAttendeeRoutes';
import { AttendeeOptions } from '../components/attendeeOptions/AttendeeOptions';

const PrivateRoutes = () => {
	return (
		<Routes>
			<Route path='/identifyAttendee/*' element={<IdentifyAttendeeRoutes />} />
			<Route path='/registerUser' element={<RegisterUserPage />} />
			<Route path='/attendee/:attendeeId' element={<AttendeeOptions />} />
			<Route path='/attendees' element={<Attendees />} />
			<Route path='/*' element={<Navigate to={'/identifyAttendee'} />} />
		</Routes>
	);
};
export default PrivateRoutes;
