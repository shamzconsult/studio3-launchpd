import { PreviewCourse } from "@/components/molecules/courses/preview-course/PreviewCourse";
import { getDynamicParams } from "@/utils/Server";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await getDynamicParams(params);

  return <PreviewCourse id={id} />;
}
