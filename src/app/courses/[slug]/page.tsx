import { PreviewCourse } from "@/components/molecules/courses/preview-course/PreviewCourse";
import { getDynamicParams } from "@/utils/Server";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await getDynamicParams(params);

  return <PreviewCourse slug={slug} />;
}
