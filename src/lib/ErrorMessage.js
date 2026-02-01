import React from "react";

export default ({ error, message }) => {
  console.error(error);

  return (
    <aside key={Math.random()} className="p-6 text-sm text-white bg-red-600">
      {message}
    </aside>
  );
};
