import React, { useState, useEffect } from "react";

const AddEventModal = ({ isOpen, onClose, onSave }) => {
  const [eventTitle, setEventTitle] = useState("");
  const [scheduleStartDate, setScheduleStartDate] = useState("");
  const [scheduleEndDate, setScheduleEndDate] = useState("");
  const [eventTypeID, setEventTypeID] = useState("");
  const [eventTypes, setEventTypes] = useState([]);

  useEffect(() => {
    const fetchEventTypes = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/eventtypes");
        const data = await response.json();
        setEventTypes(data);
      } catch (error) {
        console.error("Error fetching event types:", error);
      }
    };

    fetchEventTypes();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEvent = {
      EventTitle: eventTitle,
      ScheduleStartDate: scheduleStartDate,
      ScheduleEndDate: scheduleEndDate,
      EventTypeID: parseInt(eventTypeID),
    };
    onSave(newEvent);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl mb-4 text-center text-darkerGray">
          Add New Event
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Event Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Start Date</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded"
              value={scheduleStartDate}
              onChange={(e) => setScheduleStartDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">End Date</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded"
              value={scheduleEndDate}
              onChange={(e) => setScheduleEndDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Event Type</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={eventTypeID}
              onChange={(e) => setEventTypeID(e.target.value)}
              required
            >
              <option value="">Select event type</option>
              {eventTypes.map((type) => (
                <option key={type.EventTypeID} value={type.EventTypeID}>
                  {type.EventCategory}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventModal;
