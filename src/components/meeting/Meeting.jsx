import './meeting.css'

function Meeting({ name, phone, email, type, dateTime }) {

  const getMeetingColor = (dateTime) => {
    const today = new Date();
    const meetingDate = new Date(dateTime);
    const timeDiff = Math.abs(meetingDate.getTime() - today.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffDays < 0)
      return 'non'
    else
      if (diffDays === 1) {
        return 'red'; // היום
      } else if (diffDays <= 7) {
        return 'orange'; //השבוע
      }
      else if (diffDays >= 7) {
        return 'green'; // עתיד
      }

  }

  return (
    <>
      <div style={{ color: getMeetingColor(dateTime) }}>
        <h3>תאריך: {dateTime} </h3>
        <h4>{type}</h4>
        <h4>{name}</h4>
        <h4>{phone}</h4>
        <h4>{email}</h4>
      </div>
    </>
  )
}

export default Meeting


