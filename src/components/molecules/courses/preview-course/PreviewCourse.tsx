"use client";

import { useParams } from "next/navigation";

export const PreviewCourse = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Hello preview</h1>
    </div>
  );
};
