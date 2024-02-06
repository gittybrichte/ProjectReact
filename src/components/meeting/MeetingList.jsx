import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import Meeting from "./Meeting"
import { getMeetings } from "../../data/Server";
import Services from "../../data/Services";

const MeetingList = (observer(() => {
    const [meetingList, setMeetingList] = useState(Services.meetings);

    useEffect(() => {
        getMeetings();
    }, []);

    useEffect(() => {
        setMeetingList(Services.meetings);
    }, [Services.meetings]);

    return (
        <>
            {meetingList.length > 0 ?
                <aside>
                    <ul>

                        {meetingList.map((meeting, i) =>
                            <li key={i}> <Meeting key={i} name={meeting.name} phone={meeting.phone} email={meeting.email}
                                type={meeting.type} dateTime={meeting.dateTime}></Meeting> </li>
                        )}


                    </ul>
                </aside>
                : <div>טרם נקבעו פגישות</div>}

        </>
    )
}))

export default MeetingList
