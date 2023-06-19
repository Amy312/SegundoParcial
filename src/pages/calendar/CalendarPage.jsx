import taskL from "../../assets/task.svg";
import Navbar from "../../components/Navbar";
import Calendar from "../../components/Calendar";
import TableTask from "../../components/TableTask";
import {
  add,
  eachDayOfInterval,
  endOfISOWeek,
  endOfMonth,
  format,
  isSameDay,
  parse,
  parseISO,
  startOfISOWeek,
  startOfToday,
} from "date-fns";
import { useEffect, useState } from "react";
import { useDispatch, useTask } from "../../context/ContextProvider";
import { getClientById, getTasks } from "../../services/clientsService";
import { types } from "../../context/taskReducer";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CalendarPage = () => {
  const [tasksD, setTasksD] = useState([]);
  const { id , auth } = useTask();
  const [nid, setId] = useState(localStorage.getItem("id")?  localStorage.getItem("id") : id);
  const [nauth, setAuth] = useState(localStorage.getItem("auth")?  localStorage.getItem("auth") : auth);

  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());


  const dispatch = useDispatch();

  const days = eachDayOfInterval({
    start: startOfISOWeek(firstDayCurrentMonth),
    end: endOfISOWeek(endOfMonth(firstDayCurrentMonth)),
  });

  const previousMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  const getClient = async () => {
    const { data } = await getTasks();
   // console.log(data, "data aaa");
    setTasksD(data);
    //console.log(tasksD);
  };


  useEffect(() => {
    const f = async () => {
      await getClient();
    };
    f();

  },[tasksD]);

  useEffect(() => {
    setId(localStorage.setItem("id",id));
    setAuth(localStorage.setItem("auth",auth));
    dispatch({ type: types.login, id:nid})
  }, [])

  
  return (
    <div className="flex justify-center">
      <Navbar />

      <div className="pt-48 m-10 h-2/3 w-2/3  flex-col">
        <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6 bg-white rounded-2xl shadow-2xl">
          <div className="md:grid md:grid-cols-2 md:divide-x md:divide-red-800 p-5">
            <Calendar
              firstDayCurrentMonth={firstDayCurrentMonth}
              previousMonth={previousMonth}
              nextMonth={nextMonth}
              notes={tasksD}
              days={days}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              classNames={classNames}
            />
            <TableTask
              selectedDay={selectedDay}
              classNames={classNames}
              notes={tasksD}
              setNotes = {setTasksD}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalendarPage;
