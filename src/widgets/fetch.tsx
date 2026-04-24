import { useEffect, useState } from "react";

export const Fetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchStart = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );

        if (!response.ok) {
          setIsError(true);
        }

        const data = await response.json();

        setData(data);
      } catch (e) {
        console.log(e);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStart();
  }, []);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  if (isError) {
    return <div>Ошибка загрузки</div>;
  }
  return (
    <>
      <h1>Список</h1>
      <ul>
        {!!data.length && data.map((el) => <div key={el.id}>{el.title}</div>)}
      </ul>
    </>
  );
};
