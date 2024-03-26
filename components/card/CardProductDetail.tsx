import { Card } from "flowbite-react";
type PropsType = {
  title: string;
  description: string;
  image: string;
};

export default function CardProductDetail({
  title,
  description,
  image,
}: PropsType) {
  return (
    <Card
      className="max-w-sm"
      renderImage={() => (
        <img
          src={image}
          alt={title}
          className="h-[256px] w-full object-cover"
        />
      )}
      horizontal
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description.slice(0, 100)}
      </p>
    </Card>
  );
}
