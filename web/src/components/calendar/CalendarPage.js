import React from 'react';

export default function CalendarPage() {
  return (
    <div className="py-24">
      <div className="max-w-2xl px-4 mx-auto py-6">
        <h1 className="text-3xl font-medium py-2 mb-2">Calendar</h1>
//         <div className="w-full border border-black p-2" style={{ height: 450 }}>
          <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=cHJvZ3JhbW1pbmdjb21wZXRpdGl2ZUBnbWFpbC5jb20&amp;color=%23039BE5&amp;showTabs=1&amp;showCalendars=0&amp;showPrint=0&amp;showNav=1&amp;title=Club%20Meetings&amp;showDate=1&amp;showTz=1" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
//         </div>
      </div>
    </div>
  );
}
