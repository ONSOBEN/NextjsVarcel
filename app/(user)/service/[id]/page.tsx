import CardProductDetail from "@/components/card/CardProductDetail";

type PropsParams = {
  params: {
    id: number;
  };
  searchParam: any;
};
const ENDPOINT = "https://fakestoreapi.com/products/";
export const getData = async (id: number) => {
  const response = await fetch(`${ENDPOINT}${id}`);
  const data = await response.json();
  return data;
};

export default async function Detail(props: PropsParams) {
  const data = await getData(props.params.id);
  console.log(data);
  return (
    <div className="h-screen grid place-content-center text-xl">
      <CardProductDetail
        title={data?.title || "No title"}
        description={data?.description || "No description"}
        image={data.image}
      />
    </div>
  );
}
