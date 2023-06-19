import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { format, parseISO } from "date-fns";
import { Fragment } from "react";
import taskL from "../assets/task.svg"
import remL from "../assets/reminder.svg"

const Task = ({ task, classNames }) => {

    const startDateTime = parseISO(task.date);
    const endDateTime = parseISO(task.date);
    return(
        <>
        <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
        <img
          src={task.type === "T" ? taskL : remL}
          alt=""
          className="flex-none w-10 h-10 rounded-full"
        />
        <div className="flex-auto">
          <p className="text-gray-900">{task.title}</p>
          <p className="mt-0.5">
            <time dateTime={task.date}>
              {format(startDateTime, "h:mm a")}
            </time>
            
          </p>
        </div>
        
      </li>
        </>
    );
}
export default Task;

  