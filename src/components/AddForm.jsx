import { useForm } from "react-hook-form";
import { useTask } from "../context/ContextProvider";
import { addTask } from "../services/clientsService";
import { v4 as uuid } from "uuid";
import { format } from "date-fns";
import { useState } from "react";

const AddForm = (props) => {
  const { register, handleSubmit } = useForm();
  const [on, setOn] = useState(false);
  const { selectedDay, setViewForm  } = props;
  const {id} = useTask();
  const onCheckSubmit = async (data) => {
    console.log(format(selectedDay, "yyyy-MM-dd'T'") + data.date);

    addTask({
        id: Number(uuid()),
        idUser: id,
        title: data.title,
        date: format(selectedDay, "yyyy-MM-dd'T'") + data.date,
        type: on===true? "T": "R",
      });
      setViewForm(false);
  };
  
  return (
    <>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form
          onSubmit={handleSubmit(onCheckSubmit)}
          className="space-y-4 md:space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Título
            </label>
            <input
              type="text"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 "
              {...register("title", { required: true, maxLength: 20 })}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Horario
            </label>
            <input
              type="time"
              id="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              {...register("date", { required: true })}
            />
          </div>
          <div className="flex flex-row justify-center">
          <div className="flex items-center pe-3">
            <input
              id="default-radio-1"
              type="radio"
              name="task"
              className="w-4 h-4  bg-red-100 border-gray-300  "
              onClick={()=> setOn(false)}
              {...register("task", { required: true })}


            />
            <label
              className="ml-2 text-sm font-medium text-gray-900"
            >
              Tarea
            </label>
          </div>
          <div className="flex items-center">
            <input
              
              id="default-radio-2"
              type="radio"
              name="reminder"
              className="w-4 h-4  bg-gray-100 border-gray-300 focus:ring-orange-500 "
              {...register("task", { required: true })}
              onClick={()=> setOn(true)}

            />
            <label
              className="ml-2 text-sm font-medium text-gray-900 "
            >
              Recordatorio
            </label>
          </div>
          </div>
          <div className="flex items-center justify-between"></div>
          <button
            type="submit"
            className="w-full text-white bg-amber-600 hover:bg-amber-700  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-1 "
          >
            Guardar
          </button>
        </form>
      </div>
    </>
  );
};
export default AddForm;
