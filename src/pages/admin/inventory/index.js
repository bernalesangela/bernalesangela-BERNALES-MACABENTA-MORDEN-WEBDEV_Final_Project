import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout";
import {
  MagnifyingGlass,
  CaretRight,
  TrashSimple,
} from "@phosphor-icons/react";
import AddEventModal from "./components/AddEventModal";
import { Badge } from "./components/badge";

const InventoryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventToDelete, setEventToDelete] = useState(null);
  const navigate = useNavigate();

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/events");
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleAddEvent = async (newEvent) => {
    try {
      const response = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      });

      if (response.ok) {
        fetchEvents();
        setIsModalOpen(false);
      } else {
        console.error("Error adding event:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  const handleDeleteEvent = async () => {
    if (!eventToDelete) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/events/${eventToDelete.EventID}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        fetchEvents();
        setEventToDelete(null);
      } else {
        console.error("Error deleting event:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <Layout>
      <section className="h-full flex flex-col p-4 sm:p-6">
        <div className="w-full flex items-center gap-3">
          <h1 className="text-blueSerenity py-5 text-lg sm:text-xl">
            Inventory
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center w-full justify-between gap-3">
          <div className="relative w-full sm:w-full max-w-[44rem]">
            <input
              className="text-left pl-12 pr-4 py-2 w-full  sm:w-64 border border-gray-300 rounded-lg text-sm sm:text-base"
              placeholder="Search by name or product number"
            />
            <MagnifyingGlass
              size={24}
              className="absolute left-3 top-3 text-gray-500"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2">
            <button
              className="flex items-center gap-2 bg-blueSerenity text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-all duration-200 w-full sm:w-auto"
              onClick={() => setIsModalOpen(true)}
            >
              Add new Event
              <CaretRight size={20} />
            </button>
            <button
              className="flex items-center gap-2 bg-blueSerenity hover:scale-105 transition-all duration-200 text-white px-4 py-2 rounded-lg shadow-md w-full sm:w-auto"
              onClick={() => navigate("/admin/inventory/event-inventory")}
            >
              Manage Stocks
              <CaretRight size={20} />
            </button>
          </div>
        </div>

        <div className="w-full overflow-x-auto mt-4">
          <div className="w-full rounded-lg p-3 sm:p-5 my-3 grid-cols-7 text-sm sm:text-base bg-gray-100 font-semibold hidden sm:grid">
            <span>Event Title</span>
            <span>Schedule ID</span>
            <span>Date Start</span>
            <span>Date End</span>
            <span>Event Type</span>
            <span></span>
            <span></span>
          </div>

          <div className="flex flex-col gap-3">
            {events.map((event) => (
              <div
                className="bg-solidWhite w-full rounded-lg p-3 sm:p-5 flex flex-col sm:grid sm:grid-cols-7 items-start sm:items-center text-sm sm:text-base"
                key={event.EventID}
              >
                <span className="font-semibold sm:font-normal">
                  {event.EventTitle}
                </span>
                <span>{event.ScheduleID}</span>
                <span>{event.ScheduleStartDate}</span>
                <span>{event.ScheduleEndDate}</span>
                <span>
                  <Badge id={event.EventTypeID} />
                </span>
                <span></span>
                <span>
                  <TrashSimple
                    size={20}
                    className="cursor-pointer text-red-500"
                    onClick={() => setEventToDelete(event)}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <AddEventModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddEvent}
        />
      )}

      {eventToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xs sm:max-w-md lg:max-w-lg p-5 rounded-lg shadow-lg">
            <h2 className="text-lg sm:text-xl mb-4">Confirm Deletion</h2>
            <p className="text-sm sm:text-base">
              Are you sure you want to delete the event "
              {eventToDelete.EventTitle}"?
            </p>
            <div className="flex flex-col sm:flex-row justify-end gap-2 mt-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded w-full sm:w-auto"
                onClick={() => setEventToDelete(null)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto"
                onClick={handleDeleteEvent}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default InventoryPage;
