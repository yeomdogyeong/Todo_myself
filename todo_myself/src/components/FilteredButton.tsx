import React from "react";

interface FilteredButtonType {
  onAll: () => void;
  onActive: () => void;
  onCompleted: () => void;
}
export const FilteredButton: React.FC<FilteredButtonType> = ({
  onAll,
  onActive,
  onCompleted,
}) => {
  return (
    <>
      <button onClick={onAll} className="mr-2 border-2 p-1">
        all
      </button>
      <button onClick={onActive} className="mr-2 border-2 p-1">
        active
      </button>
      <button onClick={onCompleted} className="mr-2 border-2 p-1">
        completed
      </button>
    </>
  );
};
