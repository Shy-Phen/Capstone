import { PenIcon, Trash2, View } from "lucide-react";
import { evaluateStore } from "../store/evaluateStore";

import { useNavigate } from "react-router-dom";

const EvaluatedCard = ({ evalu }) => {
  const { deleteEvaluation, getOneEvaluation } = evaluateStore();

  const navigate = useNavigate();

  const handleView = async (id) => {
    await getOneEvaluation(id);
    navigate("/view");
  };

  return (
    <div className="rounded-lg p-4 bg-slate-900 shadow-lg">
      <h2 className="text-lg font-semibold mb-2">Title: {evalu.title}</h2>
      <p className="text-sm mb-2">Member: {evalu.member[0]}</p>
      {/* Other card content */}

      <div className="flex justify-end items-end gap-2">
        <button
          className="flex justify-center items-center bg-red-500 rounded size-5"
          onClick={() => {
            if (evalu._id) {
              deleteEvaluation(evalu._id);
            } else {
              console.error("Evaluation ID is missing");
            }
          }}
        >
          <Trash2 className="size-4" />
        </button>
        <button className="flex justify-center items-center bg-blue-100 rounded size-5">
          <PenIcon className="size-4 text-slate-900" />
        </button>
        <button
          className="flex justify-center items-center bg-blue-400 rounded size-5"
          onClick={() => {
            handleView(evalu._id);
          }}
        >
          <View className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default EvaluatedCard;
